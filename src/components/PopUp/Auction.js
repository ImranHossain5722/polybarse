import React, { useEffect, useRef } from "react";
import "./PopUp.css";
import close from "../../images/Vector.png";
import { RiCalendar2Line } from "react-icons/ri";
import { FiClock } from "react-icons/fi";

const Auction = ({ setAuction }) => {
  return (
    <>
      <div
        onClick={() => {
          setAuction(false);
        }}
        className="popUp-wrap"
      ></div>
      <div>
        <div className="popup-containers z-50">
          <section class="pt-32 mb-32">
            <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
              <div class="from-wraps  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative border-1 border-[#497BEE]">
                <h1 class="text-35 font-extraBold text-white  text-center  md:py-4">
                  Auction
                </h1>
                <h1 class="text-20 font-bold text-white  text-center  md:py-4">
                  Reserve Price
                </h1>
                <div
                  onClick={() => {
                    setAuction(false);
                  }}
                  className="close-wrap flex justify-end cursor-pointer absolute top-2 right-0"
                >
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
                      <div className="from-div">
                        <label className="">
                          <input
                            id="price"
                            name="price"
                            type="text"
                            autoComplete="text"
                            required
                            className="relative my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                            placeholder="0,00 "
                          />
                          <div className="flex items-center absolute top-[124px] md:top-[185px] right-[30px] md:right-[20px]">
                            <div className="flex items-center">
                              <img
                                className="rounded-full w-6 h-6 flex items-center ml-2 sm:mr-3"
                                src="/images/singleCoin.png"
                                alt="coin"
                              />
                            </div>
                          </div>
                        </label>
                      </div>
                      <h1 class="text-20 font-bold text-white  text-center  md:py-4">
                        Auction end date/time
                      </h1>
                    </div>
                    <div className="md:flex gap-6">
                      <div className="from-date flex justify-center items-center">
                        <label className="relative">
                          <input
                            id="date"
                            name="date"
                            type="date"
                            required
                            className="relative d bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block  p-2.5 w-[280px] md:w-[190px]"
                          />
                        </label>
                      </div>
                      <div className="from-Time flex justify-center items-center mt-3 md:mt-0">
                        <label className="relative">
                          <input
                            id="time"
                            name="time"
                            type="time"
                            required
                            className="t bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block  p-2.5 w-[280px] md:w-[190px]"
                            placeholder="00:00:00"
                          />
                        </label>
                      </div>
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
    </>
  );
};

export default Auction;
