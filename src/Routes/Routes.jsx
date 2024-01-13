import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            // {
            //     path: 'order',
            //     element: <Order />
            // },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: 'login',
                element: <Login />
            }
            ,
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])