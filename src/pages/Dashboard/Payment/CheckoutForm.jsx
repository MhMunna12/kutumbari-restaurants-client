import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cart] = useCart();
    const price = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', {
                price: price,
            })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card })
        if (error) {
            console.log(error);
            setError(error.message)
        } else {
            console.log(paymentMethod);
            setError('')
        }
        // confirm payment
        const { paymentIntent, error: cardConfirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        })
        if (cardConfirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
            const payment = {
                email: user.email,
                price: price,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartId: cart.map(item => item._id),
                menuItemId: cart.map(item => item.menuItemId),
                status: 'pending'
            }
            const res = await axiosSecure.post('/payments', payment)
            console.log('payment', res.data);
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank You for Payment",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <div className="w-[400px] mx-auto mt-5 text-center" >
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {transactionId && <p className="text-red-500">Your transaction Id: <span className="text-green-500">{transactionId}</span></p>}
            </form>
        </div>
    );
};

export default CheckoutForm;