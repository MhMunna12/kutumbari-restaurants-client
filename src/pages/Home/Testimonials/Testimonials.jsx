import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import icon from '../../../assets/quote.svg';
const Testimonials = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://kutombari-restuarant-server.vercel.app/reviews')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="mb-10">
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="m-16 flex  flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img className="h-[50px] mt-4 mb-2" src={icon} alt="" />
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testimonials;