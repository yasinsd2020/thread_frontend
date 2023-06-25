"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/swiper.min.css";

const AllPageCrousel = ({ data }) => {
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        navigation={showArrows}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            //   navigation:false
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
            //   navigation:false
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <>
              <SwiperSlide>
                <a href="/product/123">
                <div className=" drop-shadow-md mb-4 cursor-pointer">
                  <div className="h-[30vh] overflow-hidden md:h-[45vh] w-full relative  ">
                    <Image
                      src={item.img}
                      layout="fill"
                      className="relative object-cover  hover:scale-110	 ease-in duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex w-full justify-center my-2 ">
                      <div className="flex justify-around  w-[70%] place-content-center ">
                        {/* <TfiHeart className='text-2xl ' /> */}
                        {/* {item.size.map((nest)=>{
                                                    return(
                                                        <> */}
                        <button className=" uppercase  text-black text-xs md:text-sm font-semibold ">
                          s
                        </button>
                        <button className="  uppercase text-black text-xs md:text-sm font-semibold ">
                          m
                        </button>{" "}
                        <button className="  text-black uppercase text-xs md:text-sm font-semibold ">
                          l
                        </button>
                        <button className="  uppercase text-black text-xs md:text-sm font-semibold ">
                          xl
                        </button>
                        <button className="  uppercase text-black text-xs md:text-sm font-semibold ">
                          xxl
                        </button>
                        {/* </>
                                                    )
                                                })} */}
                      </div>
                    </div>
                    <div className="text-center my-2 text-sm">
                      {item.name.length > 30
                        ? item.name.slice(0, 25) + "..."
                        : item.name}
                    </div>
                    <div className="flex justify-between flex-col items-center">
                      <div className="flex items-center mb-1 gap-1">
                        <div className="font-semibold text-sm">
                          {item.amount}
                        </div>
                        <div>/</div>
                        <div className="line-through text-sm">
                          {item.cutAmount}
                        </div>
                      </div>
                      {/* <div>
                                                <button className='bg-black text-white text-xs xl:text-sm lg:text-sm sm:text-xs md:text-sm font-normal px-7 py-2'>Add to Cart</button>
                                            </div> */}
                    </div>
                  </div>
                </div>
                </a>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default AllPageCrousel;
