import React from "react";

const TimerCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className=" w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-1 uppercase text-white m-auto text-18 sm:text-[12px] lg:text-[12px] xl:text-[12px]">
        <div className="">
          <p className="text-center text-white text-[12px]">{days}</p>
        </div>
        <div className=" text-white text-[12px]">:</div>
        <div className="">
          <p className="text-center text-[12px]">{hours}</p>
        </div>
        <div className=" text-white text-[12px] ">:</div>
        <div className="">
          <p className=" text-center text-[12px] ">{minutes}</p>
        </div>
        <div className=" text-white text-[12px]">:</div>
        <div className="">
          <p className="text-center text-[12px] ">{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;
