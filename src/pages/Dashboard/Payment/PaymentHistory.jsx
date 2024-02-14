import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext)
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <p className="text-2xl">Total Item: {payments.length}</p>
        </div>
    );
};

export default PaymentHistory;