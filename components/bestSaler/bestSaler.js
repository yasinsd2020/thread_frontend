'use client';
import React from 'react'
import NormalCard from '../commonComponents/cards/normalCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import AllPageCrousel from '../commonComponents/cards/allPageCrousel';
const data = [{
    name: "Shineon Studio - Plain Wide-Leg Jogger Pants",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/93/487/XXL_p0144148793.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Phoneus - Short Sleeve Pocket Front Plain Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/00/034/XXL_p0193403400.jpg",
    amount: "300rs",
    cutAmount: "400rs"
}, {
    name: "Shineon Studio - Plain Cargo Wide Leg Drawstring Pants",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/01/552/XXL_p0147555201.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Phoneus - Long Sleeve Pinstripe Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/27/385/XXL_p0182738527.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Phoneus - Long Sleeve Tie Dye Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/30/734/XXL_p0193373430.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Phoneus - Long Sleeve Tie Dye Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/21/741/XXL_p0193374121.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Andrei - Long-Sleeve Two Tone Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/33/823/XXL_p0181382333.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},

{
    name: "Andrei - Elbow-Sleeve Plain Pocket Detail Oversized Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/13/108/XXL_p0191910813.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Andrei - Set: Elbow-Sleeve Collar Two Tone Oversized T-Shirt + Mid Rise Plain Pocket Detail Shorts",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/70/352/XXL_p0193135270.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Orungeetun - Elbow-Sleeve Crew Neck Plain Oversized T-Shirt",
    img: "https://d1flfk77wl2xk4.cloudfront.net/Assets/57/539/XXL_p0189453957.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
]
const bestSaler = () => {
  return (
    <>
    
    <div className='text-center m-8 text-2xl uppercase font-normal font-diot'>best Seller</div>

    <div className='m-4'>
    <AllPageCrousel data={data} />
      </div>
    </>

  )
}

export default bestSaler