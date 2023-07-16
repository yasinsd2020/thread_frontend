import React, { useEffect } from 'react'
import NormalCard from '../commonComponents/cards/normalCard'
import { getListOfProductAction } from '../../redux/actions/products/productAction'
import { useDispatch,useSelector } from 'react-redux'
function NewArivel() {  
    const dispatch = useDispatch()

    useEffect(() => {
    
        window.addEventListener('load',()=>{
          dispatch(getListOfProductAction())  })
      },[])
    
    
    const allProuct = useSelector((state)=>state.products)
    console.log(allProuct ,'allProuct');

    return (
        <>
            <div className='text-center my-4 md:text-2xl text-xl uppercase font-normal font-diot'>New Arivel&#x2019;s</div>
            <div className='m-4 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                <NormalCard data={allProuct?.products} />
            </div>
           
        </>
    )
}

export default NewArivel