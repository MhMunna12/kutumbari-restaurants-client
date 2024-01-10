import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MiddlePart from "./MiddlePart/MiddlePart";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category></Category>
            <MiddlePart></MiddlePart>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials />
        </div>
    );
};

export default Home;