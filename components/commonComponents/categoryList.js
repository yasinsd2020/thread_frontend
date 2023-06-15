import React from 'react'
const categoryData = [{ name: "Home", }, { name: "Shirt", },
{
    name: "T-shirt",
},
{
    name: "Pant",
},
{
    name: "Jacket",
},

{
    name: "Hoodies",
},
{
    name:"Jumper-Hoodies"
}

]
const categoryList = () => {
    return (
        <>
            <div className='flex justify-center gap-5' >
                {
                    categoryData?.map((item,index)=>{
                        return(
                           <div key={index} className='capitalize font-light cursor-pointer text-white opacity-[0.8]'>{item.name}</div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default categoryList