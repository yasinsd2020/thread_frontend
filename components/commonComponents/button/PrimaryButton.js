import React from 'react'

const PrimaryButton = ({text,customClass}) => {
  return (
    <div className={`w-[400px] h-[40px] px-4 py-6 bg-black text-white flex justify-center items-center ${customClass && customClass}`}>{text}</div>
  )
}

export default PrimaryButton