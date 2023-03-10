import React from "react";

const TimerCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className=" w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-0 uppercase text-white m-auto  text-18 sm:text-20 lg:text-24 xl:text-24 -ml-[52px]">
        <div className="bg-[#2A2848] p-4 md:p-8 rounded-5">
          <p className=" font-bold font-oxanium text-center">{days}</p>
          {/* <p className="text-center text-xs lg:text-xl font-bold">days</p> */}
        </div>
        <div className="font-oxanium text-[#2A2848]  mx-1 md:mt-6 text-[40px] rounded-full">
          :
        </div>
        <div className="bg-[#2A2848] p-4 md:p-8 rounded-5">
          <p className="font-bold font-oxanium text-center ">{hours}</p>
        </div>
        <div className="font-oxanium text-[#2A2848] mx-1 md:mt-6 text-[40px] rounded-full">
          :
        </div>
        <div className="bg-[#2A2848] p-4 md:p-8 rounded-5">
          <p className=" font-bold font-oxanium text-center">{minutes}</p>
        </div>
        <div className="font-oxanium text-[#2A2848] mx-1 md:mt-6 text-[40px] rounded-full">
          :
        </div>
        <div className="bg-[#2A2848] p-4 md:p-8 rounded-5">
          <p className="font-bold font-oxanium text-center">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;
