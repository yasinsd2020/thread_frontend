import React from 'react'
import Footer from '../components/commonComponents/footer/footer'
const checkOutPage = () => {
    return (
        <>
            <div className=''>
                <div className='bg-red-400 w-full flex h-screen items-center flex-row justify-center  '>
                    <div className='w-[45%] bg-sky-500/50 h-[80vh]'></div>
                    <div className='w-[45%] bg-red-800 h-[80vh] '>
                        <div className='flex'>
                            <div className=''>
                                YOUR ORDER

                            </div>

                            <div className='bg-white'>
                                <div className='flex'>
                                    <div>
                                        PRODUCT
                                    </div>
                                    <div>
                                        SUBTOTAL
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div>100% SHIMRA COTTON SHIRT - L  × 1</div>
                                    <div>₹549.00</div>
                                </div>
                                <div className='flex'>
                                    <div>Subtotal</div>
                                    <div>₹549.00</div>
                                </div>
                                <div className='flex'>
                                    <div>Shipping</div>
                                    <div>Flat rate: ₹50.00</div>
                                </div>
                                <div className='flex'>
                                    <div>Total</div>
                                    <div>₹599.00</div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default checkOutPage