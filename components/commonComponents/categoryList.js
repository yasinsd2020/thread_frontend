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
    name:" JUMPER-SUITES   "
}

]
const categoryList = () => {
    return (
        <>
            <div className='flex justify-center' >
                {
                    categoryData?.map((item,index)=>{
                        return(
                           <div className='uppercase mx-5 font-normal cursor-pointer'>{item.name}</div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default categoryList