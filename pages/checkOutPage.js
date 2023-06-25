import React from 'react'
import CheckoutRightSection from '../components/checkOut/checkoutRightSection'
import CheckoutLeftSection from '../components/checkOut/checkoutLeftSection'
import Address from '../components/checkOut/address'
const checkOutPage = () => {
    return (
        <>
            <div className='py-10 lg:px-5'>
                <div className='flex md:flex-row flex-col w-full lg:px-4 md:px-4 px-3 h-auto md:gap-10 gap-2'>
                    {/* Left Section */}
                    <div className='md:flex-[5] w-full h-full  '>
                        <CheckoutLeftSection />
                        <Address/>
                    </div>
                    {/* Right Section */}
                    <div>
                        <CheckoutRightSection />
                    </div>
                </div>
            </div>

        </>
    )
}

export default checkOutPage