"use client";

import React, { useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import { useRouter } from 'next/router'
import { CiHeart, CiSearch, CiShoppingCart,CiUser } from "react-icons/ci";
import SearchBar from "./searchBar";
import SideBar from "./sideBar";

const Header = () => {
  const [openSearch,setOpenSearch] = useState(false)
  const [openBar,setOpenBar] = useState(false)
  const [postion,setPosition] = useState('absolute')
  const router = useRouter()

  useEffect(() => {
    if(router.pathname ===  "/" ){
      return setPosition('absolute')
    }else{
      return setPosition('relative')
    }
  },[router])


  return (
    <>
      {/* search bar */}
      <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} />
      {/* side bar */}
      <SideBar openBar={openBar} setOpenBar={setOpenBar} />
      {/* header */}
      <div className={`${postion} top-0 left-0 w-full ${postion === "relative" ? "bg-white shadow-sm" : "transparent"}`} style={{ zIndex: 100 }}>
        <div className="relative px-4 py-6 flex justify-between items-center">
          {/* left section */}
          <div className={`flex jusitfy-start items-center gap-5 ${postion === "relative" ? "text-black" : "text-white"}`}>
            <div className="flex justify-center items-center cursor-pointer" onClick={() => {setOpenBar(true)}}>
              <RiMenu2Fill className="text-[25px]" />
            </div>
          </div>
          {/* middel section */}
          <div className="md:absolute relative md:left-[50%]    md:-translate-x-[50%]">
            <a href="/"><div className={`md:text-xl text-sm font-diot font-bold cursor-pointer ${postion === "relative" ? "text-black" : "text-white"}`}>
              THREAD & TREADS
            </div></a>
          </div>
          {/* right section */}
          <div className=" flex justify-between items-center py-2 px-4 ">
            <div className={`flex jusitfy-center items-center ${postion === "relative" ? "text-black" : "text-white"} gap-4`}>
              <div className="flex justify-center items-center cursor-pointer" onClick={() => {setOpenSearch(true)}}>
                <CiSearch className="text-2xl" />
              </div>
              {/*  */}
              <div className="flex justify-center items-center cursor-pointer 	">
                <CiHeart className="text-2xl" />
              </div>
              {/*  */}
              <div className="flex justify-center items-center cursor-pointer 	">
                <CiShoppingCart className="text-2xl" />
              </div>
              {/*  */}
              <div className="flex justify-center items-center cursor-pointer">
                <CiUser className="text-2xl" />
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
