import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import MiddlePart from "./MiddlePart/MiddlePart";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category></Category>
            <MiddlePart></MiddlePart>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;