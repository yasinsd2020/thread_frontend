import Slider from 'rc-slider';
import React from 'react'
import { TfiClose, TfiSearch } from 'react-icons/tfi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';

const links = [
    {
        name: "T-shirts & Polos",
        href: "/",
    },
    {
        name: "Shirts",
        href: "/",
    },
    {
        name: "Hoodies & Sweatshirts",
        href: "/",
    },
    {
        name: "Sweaters & Cardigans",
        href: "/",
    },
    {
        name: "Jackets & Coats",
        href: "/",
    },
    {
        name: "Pants",
        href: "/",
    },
    {
        name: "Suits & Blazers",
        href: "/",
    },
    {
        name: "Activewear",
        href: "/",
    },
    {
        name: "Swimwear",
        href: "/",
    },
];
const CategorySideBar = ({ openBar, setOpenBar, setSliderValue, setIsFixed, setCategoryShow, isFixed, categoryShow, sliderValue }) => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const targetPosition = 0; // Adjust this value based on your requirements
            const footerHeight = 160; // Adjust this value based on your footer's height

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.offsetHeight;

            setIsFixed(scrollPosition >= targetPosition && scrollPosition + windowHeight < documentHeight - footerHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsFixed]);

    const handleSliderChange = (value) => {
        setSliderValue(value);
    };

    return (
        <>

            <div className={` ease-linear duration-150
          ${openBar ? ' w-[100%] fixed top-0 left-0 h-screen bg-red-500  ' : isFixed && ' lg:fixed lg:w-[19.3%]   bg-white '}
          `}
                style={{ zIndex: openBar && 600, background: openBar && "rgba(0,0,0,0.5)" }}
            >
                <div className={`${openBar && 'relative bg-white md:w-[35%] w-[80%] h-full flex flex-col justify-start  px-5  py-4 '

                    } relative`}>
                        {openBar &&
                             <div className="cursor-pointer flex justify-end" >
                             <TfiClose onClick={() => setOpenBar(false)}  />
                         </div> 
                        }
                                  <div className="my-4  border-b border-gray pb-3"  >
                        <div className="text-xl font-semibold font-diot mb-4">PRODUCT SEARCH</div>
                        <div className={`flex items-center border border-gray-300 justify-evenly p-2 rounded shadow-md`} >

                            <div><input className="lg:w-[16vw] md:w-[23vw]  w-[58vw] sm:w-[68vw]  text-md outline-none" placeholder="search for products"></input></div>

                            <div><TfiSearch className="text-lg " /></div>
                        </div>

                    </div>
                    <div className="my-4 border-b border-gray pb-3">
                        <div className="flex w-full items-center  justify-between">
                            <div className="text-md font-semibold">CATEGORIES</div>
                            {categoryShow ? <TiArrowSortedDown className="text-lg" onClick={() => { setCategoryShow(false) }} /> :
                                <TiArrowSortedUp className="text-lg" onClick={() => { setCategoryShow(true) }} />

                            }
                        </div>
                        <div className={`${categoryShow ? 'w-full h-[30vh] overflow-scroll pl-[5%] flex flex-col pt-2 ' : 'hidden'}`}>
                            {links.map((link, idx) => {
                                return (
                                    <div key={idx} className="w-full py-1.5 ">
                                        <a href={link.href}>
                                            <div className="font-extralight text-gray-600 text-md ">{link.name}</div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="my-4 w-full">
                        <div className="text-md font-semibold">FILTER BY PRICE</div>
                        <div className="w-full">
                            <div className="my-8">
                                <style>
                                    {`
                    .rc-slider-track {
                      height:3px;
                      cursor:pointer;
                    }
                    
                    /* Styles for the thumbs */
                    .rc-slider-handle {
                      width: 4px;
                      height: 17px;
                      border-radius: 0%;
                      border: none;
                      margin-top:-7px;
                    }
                    
                    /* Styles for the active thumbs */
                    .rc-slider-handle:active {
                      transform: scale(1.2);
                    }
                    `}
                                </style>
                                <Slider
                                    range
                                    // reverse
                                    min={400}
                                    max={1000}
                                    defaultValue={[400, 1000]}
                                    onChange={handleSliderChange}
                                    trackStyle={[{ backgroundColor: 'black' }, { backgroundColor: 'black' }]}
                                    handleStyle={[{ backgroundColor: 'black' }, { backgroundColor: 'black' }]}
                                    railStyle={{ backgroundColor: 'light-gray', height: '3px', cursor: "pointer" }}
                                />

                            </div>
                            <div className="flex items-center flex-row justify-between lg:flex-row">
                                <div className="flex lg:w-[16vw] items-center">
                                    <div className="text-gray-700 text-sm">Price:</div>
                                    <div className="flex items-center  w-full justify-start ">
                                        <div className="font-semibold  text-sm">{sliderValue[0]}rs</div>
                                        <div className="text-lg w-[.7vw] h-[2px] mx-1 bg-black  "></div>
                                        <div className="font-semibold text-sm">{sliderValue[1]}rs</div>
                                    </div>
                                </div>
                                <div className="bg-black text-white text-xs font-bold px-3 py-2 cursor-pointer">FILTER</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CategorySideBar