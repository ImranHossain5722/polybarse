import React from "react";
import Container from "../container";
import ProgressBar from "./ProgressBar";
import TimerReword from "./TimerReword";

const RewardBanner = () => {
  return (
    <div>
      <Container className="max-w-[1200px]">
        <div className="mt-[40px] md:mt-0">
          <div className="flex justify-between ">
            <div className="img-box">
              <img
                className="w-full h-full md:w-[506px] md:h-[309px]"
                src="/images/Reward Pass.png"
                alt="banner"
              />
              <div className="flex gap-8">
                <p className="capitalize text-white text-[25px] md:text-45 font-normal">
                  Reward Pass
                </p>
                {/* Mobile view timer */}
                <div
                  className="block md:hidden
                "
                >
                  <TimerReword />
                </div>
              </div>
            </div>

            {/* desktop timer */}
            <div className="timerBox hidden md:flex items-end">
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
