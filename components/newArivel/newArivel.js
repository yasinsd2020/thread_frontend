import React from 'react'
import NormalCard from '../commonComponents/cards/normalCard'
function newArivel() {
    return (
        <>
            <div className='text-center m-8 text-2xl uppercase font-normal'>New Arivel's</div>
            <div className='m-4 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                <NormalCard />
            </div>
           
        </>
    )
}

export default newArivel