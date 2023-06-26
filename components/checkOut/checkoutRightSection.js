import React from 'react'
import Image from 'next/image'
import CommonButton from '../commonComponents/button/commonButton'
const checkOutRightSection = () => {
    return (
        <div className='w-full h-auto bg-gray-100 border flex  flex-col gap-6 px-4 py-6 mt-10 '>
            <div className='flex w-full flex-col items-center bg-red-22 justify-center'>
                <div className='text-xl font-semibold mb-4'>YOUR ORDER </div>

                <div className='bg-white shadow-sm p-2 rounded flex flex-col w-full '>
                    <div className='flex p-3 justify-between  border-b '>
                        <div className='text-md font-[500]'>
                            PRODUCT
                        </div>
                        <div className='text-md font-[500]'>
                            SUBTOTAL
                        </div>
                    </div>
                    {/* <div className='flex p-3 justify-between  border-b'>
                <div className='text-sm text-gray-600 break-all w-[80%]'>100% SHIMRA COTTON SHIRT L× 1</div>
                <div>₹549.00</div>
            </div> */}
                    <div className='flex p-3 justify-between  border-b'>
                        <div className='text-sm'>Subtotal</div>
                        <div>₹549.00</div>
                    </div>
                    <div className='flex p-3 justify-between  border-b'>
                        <div className='text-sm'>Shipping</div>
                        <div><span className='text-gray-500 '>Flat rate:</span> ₹50.00</div>
                    </div>
                    <div className='flex p-3 justify-between  '>
                        <div className='text-lg font-[600] uppercase'>Total</div>
                        <div className='text-2xl font-[600]'>₹599.00</div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='  flex flex-col gap-2 mt-2'>
                <div className='flex items-center gap-2'>
                    <input type={'radio'} />
                    <div className='text-sm'>Cash on delivery</div>
                </div>
                <div className='flex lg:flex-row flex-col  lg:items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <input type={'radio'} />
                        <div className='text-sm'> Credit Card/Debit Card/NetBanking</div>
                    </div>
                    <div className='flex w-auto  lg:mt-0 mt-3'>
                    <Image src='./payment.svg' width={200} height={300} />
                    </div>
                </div>
            </div>
            <hr></hr>
                {/* Button */}
                <div className=" w-full cursor-pointer">
                    <CommonButton text={"Procced To Order"} customClass={`!uppercase w-full text-red-500 text-sm`} />
                </div> 
                
        </div>
    )
}

export default checkOutRightSection