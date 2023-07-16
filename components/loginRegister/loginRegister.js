import React from 'react'
import { TfiClose } from 'react-icons/tfi';
import Input from '../commonComponents/input/input'
import CommonButton from '../commonComponents/button/commonButton'
const loginRegister = ({ setLoginPopup, loginPopup }) => {
    console.log("loginPopup", loginPopup);
    return (
        <>
            <div
                className={`fixed ${loginPopup?.login ? "right-0" : "-right-[100%]"
                    } w-[100%] h-screen ease-linear duration-150`}
                style={{ zIndex: 1000, background: "rgba(0,0,0,0.5)" }}
            >
                <div className="relative  md:-right-[33vw] md:top-[10vh] bg-white md:w-[35%] w-[100%] 
                md:h-[75%] h-full flex flex-col justify-start items-center px-5 py-8 ">
                    <div className="w-full flex justify-between items-center mb-[8vh] md:mb-[2vh]">
                        <article className="font-bold font-diot text-xl">             
                        </article>
                        <div
                            className="cursor-pointer hover:rotate-180 ease-linear duration-200"
                            onClick={() => setLoginPopup((prev) => { return { ...prev, login: false } })}
                        >
                            <TfiClose />
                        </div>
                    </div>

                    <div className='flex justify-center gap-3 items-center w-full'>
                        <div className={`font-normal cursor-pointer text-lg ${loginPopup?.register ? 'text-gray-400	' : 'text-black'}`} onClick={() => {
                            setLoginPopup((prev) => { return { ...prev, register: false } })
                        }}
                        >Login</div>
                        <div className='text-lg font-semibold'>/</div>
                        <div className={`font-normal cursor-pointer text-lg ${loginPopup?.register ? 'text-black  ' : 'text-gray-400 	'}`} onClick={() => {
                            setLoginPopup((prev) => { return { ...prev, register: true } })
                        }}>SignUp</div>

                    </div>
                    <div className="w-full flex flex-col mt-4 gap-8">
                        <div>
                            {loginPopup?.register ?
                                <div  className='flex flex-col gap-3'>
                                    <Input customCss={'md:w-full border-black w-full'} placeholder="Name" type="text" />
                                    <Input customCss={'md:w-full border-black w-full'} placeholder="Email" />
                                    <Input customCss={'md:w-full border-black w-full'} placeholder="Mobile" />
                                    <Input customCss={'md:w-full border-black w-full'} type={'password'} placeholder="Password" />
                                    <Input customCss={'md:w-full border-black w-full'} type={'password'} placeholder="Confirm-Password" />
                                </div>
                                :
                                <div  className='flex flex-col gap-3'>
                                    <Input customCss={'md:w-full border-black w-full'} placeholder="Username" />
                                    <Input customCss={'md:w-full border-black w-full'} type={'password'} placeholder="Password" />
                                </div>
                            }




                        </div>
                        <div><CommonButton text="SUBMIT" customClass={'md:w-full w-full cursor-pointer'} /></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default loginRegister