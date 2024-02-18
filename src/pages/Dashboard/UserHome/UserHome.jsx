import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCartPlus, FaStar, FaUserAlt } from "react-icons/fa";

const UserHome = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: userStats = [] } = useQuery({
        queryKey: ['user-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get(`https://kutombari-restuarant-server.vercel.app/user-stats/${user.email}`);
            return res.data;
        }
    })
    console.log('user-stats', userStats);
    return (
        <div className="p-5">
            <h2 className="text-3xl font-bold">
                <span>Hi, Welcome Back!</span>
            </h2>
            <div className="mt-10">
                <div className="stats shadow w-full text-center h-[150px]">

                    <div className="stat bg-[#D3A256]">
                        <div className="stat-figure text-2xl text-secondary">
                            <FaCartPlus />
                        </div>
                        <div className="stat-title font-semibold">Order</div>
                        <div className="stat-value">{userStats?.order?.length}</div>

                    </div>

                    <div className="stat bg-[#FE4880]">
                        <div className="stat-figure text-2xl text-[#D3A256]">
                            <FaStar></FaStar>
                        </div>
                        <div className="stat-title font-semibold">Review</div>
                        <div className="stat-value">{userStats?.review?.length}</div>
                    </div>

                </div>
                <div>
                    <div className="mx-auto mt-5 w-[300px] lg:w-[500px] bg-[#FFEDD5]">
                        <div className='p-24 '>
                            <h2 className='flex items-center justify-center '>
                                {
                                    user?.photoURL ? user.photoURL : <FaUserAlt className='border-2 border-rose-600 rounded-full h-[90px] w-[90px] lg:h-[120px] lg:w-[120px]'></FaUserAlt>

                                }
                            </h2>
                            <h2 className='flex items-center justify-center uppercase text-xl'>
                                {
                                    user?.displayName && user.displayName
                                }
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;