
import image from '../../../assets/home/chef-service.jpg'
const MiddlePart = () => {
    return (
        <div className="hero min-h-80 mb-20 " style={{ backgroundImage: `url(${image})`, height: '200px' }}>
            <div className="hero-overlay bg-opacity-30 "></div>
            <div className="hero-content text-center bg-white lg:px-32 p-5">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-4xl ">Kutombari Restuarant</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default MiddlePart;