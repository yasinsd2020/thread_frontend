import React from 'react'

const commonButton = ({text,customClass,onClick}) => {
  return (
    <div className={`w-[400px] h-[40px] px-4 py-6 bg-black text-white flex cursor-pointer justify-center items-center ${customClass && customClass}`}
    >{text}</div>
  )
}

export default commonButton