import { Link, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoWalletSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { MdPreview } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-[205px] min-h-full bg-[#D1A054] uppercase">
                        <div className="text-center tracking-wide mb-6 mt-3">
                            <h3 className="text-2xl font-bold uppercase">Kutum Bari</h3>
                            <p className="font-semibold uppercase tracking-[.20em] text-lg">Restaurant</p>
                        </div>
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li><Link to='/dashboard/adminHome'><FaHome />Admin Home</Link></li>
                                    <li><Link to='/dashboard/additem'><ImSpoonKnife />Add Item</Link></li>
                                    <li><Link to='/dashboard/manageitems'><AiOutlineMenuUnfold />Manage Item</Link></li>
                                    <li><Link to='/dashboard/allusers'><FaUsers /> All Users</Link></li>
                                </>
                                :
                                <>
                                    <li><Link to='/dashboard/userHome'><FaHome />User Home</Link></li>
                                    <li><Link to='/dashboard/reservation'><FaCalendarAlt /> Reservation</Link></li>
                                    <li><Link to='/dashboard/paymentHistory'><IoWalletSharp />Payment History</Link></li>
                                    <li><Link to='/dashboard/review'><MdPreview />Review</Link></li>
                                    <li><Link to='/dashboard/mycart'><FaShoppingCart /> MY CART</Link></li>
                                </>
                        }

                        <div className="divider text-white"></div>
                        <li><Link to='/'><FaHome />Home</Link></li>
                        <li><Link to='/menu'><FaShoppingBag />Shop</Link></li>
                        <li><Link to='contract'><MdEmail />contact</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;