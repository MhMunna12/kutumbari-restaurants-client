import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((pre, curr) => curr.price + pre, 0)
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kutombari-restuarant-server.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>May Cart</title>
            </Helmet>
            <SectionTitle className=""
                subHeading={'My Cart'}
                heading={'ADD MORE?'}
            ></SectionTitle>
            <div className="w-[650px] mx-auto bg-white px-6 py-3 mt-5">
                <div className="uppercase flex justify-evenly font-semibold mt-3 items-center h-[70px]">
                    <p className="text-2xl">Total Item: {cart.length}</p>
                    <p className="text-2xl"> Total Price: ${total.toFixed(2)}</p>
                    {cart.length ? <Link to='/dashboard/payment'>
                        <button className="btn btn-warning">pay</button>
                    </Link> :
                        <button disabled className="btn btn-warning">pay</button>
                    }
                </div>
                <div className="overflow-x-auto text-center ">
                    <table className="table  ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img className="h-[90px] w-[90px]" src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-lg">
                                        {item.name}
                                    </td>
                                    <td className="text-end text-lg">{item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn text-white bg-pink-700 text-lg"><FaTrashAlt /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;