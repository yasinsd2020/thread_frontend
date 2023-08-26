import Image from "next/image";
import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import PlusMinusButton from "../plusMinusButton/plusMinusButton";
import { useDispatch } from "react-redux";
import { increamentCartAction, removeCartAction } from "../../../redux/actions/products/carts/cartsAction";
import { useRouter } from "next/router";
import { common_image_Baseurl } from "../../../public/globalExtention";

const ProductInCart = ({ product }) => {
  const router= useRouter()
  const dispatch =useDispatch()
  const handleRemveCart=()=>{
    dispatch(removeCartAction({
      user_id:product?.user_id ||9,
      product_id: product?.product_id,
      variant_id: product?.product_variant?.id})
    )
  }

  //  increament count
  const handleIncreamentCart =()=>{
    dispatch(increamentCartAction({
      user_id:product?.user_id ||9,
      product_id: product?.product_id,
      variant_id: product?.product_variant?.id}))
  }
  const [wantQuality, setWantQuality] = useState(Number(product?.qty));
  return (
    <div className="border border-gray p-2 mb-2" >
      {/* section for lappy */}
      <div className="md:flex hidden flex-row">
        {/* product details */}
        <div className="flex-[0.4] flex justify-start items-center gap-2">
      
          {/* image */}
          <div className="relative w-[80px] h-[100px]"
           onClick={()=> router.push({
            pathname:`/product/info`,
            query : {
              variant_id : product?.product_variant?.id
            }
          })}
          >
            <Image
              src={`${common_image_Baseurl}${product?.product?.featured_image}`}
              layout="fill"
              className="relative w-full h-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="flex flex-col text-sm gap-1 uppercase">
            <article>
              {product?.product?.name?.length > 25
                ? `${product?.product?.name?.slice(0, 25)}...`
                : product?.product?.name}
            </article>
            <div className="flex"> <div className="mr-3">Size :  </div>  
                       <article>{product?.product_variant?.size}</article>
            </div>
            <div className="flex"> <div className="mr-3">Color :  </div>  
                       <article>{product?.product_variant?.color}</article>
            </div>
            <div className="flex"> 
                       <article className="text-green-700">{product?.product_variant?.tag}</article>
            </div>
          </div>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <article className="text-sm text-gray font-thin text-red-400 line-through">
            {product?.product_variant?.original_amount}
          </article>
          <div className="mx-2 text-lg ">/</div>
          <article className="text-lg  text-gray text-green-700 font-normal">
            {product?.product_variant?.final_amount}
          </article>
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
          <PlusMinusButton
          handleIncreamentCart={handleIncreamentCart}
            wantQuality={wantQuality}
            handleRemveCart={handleRemveCart}
            setWantQuality={setWantQuality}
            customClass={`!w-min-[80px] h-[20px]`}
          />
        </div>
        <div className="flex-[0.2] flex justify-center items-center">
            
              <div className="cursor-pointer">
            <span className="text-xl">
              <VscClose onClick={()=>handleRemveCart()} />
            </span>
          </div>
        </div>
      </div>
      {/* section for mobile */}
      <div className="relative md:hidden flex flex-row gap-4">
        {/* close */}
        <div className="absolute top-[2px] right-[2px] cursor-pointer">
          <span className="text-xl">
            <VscClose  />
          </span>
        </div>
        {/* product details */}
        <div className="flex-[0.2] w-full flex justify-start items-center ">
          {/* image */}
          <div className="relative w-[80px] h-[140px]">
            <Image
              src={`${common_image_Baseurl}${product?.product?.featured_image}`}
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
              {product && product?.product?.name.length > 20
                ? `${product.product.name.slice(0, 20)}...`
                : product.product?.name}
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
            <PlusMinusButton
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
