import React, { useEffect, useState } from "react";
import {
  CiUser,
  CiLocationOn,
  CiShoppingBasket,
  CiLock,
  CiHeart,
  CiLogout,
} from "react-icons/ci";
import { useRouter } from "next/router";
import Profile from "../components/accounts/profile";
import ChangePassword from "../components/accounts/changePassword";
import MyWishlist from "../components/accounts/mywishlist";
import Link from "next/link";

const Account = () => {
  const tabs = [
    // section 1
    {
      tabs: [
        {
          name: "Profile",
          icon: CiUser,
          query: "profile",
        },
        {
          name: "Address",
          icon: CiLocationOn,
          query: "address",
        },
        {
          name: "Change Password",
          icon: CiLock,
          query: "changepassword",
        },
      ],
    },
    // section 2
    {
      tabs: [
        {
          name: "My Orders",
          icon: CiShoppingBasket,
          query: "myorders",
        },
        {
          name: "My Whistlist",
          icon: CiHeart,
          query: "mywishlist",
        },
      ],
    },
  ];

  // router
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState("profile");

  useEffect(() => {
    setCurrentTab(router?.query?.tab);
  }, [router]);

  //   set tab
  const SetTab = () => {
    switch (currentTab) {
      case "profile":
        return <Profile />;
      case "address":
        return "address";
      case "changepassword":
        return <ChangePassword />;
      case "myorders":
        return "myorders";
      case "mywishlist":
        return <MyWishlist />;
    default :
    return <Profile />
    }
  };

  const date = new Date()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const currentDate = `${days[date.getDay()]} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

  return (
    <div className="relative md:h-[90vh] h-auto w-full md:flex">
      {/* leftSide */}
      <div className="relative md:flex-[0.2] w-full h-full border-r shadow-sm p-6 ">
        {/* Profile */}
        <div className="w-full p-2 shadow-md border rounded-lg flex justify-start items-center gap-2 mb-10">
          {/* avatar */}
          <div className="rounded-[50px] bg-gray-500 w-[60px] h-[60px] flex justify-center items-center font-bold text-2xl text-white">
            AY
          </div>
          {/* User Info */}
          <div className="flex flex-col justify-center items-start">
            <article className="font-semibold font-lg ">Abhishek Yadav</article>
            <div className="text-black flex justify-start items-center gap-2 font-thin text-xs">
              <a href="" className="hover:underline uppercase">
                {currentDate}
              </a>
            </div>
          </div>
        </div>
        {/* tabs */}
        <div className="flex md:flex-col flex-nowrap">
        {tabs.map((section, sIdx) => {
          return (
            <div
              key={sIdx}
              className={`${sIdx !== tabs.length - 1 && "border-b "} py-2`}
            >
              {section.tabs.map((tab, tIdx) => {
                return (
                  <div key={tIdx} className="p-2">
                    <Link
                      href={`/account?tab=${tab.query}`}
                      className={`flex justify-start items-center gap-2 text-sm font-normal hover:underline hover:text-black ${
                        currentTab === tab.query
                          ? "text-black underline"
                          : "text-gray-500"
                      }`}
                    >
                      <span className="text-2xl">{<tab.icon />}</span>{" "}
                      {tab.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
        </div>
        {/* logout section */}
        <div className="md:absolute relative bottom-2 left-0 w-full p-2 md:px-8 md:py-2 py-4 flex justify-star items-center md:border-b md:border-t cursor-pointer">
          <article
            className={`flex justify-start items-center gap-2 text-lg font-thin `}
          >
            <span className="text-xl">{<CiLogout />}</span> Logout
          </article>
        </div>
      </div>
      {/* rightSide */}
      <div className="md:flex-[0.8] w-full h-full p-4 overflow-y-scroll">
        <SetTab />
      </div>
    </div>
  );
};

export default Account;
