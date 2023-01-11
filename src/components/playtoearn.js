import React from "react";
import Container from "./container";
import Buyland from "./buttons/buy-land";
import Mapbtn from "./buttons/map-btn";

export default function Playtoearn() {
  return (
    <div className="py-10 md:py-20 min-h-screen relative flex">
      <div className="absolute left-0 top-0 bottom-0 hidden md:block">
        <img
          src="/images/playtoearnbgshape.png"
          alt="shape"
        />
      </div>
      <div className="absolute right-0 bottom-0 translate-y-1/4 hidden md:block">
        <img
          src="/images/playtoearnbgshapetwo.png"
          alt="shape"
        />
      </div>
      <div className="absolute right-10 md:right-0 bottom-1/2 w-20 hidden md:block">
        <img
          src="/images/shapenine.png"
          alt="shape"
        />
      </div>
      <Container className="max-w-[1200px] m-auto transition-all z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center"
          data-aos="fade-up"
        >
          <div>
            <img
              src="/images/play2earn.png"
              alt="icon"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-4xl lg:text-65 font-bold italic uppercase">
              PLAY 2 EARN
            </h3>
            <p className="text-sm sm:text-base mt-6 xl:text-xl max-w-xl w-full font-semibold italic">
              V-COINS is main "in game" token that you can win by playing to all Minigames and that
              allows you to buy and sells objects in The Polyverse metaverse.
              <br />
              <br />
              You can switch V-COINS for $PLV trought the PolySwapper.
              <br /> <br />
              SPLV is our main utility token that allows you to buy and sell LANDS and ASSETS in The
              Polyverse metaverse.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center mt-10 md:mt-32"
          data-aos="fade-up"
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-4xl lg:text-65 font-bold italic uppercase sm:leading-tight">
              become a land <br /> owner
            </h3>
            <p className="text-sm sm:text-base mt-6 xl:text-xl max-w-xl w-full font-semibold italic">
              A LAND is a piece of The Polyverse metaverse, providing access to exclusive content as
              well as granting the possibility to monetize your own part of The Polyverse's
              Metaverse. Build experiences, host events, invite friends.
            </p>
            <div
              className="flex gap-2 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Buyland />
              <Mapbtn />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/play2earn2.png"
              alt="icon"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
