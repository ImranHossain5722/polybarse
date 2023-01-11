import React from "react";

export default function Timercount({ days, hours, minutes, seconds }) {
  return (
    <div className="max-w-[952px] w-full grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr_0.3fr_1fr] gap-0 items-end uppercase text-[#A2D132] m-auto mt-16 md:mt-20 text-4xl sm:text-6xl lg:text-7xl xl:text-9xl">
      <div>
        <p className="text-xs lg:text-xl font-bold">days</p>
        <p className="mt-6 font-bold font-oxanium">{days}</p>
      </div>
      <div className="font-oxanium -translate-y-1 xl:-translate-y-2">:</div>
      <div>
        <p className="text-xs lg:text-xl font-bold">hours</p>
        <p className="mt-6 font-bold font-oxanium">{hours}</p>
      </div>
      <div className="font-oxanium -translate-y-1 xl:-translate-y-2">:</div>
      <div>
        <p className="text-xs lg:text-xl font-bold">minutes</p>
        <p className="mt-6 font-bold font-oxanium">{minutes}</p>
      </div>
      <div className="font-oxanium -translate-y-1 xl:-translate-y-2">:</div>
      <div>
        <p className="text-xs lg:text-xl font-bold">seconds</p>
        <p className="mt-6 font-bold font-oxanium">{seconds}</p>
      </div>
    </div>
  );
}
