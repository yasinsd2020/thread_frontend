import React, { useEffect } from "react";
import Input from "../commonComponents/input/input";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getWishListAction,
  removeWishListAction,
} from "../../redux/actions/products/wishlist/wishListAction";
import { singleProduct_image_Baseurl } from "../../public/globalExtention";

const MyWishlist = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // get all wish product
  useEffect(() => {
    dispatch(getWishListAction(9));
    // if(router.query.tab ==="mywishlist"){

    // }
  }, []);

  const handleRemoveWishList = (wishlist_id) => {
    dispatch(removeWishListAction(wishlist_id));
  };

  const { loading, WishProduct } = useSelector((state) => state.wishlist);

  return (
    <div className="w-full md:min-h-[86vh] h-auto border shadow-sm md:p-10 p-2">
      {/* Heading */}
      <div className="mb-10">
        <article className="text-4xl font-semibold">My Wishlist</article>
      </div>
      {/* products */}
      <div className="w-full h-auto grid md:grid-cols-3 grid-cols-1 gap-5">
        {WishProduct.map((item, idx) => {
          console.log(WishProduct, "WishProduct");
          return (
            <div
              key={idx}
              className="relative w-full h-[500px] bg-white shadow-md flex flex-col"
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
                  <div className="flex justify-center gap-4 items-center ">
                    <article className="text-center text-md line-through text-gray-500 mb-2">
                      &#8377;{item.product_variant.original_amount}
                    </article>
                    <article className="text-center text-lg font-bold text-black mb-2">
                      &#8377;{item.product_variant.final_amount}
                    </article>
                  </div>
                  <article
                    className="text-center text-xs cursor-pointer hover:text-red-400 underline"
                    onClick={() => {
                      handleRemoveWishList({
                        wishId: item.id,
                        user_id: item.user_id,
                      });
                    }}
                  >
                    REMOVE
                  </article>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWishlist;
