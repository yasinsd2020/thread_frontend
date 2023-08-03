import Image from "next/image";
import Path from "../../components/commonComponents/path/path";
import { useEffect, useState } from "react";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
import {CiSquarePlus,CiSquareMinus} from "react-icons/ci"
import CommonButton from "../../components/commonComponents/button/commonButton";
import BestSaler from "../../components/bestSaler/bestSaler";
import PlusMinusButton from "../../components/commonComponents/plusMinusButton/plusMinusButton";
import { getListOfProductAction, getSingleProductAction } from "../../redux/actions/products/productAction";
import { useDispatch,useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addProductToCartAction } from "../../redux/actions/products/carts/cartsAction";
import { addWishListAction } from "../../redux/actions/products/wishlist/wishListAction";
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"

const Product = () => {
  

  const tReview = [true, true, true, true, true]
  const [addToWislist,setAddToWislist] = useState(false)
  const [wantQuality,setWantQuality] = useState(1)
  const [showDescription,setShowDescription] = useState(false)
  const [showingVarient,setShowingVarient] = useState(1)
  const dispatch = useDispatch()
  const router =useRouter()
  const {loading,singleProduct} = useSelector((state)=>state.products)
  const [mainImage, setMainImage] = useState('');

  // get products when router gets
  useEffect(() => {
    dispatch(getSingleProductAction(Number(router.query.variant_id))) 
    setShowingVarient(Number(router.query.variant_id)||1)

  },[router])


    // main image function
    const mainImageRender =()=>{
      setMainImage( (singleProduct[0]?.variants?.map(item=>item?.image_1))?.toString())
  
    }
  // useEffect when we get some response from api
  useEffect(()=>{
    mainImageRender()
  },[singleProduct])

  // add to cart function
  const handleAddToCart = () => {
    const productInfo = {
        product_id : singleProduct[0]?.id,
        variant_id : singleProduct[0]?.current_variant?.id
    }

    if(!loading){
      dispatch(addProductToCartAction('9',productInfo?.variant_id,productInfo?.product_id))
    }
  }

  // add to wishList function
  const handleAddWishList =()=>{
    const productInfo = {
      product_id : singleProduct[0]?.id,
      variant_id : singleProduct[0]?.current_variant?.id
  }

  if(!loading){

    dispatch(addWishListAction('9',productInfo?.variant_id,productInfo?.product_id))
  }

  
    setAddToWislist(!addToWislist)

  }
//   const handleRemoveWishList =(wishlist_id)=>{
//     dispatch(removeWishListAction(wishlist_id))
   
    
// }

  const productDetails = {
    name: "Andrei - Long-Sleeve Two Tone Oversized Shirt",
    price: "3,290.00",
    description: "Relaxed fit bowling shirt made of a linen and viscose blend. Featuring short sleeves and a button-up front.",
    inStock: true,
    images: [
      (singleProduct[0]?.variants?.map(item=>item?.image_1))?.toString(),
      (singleProduct[0]?.variants?.map(item=>item?.image_2))?.toString(),
      (singleProduct[0]?.variants?.map(item=>item?.image_3))?.toString(),
      (singleProduct[0]?.variants?.map(item=>item?.image_4))?.toString(),
    ],
    reviews: 2,
    colors: ["Red", "Blue", "Green"],
    sizes: ["S", "M", "L", "XL","XXL","XXLL"],
    // You can add more properties as needed
  };
  const [selectedSize,setSelectedSize] = useState(productDetails.sizes[0])


// console.log('singleSelector',(singleProduct[0]?.variants?.map(item=>item?.image_1))?.toString());
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
                console.log(image,'image');
                return (
                  <div
                    key={idx}
                    className="relative w-full h-[150px] mb-2 cursor-pointer bg-red-50"
                    onClick={() => setMainImage(image)}
                    onMouseEnter={() => setMainImage(image)}
                  >
                    <Image
                      src={`https://www.threadtreads.com/uploads/product/variants/${image}`}
                      layout="fill"
                      className="relative object-cover"
                    />
                  </div>
                );
              })}
            </div>
            {/* main image */}
            <div className=" relative md:w-[85%] w-full md:h-full h-[400px] border">
              <Image
                src={` https://www.threadtreads.com/uploads/product/variants/${mainImage}`}
                layout="fill"
                className="relative object-cover"
              />
              
            </div>
          </div>
          {/* product details right side */}
          <div className="md:w-[55%] w-full h-full overflow-y-auto">
            {/*  */}
            {singleProduct[0]?.brand && <article className="md:text-sm text-xs font-normal mb-2 text-gray-500">{singleProduct[0]?.brand}</article>}
            {/*  */}
            <article className="md:text-3xl text-2l font-thin mb-4 uppercase">{singleProduct[0]?.name}</article>
            {/*  */}
            {/* <div className="flex justify-start items-center gap-1 "><article className="md:text-lg font-thin">Reviews : </article> 
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
            </div> */}
            {/*  */}
            <article className="underline cursor-pointer font-thin my-4 uppercase" onClick={() => handleAddWishList()}>{!addToWislist ? <AiOutlineHeart /> : <AiFillHeart className='text-red-500'/>
}</article>
            {/*  */}
            <div className="flex flex-col justify-start items-start font-thin gap-1 mb-2"><span className="text-[25px] font-semibold">{singleProduct[0]?.variants[showingVarient]?.final_amount} Rs.</span> <div className="text-xs"><del className="text-red-500">{singleProduct[0]?.variants[showingVarient]?.original_amount} Rs.</del> (20% OFF)</div></div>
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
                <div className="cursor-pointer" onClick={() => handleAddToCart()}><CommonButton text={'Add To Cart'} /></div>
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
