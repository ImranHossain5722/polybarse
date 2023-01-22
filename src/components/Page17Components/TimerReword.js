import React from "react";
import Countdown from "react-countdown";
import Container from "../container";
import TimerCountdown from "./TimerCountdown";

const TimerReword = () => {
  return (
    <div>
      <Container className="max-w-[1200px] z-20  md:pt-10">
        <Countdown date={Date.now() + 2000000000} renderer={TimerCountdown} />
      </Container>
    </div>
  );
};

export default TimerReword;
