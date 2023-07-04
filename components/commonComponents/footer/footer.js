import Image from "next/image";
import React from "react";

const footer = () => {
  const qLinks = [
    {
      name: "About",
      herf: "/",
    },
    {
      name: "Terms & Condition",
      herf: "/",
    },
    {
      name: "F&Q",
      herf: "/",
    },
    {
      name: "Contact Us",
      herf: "/",
    },
    {
        name: "Policy",
        herf: "/",
      },
      {
          name: "Others",
          herf: "/",
        }
  ];
  return (
    <>
      <div className="bg-black p-10">
        {/* top section */}
        <div className="flex md:flex-row flex-col justify-center items-start gap-4 mb-10">
          {/* logo, contact, links */}
          <div className="flex md:flex-[0.3] w-full flex-col">
            {/*  */}
            <article className="text-white uppercase md:text-[24px] font-bold cursor-pointer font-diot mb-6 md:text-left text-center">
              thread & treads
            </article>
            {/*  */}
            <div className="flex flex-wrap flex-col md:w-[200px] w-auto gap-2 max-h-[100px] justify-center md:items-start items-center">
              {qLinks.map((link, idx) => {
                return (
                  <a
                    key={idx}
                    href={link.herf}
                    className="text-white text-xs font-light mr-5 cursor-pointer"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
          {/* newsletter */}
          <div className="flex md:flex-[0.5] w-full flex-col py-1">
            <div>
              <div className="text-white uppercase text-lg font-semibold text-center">
                newsletter
              </div>
              <div className="text-white text-sm my-4  font-light text-center">
                Receive our weekly newsletter. For dietary content, fashion
                insider and the best offers.
              </div>
              <div className="flex justify-center ">
                <input
                  placeholder="Email address "
                  className="pl-2 lg:w-[18vw] md:w-[40vw] w-[60vw] h-[4vh] outline-none"
                />
                <button className="text-white text-xs lg:text-sm md:text-sm uppercase ml-4 hover:bg-white hover:text-black    border border-white px-6">
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* others */}
          <div className="flex md:flex-[0.2] w-full flex-col">
            <div className="w-full ">
              <div className="text-white text-[24px] text-center mb-[10px]">
                Socials Account
              </div>
                <div className="w-full flex justify-center items-center gap-4">
                  <div className="relative w-[30px] h-[30px] ">
                    <Image
                      src="/facebook.png"
                      layout="fill"
                      className="relative object-contain "
                    />
                  </div>
                  <div className="relative  w-[30px] h-[30px] ">
                    <Image
                      src="/whatsapp.png"
                      layout="fill"
                      className="relative object-contain "
                    />
                  </div>
                  <div className="relative  w-[30px] h-[30px] ">
                    <Image
                      src="/insta.png"
                      layout="fill"
                      className="relative object-contain "
                    />
                  </div>
                </div>
            </div>
            {/*  */}
            <hr className="bg-gray-400 opacity-[0.7] h-[0.1px] my-4"/>
            {/*  */}
            <article className="text-white text-center uppercase text-sm">Contact Us On : <span> &#x2b;123 456 7890 </span> </article>
          </div>
        </div>
        {/* copyright */}
        <div className="pt-4 w-full border-t-[.2px]  flex justify-center items-center" >
            <article className="text-xs text-gray-100">©️ 2023 THREADS & TREADS | All Rights Reserved.</article>
        </div>
      </div>
    </>
  );
};

export default footer;
