import React from "react";
import "../../components/buttons/button.css";
import Container from "../container";

const PalyCard = () => {
  return (
    <Container className="max-w-[1200px]">
      <div>
        <div>
          <p className="text-30 font-extraBold mt-[50px] md:mt-[170px] mb-12 md:mb-6">
            Poly Card
          </p>
        </div>
        <div className="relative bg-[#0D0A3A] border-1 border-[#A2D132] rounded-5 pb-5 md:pb-0">
          <div className="">
            <button className="yourPlane absolute left-[93px] md:left-[510px] -top-6 z-20  uppercase border-1 border-[#A2D132] px-9 py-3 rounded-full bg-[#0D0A3A] font-bold">
              Your Plan
            </button>
          </div>
          {/* two button */}
          <div className="absolute right-4 top-[200px] md:-top-[51px] md:bottom-0 md:right-24 twoButton mt-5 py-8">
            <button className="uppercase  bg-[#1B1757] px-3 md:px-9 py-3 mr-9 md:mr-11 button-hero text-[12px] md:text-16 font-extraBold ">
              LIMIT
            </button>
            <button className="uppercase  bg-[#1B1757] px-3 md:px-9 py-3 button-hero text-[12px] md:text-16 font-extraBold">
              REACHED
            </button>
          </div>

          <div className="md:flex items-center gap-x-36 pt-12 md:pl-[75px] pb-44 md:py-20">
            <div className="flex justify-center  items-center md:justify-start ">
              <img
                className="w-60 h-40"
                src="images/base-card.png"
                alt="card"
              />
            </div>

            <div className="mt-24 md:mt-0">
              <div className="flex items-center gap-4 md:gap-24 border-b-1 border-[#1B1757] pb-5 mb-5 mx-4 md:mx-0">
                <div>
                  <p className="text-16 md:text-20">DAILY V-COIN SWAP LIMIT</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-extraBold text-16 text-center text-white">
                    <p className="uppercase w-12">1.000</p>
                  </div>
                  <div className="w-10 h-10 flex items-center ">
                    <img
                      className="rounded-full w-6 h-6 "
                      src="/images/starCoin.png"
                      alt="coin"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-extraBold text-16 text-center text-white">
                    <p className="uppercase w-10">0</p>
                  </div>
                  <div className="w-10 h-10 flex items-center ">
                    <img
                      className="rounded-full w-6 h-6 "
                      src="/images/starCoin.png"
                      alt="coin"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-24 mx-4 md:mx-0 ">
                <div>
                  <p className="text-16 md:text-20">DAILY V-COIN SWAP LIMIT</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-extraBold text-16 text-center text-white">
                    <p className="uppercase w-12">52.000</p>
                  </div>
                  <div className="w-10 h-10 flex items-center ">
                    <img
                      className="rounded-full w-6 h-6 "
                      src="/images/starCoin.png"
                      alt="coin"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="font-extraBold text-16 text-center text-white">
                    <p className="uppercase w-10">0</p>
                  </div>
                  <div className="w-10 h-10 flex items-center ">
                    <img
                      className="rounded-full w-6 h-6 "
                      src="/images/starCoin.png"
                      alt="coin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* upgrade plan*/}
          <div className="w-full">
            <button className="upgradePlane absolute left-[50px] md:left-[450px] bottom-4 uppercase  bg-[#D75D29] px-9 py-4  rounded-full font-bold text-24 button-hero">
              upgrade plan
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PalyCard;
