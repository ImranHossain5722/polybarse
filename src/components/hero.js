import React from "react";
import Popup from "./animations/popup";
import Herobtn, { HerobtnTwo } from "./buttons/hero-btn";
import LogoCarosel from "./carousel/logo-carousel";
import Container from "./container";

export default function Hero() {
  return (
    <header className="min-h-full pt-32 md:pt-52 md:pb-20 md:min-h-screen md:mt-0 relative overflow-hidden flex flex-col items-center">
      <Container className="max-w-[1200px] flex items-center relative">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 items-center ">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-60 xl:text-80 leading-tight font-black uppercase">
              Welcome To <br /> PolyVerse
            </h1>
            <p className="mt-3 md:mt-[30px] font-semibold sm:text-lg">
              There are many variations of passages of <br /> Lorem Ipsum available, but the
              majority <br /> have suffered alteration.
            </p>
            <div className="flex gap-5 mt-5">
              <Herobtn />
              <HerobtnTwo />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="max-w-lg w-full ml-auto">
              <img
                src="/images/heroimg.png"
                alt="hero"
              />
            </div>
          </div>
        </div>
        <div className="absolute max-w-xl left-0 top-1/4 md:right-0 md:left-auto md:top-1/2 -translate-y-[45%] -z-10">
          <img
            src="/images/dots.png"
            alt="herobg"
            className="object-contain object-right"
          />
        </div>
      </Container>
      <LogoCarosel />
      {/* hero img bg  */}
      <div className="absolute left-0 top-0 w-60 -translate-x-2/4 -translate-y-1/2 -z-10 hidden md:block">
        <img
          src="/images/dots.png"
          alt="shape"
        />
      </div>
      <Popup className="right-0 top-20 w-32 -z-10 hidden md:block">
        <img
          src="/images/shapetwo.png"
          alt="shape"
        />
      </Popup>
      <Popup className="left-0 top-0 w-40 hidden md:block">
        <img
          src="/images/shapeone.png"
          alt="shape"
        />
      </Popup>
      <Popup className="left-20 bottom-20 w-60 hidden md:block">
        <img
          src="/images/shapethree.png"
          alt="shape"
        />
      </Popup>
      <Popup className="right-0 bottom-10 w-40 hidden md:block">
        <img
          src="/images/shapefour.png"
          alt="shape"
        />
      </Popup>
    </header>
  );
}
