import React from "react";
import {HiPlus,HiMinus} from "react-icons/hi"

const QuantityController = ({wantQuality,setWantQuality,customClass}) => {
  return (
    <>
      <div className={`flex h-[25px] min-w-[100px] justify-start items-start border-y border-black mt-1 !${customClass && customClass}`}>
        <div
          className="flex-[0.2] w-full h-full border-x border-black"
          onClick={() => setWantQuality(wantQuality + 1)}
        >
          <HiPlus className="w-full h-full" />
        </div>
        <div className="flex-[0.6] w-auto h-full px-2 flex justify-center items-center">
          {wantQuality}
        </div>
        <div
          className="flex-[0.2] w-full h-full border-x border-black"
          onClick={() => setWantQuality(wantQuality - 1)}
        >
          <HiMinus className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default QuantityController;
