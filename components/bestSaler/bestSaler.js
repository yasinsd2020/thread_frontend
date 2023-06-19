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
    name: "Men Shirt Classy Rich Look",
    img: "/tShirt.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs"
}, {
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/denim.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/hoodies.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/hoodies.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},

{
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
    amount: "300rs",
    cutAmount: "400rs"
},
{
    name: "Men Shirt Classy Rich Look",
    img: "/jumper.jpg",
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