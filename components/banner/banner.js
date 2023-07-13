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
  const sliders = [
    {
      image:
        "http://jogunshop.img18.kr/web/upload/usa/en_main_visual_buttonless_overfit_summer_cardigan.jpg",
    },
    {
      image:
        "http://jogunshop.img18.kr/web/upload/usa/en_main_visual_daily_look_pk_short_sleeve_tee.jpg",
    },
    {
      image:
        "http://jogunshop.img18.kr/web/upload/usa/en_main_visual_cool_tensel_3type_hidden_banding_denim.jpg",
    },
    {
      image:
        "http://jogunshop.img18.kr/web/upload/usa/en_main_visual_arctic_19colors_spandex_summer_shorts.jpg",
    },
  ];
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
          className="mySwiper md:h-[85vh] h-[40vh]"
        >
          {sliders.map((slider, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  className="h-full w-full relative">
                  <Image
                    src={slider.image}
                    layout="fill"
                    className="relative object-cover"
                  />
                  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[-50%]">
                    <article className="font-diot text-[40px] text-white uppercase">
                      {slider.headline}
                    </article>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default banner;
