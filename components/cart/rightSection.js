import React from "react";
import CommnonButton from "../commonComponents/button/commonButton";
import Link from "next/link";
// import { useRouter } from "next/router";

const rightSection = ({disabledValue}) => {
  // const Router =useRouter();
  // const proccedCheckFun =()=>{
  //   Router.push('./checkOutPage')
  // }
  return (
    <div className="w-full h-auto bg-gray-100 border px-4 py-6 mt-10">
      <div className="relative w-full h-[48vh]">
        <article className="text-2xl font-diot mb-10">CART TOTALS</article>
        {/* subtotal */}
        <div className="w-full flex justify-between items-center">
          {/* label */}
          <article className="uppercase text-sm">SubTotal:</article>
          {/* label data */}
          <article className="text-sm text-gray-500">₹1,098.00</article>
        </div>
        {/* shipping */}
        <div className="w-full flex justify-between items-center my-4 py-4 border-y border-gray-400">
          {/* label */}
          <article className="uppercase text-sm">Shipping:</article>
          {/* label data */}
          <div className="flex flex-col justify-center items-end gap-1">
            <div className="text-sm text-gray-500">
              Flat Rate : <span className="text-black"> ₹50.00</span>
            </div>
            <div className="text-sm text-gray-500 text-end max-w-[180px]">
              Shipping To :{" "}
              <span className="text-black text-xs capitalize">
                B 101, galli chwack complex, bhiwandi.{" "}
              </span>
            </div>
            <div className="text-[10px] text-black underline uppercase cursor-pointer">
              Change Address
            </div>
          </div>
        </div>
        {/* subtotal */}
        <div className="w-full flex justify-between items-center font-semibold">
          {/* label */}
          <article className="uppercase text-xl">Total:</article>
          {/* label data */}
          <article className="text-xl">₹1,148.00</article>
        </div>
        {/* Button */}
        <div className={`absolute bottom-0 left-0 w-full cursor-pointer bg-red-200 ${disabledValue <= 0 && 'pointer-events-none'}`}
          // onClick={()=>{proccedCheckFun()}}
        ><Link href='./checkOutPage'>
          <CommnonButton  text={"Procced To Checkout"} customClass={` !uppercase  bg-black !w-full text-red-500 text-sm`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default rightSection;
