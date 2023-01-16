import React from "react";
import Container from "../container";
import TimerReword from "./TimerReword";

const RewardBanner = () => {
  return (
    <div>
      <Container className="max-w-[1200px]">
        <div className="">
          <div className="flex ">
            <div className="img-box">
              <img
                className="w-[506px] h-[309px]"
                src="/images/Reward Pass.png"
              />
              <p className="capitalize text-white text-45 font-bold">
                Reward Pass
              </p>
            </div>
            <div className="timerBox flex items-end">
              <TimerReword></TimerReword>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RewardBanner;
