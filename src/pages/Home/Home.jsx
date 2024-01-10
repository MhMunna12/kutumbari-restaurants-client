import PopularMenu from "../PopularMenu/PopularMenu";
import FoodServices from "../Services/FoodServices";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
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
            <CallUs></CallUs>
            <FoodServices></FoodServices>
            <Featured></Featured>
            <Testimonials />
        </div>
    );
};

export default Home;