
const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <div className="flex space-x-4 mt-6">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[90px]" src={image} alt="" />
                <div>
                    <h3>{name} -----------------</h3>
                    <p className="text-sm mt-1">{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>

        </div>
    );
};

export default MenuItem;