'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";
import Image from 'next/image';
const data = [{
  name: "T-shirt",
  img: "/tShirt.jpg"
},
{
  name: "denim jacket",
  img: "/denim.jpg"
}, {
  name: "hoodies",
  img: "/hoodies.jpg"
},
{
  name: "jumper-suits",
  img: "/jumper.jpg"
},
]
const cardCrousel = () => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
      const handleResize = () => {
        setShowArrows(window.innerWidth >= 768);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <>
      <div className='m-4'>
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            }
          }}
          navigation={showArrows}
          modules={[Navigation,Autoplay]}
          className="mySwiper"
        >{
            data.map((item, index) => {
              return (
                <>
                  <SwiperSlide><div className='h-[33vh] w-full relative '><Image src={item.img} layout='fill'
                    className='relative object-cover ' />
                    <div className='absolute  text-center h-[33vh] w-full bg-gray-300 opacity-25	'>
                    </div>
                    <div className='absolute top-[25vh] w-full text-center '>
                      <span className='bg-zinc-900	text-xs	 px-4 py-2 uppercase text-white cursor-pointer'>{item.name}</span>
                    </div>
                  </div>
                  </SwiperSlide>
                </>
              )
            })
          }




        </Swiper>
      </div>
    </>
  )
}

export default cardCrousel


