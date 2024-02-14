import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
const Payment = () => {
    const stripePromise = loadStripe('pk_test_51IeI8IKQ0rUFHkAj5YfN99juT0vddoulWFM1dHJmeneYz2ltfEcSxN3004kvKD9Ia5VnR6BF7HoheLGsyhi9qKtt00a93I68Ye')
    return (
        <div>
            <SectionTitle
                subHeading={'Payment'}
                heading={'Please Pay to Eat'}
            ></SectionTitle>
            <div >
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;