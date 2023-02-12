import React from "react";
import { Link } from "react-router-dom";
import close from "../../images/Vector.png";
import "./PopUp.css";
const Transfer = ({ setTransfer }) => {
  return (
    <>
      <div
        onClick={() => {
          setTransfer(false);
        }}
        className="popUp-wrap"
      ></div>
      <div>
        <div className="popup-containers">
          <section class="pt-32 mb-32">
            <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
              <div class="from-wraps w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative border-1 border-[#497BEE]">
                <h1 class="text-35 font-extraBold text-white  text-center  md:py-4">
                  Transfer
                </h1>
                <div
                  onClick={() => {
                    setTransfer(false);
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
                  <p className="text-16 font-semibold">
                    Enter the Wallet you want to transfer to.
                  </p>
                  <form class="  space-y-4 md:space-y-6" action="#">
                    {/* user Name */}
                    <div className="from-div">
                      <label className="relative">
                        <input
                          id="User-Name"
                          name="address"
                          type="text"
                          autoComplete="text"
                          required
                          className="my-3 bg-[#07062B]  text-white text-18 font-semibold border-1 border-[#497BEE] rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                          placeholder="Address"
                        />
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
    </>
  );
};

export default Transfer;
