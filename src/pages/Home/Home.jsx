import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import MiddlePart from "./MiddlePart/MiddlePart";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category></Category>
            <MiddlePart></MiddlePart>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;