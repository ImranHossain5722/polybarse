import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import close from "../../images/Vector.png";
import walit from "../../images/walit.png";
import { BsArrowLeftShort } from "react-icons/bs";
import "./PopUp.css";
import YourAreAlmostDone from "./YourAreAlmostDone";
const SelectWallet = ({ setShowLoginPopUp, setSelectWallet, selectWallet }) => {
  const [showAlmostDone, setShowAlmostDone] = useState(false);
  // const [selectWallet, setSelectWallet] = useState();

  return (
    <div>
      {showAlmostDone ? (
        <div>
          <div
            onClick={() => {
              setShowAlmostDone(false);
              setSelectWallet(false);
            }}
            className="popUp-wrap"
          ></div>
          <div className="popup-container">
            <section class="pt-32 mb-32">
              <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="from-wraps  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md border-1 border-[#497BEE]">
                  <div
                    onClick={() => {
                      setShowAlmostDone(false);
                      setSelectWallet(false);
                    }}
                    className="close-wrap flex justify-end cursor-pointer "
                  >
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
      ) : (
        <>
          <div
            onClick={() => {
              setSelectWallet(false);
            }}
            className="popUp-wrap"
          ></div>
          <div>
            <div className="popup-container">
              <section class="pt-2">
                <div class=" flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                  <div class="from-wraps  w-full  rounded-lg shadow-2xl  md:mt-0 sm:max-w-md relative border-1 border-[#497BEE]">
                    <div className="">
                      <div className="flex items-center mt-5 ml-3 gap-1">
                        <BsArrowLeftShort className="text-white w-5 h-5 " />
                        <p className="text-white text-[15px] "> Back</p>
                      </div>
                    </div>
                    <div className="logo-wrap flex justify-center pt-6">
                      <Link to="/">
                        <img class=" w-60 h-28 " src={logo} alt="logo" />
                      </Link>
                    </div>
                    <h1 class="text-35 font-extraBold text-white  text-center  md:py-4">
                      Select a Wallet
                    </h1>
                    <div
                      onClick={() => setSelectWallet(false)}
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
                          <div className="from-metamask">
                            <label className="relative">
                              <div className="flex items-center absolute top-3 right-0 left-1">
                                <div className="flex items-center">
                                  <img
                                    className="rounded-full w-9 h-9 flex items-center ml-2 sm:mr-3"
                                    src="/images/Metamask.png"
                                    alt="coin"
                                  />
                                </div>
                              </div>
                              <input
                                id="price"
                                name="price"
                                type="text"
                                autoComplete="text"
                                required
                                className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 pl-14"
                                placeholder="Metamask"
                              />

                              <div className="flex items-center absolute top-2 right-3">
                                <div className="flex items-center">
                                  <Link
                                    to="#"
                                    className="uppercase font-semibold text-[14px] text-center text-white bg-[#46A0E7] py-2 px-5 rounded-lg"
                                  >
                                    Popular
                                  </Link>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className="from-Coinbase py-2">
                            <label className="relative">
                              <div className="flex items-center absolute top-5 right-0 left-1">
                                <div className="flex items-center">
                                  <img
                                    className="rounded-full w-9 h-9 flex items-center ml-2 sm:mr-3"
                                    src="/images/Coinbase.png"
                                    alt="coin"
                                  />
                                </div>
                              </div>
                              <input
                                id="CoinbaseWallet"
                                name="CoinbaseWallete"
                                type="text"
                                autoComplete="text"
                                required
                                className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 pl-14"
                                placeholder="Coinbase Wallet"
                              />
                            </label>
                          </div>
                          <div className="from-Bitski">
                            <label className="relative">
                              <div className="flex items-center absolute top-3 right-0 left-1">
                                <div className="flex items-center">
                                  <img
                                    className="rounded-full w-9 h-9 flex items-center ml-2 sm:mr-3"
                                    src="/images/Bitsk.png"
                                    alt="coin"
                                  />
                                </div>
                              </div>
                              <input
                                id="Bitski"
                                name="Bitski"
                                type="text"
                                autoComplete="text"
                                required
                                className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 pl-14"
                                placeholder="Bitski "
                              />
                            </label>
                          </div>
                          <div className="from-walleConnect py-2">
                            <label className="relative">
                              <div className="flex items-center absolute top-5 right-0 left-1">
                                <div className="flex items-center">
                                  <img
                                    className="rounded-full w-9 h-9 flex items-center ml-2 sm:mr-3"
                                    src="/images/WalletConnect.png"
                                    alt="coin"
                                  />
                                </div>
                              </div>
                              <input
                                id="WalletConnect"
                                name="WalletConnect"
                                type="text"
                                autoComplete="text"
                                required
                                className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 pl-14"
                                placeholder="WalletConnect "
                              />
                            </label>
                          </div>
                          <div className="from-Venly">
                            <label className="relative">
                              <div className="flex items-center absolute top-3 right-0 left-1">
                                <div className="flex items-center">
                                  <img
                                    className="rounded-full w-9 h-9 flex items-center ml-2 sm:mr-3"
                                    src="/images/Venly.png"
                                    alt="coin"
                                  />
                                </div>
                              </div>
                              <input
                                id="Venly"
                                name="Venly"
                                type="text"
                                autoComplete="text"
                                required
                                className="my-3 bg-[#07062B] border-1 border-[#497BEE] text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 pl-14"
                                placeholder="Venly"
                              />
                            </label>
                          </div>
                        </div>
                        <p
                          onClick={() => {
                            setShowAlmostDone(true);
                            setShowLoginPopUp(false);
                          }}
                          className="w-full text-white bg-btnbg
                 text-18 rounded-2xl text-sm px-5 py-2.5 text-center uppercase button-shrink font-semibold"
                        >
                          APPLY
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectWallet;
