import React from "react";
import "../../components/buttons/button.css";
import Container from "../container";

const PalyCard = () => {
  return (
    <Container className="max-w-[1200px]">
      <div>
        <div>
          <p className="text-30 font-extraBold mt-[170px] mb-6">Poly Card</p>
        </div>
        <div className="relative bg-[#0D0A3A] border-1 border-[#A2D132] rounded-5">
          <div className="absolute left-[510px] -top-6 z-20 ">
            <button className="uppercase border-1 border-[#A2D132] px-9 py-3 rounded-full bg-[#0D0A3A] font-bold">
              Your Plan
            </button>
          </div>
          {/* two button */}
          <div className=" absolute right-28 twoButton mt-5">
            <button className="uppercase  bg-[#1B1757] px-9 py-3 mr-11 button-hero text-16 font-extraBold ">
              LIMIT
            </button>
            <button className="uppercase  bg-[#1B1757] px-9 py-3 button-hero text-16 font-extraBold">
              REACHED
            </button>
          </div>

          <div className="flex items-center gap-x-36 py-20">
            <div className="pl-12">
              <img
                className="w-60 h-40"
                src="images/base-card.png"
                alt="card"
              />
            </div>

            <div className="">
              <div className="flex items-center gap-24 border-b-1 border-[#1B1757] pb-5 mb-5">
                <div>
                  <p className="text-20">DAILY V-COIN SWAP LIMIT</p>
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

              <div className="flex items-center gap-24 ">
                <div>
                  <p className="text-20">DAILY V-COIN SWAP LIMIT</p>
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
          <div>
            <button className="absolute left-[450px] bottom-4 uppercase  bg-[#D75D29] px-9 py-4  rounded-full font-bold text-24 button-hero">
              upgrade plan
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PalyCard;
