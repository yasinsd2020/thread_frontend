"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// images
import Img1 from "../../public/assets/banner/img-1.jpeg";
import Img2 from "../../public/assets/banner/img-2.jpeg";
import Img3 from "../../public/assets/banner/img-3.jpeg";
import Img4 from "../../public/assets/banner/img-4.jpeg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const banner = () => {
  return (
    <>
      <div className="swiper-landing">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper h-[80vh]"
        >
          <SwiperSlide>
            <div className="h-full w-full relative ">
              <Image
                src={Img1}
                layout="fill"
                className="relative object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full relative ">
              <Image
                src={Img2}
                layout="fill"
                className="relative object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full relative ">
              <Image
                src={Img3}
                layout="fill"
                className="relative object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full relative ">
              <Image
                src={Img4}
                layout="fill"
                className="relative object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default banner;
