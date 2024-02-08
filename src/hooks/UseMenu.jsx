// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"

const useMenu = () => {
    // const [loading, setLoading] = useState(true);
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(response => response.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu, loading]

    //2nd option (react-query)
    const { data: menu = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu')
            return res.json();
        }
    })
    return [menu, refetch, loading]
}
export default useMenu