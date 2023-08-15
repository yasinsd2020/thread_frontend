import React, { useEffect } from 'react'
import Input from '../commonComponents/input/input'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getWishListAction, removeWishListAction } from '../../redux/actions/products/wishlist/wishListAction'
import { singleProduct_image_Baseurl } from '../../public/globalExtention'


const MyWishlist = () => {
    const router =useRouter()
    const {loading,WishProduct,refetch }=useSelector(state=>state.wishlist)
    const add=useSelector(state=>state)
    const dispatch =useDispatch()

    console.log(add,'WishProduct');
    // get all wish product
    useEffect(()=>{
        if(router.query.tab ==="mywishlist"){

            dispatch(getWishListAction(9))
        }
    },[router])

    const handleRemoveWishList =(wishlist_id)=>{
        console.log('wishlist_id',wishlist_id);
        dispatch(removeWishListAction({wishlist_id}))
       
        
    }

    // const products = [
    //     {
    //         prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/87/094/L_g0114309487.jpg",
    //         prdName : "Wewewow - Mock Two-Piece Elbow-Sleeve T-Shirt",
    //         prdPrice : "₹ 2,590.00"
    //     },
    //     {
    //         prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/41/778/L_p0106677841.jpg",
    //         prdName : "DuckleBeam - Reversible Plaid Zip Jacket",
    //         prdPrice : "₹ 2,990.00"
    //     },
    //     {
    //         prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/75/365/XXL_p0146436575.jpg",
    //         prdName : "Posive - Hooded Cargo Jacket",
    //         prdPrice : "₹ 2,990.00"
    //     },
    //     {
    //         prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/80/222/XXL_p0145222280.jpg",
    //         prdName : "Posive - Color Block Hooded Bomber Jacket",
    //         prdPrice : "₹ 12,990.00"
    //     }
    // ]
   
    


  return (
    <div className="w-full md:min-h-[86vh] h-auto border shadow-sm md:p-8 p-2">
      {/* Heading */}
      <div className="mb-10">
        <article className="text-4xl font-normal">
        Wishlist
        </article>
      </div>
      {/* products */}
      <div className='w-full h-auto grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                WishProduct.map((item,idx) => {
                    return (
                        <div key={idx} className='relative w-full h-[500px] bg-white shadow-md flex flex-col' 
                        onClick={()=> router.push({
                            pathname:`/product/info`,
                            query : {
                              variant_id : item?.product_variant?.id
                            }
                          })}
                        >
                            {/* image */}
                            <div className='relative w-full h-full flex-[85]'>
                                <Image src={` ${singleProduct_image_Baseurl}${item.product_variant.image_1}`} layout='fill' className='relative object-cover '/>
                            </div>
                            {/* item details */}
                            <div className='relative w-full h-full flex-[15] p-2 flex-col justify-center items-center'>
                            <article className='text-center text-sm text-gray-500 mb-1'>{item.product.brand.length > 25 ? `${item.product.brand.slice(0,25)}...` : item.product.brand}</article>
                                <article className='text-center text-lg mb-2'>{item.product.name.length > 25 ? `${item.product.name.slice(0,25)}...` : item.product.name}</article>
                            <div className='flex items-center justify-around'> 
                                <div className='flex justify-center gap-4 items-center '>
                                 <article className='text-center text-md line-through text-gray-500 mb-2'>&#8377;{item.product_variant.original_amount}</article>
                                <article className='text-center text-lg font-bold text-black mb-2'>&#8377;{item.product_variant.final_amount}</article>
                                </div>
                                <article className='text-center text-xs cursor-pointer hover:text-red-400 underline'
                                onClick={()=>{
                                    handleRemoveWishList({wishId:item.id,userId:item.user_id})
                                }}
                                >REMOVE</article>
                                </div>   
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MyWishlist