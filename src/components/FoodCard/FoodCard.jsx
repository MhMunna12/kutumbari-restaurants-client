/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from './../../Provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from './../../hooks/useCart';

const FoodCard = ({ food }) => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const { name, image, recipe, price, _id } = food;
    const [, refetch] = useCart();
    const handleAddToCart = (item) => {

        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        toast('Food added on the cart')
                    }
                })
        } else {
            Swal.fire({
                title: "Please login order the food",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card  mb-3">

            <img className=" " src={image} style={{ height: '250px', }} />
            <p className="bg-slate-900 right-0 mr-2 rounded-lg mt-2 px-4 text-white absolute r-0">{price}</p>
            <div className="card-body items-center text-center bg-base-200 text-black">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <button onClick={() => handleAddToCart(food)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to cart</button>

            </div>
        </div>
    );
};

export default FoodCard;