import React from 'react'

const address = () => {
    return (
        <>
            <div className='mt-3 border'>
                <div className='bg-gray-100 text-lg p-3 font-[600]'>
                    Your Delivery Address
                </div>
                <div className='p-4 flex flex-col lg:flex-row justify-between'>
                    {/* <div>The following address will be used for deliver your order.</div> */}
                    <div className=' lg:w-[30%]'>
                        <div className='break-all'>
                            <span className='md:text-md lg:text-md text-sm  font-semibold'>Name :</span> <span className='lg:text-lg md:text-md text-md text-gray-600'>Yasin Shaikh</span>
                        </div>
                        <div className='break-all'>
                            <span className='md:text-md lg:text-md text-sm font-semibold'>Contact No:</span> <span className='lg:text-lg md:text-md text-md text-gray-600 '>8097918024</span>

                        </div>
                        <div className='break-all'>
                            <span className='md:text-md lg:text-md text-sm  font-semibold'>Email:</span> <span className='lg:text-lg md:text-md text-md text-gray-600'>yasin@gamil.com</span>
                        </div>
                    </div>
                    <div className=' lg:w-[60%]'>
                        <div className='break-all'>
                            <span className='md:text-md lg:text-md text-sm  font-semibold'>Address:</span>  <span className='lg:text-lg md:text-md text-md text-gray-600'>Yasin Shaikh
                                CBD Belapur Shabaz gaon
                                Anushaya niwas
                                Mumbai 400017
                                Maharashtraindia.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default address