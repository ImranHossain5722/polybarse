import React from "react";

const TimerCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className="max-w-[952px] w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-0 items-end uppercase text-white m-auto  text-4xl sm:text-sm lg:text-7xl xl:text-9xl">
        <div>
          <p className="mb-6 font-bold font-oxanium ">{days}</p>
          <p className="text-center text-xs lg:text-xl font-bold">days</p>
        </div>
        <div className="font-oxanium mb-[40px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-bold font-oxanium">{hours}</p>
          <p className="text-center text-xs lg:text-xl font-bold">hours</p>
        </div>
        <div className="font-oxanium mb-[40px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-bold font-oxanium">{minutes}</p>
          <p className="text-center text-xs lg:text-xl font-bold">min</p>
        </div>
        <div className="font-oxanium mb-[40px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-bold font-oxanium">{seconds}</p>
          <p className="text-center text-xs lg:text-xl font-bold">sec</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;
