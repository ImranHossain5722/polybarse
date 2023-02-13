import React from "react";

const TimerCountdown = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <div className="max-w-[952px] w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-0 items-end uppercase text-white m-auto  text-20 md:text-[55px] lg:text-[55px] xl:text-[55px]">
        <div>
          <p className="mb-6 font-bold font-oxanium ">{days}</p>
          <p className="text-center text-xs lg:text-xl font-normal hidden md:block">
            days
          </p>
        </div>
        <div className="font-oxanium mb-[24px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-black">{hours}</p>
          <p className="text-center text-xs lg:text-xl font-normal hidden md:block">
            hours
          </p>
        </div>
        <div className="font-oxanium mb-[24px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-black">{minutes}</p>
          <p className="text-center text-xs lg:text-xl font-normal hidden md:block">
            min
          </p>
        </div>
        <div className="font-oxanium mb-[24px] md:mb-14">:</div>
        <div>
          <p className="mb-6 font-black">{seconds}</p>
          <p className="text-center text-xs lg:text-xl font-normal hidden md:block">
            sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerCountdown;
