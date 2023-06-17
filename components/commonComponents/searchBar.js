import React from "react";
import { TfiSearch,TfiClose } from "react-icons/tfi";



const SearchBar = ({ openSearch, setOpenSearch }) => {
  return (
    <div
      className={`fixed ${
        openSearch ? "top-[0]" : "-top-[100%]"
      } w-[100%] h-[100%] ease-linear duration-100`}
      style={{ zIndex: 1000, background: "rgba(0,0,0,0.5)" }}
    >
      <div className="w-full h-auto bg-white flex  justify-end items-center md:px-[50px] px-[25px] py-[20px] gap-5">
        <div className="relative w-full h-auto ">
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full px-4 py-4 rounded-[30px] border outline-none"
            onKeyDown={(e) => e.key === "Enter" && setOpenSearch(false)}
          />
          <div
            className="absolute top-[50%] -translate-y-[50%] right-5 h-[100%] w-[40px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setOpenSearch(false);
            }}
          >
            <TfiSearch className="text-xl" />
          </div>
        </div>
          <div
          className="w-[40px] h-[40px] flex justify-center items-center shadow-lg rounded-full"
          onClick={() => {
            setOpenSearch(false);
          }}>
            <TfiClose  />
          </div>
        </div>
    </div>
  );
};

export default SearchBar;
