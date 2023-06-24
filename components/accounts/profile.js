import React from "react";
import Input from "../commonComponents/input/input";

const Profile = () => {
  const profileInfo = {
    firstName: "Abhishek",
    lastName: "Yadav",
    email: "abhishek@gmail.com",
    phone: 8779027130,
    dob:"2014-02-09"
  };

  const handleForm = (e) => {
    e.preventDefault()
    const {dob} = e.target
    console.log(dob.value);
  }

  return (
    <div className="w-full md:min-h-[86vh] h-auto border shadow-sm md:p-8 p-2">
      {/* Heading */}
      <div className="mb-10">
        <article className="text-4xl font-diot font-semibold">
          Hello, Abhishek{" "}
        </article>
        <article className="text-sm font-diot text-gray-500">
          Welcome to your profile page.
        </article>
      </div>
      {/* Form */}
      <div className="relative w-full ">
        <form onSubmit={(e) => handleForm(e)}>
          {/* divided input */}
          <div className="flex  md:flex-row flex-col justify-start items-start gap-6 mb-6">
            <Input
              label={"Fisrt Name"}
              name={"fName"}
              type={"text"}
              value={profileInfo.firstName}
            />
            <Input
              label={"Last Name"}
              name={"lName"}
              type={"text"}
              value={profileInfo.lastName}
            />
          </div>
          {/* divided input */}
          <div className="flex md:flex-row flex-col justify-start items-start gap-6 mb-6">
            <Input
              label={"Email"}
              name={"email"}
              type={"email"}
              value={profileInfo.email}
            />
            <Input
              label={"Contact Number"}
              name={"phoneNo"}
              type={"number"}
              value={profileInfo.phone}
            />
          </div>
          {/* divided input */}
          <div className="flex md:flex-row flex-col justify-start items-start gap-6 mb-6">
            <Input
              label={"Birth Date"}
              name={"dob"}
              type={"date"}
              value={profileInfo.dob}
            />
          </div>

          <input type="submit" value={"Update"} className="md:w-[200px] w-full h-[40px] px-4  bg-black text-white flex justify-center items-center cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
