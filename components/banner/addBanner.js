import React from 'react'
import Image from 'next/image'

const addBanner = ({imgName}) => {
  return (
    <div className=' md:px-4 md:my-6 my-2'>
    <div className='h-[8vh] md:h-[30vh] w-full relative  '>
      <Image src={imgName} layout='fill'
        className='relative object-cover ' />
    </div>
    </div>  )
}

export default addBanner