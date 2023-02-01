import React, { useState } from "react";
import Popup from "../../components/animations/popup";
import greenshapbg from "../../images/green-shap.png";
import rightRedShap from "../../images/right-shap-red.png";
import Shapsix from "../../images/shapesix.png";
import purpaleShape from "../../images/purplepyramid.png";
import lock from "../../images/pas-lock.png";
import Container from "../../components/container";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const EditPassword = () => {
  const [open, setOpen] = useState(false);
  //   handel toggle
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" relative bg-themeColor py-36">
      <div className="hidden md:block absolute max-w-xl -left-32 top-14 z-10">
        <img
          src="/images/bg-right.png"
          alt="herobg"
          className="object-contain  object-right"
        />
      </div>
      <div className="hidden md:block absolute max-w-2xl right-0 top-16  z-10">
        <img
          src="/images/dotsblur.png"
          alt="herobg"
          className="object-contain  object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/4 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-1/4 w-32  z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>

      <Container className="max-w-[1200px] pt-5 md:pt-32 lg:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center gap-8 ">
          <div className="from-div order-2 md:order-1 px-6 md:px-0 lg:px-0">
            <p className="text-45 mb-6 font-extraBold">Edit Password</p>
            <p className="text-xl  mb-6">
              For your security, we highly recommend that you choose a unique
              password that you don’t use for any other online account.
            </p>
            <div className="w-full md:w-2/3 lg:w-2/3">
              <div className="old-password relative">
                <label
                  htmlFor="password"
                  className="text-white text-24 font-semibold"
                >
                  Old Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={open === false ? "password" : "text"}
                  autoComplete="passwordl"
                  required
                  className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder=""
                />
                <div className="absolute mt-4 top-12 right-5">
                  {open === false ? (
                    <AiFillEye onClick={toggle} className="text-[#4A7297]" />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={toggle}
                      className="text-[#4A7297]"
                    />
                  )}
                </div>
              </div>
              {/* new password div */}
              <div className="new-password pt-11 relative">
                <label
                  htmlFor="password"
                  className="text-white text-24 font-semibold"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={open === false ? "password" : "text"}
                  autoComplete="passwordl"
                  required
                  className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder=""
                />

                <div className="absolute pt-1 mt-14 top-12 right-5">
                  {open === false ? (
                    <AiFillEye onClick={toggle} className="text-[#4A7297]" />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={toggle}
                      className="text-[#4A7297]"
                    />
                  )}
                </div>
              </div>
              {/* confirm  password*/}
              <div className="confirm-password pt-11 relative">
                <label
                  htmlFor="password"
                  className="text-white text-24 font-semibold"
                >
                  Confirm Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={open === false ? "password" : "text"}
                  autoComplete="passwordl"
                  required
                  className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder=""
                />

                <div className="absolute pt-1 mt-14 top-12 right-5">
                  {open === false ? (
                    <AiFillEye onClick={toggle} className="text-[#4A7297]" />
                  ) : (
                    <AiFillEyeInvisible
                      onClick={toggle}
                      className="text-[#4A7297]"
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-3xl font-bold"
              >
                save
              </button>
            </div>
          </div>
          {/* image */}
          <div className=" order-1 md:order-2">
            <img className=" md:w-full md:h-full" src={lock} alt="lock" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EditPassword;
