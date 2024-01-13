import { Parallax } from 'react-parallax';
const Cover = ({ img, title, p }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[420px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-white ">

                    <div className="hero-content text-center  bg-[#151515] bg-opacity-30 lg:px-48 py-10">
                        <div className="max-w-md text-white">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{p}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;