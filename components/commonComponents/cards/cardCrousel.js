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
  name: "Shirt",
  img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/92/096/L_g0179409692.jpg"
},
{
  name: "Short-Sleeve Shirt",
  img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/39/766/XXL_p0169176639.jpg"
}, {
  name: "Zip-Up Hoodie",
  img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/06/459/XXL_p0162445906.jpg"
},
{
  name: "Half-Zip Hoodie",
  img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/50/216/XXL_p0188821650.jpg"
},
]
const CardCrousel = () => {
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
                  <SwiperSlide><div className='md:h-[40vh] h-[20vh] w-full relative '><Image src={item.img} layout='fill'
                    className='relative object-cover ' />
                    <div className='absolute text-center h-[33vh] w-full bg-black-500 opacity-25	'>
                    </div>
                    <div className='absolute bottom-[25px] w-full text-center '>
                      <span className="text-xs bg-zinc-900 text-white py-1 px-2 md:py-2 md:px-4">{item.name}</span>
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

export default CardCrousel


