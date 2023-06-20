import Image from "next/image";
import React, { useState } from "react";
import {VscClose} from "react-icons/vsc"
import QuantityController from "../../commonComponents/quantityController/QuantityController";

const ProductInCart = ({ product }) => {
    const [wantQuality,setWantQuality] = useState(1)
  return (
    <div className="border border-gray p-2 mb-2">
      {/* section for lappy */}
      <div className="md:flex hidden flex-row">
        {/* product details */}
        <div className="flex-[0.4] flex justify-start items-center gap-2">
            {/* close */}
          <div className="cursor-pointer"><span className="text-xl"><VscClose /></span></div>
            {/* image */}
            <div className="relative w-[80px] h-[100px]">
                <Image src={product?.prdImage} layout="fill" className="relative w-full h-full object-cover" />
            </div>
            {/* Info */}
            <div className="flex text-sm gap-1 uppercase">
                <article>{product.prdName.length > 25 ? `${product.prdName.slice(0,25)}...` : product.prdName}</article>
                <span>-</span>
                <article>{product.prdSize}</article>
            </div>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <article className="text-sm text-gray font-thin">{product.prdPrice}</article>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <QuantityController wantQuality={wantQuality} setWantQuality={setWantQuality} customClass={`!w-min-[80px] h-[20px]`} />
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
        <article className="text-normal text-black font-bold">{product.prdPrice}</article>
        </div>
      </div>
      {/* section for mobile */}
      <div className="md:hidden flex flex-row">
        {/* product details */}
        <div className="flex-[0.4] flex justify-start items-center gap-2">
            {/* image */}
            <div className="relative w-[80px] h-[100px]">
                <Image src={product?.prdImage} layout="fill" className="relative w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
