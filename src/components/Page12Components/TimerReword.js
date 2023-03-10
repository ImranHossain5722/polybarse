import React from "react";
import Countdown from "react-countdown";
import Container from "../container";
import TimerCountdown from "./TimerCountdown";

const TimerReword = () => {
  return (
    <div>
      <Container className="max-w-[1200px] z-20  md:pt-10">
        <h2 className="text-[16px] md:text-4xl lg:text-2xl font-extraBold md:font-normal tracking-wide uppercase">
          SEASON ENDS IN
        </h2>
        <Countdown date={Date.now() + 3000000000} renderer={TimerCountdown} />
      </Container>
    </div>
  );
};

export default TimerReword;
