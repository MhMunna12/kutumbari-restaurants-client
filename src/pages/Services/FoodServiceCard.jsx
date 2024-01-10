
const FoodServiceCard = ({ food }) => {
    const { name, details, img } = food
    return (
        <div className="card  ">
            <img className="" src={img} style={{ height: '350px', }} />
            <div className="card-body items-center text-center bg-base-200 text-black">
                <h2 className="card-title">{name}</h2>

                <p>{details}</p>
                <button style={{ borderBottom: '3px solid yellow' }} className="btn uppercase text-yellow-400 border-0 ">Add to cart</button>

            </div>
        </div>
    );
};

export default FoodServiceCard;