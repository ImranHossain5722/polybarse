import React from "react";
import TimerReword from "./TimerReword";

const AuctionEnding = () => {
  return (
    <div className="mt-8">
      <div className="flex items-start justify-center md:justify-start">
        <div className="md:w-10 md:h-10 flex items-center ml-2 sm:mr-3">
          <img className=" w-9 h-9 " src="/images/axe.png" alt="coin" />
        </div>
        <div className="font-extraBold text-20 md:text-24  text-white md:mx-0">
          <p className="uppercase mb-3 md:mb-0">Auction ending in:</p>
          <TimerReword />
        </div>
      </div>
    </div>
  );
};

export default AuctionEnding;
