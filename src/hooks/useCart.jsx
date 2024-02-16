import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        //1st option
        // queryFn: async () => {
        //     const result = await fetch(`https://kutombari-restuarant-server.vercel.app/carts?email=${user.email}`, {
        //         method: 'GET',
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('access-token')}`
        //         }
        //     })
        //     return result.json();
        // }

        //2nd option
        queryFn: async () => {
            const result = await axiosSecure(`/carts?email=${user.email}`)
            console.log('res form axios', result);
            return result.data
        }

    })
    return [cart, refetch]
};

export default useCart;