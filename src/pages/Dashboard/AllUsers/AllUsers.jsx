/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUsersCog } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data;
        }
    })
    const handleMakeAdmin = (user) => {
        fetch(`https://kutombari-restuarant-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleDeleteUser = (user) => {
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
                fetch(`https://kutombari-restuarant-server.vercel.app/users/${user._id}`, {
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
                <title>All Users</title>
            </Helmet>
            <SectionTitle className=""
                subHeading={'how many??'}
                heading={'MANAGE ALL USERS'}
            ></SectionTitle>
            <div className="w-[680px] mx-auto bg-white px-6 py-3 mt-5">
                <div className="uppercase flex justify-evenly font-semibold mt-3 users-center h-[70px]">
                    <p className="text-2xl">Total user: {users.length}</p>

                </div>
                <div className="overflow-x-auto text-center ">
                    <table className="table  ">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase">
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td className="text-lg">
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.role === 'admin' ? 'Admin' :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm text-white bg-[#D1A054] "><FaUsersCog /></button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-sm  text-white bg-pink-700"><FaTrashAlt /></button>
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

export default AllUsers;