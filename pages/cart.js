import React, { useEffect } from 'react'
import Path from '../components/commonComponents/path/path'
import LeftSection from '../components/cart/leftSection'
import RightSection from '../components/cart/rightSection'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../redux/actions/products/carts/cartsAction'

const Cart = () => {
  
  const router = useRouter();
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getCartAction(9))
  },[router])
const {cartReducer} =useSelector(state=>state)

  return (
    <div className='py-10 px-5'>
      <div className='flex md:flex-row flex-col w-full px-4 h-auto md:gap-10 gap-2'>
        {/* Left Section */}
        <div className='md:flex-[65] w-full h-full'>
          <LeftSection cartReducer={cartReducer} />
        </div>
        {/* Right Section */}
        <div className='md:flex-[35] w-full h-full'>
          <RightSection disabledValue={cartReducer?.CartList?.length } />
        </div>
      </div>
    </div>
  )
}

export default Cart