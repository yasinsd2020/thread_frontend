import React, { useEffect, useState } from "react";
import { myOrdersApi } from "../../apis/apis";
import { singleProduct_image_Baseurl } from "../../public/globalExtention";
import Image from "next/image";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([
    {
      id: "94",
      user_id: "9",
      product_id: "7",
      product_variant_id: "8",
      is_deleted: "0",
      created_date: "2023-12-17 10:37:05",
      update_date: "2023-12-17 10:37:05",
      product: {
        id: "7",
        name: "Full sleeve ",
        weight: "250g",
        code: "",
        description: "<p>full sleeve oversized T-shirt </p>",
        brand: "Thread & treads",
        price: "",
        featured_image: "1689838124.jpeg",
        main_category: "MEN",
        category: "",
        size: "",
        color: "",
        quantity: "",
        tags: "",
        created_date: "2023-07-20 07:28:44",
        updated_date: "2023-07-20 07:28:44",
        is_deleted: "0",
        added_by: "1",
      },
      product_variant: {
        id: "8",
        product_id: "7",
        name: null,
        description: null,
        color: "Yellow",
        size: "M",
        hsn_code: "",
        added_by: "1",
        featured_image: "",
        image_1: "16898381977_Variant_1.jpeg",
        image_2: "16898381977_Variant_11.jpeg",
        image_3: null,
        image_4: null,
        image_5: null,
        original_amount: "1599",
        final_amount: "899",
        quantity: "10",
        status: "0",
        tag: "In Stock",
        is_deleted: "0",
        created_date: "2023-07-20 07:29:57",
        updated_date: "2023-07-20 07:29:57",
      },
    },
  ]);
  const getMyOrder = async () => {
    const response = await myOrdersApi({
      user_id: 9,
    });

    console.log(response);
  };

  useEffect(() => {
    getMyOrder();
  }, []);
  return (
    <div className="p-10">
      {/* Heading */}
      <div className="mb-5">
        <article className="text-4xl font-semibold">My Orders</article>
      </div>
      <div className="w-full h-auto grid md:grid-cols-3 grid-cols-1 gap-10">
        {myOrder.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative w-full h-[400px] bg-white shadow-md flex flex-col"
            >
              {/* image */}
              <div className="relative w-full h-full flex-[85]">
                <Image
                  onClick={() =>
                    router.push({
                      pathname: `/product/info`,
                      query: {
                        variant_id: item?.product_variant?.id,
                      },
                    })
                  }
                  src={`${singleProduct_image_Baseurl}${item.product_variant.image_1}`}
                  layout="fill"
                  className="relative object-cover "
                />
              </div>
              {/* item details */}
              <div className="relative w-full h-full flex-[15] p-2 flex-col justify-center items-center">
                <article className="text-center text-sm text-gray-500 mb-1">
                  {item.product.brand.length > 25
                    ? `${item.product.brand.slice(0, 25)}...`
                    : item.product.brand}
                </article>
                <article className="text-center text-lg mb-2">
                  {item.product.name.length > 25
                    ? `${item.product.name.slice(0, 25)}...`
                    : item.product.name}
                </article>
                <div className="flex items-center justify-around">
                  <article className="font-semibold text-sm text-[#270]">Order Delivered</article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
