import React, { useEffect } from "react";
import NormalCard from "../commonComponents/cards/normalCard";
import { getList_NewArivelAction } from "../../redux/actions/products/productAction";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/router";
function NewArivel() {
  const dispatch = useDispatch();
  const router =useRouter()
  useEffect(() => {
    dispatch(getList_NewArivelAction());
  },[])

  const allProuct = useSelector((state) => state.products);
console.log("allProuct",allProuct);
  return (
    <>
      <div className="text-center my-4 md:text-2xl text-xl uppercase font-normal font-diot">
        New Arivel&#x2019;s
      </div>
      {!allProuct.loading ? (
        <div className="mx-4 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          <NormalCard data={allProuct?.products} />
        </div>
      ) : (
        <>
          <div className="m-4 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            <Skeleton variant="rectangular"  width={'100%'} height={'40vh'} />
            <Skeleton variant="rectangular"  width={'100%'} height={'40vh'} />
            <Skeleton variant="rectangular"  width={'100%'} height={'40vh'} />
            <Skeleton variant="rectangular"  width={'100%'} height={'40vh'} />
          </div>
        </>
      )}
      <div className="w-[100%] flex justify-center cursor-pointer ">
        <div onClick={()=>{router.push({
          pathname:'/searchPage'
        })}} className=" border-[2px] text-lg text-black uppercase hover:bg-black hover:text-white font-normal font-diot p-2">View All</div>
      </div>
    </>
  );
}

export default NewArivel;
