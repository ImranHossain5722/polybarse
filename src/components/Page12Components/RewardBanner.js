import React from "react";
import Container from "../container";
import ProgressBar from "./ProgressBar";
import TimerReword from "./TimerReword";

const RewardBanner = () => {
  return (
    <div>
      <Container className="max-w-[1200px]">
        <div className="">
          <div className="flex justify-between ">
            <div className="img-box">
              <img
                className="w-full h-full md:w-[506px] md:h-[309px]"
                src="/images/Reward Pass.png"
                alt="banner"
              />
              <p className="capitalize text-white text-[20px] md:text-45 font-bold">
                Reward Pass
              </p>
            </div>
            <div className="timerBox flex items-end">
              <TimerReword></TimerReword>
            </div>
          </div>
          <div>
            <ProgressBar></ProgressBar>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RewardBanner;
