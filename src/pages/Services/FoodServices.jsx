import SectionTitle from "../../components/SectionTitle/SectionTitle";
import image from '../../assets/home/slide5.jpg'
import FoodServiceCard from "./FoodServiceCard";
const productsData = [

    {
        "_id": 1,
        name: ' Caeser Salad',
        details: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.',
        img: image
    },
    {
        "_id": 2,
        name: ' Caeser Salad',
        details: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.',
        img: image
    }
    ,
    {
        "_id": 3,
        name: ' Caeser Salad',
        details: 'Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.',
        img: image
    }

]
const FoodServices = () => {
    return (
        <div className="mb-20">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionTitle>
            <div className="mt-10 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    productsData.map(food => <FoodServiceCard
                        key={food._id}
                        food={food}
                    ></FoodServiceCard>)
                }
            </div>
        </div>
    );
};

export default FoodServices;