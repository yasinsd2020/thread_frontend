import React from "react";
import DiscountHeader from "./discountHeader";
import { TfiSearch } from "react-icons/tfi";
import { GiShoppingCart } from "react-icons/gi";
import CategoryList from "./categoryList";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full" style={{zIndex:100}}>
      <DiscountHeader />
      <div className="px-4 py-2">
        {/* logo and search  */}
        <div className="flex justify-between items-center py-2 px-4">
          {/* left section */}
          <div className="flex justify-start items-center">
            <div className="text-xl font-bold cursor-pointer text-white">
              THREAD & TREADS
            </div>
          </div>
          {/* right section */}
          <div className="flex jusitfy-end items-center gap-5 text-white">
            <div className="flex justify-center items-center">
              <div className="mr-1">
                <TfiSearch className="text-xl" />
              </div>
              <div className="cursor-pointer font-normal	">Search</div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center font-semibold	">
              <div className="mr-1">
                <GiShoppingCart className="text-2xl" />
              </div>
              <div className="cursor-pointer font-normal	">Carts</div>
            </div>
            {/*  */}
            <div className="flex justify-center items-center">
              <article className="cursor-pointer font-normal">Login</article>
            </div>
          </div>
        </div>
        {/* category section */}
        <div className="py-2">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Header;
