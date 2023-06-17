import React from 'react'
const categoryData = [{ name: "Home", }, 
{
    name: "shoping",
},
{
    name: "about",
},
{
    name: "contact  ",
},



]
const headerNav = () => {
    return (
        <>
            <div className='flex justify-center ' >
                {
                    categoryData?.map((item,index)=>{
                        return(
                           <div className={`uppercase mx-5 lg:mx-7 text-sm lg:text-lg font-normal cursor-pointer  ${item.name ==="Home"&& 'border-b border-gray-500' }`}>{item.name}</div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default headerNav