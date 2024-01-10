import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <section className="mb-14">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div>
                <div className="grid md:grid-cols-2 gap-2 p-5">
                    {
                        menu.slice(0, 8).map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }

                </div>
                <div className="text-center mt-5">
                    <button className="btn rounded-xl px-6 hover:bg-white shadow-md bg-white uppercase" style={{ borderBottom: '2px solid black' }}>View Full  Menu</button>
                </div>
            </div>
        </section>
    );
};

export default PopularMenu;