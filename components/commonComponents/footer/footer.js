import Image from 'next/image'
import React from 'react'

const footer = () => {
    return (
        <>
            <div className='bg-black pl-[4%] lg:pl-[2%] pr-[2%] lg:pt-[4%] pt-[8%] pb-[8%] lg:pb-[3%]'>
                <div>
                    <div className='flex justify-between  flex-col lg:flex-row  w-full'>
                        <div className='flex flex-col w-[80%]'>
                            <div className='text-white uppercase text-lg lg:text-xl font-bold cursor-pointer'>thread & treads</div>
                            <div className='flex pl-[3%] items-center mt-[2%] gap-1'>
                                <div className='text-white text-xs font-light '>
                                    We&#x2019;re available by phone:
                                </div>
                                <span className='text-white text-lg font-normal' >&#x2b;123 456 789</span>
                            </div>
                        </div>
                        <div className='lg:w-[20%]  '>
                            
                            <div className='text-white lg:text-center pl-2 lg:pl-0 font-semibold'>Socials Account</div>
                            <div className='flex lg:justify-center pt-[.8rem] lg:pt-[1.5rem]'>
                                <div className='flex lg:w-[80%] w-[40%] lg:justify-center'>
                                    <div className='relative w-full h-[4vh] ' >
                                        <Image src="/facebook.png" layout='fill' className='relative object-contain ' />
                                    </div>
                                    <div className='relative w-full h-[4vh] ' >
                                        <Image src="/whatsapp.png" layout='fill' className='relative object-contain ' />
                                    </div>
                                    <div className='relative w-full h-[4vh] ' >
                                        <Image src="/insta.png" layout='fill' className='relative object-contain ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-[2%] pl-[2.5%]  flex-col lg:flex-row  '>
                        <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-2 my-4 lg:w-[40%]'>
                            <div className='text-white  lg:text-sm text-xs font-light'>About</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Terms & Condition</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>F & Q</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Contact Us</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Refund Policy</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Other</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Services</div>
                            <div className='text-white  lg:text-sm text-xs font-light'>Return Policy</div>
                        </div>
                        <div className='pr-[2%]  lg:w-[40%]'>
                            <div>
                                <div className='text-white uppercase text-lg font-semibold'>
                                    newsletter
                                </div>
                                <div className='text-white text-sm my-4  font-light'>
                                    Receive our weekly newsletter. For dietary content, fashion insider and the best offers.
                                </div>
                                <div className='flex  '>
                                    <input placeholder='Email address ' className='pl-2 lg:w-[18vw] md:w-[40vw] w-[60vw] h-[4vh] outline-none' />
                                    <button className='text-white text-xs lg:text-sm md:text-sm uppercase ml-4 hover:bg-white hover:text-black    border border-white px-6'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='text-white lg:text-end text-xs mt-[3rem]'>©️ 2023 THREADS & TREADS | All Rights Reserved |</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer