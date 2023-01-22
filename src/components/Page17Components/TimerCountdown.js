import React from "react";

const TimerCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className="max-w-[952px] w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-0 items-end uppercase text-white m-auto  text-18 sm:text-20 lg:text-24 xl:text-24">
        <div className="bg-[#2A2848] p-2 rounded-5">
          <p className=" font-bold font-oxanium text-center">{days}</p>
          {/* <p className="text-center text-xs lg:text-xl font-bold">days</p> */}
        </div>
        <div className="font-oxanium text-[#2A2848]  ml-1">:</div>
        <div className="bg-[#2A2848] p-2 rounded-5">
          <p className="font-bold font-oxanium text-center ">{hours}</p>
        </div>
        <div className="font-oxanium text-[#2A2848] ml-1">:</div>
        <div className="bg-[#2A2848] p-2 rounded-5">
          <p className=" font-bold font-oxanium text-center">{minutes}</p>
        </div>
        <div className="font-oxanium text-[#2A2848] ml-1">:</div>
        <div className="bg-[#2A2848] p-2 rounded-5">
          <p className="font-bold font-oxanium text-center">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;
