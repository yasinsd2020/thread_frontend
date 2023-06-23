import React from 'react'
import Path from '../components/commonComponents/path/path'
import LeftSection from '../components/cart/leftSection'
import RightSection from '../components/cart/rightSection'

const Cart = () => {
  return (
    <div className='py-10 px-5'>
      <div className='flex md:flex-row flex-col w-full px-4 h-auto md:gap-10 gap-2'>
        {/* Left Section */}
        <div className='md:flex-[65] w-full h-full'>
          <LeftSection />
        </div>
        {/* Right Section */}
        <div className='md:flex-[35] w-full h-full'>
          <RightSection />
        </div>
      </div>
    </div>
  )
}

export default Cart