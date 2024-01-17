import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/users/admin/${user.email}`)
            console.log('is admin', res);
            return res.data.admin
        }

    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;