import Image from "next/image";
import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import QuantityController from "../quantityController/QuantityController";

const ProductInCart = ({ product }) => {
  const [wantQuality, setWantQuality] = useState(1);
  return (
    <div className="border border-gray p-2 mb-2">
      {/* section for lappy */}
      <div className="md:flex hidden flex-row">
        {/* product details */}
        <div className="flex-[0.4] flex justify-start items-center gap-2">
          {/* close */}
          <div className="cursor-pointer">
            <span className="text-xl">
              <VscClose />
            </span>
          </div>
          {/* image */}
          <div className="relative w-[80px] h-[100px]">
            <Image
              src={product?.prdImage}
              layout="fill"
              className="relative w-full h-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="flex text-sm gap-1 uppercase">
            <article>
              {product.prdName.length > 25
                ? `${product.prdName.slice(0, 25)}...`
                : product.prdName}
            </article>
            <span>-</span>
            <article>{product.prdSize}</article>
          </div>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <article className="text-sm text-gray font-thin">
            {product.prdPrice}
          </article>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <QuantityController
            wantQuality={wantQuality}
            setWantQuality={setWantQuality}
            customClass={`!w-min-[80px] h-[20px]`}
          />
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <article className="text-normal text-black font-bold">
            {product.prdPrice}
          </article>
        </div>
      </div>
      {/* section for mobile */}
      <div className="relative md:hidden flex flex-row gap-4">
        {/* close */}
        <div className="absolute top-[2px] right-[2px] cursor-pointer">
          <span className="text-xl">
            <VscClose />
          </span>
        </div>
        {/* product details */}
        <div className="flex-[0.2] w-full flex justify-start items-center ">
          {/* image */}
          <div className="relative w-[80px] h-[140px]">
            <Image
              src={product?.prdImage}
              layout="fill"
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>
        {/* product info */}
        <div className="flex-[0.8] w-full h-full flex-col justify-center items-center ">
          {/* name */}
          <div className="flex flex-col text-sm uppercase mb-2 ">
            <article>
              {product.prdName.length > 20
                ? `${product.prdName.slice(0, 20)}...`
                : product.prdName}
            </article>
            <article className="text-xs">-{product.prdSize}</article>
          </div>
          {/* price */}
          <div className="flex justify-start items-center w-full mb-2">
          <article className="text-sm flex justify-center items-center mr-2">
              Price:
            </article>
            <article className="text-sm text-gray font-thin">
              {product.prdPrice}
            </article>
          </div>
          {/* Qunatity */}
          <div className="flex justify-start items-center gap-2 ">
            <article className="text-sm flex justify-center items-center">
              Quantity:
            </article>
            <QuantityController
              wantQuality={wantQuality}
              setWantQuality={setWantQuality}
              customClass={`!w-max-[20px] h-[20px] !border-[0.5px]`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInCart;
