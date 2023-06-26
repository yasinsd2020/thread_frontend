import React from 'react'
import Input from '../commonComponents/input/input'
import Image from 'next/image'

const MyWishlist = () => {
    const products = [
        {
            prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/87/094/L_g0114309487.jpg",
            prdName : "Wewewow - Mock Two-Piece Elbow-Sleeve T-Shirt",
            prdPrice : "₹ 2,590.00"
        },
        {
            prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/41/778/L_p0106677841.jpg",
            prdName : "DuckleBeam - Reversible Plaid Zip Jacket",
            prdPrice : "₹ 2,990.00"
        },
        {
            prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/75/365/XXL_p0146436575.jpg",
            prdName : "Posive - Hooded Cargo Jacket",
            prdPrice : "₹ 2,990.00"
        },
        {
            prdImage : "https://d1flfk77wl2xk4.cloudfront.net/Assets/80/222/XXL_p0145222280.jpg",
            prdName : "Posive - Color Block Hooded Bomber Jacket",
            prdPrice : "₹ 12,990.00"
        }
    ]
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
                products.map((product,idx) => {
                    return (
                        <div key={idx} className='relative w-full h-[500px] bg-white shadow-md flex flex-col'>
                            {/* image */}
                            <div className='relative w-full h-full flex-[85]'>
                                <Image src={product.prdImage} layout='fill' className='relative object-cover '/>
                            </div>
                            {/* product details */}
                            <div className='relative w-full h-full flex-[15] p-2 flex-col justify-center items-center'>
                                <article className='text-center text-sm mb-2'>{product.prdName.length > 25 ? `${product.prdName.slice(0,25)}...` : product.prdName}</article>
                                <article className='text-center text-xs text-gray-500 mb-2'>{product.prdPrice}</article>
                                <article className='text-center text-xs cursor-pointer  underline'>REMOVE</article>
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