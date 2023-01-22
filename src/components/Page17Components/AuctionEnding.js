import React from "react";
import TimerReword from "./TimerReword";

const AuctionEnding = () => {
  return (
    <div className="mt-8">
      <div className="flex items-start ">
        <div className="w-10 h-10 flex items-center ml-2 sm:mr-3">
          <img
            className="rounded-full w-8 h-8 "
            src="/images/axe.png"
            alt="coin"
          />
        </div>
        <div className="font-extraBold text-24  text-white">
          <p className="uppercase">Auction ending in:</p>
          <TimerReword />
        </div>
      </div>
    </div>
  );
};

export default AuctionEnding;
