import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, img, title, p }) => {
    return (
        <div>
            {title && <Cover img={img} title={title} p={p}></Cover>}
            <div className="grid md:grid-cols-2 gap-2 p-5">
                {
                    items.slice(0, 8).map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-2 mb-4">
                <Link to={`/order/${title}`}>
                    <button className="btn border-0 px-6 hover:bg-white shadow-md bg-white uppercase" style={{ borderBottom: '2px solid black' }}>ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;