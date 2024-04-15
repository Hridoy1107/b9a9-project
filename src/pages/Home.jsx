import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'animate.css';
import Houses from './Houses';


const Home = () => {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        fetch('houses.json')
            .then(res => res.json())
            .then(data => setHouses(data));
    }, []);


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
                    <div className="flex">
                    <h1 className="mt-2 animate__animated animate__zoomInUp animate__repeat-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-green-400 to-red-400 animate-text">Choose Yours</h1>
                    <h1 className="mt-2 ml-[720px] animate__animated animate__zoomInUp animate__repeat-1 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-green-400 to-red-400 animate-text">Choose Yours</h1>
                    </div>
                </marquee>
            </div>
            <hr
                style={{
                    background: 'lime',
                    color: 'lime',
                    borderColor: 'lime',
                    height: '4px',
                }} />
            <div className="grid grid-cols-3 gap-6 mt-10 animate__animated animate__fadeInUp">
                {
                    houses.map(house => <Houses key={house.id} house={house}></Houses>)
                }
            </div>
        </>
    );
};

export default Home;