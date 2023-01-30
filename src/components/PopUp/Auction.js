import React from "react";
import "./PopUp.css";
import close from "../../images/Vector.png";
import { RiCalendar2Line } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
const Auction = ({ setAuction }) => {
  return (
    <div>
      <div className="fixed  inset-0 z-50">
        <section class="pt-32 mb-32">
          <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div class="from-wrap  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative">
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
                      <label className="relative">
                        <input
                          id="price"
                          name="price"
                          type="text"
                          autoComplete="text"
                          required
                          className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                          placeholder="0,00 "
                        />
                        <div className="flex items-center absolute top-4 right-3">
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
                  <div className="flex gap-6">
                    <div className="from-date">
                      <label className="relative">
                        <input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="d my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                        />
                        {/* <div className="flex items-center absolute top-6 right-3">
                          <div className="flex items-center">
                            <RiCalendar2Line className="w-8 h-8 text-[#497BEE]" />
                          </div>
                        </div> */}
                      </label>
                    </div>
                    <div className="from-Time">
                      <label className="relative">
                        <input
                          id="time"
                          name="time"
                          type="time"
                          required
                          className="t my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
  );
};

export default Auction;
