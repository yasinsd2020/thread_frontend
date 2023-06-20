"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Image from "next/image";
// import { TfiHeart } from "react-icons/tfi";
import Link from "next/link";
const data = [
  {
    name: "Men Shirt Classy Rich Look",
    img: "/tShirt.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/hoodies.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/hoodies.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },

  {
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
  {
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
    amount: "300rs",
    cutAmount: "400rs",
    size: [
      { size1: "s" },
      { size2: "m" },
      { size3: "l" },
      { size4: "xl" },
      { size5: "xxl" },
    ],
  },
];
const normalCard = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <Link href="/searchPage">
              <div key={index} className="md:p-2 mb-4 cursor-pointer">
                <div className="h-[40vh] overflow-hidden md:h-[50vh] w-full relative  ">
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
                  <div className="text-center mb-2 text-sm">
                    {item.name.length > 30
                      ? item.name.slice(0, 25) + "..."
                      : item.name}
                  </div>
                  <div className="flex justify-between flex-col items-center">
                    <div className="flex items-center mb-1 gap-1">
                      <div className="font-semibold text-sm">{item.amount}</div>
                      <div>/</div>
                      <div className="line-through text-sm">
                        {item.cutAmount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default normalCard;
