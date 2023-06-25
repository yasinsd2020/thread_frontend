import React from 'react'
import Input from '../commonComponents/input/input'
import Image from 'next/image'

const MyWishlist = () => {
    const products = [
        {
            prdImage : "https://static.zara.net/photos///2023/I/0/2/p/8574/353/402/2/w/1126/8574353402_1_1_1.jpg?ts=1684826344013",
            prdName : "LEMON PRINT SWIMMING TRUNKS - LIMITED EDITION",
            prdPrice : "₹ 2,590.00"
        },
        {
            prdImage : "https://static.zara.net/photos///2023/V/0/2/p/4260/012/401/2/w/1126/4260012401_1_1_1.jpg?ts=1676457811994",
            prdName : "STRIPED TEXTURED SHIRT",
            prdPrice : "₹ 2,990.00"
        },
        {
            prdImage : "https://static.zara.net/photos///2023/V/0/2/p/4259/012/066/2/w/1126/4259012066_1_1_1.jpg?ts=1676457783093",
            prdName : "STRIPED TEXTURED SHIRT",
            prdPrice : "₹ 2,990.00"
        },
        {
            prdImage : "https://static.zara.net/photos///2023/V/1/1/p/3915/010/107/2/w/1126/3915010107_1_1_1.jpg?ts=1674747362750",
            prdName : "CLARKS® X ZARA LEATHER SHOES",
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