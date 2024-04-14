import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const Home = () => {
    return (
        <>
            <div className="mt-10">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/h9z1kzG/2150799695.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/k4cG48q/beautiful-sunny-cityscape.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/VDLZTrQ/scyscraper-city-evening-sunset-view-concept.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/1m68Pvt/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                
            </div>
        </>
    );
};

export default Home;