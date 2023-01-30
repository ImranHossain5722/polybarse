import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import close from "../../images/Vector.png";
import fb from "../../images/fb.png";
import go from "../../images/google.png";
import walit from "../../images/walit.png";
import arow from "../../images/arow.png";
import "../../pages/SignUp/SignUp.css";

const YourAreAlmostDone = () => {
  return (
    <div>
      <div className="pt-36">
        <section class="pt-32 mb-32">
          <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="from-wrap  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md">
              <div className="close-wrap flex justify-end cursor-pointer ">
                <img
                  className="pt-5 pr-5 w-[30px] h-[30px]
  "
                  src={close}
                  alt="close"
                />
              </div>
              <div className="logo-wrap flex justify-center">
                <Link to="/">
                  <img class=" w-60 h-28 " src={logo} alt="logo" />
                </Link>
              </div>
              <div class=" space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-35  font-extraBold text-white md:text-2xl  text-center">
                  You are almost done!
                </h1>
                <form class="  space-y-4 md:space-y-6" action="#">
                  {/* user Name */}
                  <div className="user-div">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  h-16 font-normal placeholder-[#497BEE] focus:ring-inputBorder focus:border-inputBorder block w-full p-2.5 "
                      placeholder="Username"
                      required=""
                    />
                  </div>
                  {/* email */}
                  <div className="email-div">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg h-16 font-normal placeholder-[#497BEE] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  {/* password */}
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  h-16 font-normal placeholder-[#497BEE] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required=""
                    />
                  </div>
                  <div className="checkbox">
                    <label class="main text-16">
                      By creating an account, By creating an account,
                      <input type="checkbox" />
                      <span class="geekmark"></span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-btnbg
                    text-18 rounded-2xl text-sm px-5 py-2.5 text-center uppercase button-shrink font-semibold"
                  >
                    Sign up
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

export default YourAreAlmostDone;
