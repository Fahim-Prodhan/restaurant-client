import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

import { FreeMode, Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <div>
            <div className='text-center'>
                <p className='text-[#D99904] pb-4'>---From 11:00am to 10:00pm---</p>
                <hr />
                <h1 className='py-4 text-4xl'>ONLINE ORDER</h1>
                <hr />
            </div>
            <div className='mt-12'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                      }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Category;