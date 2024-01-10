import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className="mb-16    featured-item text-white">
            <div className="bg-slate-700 bg-opacity-60 pt-2">
                <SectionTitle className=""
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
                <div className="md:flex justify-center  items-center mt-10 pb-20 pt-12 px-28">
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className="md:ml-8">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, delectus voluptatibus dolore fuga dolorum sint perspiciatis. Ratione deserunt tenetur nam dolorem iusto cum repudiandae repellat ea fugit non at debitis sequi blanditiis</p>
                        <button className="btn border-0 rounded-xl px-6 hover:bg-white shadow-md mt-2 bg-white uppercase" style={{ borderBottom: '2px solid black' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;