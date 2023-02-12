import React from "react";
import Clam from "../buttons/Clam";
import Container from "../container";

const SecondSection = () => {
  return (
    <Container className="max-w-[1200px]">
      <div>
        <div className="w-full md:flex gap-5 bg-[#0D0A3A] shadow-2xl mt-16 p-2 md:p-7">
          {/* box-Stake for pass */}
          <div className="w-full md:w-[330px] bg-[#06042A] p-6  pt-8 rounded-5 relative ">
            <div className="flex gap-4">
              <img className="w-16 h-16" src="images/Rv.png" alt="rv" />
              <div className="">
                <div className="flex items-center">
                  <div className="flex gap-2 items-center ">
                    <p className="text-20 font-extraBold">Stake for pass</p>
                    <img className="w-3 h-3 " src="images/i.png" alt="images" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-30 text-[#A2D132] font-extraBold uppercase">
                    50K plv
                  </p>
                  <img
                    className="w-6 h-6 "
                    src="images/singleCoin.png"
                    alt="images"
                  />
                </div>
                {/* progress bar cod */}
                <div className="max-w-[900px]">
                  <div className="pt-5">
                    <div className="overflow-hidden h-5  text-xs flex rounded bg-[#044C6B] border-2 border-[#234C89]">
                      <div
                        style={{ width: "50%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#A2D132]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-[70px] md:left-[100px]">
              <Clam />
            </div>
          </div>

          {/* box Total-wrap*/}
          <div className="w-full md:w-[750px] md:flex items-center justify-around bg-[#06042A] p-6 rounded-5">
            {/* box-1 */}
            <div className="bg-[#06042A] p-6  ">
              <p className="text-20 font-extraBold text-center">
                Total Deposit
              </p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-30 text-[#A2D132] text-center font-extraBold uppercase">
                  50K plv
                </p>
                <img
                  className="w-5 h-5 "
                  src="images/singleCoin.png"
                  alt="images"
                />
              </div>
              <div className="">
                <div className="flex gap-2 items-center justify-center">
                  <p className="text-30 font-extraBold text-center">
                    MULTIPLIER
                  </p>
                  <img className="w-3 h-3 " src="images/i.png" alt="images" />
                </div>
                <p className="text-30 text-[#FF3300] font-extraBold uppercase text-center">
                  X1
                </p>
              </div>
            </div>
            <div className=" hidden md:block w-1 h-52 bg-[#1B1757]"></div>
            {/* box-2 */}
            <div className=" bg-[#06042A] p-6 flex items-center justify-center">
              <div className="w-full">
                <p className="text-20 font-extraBold text-center">Earnings</p>
                <div className="flex items-center justify-center gap-4">
                  <p className="text-30 text-[#A2D132] font-extraBold uppercase">
                    1K PLV
                  </p>
                  <img
                    className="w-5 h-5 "
                    src="images/singleCoin.png"
                    alt="images"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Clam />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SecondSection;
