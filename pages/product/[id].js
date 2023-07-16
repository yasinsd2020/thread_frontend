import Image from "next/image";
import Path from "../../components/commonComponents/path/path";
import { useState } from "react";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import {CiSquarePlus,CiSquareMinus} from "react-icons/ci"
import CommonButton from "../../components/commonComponents/button/commonButton";
import BestSaler from "../../components/bestSaler/bestSaler";
import PlusMinusButton from "../../components/commonComponents/plusMinusButton/plusMinusButton";

const Product = () => {
  const productDetails = {
    name: "Andrei - Long-Sleeve Two Tone Oversized Shirt",
    price: "3,290.00",
    description: "Relaxed fit bowling shirt made of a linen and viscose blend. Featuring short sleeves and a button-up front.",
    inStock: true,
    images: [
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/34/823/L_g0181382334.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/35/823/L_g0181382335.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/36/823/L_g0181382336.jpg",

      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/37/823/L_g0181382337.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/38/823/L_g0181382338.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/39/823/L_g0181382339.jpg",

      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/40/823/L_g0181382340.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/41/823/L_g0181382341.jpg",
      "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/42/823/L_g0181382342.jpg",
    ],
    reviews: 2,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL","XXL","XXLL"],
    // You can add more properties as needed
  };

  const tReview = [true, true, true, true, true]
  const [mainImage, setMainImage] = useState(productDetails.images[0]);
  const [addToWislist,setAddToWislist] = useState(false)
  const [selectedSize,setSelectedSize] = useState(productDetails.sizes[0])
  const [wantQuality,setWantQuality] = useState(1)
  const [showDescription,setShowDescription] = useState(false)
  
  return (
    <>
      <Path />
      <div className="px-4 pb-10 w-full">
        {/* product top section */}
        <div className="w-full md:h-[700px] h-auto  flex md:flex-row flex-col justify-start items-start gap-10">
          {/* product details left side */}
          <div className="md:w-[45%] w-full md:h-full h-[400px] flex flex-row md:justify-start justify-start md:items-start items-start gap-2">
            {/* side image */}
            <div className="w-[15%] h-full overflow-auto hideScroll">
              {productDetails.images.map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className="relative w-full h-[150px] mb-2 cursor-pointer bg-red-50"
                    onClick={() => setMainImage(image)}
                    onMouseEnter={() => setMainImage(image)}
                  >
                    <Image
                      src={image}
                      layout="fill"
                      className="relative object-cover"
                    />
                  </div>
                );
              })}
            </div>
            {/* main image */}
            <div className=" relative w-[85%] w-full md:h-full h-[400px] border">
              <Image
                src={mainImage}
                layout="fill"
                className="relative object-cover"
              />
              
            </div>
          </div>
          {/* product details right side */}
          <div className="md:w-[55%] w-full h-full overflow-y-auto">
            {/*  */}
            <article className="md:text-3xl text-2l font-thin mb-4">{productDetails.name}</article>
            {/*  */}
            <div className="flex justify-start items-center gap-1 "><article className="md:text-lg font-thin">Reviews : </article> 
                <div className="flex justify-start items-center gap-1">
                    {
                        tReview.map((_,idx) => {
                            return (
                                <>
                                    {idx < productDetails.reviews ? <AiFillStar className="text-red-500" /> : <AiOutlineStar />}
                                </>
                            )
                        })
                    }
                </div>
            </div>
            {/*  */}
            <article className="underline cursor-pointer font-thin my-4 uppercase" onClick={() => setAddToWislist(!addToWislist)}>{!addToWislist ? "Add To Wishlist" : "Remove From Wishlist"}</article>
            {/*  */}
            <div className="flex justify-start items-center font-thin gap-1 mb-2"><span>Price : </span> {productDetails.price} Rs.</div>
            {/*  */}
            <div className="flex flex-col justify-center items-start font-thin mb-5"><span>Size ({selectedSize}) : 
                <div className="flex justify-start items-center gap-2 mt-2">
                {
                    productDetails.sizes.map((size,idx) => {
                        return (
                            <div key={idx} onClick={() => setSelectedSize(size)} className={`w-[50px] h-[30px] border border-black flex justify-center items-center cursor-pointer ${size === selectedSize ? "bg-black text-white" : "bg-transparent text-black"}`}>
                                <article className="font-thin">{size}</article>
                            </div>
                        )
                    })
                }
                </div>
            </span>
            </div>
            {/*  */}
            <div className="flex flex-col justify-start items-start font-thin mb-10">
                <span>Quantity : </span>
                <PlusMinusButton wantQuality={wantQuality} setWantQuality={setWantQuality}  />
            </div>
            {/*  */}
            <div className="w-full gap-2 font-thin mb-20">
                <div><span>Description : </span></div>
                <span>
                    {
                        !showDescription ?
                        `${productDetails.description.slice(0,100)}...` : productDetails.description
                    }
                </span>
                {productDetails.description.length > 100 && <div><span className="cursor-pointer text-sm underline" onClick={() => setShowDescription(!showDescription)}>{showDescription ? "SHOW LESS" : "SHOW MORE"}</span></div>}
            </div>
            {/*  */}
            <div className="flex justify-start items-center gap-1">
                <CommonButton text={'Add To Cart'} />
                <CommonButton text={'Buy Now'} />
            </div>
          </div>
        </div>
      </div>
      <BestSaler />
    </>
  );
};

export default Product;
