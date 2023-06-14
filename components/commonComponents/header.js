import React from 'react'
import DiscountHeader from './discountHeader'
import { TfiSearch } from 'react-icons/tfi';
import { GiShoppingCart } from "react-icons/gi";
import CategoryList from './categoryList';
const Header = () => {
  return (
    <>
    <DiscountHeader/>
    <div className='mx-4 mt-4'>
      {/* logo and search  */}
    <div className='flex justify-between items-center  '>
      
      <div className='w-[30%]'>
      <div className='text-xl font-bold cursor-pointer'>THREAD & TREADS</div>
      </div>
      <div className='flex  w-[20%] justify-end '>
        <div className=' flex items-center'>
          <div>
          <TfiSearch className='text-xl' />
          </div>
          <div className='cursor-pointer font-normal	'>
            Search
          </div>
        </div>
        <div className='mx-3'>
          <div className='cursor-pointer font-normal	'>
            Accounts
          </div>
        </div>
        <div className='flex  items-center font-semibold	'>
          <div>
          <GiShoppingCart className='text-2xl'  />
          </div>
          <div className='cursor-pointer font-normal	'>
            Carts
          </div>
        </div>
      </div>
    </div>
      {/* category section */}
     <div>
      <CategoryList />
    </div> 
    </div>
    </>
  )
}

export default Header