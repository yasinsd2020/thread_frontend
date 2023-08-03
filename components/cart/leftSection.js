import React, { useEffect } from "react";
import ProductInCart from "../commonComponents/productInCart/productInCart";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCartAction } from "../../redux/actions/products/carts/cartsAction";

const LeftSection = () => {
  const InCart = [
    {
      prdId:"1234",  
      prdImage:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/03/524/XXL_p0192152403.jpg",
      prdSize: "XL",
      prdName: "Phoneus - Hooded Zip Baseball Jacket",
      prdPrice: "₹549.00",
    },
    {prdId:"1234",
      prdImage:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/49/551/XXL_p0167355149.jpg",
      prdSize: "XL",
      prdName: "Aozora - Hood Zip Baseball Jacket",
      prdPrice: "₹549.00",
    },
    {prdId:"1234",
      prdImage:
        "https://d1flfk77wl2xk4.cloudfront.net/Assets/75/831/XXL_p0161583175.jpg",
      prdSize: "XL",
      prdName: "Plummie - Panda Baseball Jacket",
      prdPrice: "₹549.00",
    },
  ];
  const router = useRouter();
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getCartAction(9))
  },[router])

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
          Sub Total
        </div>
      </div>
      {/* product list section  */}
      <div className="w-full md:h-[50vh] h-auto max-h-[50vh] flex-col border-y-2 border-gray justify-start items-center overflow-auto hideScroll py-4 ">
        {/* {
            InCart?.map((cartPrd,idx) => {
                return (
                    <ProductInCart key={idx} product={cartPrd} />
                )
            })
        } */}
      </div>
      {/* Subtotal */}
      <div className="md:hidden w-full flex justify-end items-center py-4 text-xl text-gray-500">SUBTOTAL : ₹549.00</div>
    </div>
  );
};

export default LeftSection;
