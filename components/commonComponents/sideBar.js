import React from "react";
import { TfiSearch, TfiClose } from "react-icons/tfi";
import { CiInstagram, CiFacebook, CiTwitter, CiYoutube } from "react-icons/ci";
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
const SideBar = ({ openBar, setOpenBar }) => {



  return (

    <div
      className={`fixed ${
        openBar ? "left-[0]" : "-left-[100%]"
      } w-[100%] h-screen ease-linear duration-150`}
      style={{ zIndex: 1000, background: "rgba(0,0,0,0.5)" }}
    >
      <div className="relative bg-white md:w-[25%] w-[80%] h-full flex flex-col justify-start items-center px-5 py-8 ">
        <div className="w-full flex justify-between items-center mb-[100px]">
          <article className="font-bold font-diot text-2xl">THREAD & TREADS</article>
          <div
            className="cursor-pointer hover:rotate-180 ease-linear duration-200"
            onClick={() => setOpenBar(false)}
          >
            <TfiClose />
          </div>
        </div>
        <div className="w-full">
          {links.map((link, idx) => {
            return (
              <div key={idx} className="w-full py-2 border-b mb-2">
                <a href={link.href}>
                  <article className="font-light">{link.name}</article>
                </a>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-4 left-0 w-full py-2 px-5 flex justify-center items-center gap-10">
          <div className="flex justify-center items-center cursor-pointer">
            <CiInstagram className="text-2xl" />
          </div>
          {/*  */}
          <div className="flex justify-center items-center cursor-pointer 	">
            <CiFacebook className="text-2xl" />
          </div>
          {/*  */}
          <div className="flex justify-center items-center cursor-pointer">
            <CiTwitter className="text-2xl" />
          </div>
          <div className="flex justify-center items-center cursor-pointer">
            <CiYoutube className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
