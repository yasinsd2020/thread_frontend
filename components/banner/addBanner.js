import React from 'react'
import Image from 'next/image'

const addBanner = ({imgName}) => {
  return (
    <div className=' px-4 md:mb-4 '>
    <div className='h-[12vh] overflow-hidden md:h-[30vh] w-full relative  '><Image src={imgName} layout='fill'
        className='relative object-contain ' />
    </div>
    </div>  )
}

export default addBanner