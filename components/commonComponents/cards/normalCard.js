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
import { useRouter } from "next/router";
// const data = [
//   {
//     name: "GRAYCIOUS - Baseball Jacket",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/31/168/XXL_p0156416831.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "GRAYCIOUS - Two-Tone Baseball Jacket",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/66/986/XXL_p0164798666.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "DragonRoad - Plain Zip Fluffy Hoodie",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/27/882/XXL_p0185088227.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "Chuoku - Japanese Print Short-Sleeve T-Shirt",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/60/860/XXL_p0124886060.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "GRAYCIOUS - Plain Shirt",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/43/666/XXL_p0136266643.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "GRAYCIOUS - 3/4-Sleeve Plain Shirt",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/87/792/XXL_p0180879287.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },
//   {
//     name: "GRAYCIOUS - Plain Pocket Detail Shirt",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/82/459/XXL_p0190045982.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   },

//   {
//     name: "Besto - Plain Pocket Detail Shirt",
//     img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/94/609/XXL_p0185660994.jpg",
//     amount: "300rs",
//     cutAmount: "400rs",
//     size: [
//       { size1: "s" },
//       { size2: "m" },
//       { size3: "l" },
//       { size4: "xl" },
//       { size5: "xxl" },
//     ],
//   }
// ];
const NormalCard = ({data}) => {
  const router =useRouter()
  console.log('data',data);
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div key={index}   onClick={() => {
            router.push({
              pathname:`/product/${item.id}`            })
          }}>
            {/* <Link href="/searchPage"> */}
              <div key={index} className="md:p-2 mb-4 cursor-pointer">
                <div className="h-[40vh] overflow-hidden md:h-[50vh] w-full relative  ">
                  <Image
                    src={`/${item.featured_image}`}
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
            {/* </Link> */}
          </div>
        );
      })}
    </>
  );
};

export default NormalCard;
