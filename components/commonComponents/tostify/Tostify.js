import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOSTIFY_ERROR, TOSTIFY_INFO, TOSTIFY_SUCCESS, TOSTIFY_WARNING } from '../../../redux/const/global/global'
import {TfiClose} from 'react-icons/tfi'
import { closeTostifyAction } from '../../../redux/actions/global/globalActions'

const Tostify = () => {
    const dispatch = useDispatch()
    const [showTostify, setShowTosify] = useState(false)
    const [messageInfo,setMessageInfo] = useState({})
    const tostification = useSelector((state) => state?.tostification)
    const [sticky,setSticky] = useState(false)

    const handleClosePop = () => {
        return dispatch(closeTostifyAction())
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setSticky(true)
            } else {
                setSticky(false)
            }
          })
    },[])

    useEffect(() => {
        if(tostification?.message){
            setShowTosify(true)
            setMessageInfo({
                message : tostification?.message,
                type : tostification?.type
            })

            //  uncomment to set timeout functionality
            const timeout = setTimeout(() => {
                handleClosePop()
              }, 3000);
        
              return () => clearTimeout(timeout);
        }else{
            setShowTosify(false)
        }
    },[tostification])


    const POPUP_CONTENT = () => {
        return <div className='w-full relative'>
            <article className='font-thin'>{messageInfo?.message}</article>
            <div className='absolute top-[50%] right-[10px] -translate-y-[50%] cursor-pointer' onClick={() => handleClosePop()}><TfiClose/></div>
        </div>
    }

    const POPUP = () => {
        switch(messageInfo?.type){
            case TOSTIFY_SUCCESS:
                return <div className='w-full p-4 bg-[#DFF2BF] text-[#270] '>
                    <POPUP_CONTENT />
                </div>
            case TOSTIFY_ERROR:
                return <div className='w-full p-4 bg-[#FFBABA] text-[#D8000C] '>
                    <POPUP_CONTENT />
                </div>
            case TOSTIFY_WARNING:
                return <div className='w-full p-4 bg-[#FEEFB3] text-[#9F6000] '>
                    <POPUP_CONTENT />
                </div>
            case TOSTIFY_INFO:
                return <div className='w-full p-4 bg-[#BEF] text-[#059] '>
                    <POPUP_CONTENT />
                </div>
        }
    }


  return (
    <div className={`${showTostify ?'visible':'hidden'} ${sticky ? 'fixed top-[50px]' : 'relative'} w-full z-50 px-[10px] mt-5`}>
        <POPUP />
    </div>
  )
}

export default Tostify