
const FoodCard = ({ food }) => {
    const { name, image, recipe, price } = food
    return (
        <div className="">
            <img className="" src={image} style={{ height: '290px', }} />
            <p className="absolute right-0 px-5 mt-2 mr-3 p-1 rounded-lg bg-slate-900 text-white">${price}</p>
            <div className="card-body items-center text-center bg-base-200 text-black">
                <h2 className="card-title">{name}</h2>

                <p>{recipe}</p>
                <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">Add to cart</button>

            </div>
        </div>
    );
};

export default FoodCard;