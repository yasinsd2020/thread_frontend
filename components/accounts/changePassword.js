import React, { useState } from 'react'
import Input from '../commonComponents/input/input'

const ChangePassword = () => {
  const passwords = {
    newpassword: "abhishek123",
    confirmpassword: "abhishek123"
  }

  const [showNPassword, setShowNPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  const handleForm = (e) => {
    e.preventDefault()
    // const {dob} = e.target
    // console.log(dob.value);
  }
  return (
    <div className="w-full md:min-h-[86vh] h-auto border shadow-sm md:p-8 p-2">
      {/* Heading */}
      <div className="mb-10">
        <article className="text-4xl font-normal">
          Change Password
        </article>
        <article className="text-sm font-diot text-gray-500">
          You can update your password here.
        </article>
      </div>
      {/* Form */}
      <div className="relative w-full ">
        <form onSubmit={(e) => handleForm(e)}>
          {/* divided input */}
          <div className="flex  flex-col justify-start items-start gap-6 mb-6">
            <div className='relative'>
              <Input
                label={"New Password"}
                name={"nPassword"}
                type={showNPassword ? "text" : "password"}
                value={passwords.newpassword}
              />
              <article onClick={() => setShowNPassword(!showNPassword)} className='absolute bottom-2 right-0 text-xs cursor-pointer'>{showNPassword ? "HIDE" : "SHOW"}</article>
            </div>
            <div className='relative'>
              <Input
                label={"Confirm Password"}
                name={"cPassword"}
                type={showCPassword ? "text" : "password"}
                value={passwords.confirmpassword}
              />
              <article onClick={() => setShowCPassword(!showCPassword)} className='absolute bottom-2 right-0 text-xs cursor-pointer'>{showCPassword ? "HIDE" : "SHOW"}</article>
            </div>
          </div>
          <input type="submit" value={"Update"} className="md:w-[200px] w-full h-[40px] px-4  bg-black text-white flex justify-center items-center cursor-pointer" />
        </form>
      </div>
    </div>
  )
}

export default ChangePassword