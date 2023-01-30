import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../../images/Vector.png";
import "../../pages/SignUp/SignUp.css";

const StakePlv = () => {
  return (
    <div>
      <div className="pt-36">
        <section class="pt-32 mb-32">
          <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div class="from-wrap  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative">
              <h1 class="text-35 font-extraBold text-white  text-center  md:py-4">
                Stake PLV
              </h1>
              <div className="close-wrap flex justify-end cursor-pointer absolute top-2 right-0">
                <img
                  className="pt-5 pr-5 w-[30px] h-[30px]"
                  src={close}
                  alt="close"
                />
              </div>
              <div class="px-5 py-3">
                <form class="  space-y-4 md:space-y-6" action="#">
                  {/* user Name */}
                  <div className="from-div">
                    <div className="flex items-center justify-between">
                      <p className="uppercase font-semibold text-[14px] text-center text-white">
                        Amount
                      </p>
                      <div className="flex items-center">
                        <p className="uppercase font-semibold text-[14px] text-center text-white">
                          Balance 100K
                        </p>
                        <img
                          className="rounded-full w-4 h-4 flex items-center ml-2 sm:mr-3"
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                    </div>

                    <label className="relative">
                      <input
                        id="User-Name"
                        name="UserName"
                        type="text"
                        autoComplete="text"
                        required
                        className="my-3 bg-[#07062B]  text-white text-18 font-semibold border-1 border-[#497BEE] rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                        placeholder="100,000.00"
                      />
                      <div className="flex items-center absolute top-2 right-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="uppercase font-semibold text-[14px] text-center text-white bg-[#46A0E7] py-2 px-5 rounded-full"
                          >
                            Max
                          </Link>
                        </div>
                      </div>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-btnbg
                    text-18 rounded-2xl text-sm px-5 py-2.5 text-center uppercase button-shrink font-semibold"
                  >
                    APPLY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StakePlv;
