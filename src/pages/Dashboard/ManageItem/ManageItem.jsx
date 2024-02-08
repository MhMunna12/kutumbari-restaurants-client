import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu";
import { BsPencilSquare } from "react-icons/bs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, refetch,] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    const handleDeleteUser = (item) => {
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
                // fetch(`http://localhost:5000/users/${user._id}`, {
                //     method: 'DELETE'
                // })
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
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
                <title>Mange Item</title>
            </Helmet>
            <SectionTitle className=""
                subHeading={'harry up'}
                heading={'MANAGE ALL ITEMS'}
            ></SectionTitle>
            <div className="w-[650px] mx-auto bg-white px-6 py-3 mt-5">
                <div className="uppercase flex justify-evenly font-semibold mt-3 items-center h-[70px]">
                    <p className="text-2xl">Total Item: {menu.length}</p>
                </div>
                <div className="overflow-x-auto text-center ">
                    <table className="table  ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase">
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr
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
                                        <Link to={`/dashboard/updateitem/${item._id}`}>
                                            <button className="btn btn-sm text-white bg-[#D1A054]"><BsPencilSquare /></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(item)} className="btn btn-sm  text-white bg-pink-700"><FaTrashAlt /></button>
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

export default ManageItem;