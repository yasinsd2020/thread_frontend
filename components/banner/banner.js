'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from 'next/image';

const banner = () => {
    
    return (
        <> 
        <div className='mx-4 mt-4'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className=' h-[45vh]  lg:h-[75vh] w-full relative '><Image src={'/banner2.jpg'} layout='fill'
                className='relative object-cover'

                /></div></SwiperSlide>
                <SwiperSlide><div className='  h-[45vh]  lg:h-[75vh] w-full relative '><Image src={'/mainBanner.jpg'} layout='fill'
                className='relative object-cover'

                /></div></SwiperSlide>
                <SwiperSlide><div className='  h-[45vh]  lg:h-[75vh] w-full relative '><Image src={'/mainBanner.jpg'} layout='fill'
                className='relative object-cover'

                /></div></SwiperSlide>

            </Swiper>
            </div>
        </>
    )
}

export default banner