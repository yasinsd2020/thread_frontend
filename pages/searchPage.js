import React from "react";
import NormalCard from "../components/commonComponents/cards/normalCard";
import Footer from "../components/commonComponents/footer/footer";
import { TiArrowSortedDown } from "react-icons/ti";
import SideBar from "../components/commonComponents/sideBar";
import { TfiSearch } from "react-icons/tfi";
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
const SearchPage = () => {
  const [categoryShow,setCategoryShow] = useState(false)
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const targetPosition = 100; // Adjust this value based on your requirements
      const footerHeight = 200; // Adjust this value based on your footer's height

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;

      setIsFixed(scrollPosition >= targetPosition && scrollPosition + windowHeight < documentHeight - footerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div></div>
      {/* <div className="text-center m-8 text-2xl uppercase font-normal font-diot">
        AllProducts
      </div> */}
      <div className="flex  ">
        <div className="w-[30%]  ">
          
          <div className={`${isFixed?'fixed flex flex-col items-center  bg-red-500 w-[20%]':""} `}>
            <div>
              <div>PRODUCT SEARCH</div>
              <div  className={`${isFixed?"flex items-center p-2 border border-black rounded shadow-md w-[100%]":"flex items-center p-2 border border-black rounded shadow-md w-[60%]"}`} >
                <input className="outline-none"></input>
                <TfiSearch className="text-lg ml-2" />

              </div>
              <div></div>
            </div>
            <div className="flex w-[40%] items-center justify-between">
              <div>Categoreis</div>
              <TiArrowSortedDown onClick={()=>{setCategoryShow(!categoryShow)}} />
            </div>
            <div className={`${categoryShow? 'w-[30%] flex items-center flex-col':'hidden'}`}>
              {links.map((link, idx) => {
                return (
                  <div key={idx} className="w-full py-2 ">
                    <a href={link.href}>
                      <article className="font-light">{link.name}</article>
                    </a>
                  </div>
                );
              })}
            </div>
            <div>
              <div>FILTER BY PRICE</div>
              <div>
                <div>\------------------------------------------\</div>
                <div>
                  <div className="flex"> 
                    <div>price:</div>
                    <div>rs400</div>
                    <div>rs500</div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <div></div>
          <div className="m-4  grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <NormalCard />
          </div>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </>
  );
};

export default SearchPage;
