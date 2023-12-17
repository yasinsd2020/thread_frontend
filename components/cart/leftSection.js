import React, { useEffect } from "react";
import ProductInCart from "../commonComponents/productInCart/productInCart";


const LeftSection = ({cartReducer}) => {


  return (
    <div className="w-full h-auto">
        {/* table heading show only on lappy */}
      <div className="md:flex hidden md:flex-row w-full py-2 text-gray-500 font-bold">
        <div className="flex-[0.4] flex justify-center items-center">
          Product
        </div>
        <div className="flex-[0.2]  flex justify-center items-center">
          Price
        </div>
        <div className="flex-[0.2]  flex justify-center items-center">
          Quantity
        </div>
        <div className="flex-[0.2]  flex justify-center items-center">
          Remove
        </div>
      </div>
      {/* product list section  */}
      <div className="w-full md:h-[50vh] h-auto max-h-[50vh] flex-col border-y-2 border-gray justify-start items-center overflow-auto hideScroll py-4 ">
        {cartReducer?.CartList?.length <= 0 ? <div className='text-center text-sm md:mt-[10%] font-[300] md:text-lg md:font-bold '>Your Cart is Empty </div> :
            cartReducer?.CartList?.map((cartPrd) => {
                return (
                    <ProductInCart key={cartPrd?.id} product={cartPrd} />
                )
            })
        }
      </div>
      {/* Subtotal */}
      <div className="md:hidden w-full flex justify-end items-center py-4 text-xl text-gray-500">SUBTOTAL : ₹549.00</div>
    </div>
  );
};

export default LeftSection;
