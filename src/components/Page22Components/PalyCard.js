import React from "react";
import "../../components/buttons/button.css";

const PalyCard = () => {
  return (
    <div>
      <div>
        <p className="text-30 font-extraBold mt-[170px] mb-6">Poly Card</p>
      </div>
      <div className="relative bg-[#0D0A3A] border-1 border-[#A2D132] rounded-5">
        <div className="absolute left-[450px] -top-6 z-20 ">
          <button className="uppercase border-1 border-[#A2D132] px-9 py-3 rounded-full bg-[#0D0A3A]">
            Your Plan
          </button>
        </div>
        {/* two button */}
        <div className=" absolute right-16 twoButton mt-5">
          <button className="uppercase  bg-[#1B1757] px-9 py-3 mr-3 button-hero ">
            LIMIT
          </button>
          <button className="uppercase  bg-[#1B1757] px-9 py-3 button-hero">
            REACHED
          </button>
        </div>

        <div className="flex items-center gap-x-36 py-20">
          <div className="pl-12">
            <img className="w-60 h-40" src="images/base-card.png" alt="card" />
          </div>

          <div className="">
            <div className="flex items-center gap-24 border-b-1 border-[#1B1757] pb-5 mb-5">
              <div>
                <p className="text-20">DAILY V-COIN SWAP LIMIT</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase">1.000</p>
                </div>
                <div className="w-10 h-10 flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase">0</p>
                </div>
                <div className="w-10 h-10 flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
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
                  <p className="uppercase">52.000</p>
                </div>
                <div className="w-10 h-10 flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase">0</p>
                </div>
                <div className="w-10 h-10 flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* upgrade plan*/}
        <div>
          <button className="absolute left-[450px] bottom-6 uppercase  bg-[#D75D29] px-9 py-3 rounded-full button-hero">
            upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PalyCard;
