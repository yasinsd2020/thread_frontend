import React from "react";
import ProductInCart from "./productInCart/productInCart";

const LeftSection = () => {
  const InCart = [
    {
      prdId:"1234",  
      prdImage:
        "https://static.zara.net/photos///2023/I/0/2/p/5679/101/400/2/w/1126/5679101400_6_2_1.jpg?ts=1686213850158",
      prdSize: "XL",
      prdName: "100% SHIMRA COTTON SHIRT",
      prdPrice: "₹549.00",
    },
    {prdId:"1234",
      prdImage:
        "https://static.zara.net/photos///2023/I/0/2/p/5679/101/400/2/w/1126/5679101400_6_2_1.jpg?ts=1686213850158",
      prdSize: "XL",
      prdName: "100% SHIMRA COTTON SHIRT",
      prdPrice: "₹549.00",
    },
    {prdId:"1234",
      prdImage:
        "https://static.zara.net/photos///2023/I/0/2/p/5679/101/400/2/w/1126/5679101400_6_2_1.jpg?ts=1686213850158",
      prdSize: "XL",
      prdName: "100% SHIMRA COTTON SHIRT",
      prdPrice: "₹549.00",
    },
  ];
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
        {
            InCart?.map((cartPrd,idx) => {
                return (
                    <ProductInCart key={idx} product={cartPrd} />
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