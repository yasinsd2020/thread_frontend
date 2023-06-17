"use client";

import React, { useState } from "react";
import DiscountHeader from "./discountHeader";
import { TfiSearch } from "react-icons/tfi";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import CategoryList from "./categoryList";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

const Header = () => {
  const [openSearch,setOpenSearch] = useState(false)
  const [openBar,setOpenBar] = useState(false)
  return (
    <>
      {/* search bar */}
      <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} />
      {/* side bar */}
      <SideBar openBar={openBar} setOpenBar={setOpenBar} />
      {/* header */}
      <div className="absolute top-0 left-0 w-full" style={{ zIndex: 100 }}>
        <div className="relative px-4 py-6 flex justify-between items-center">
          {/* left section */}
          <div className="flex jusitfy-start items-center gap-5 text-white">
            <div className="flex justify-center items-center cursor-pointer" onClick={() => {setOpenBar(true)}}>
              <RiMenu2Fill className="text-[25px]" />
            </div>
          </div>
          {/* middel section */}
          <div className="md:absolute relative md:left-[50%]    md:-translate-x-[50%]">
            <div className="md:text-xl text-sm font-diot font-bold cursor-pointer text-white">
              THREAD & TREADS
            </div>
          </div>
          {/* right section */}
          <div className=" flex justify-between items-center py-2 px-4 ">
            <div className="flex jusitfy-center items-center text-white gap-5">
              <div className="flex justify-center items-center cursor-pointer" onClick={() => {setOpenSearch(true)}}>
                <TfiSearch className="text-xl" />
              </div>
              {/*  */}
              <div className="flex justify-center items-center cursor-pointer 	">
                <GiShoppingCart className="text-2xl" />
              </div>
              {/*  */}
              <div className="flex justify-center items-center cursor-pointer">
                <AiOutlineUser className="text-2xl" />
              </div>
            </div>
          </div>
          {/* category section */}
          {/* <div className="py-2">
          <CategoryList />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
