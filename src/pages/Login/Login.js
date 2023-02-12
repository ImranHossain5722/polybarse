import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import close from "../../images/Vector.png";
import fb from "../../images/fb.png";
import go from "../../images/google.png";
import walit from "../../images/walit.png";
import arow from "../../images/arow.png";
import "./Login.css";
import SelectWallet from "../../components/PopUp/SelectWallet";

const Login = () => {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const [showSignPopUp, setShowSignPopUp] = useState(false);
  const [selectWallet, setSelectWallet] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setShowLoginPopUp(true);
          setShowSignPopUp(false);
        }}
        className="inline-flex items-center text-sm lg:text-18 font-semibold font-inter px-6 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-full lg:px-10 lg:py-3 uppercase"
      >
        sign in
      </button>
      {showLoginPopUp ? (
        // ***********************
        // Login Components form
        // ***********************
        <>
          <div
            onClick={() => {
              setShowLoginPopUp(false);
            }}
            className="popUp-wraps"
          ></div>
          <div className="popup-containers">
            <section class="py-2">
              <div class="flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                <div class="from-wraps  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative border-1 border-[#497BEE]">
                  <div
                    onClick={() => {
                      setShowLoginPopUp(false);
                    }}
                    className="close-wrap flex justify-end cursor-pointer"
                  >
                    <img className="pt-5 pr-5 w-8 	" src={close} alt="close" />
                  </div>
                  <div className="logo-wrap flex justify-center">
                    <Link to="/">
                      <img
                        class="w-full md:w-60 md:h-28 "
                        src={logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div class=" space-y-4 md:space-y-3 sm:p-8">
                    <h1 class="text-16 md:text-35 font-bold text-white md:text-2xl  text-center">
                      Explore Metaverse
                    </h1>
                    <form class="  space-y-4 md:space-y-4" action="#">
                      <div className="user-div flex justify-center">
                        <input
                          type="name"
                          name="name"
                          id="name"
                          className="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  
                          mx-4 md:mx-0 w-full h-[55px] font-normal placeholder-[#497BEE]  focus:ring-primary-600 focus:border-primary-600 block  p-2.5 "
                          placeholder="Username"
                          required=""
                        />
                      </div>
                      <div className="password-div flex justify-center">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  h-[55px] font-normal placeholder-[#497BEE]  focus:ring-primary-600 focus:border-primary-600 block mx-4 md:mx-0 w-full p-2.5 "
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <p class="font-medium text-center capitalize text-textColor1  underline ">
                          <Link to="/editpassword">Forgot Password</Link>
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          class="md:w-full text-white bg-btnbg text-18 hover:bg-primary-700  rounded-2xl text-sm px-5 py-2.5 text-center  uppercase button-shrink font-semibold"
                        >
                          Log-in
                        </button>
                      </div>
                      <div className="flex items-center justify-evenly">
                        <div className="div-or"></div>
                        <p className="text-white">OR</p>
                        <div className="div-or"></div>
                      </div>
                      {/* social button */}
                      <div className="flex justify-center items-center">
                        <div className="w-16 h-16 p-3 mr-3 border border-inputBorder rounded-lg  flex justify-center items-center  cursor-pointer button-shrink">
                          <a href="#">
                            {" "}
                            <img className="w-7 h-7" src={go} />
                          </a>
                        </div>
                        <div className="w-16 h-16 p-3 flex justify-center items-center border border-inputBorder rounded-lg cursor-pointer button-shrink">
                          <a href="#">
                            <img className="w-4 h-7" src={fb} />
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-around ">
                        <div>
                          <div className="p-3 border flex items-center  border-inputBorder rounded-lg cursor-pointer button-shrink">
                            <img className="w-7 h-7 mr-4" src={walit} />
                            <p
                              onClick={() => {
                                setSelectWallet(true);
                                setShowLoginPopUp(false);
                              }}
                              className="text-18 text-white uppercase"
                            >
                              Connect with wallet
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center py-3">
                        <div className="div-hr"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <p class="text-sm text-center font-light  text-gray-500 ">
                          Don’t have an account?
                        </p>
                        <div
                          className="flex items-center justify-center cursor-pointer"
                          onClick={() => {
                            setShowLoginPopUp(false);
                            setShowSignPopUp(true);
                          }}
                        >
                          <p className="font-bold text-white mx-1 hover:underline dark:text-primary-500">
                            Create One
                          </p>
                          <img className="w-2 h-2 " src={arow} alt="" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : null}
      {selectWallet && (
        <SelectWallet
          selectWallet={selectWallet}
          setShowLoginPopUp={setShowLoginPopUp}
          setSelectWallet={setSelectWallet}
        />
      )}

      {showSignPopUp ? (
        // ************************
        // SignUp Components form
        // ************************
        <>
          <div
            onClick={() => {
              setShowSignPopUp(false);
            }}
            className="popUp-wraps"
          ></div>
          <div>
            <div className="popup-containers">
              <section class="pt-2  ">
                <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                  <div class="from-wraps  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative border-1 border-[#497BEE]">
                    <div
                      className="close-wrap flex justify-end cursor-pointer "
                      onClick={() => {
                        setShowSignPopUp(false);
                      }}
                    >
                      <img
                        className="pt-5 pr-5 w-[30px] h-[30px]"
                        src={close}
                        alt="close"
                      />
                    </div>
                    <div className="logo-wrap flex justify-center">
                      <Link to="/">
                        <img
                          class="w-full h-full md:w-60 md:h-28 "
                          src={logo}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div class=" space-y-4 md:space-y-3 sm:p-8">
                      <h1 class="text-35  font-extraBold text-white md:text-2xl  text-center">
                        Sign Up
                      </h1>
                      <form class="  space-y-4 md:space-y-4" action="#">
                        <div className="user-div flex  justify-center">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  
                            mx-4 md:mx-0 w-full md:h-[55px] font-normal placeholder-[#497BEE] focus:ring-inputBorder focus:border-inputBorder block  p-2.5 "
                            placeholder="Username"
                            required=""
                          />
                        </div>
                        <div className="email-div flex  justify-center">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg 
                            mx-4 md:mx-0 w-full md:h-[55px] font-normal placeholder-[#497BEE] focus:ring-primary-600 focus:border-primary-600 block  p-2.5 "
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="password-div flex justify-center">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg 
                            mx-4 md:mx-0 w-full md:h-[55px] font-normal placeholder-[#497BEE] focus:ring-primary-600 focus:border-primary-600 block  p-2.5 "
                            required=""
                          />
                        </div>
                        <div className="checkbox flex justify-center">
                          <label class="main text-16">
                            By creating an account, By creating an account,
                            <input type="checkbox" />
                            <span class="mx-2 md:mx-0 geekmark"></span>
                          </label>
                        </div>
                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="md:w-full text-white bg-btnbg 
                     text-18 rounded-2xl text-sm px-5 py-2.5 text-center uppercase button-shrink font-semibold"
                          >
                            Sign up
                          </button>
                        </div>
                        <div className="flex items-center justify-evenly">
                          <div className="div-or"></div>
                          <p className="text-white">OR</p>
                          <div className="div-or"></div>
                        </div>
                        {/* social button */}
                        <div className="flex justify-center items-center">
                          <div className="w-16 h-16 p-3 mr-3 border border-inputBorder rounded-lg  flex justify-center items-center  cursor-pointer button-shrink">
                            <a href="https://www.google.com/">
                              <img className="w-7 h-7" src={go} />
                            </a>
                          </div>
                          <div className="w-16 h-16 p-3 flex justify-center items-center border border-inputBorder rounded-lg cursor-pointer button-shrink ">
                            <a href="https://www.facebook.com/">
                              <img className="w-4 h-7" src={fb} />
                            </a>
                          </div>
                        </div>
                        <div className="flex justify-around ">
                          <a href="#">
                            <div className=" p-3 border flex items-center  border-inputBorder rounded-lg  cursor-pointer button-shrink">
                              <img className="w-7 h-7 mr-4" src={walit} />
                              <p
                                className="text-18 text-white uppercase"
                                onClick={() => {
                                  setSelectWallet(true);
                                  setShowSignPopUp(false);
                                }}
                              >
                                sign up with wallet
                              </p>
                            </div>
                          </a>
                        </div>
                        {selectWallet && (
                          <SelectWallet setSelectWallet={setSelectWallet} />
                        )}
                        <div className="flex items-center py-3">
                          <div className="div-hr"></div>
                        </div>
                        <div className="flex items-center justify-center">
                          <p class="text-sm text-center font-light text-gray-500">
                            Already have an account?
                          </p>
                          <div
                            className="flex items-center justify-center cursor-pointer"
                            onClick={() => {
                              setShowLoginPopUp(true);
                              setShowSignPopUp(false);
                            }}
                          >
                            <p className="font-bold text-white mx-1 hover:underline dark:text-primary-500">
                              Sign in
                            </p>
                            <img className="w-2 h-2 " src={arow} />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Login;
