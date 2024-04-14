import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'animate.css';


const Home = () => {
    return (
        <>
            <div className="mt-10">
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/h9z1kzG/2150799695.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/k4cG48q/beautiful-sunny-cityscape.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/VDLZTrQ/scyscraper-city-evening-sunset-view-concept.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-[500px] rounded-2xl" src="https://i.ibb.co/1m68Pvt/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="mt-5">
                <h1 className="animate__animated animate__zoomInDown animate__repeat-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-violet-400 to-red-400
            animate-text">Real Estates</h1>
                <marquee direction="right">
                    <h1 className="mt-2 animate__animated animate__zoomInUp animate__repeat-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-green-400 to-red-400 animate-text">Choose Yours</h1>
                </marquee>
            </div>
            <hr
                style={{
                    background: 'lime',
                    color: 'lime',
                    borderColor: 'lime',
                    height: '4px',
                }} />
        </>
    );
};

export default Home;