import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({ items }) => {
    return (
        <div className="mt-10 grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                items.map(food => <FoodCard
                    key={food._id}
                    food={food}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;