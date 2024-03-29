import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch((err) => { console.log(err.message) });
    }

    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/secret'>secret</Link></li>
        <li><Link to='/order/soup'>Our Food</Link></li>
        {
            user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
        }
        {
            user ? <>
                <li onClick={handleLogout}><Link>Logout</Link></li>
            </> :
                <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-lg bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="uppercase hover:text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500  rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-serif">Kutumbari</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="hover:text-white  menu menu-horizontal px-1 uppercase">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <li><Link to='/dashboard/mycart'>
                    <button className="text-2xl hover:bg-slate-900 hover:bg-opacity-20 text-white btn bg-opacity-5 border-0 mr-2">
                        <FaShoppingCart />
                        <div className="badge badge-secondary">+{cart?.length || 0}</div>
                    </button>
                </Link></li>

                {
                    user ?
                        <div className="text-3xl p-2 text-amber-300 rounded-full border-2 border-blue-300">
                            <FaRegUser />
                        </div>
                        :
                        <div className="text-3xl p-2 text-amber-300 rounded-full border-2 border-blue-300">
                            <FaRegUser />
                        </div>
                }
            </div>
        </div>
    );
};

export default NavBar;