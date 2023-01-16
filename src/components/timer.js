import React from "react";
import Container from "../components/container";
import Countdown from "react-countdown";
import Popup from "./animations/popup";
// timer count
import Timercount from "./countdown/countdown";
import PreselBtn from "./buttons/presel-btn";

export default function Timer() {
  return (
    <div className="relative min-h-screen flex">
      <div className="absolute inset-0">
        <img
          src="/images/timersectionbg.png"
          alt="shape"
          className="object-cover lg:object-fill"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full h-10 bg-bgblur blur-[227px]"></div>
      <Popup className="w-20 top-1/4 z-10">
        <img src="/images/redpyramid.png" alt="shape" />
      </Popup>
      <Popup className="w-20 md:w-32 right-10 bottom-32 z-10">
        <img src="/images/shapefive.png" alt="shape" />
      </Popup>
      <Container className="max-w-[1200px] z-20 text-center md:pt-10">
        <h2 className="text-2xl md:text-4xl lg:text-50 font-black tracking-wide uppercase">
          Presale start iin
        </h2>
        <Countdown date={Date.now() + 2000000000} renderer={Timercount} />
        <div className="mt-10 md:mt-20" data-aos="fade-up">
          <PreselBtn />
        </div>
      </Container>
    </div>
  );
}
