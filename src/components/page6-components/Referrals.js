import React from "react";
import Container from "../container";
import {
  FaFacebookF,
  FaTiktok,
  FaDiscord,
  FaRegPaperPlane,
} from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLink,
} from "react-icons/ai";
import { VscFiles } from "react-icons/vsc";
import "./Referrals.css";
import greenshapbg from "../../images/green-shap.png";
import Popup from "../animations/popup";
import rightshap from "../../images/shapesix.png";
const Referrals = () => {
  // social media array
  const s = [
    {
      id: window.crypto.randomUUID(),
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },

    {
      id: window.crypto.randomUUID(),
      icon: <AiOutlineTwitter />,
      link: "https://twitter.com",
    },

    {
      id: window.crypto.randomUUID(),
      icon: <FaDiscord />,
      link: "https://discord.com",
    },
    {
      id: window.crypto.randomUUID(),
      icon: <FaRegPaperPlane />,
      link: "https://telegram.com",
    },
  ];
  return (
    <div className="relative">
      <div className=" hidden md:block absolute max-w-xl -left-32 top-1/2 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/4 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-2/3 w-32  z-10">
        <img src={rightshap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div className="relative max-w-[1170px]">
          <p className="text-30 my-7 font-extraBold">Referrals</p>
          <div className="three-box md:flex items-center justify-around bg-[#0D0A3A] p-8 rounded-md">
            <div className="box-1 bg-[#06042A] p-5 md:w-4/12 m-5 pt-16 pb-16  rounded-md ">
              <p className="text-18 md:text-30 text-center font-extraBold">
                Friend Referred
              </p>
              <p className="text-18 md:text-50 text-center font-extraBold">
                04
              </p>
            </div>
            <div className="box-2 bg-[#06042A] p-5 md:w-4/12 m-5  rounded-md">
              <p className="text-18 md:text-30 text-center font-extraBold">
                Invite your friend
              </p>
              <div className="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="my-3 bg-[#0D0A3A] border border-[#0D0A3A] text-white sm:text-sm  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-md font-bold button-hero"
                >
                  Invite Now
                </button>
              </div>
            </div>
            <div className="box-3 bg-[#06042A] p-5 md:w-4/12 m-5  rounded-md ">
              <p className=" text-18 md:text-30 text-center font-extraBold">
                Your Earnings
              </p>
              <p className="text-18 md:text-40 text-center font-extraBold">
                4000,15 PLV
              </p>
              <button
                type="submit"
                className="button-hero uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-md font-bold"
              >
                CLAIM
              </button>
            </div>
          </div>
          <div>
            <img
              className="absolute hidden lg:block md:hidden  -right-16 bottom-0 w-36 h-52"
              src="/images/gold-bag.png"
            />
          </div>
        </div>
        {/* or div */}
        <div className="or-div-wrap mt-20 mb-14">
          <div className="flex items-center justify-center">
            <div className="div-ors"></div>
            <p className="text-white mx-2 font-extraBold capitalize">Or</p>
            <div className="div-ors"></div>
          </div>
        </div>
        {/* share your referrals link section */}
        <div className="mt-16 ">
          <div className="flex items-center justify-center">
            <div className="box-2 bg-[#0D0A3A] p-5 w-4/6 m-5 rounded-md ">
              <p className="text-18 md:text-30 text-center font-extraBold pt-9">
                Share your referrals link
              </p>
              <div className="text mx-10 mt-9 relative">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className=" my-3 w-full px-2 h-16 rounded-md bg-themeColor border border-[#0D0A3A] text-white sm:text-sm  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600"
                  placeholder="https://www.deioheieheuhcjehehih.comjdihihd"
                />
                <VscFiles className="absolute top-8 right-3 text-white w-3 h-4 " />

                <div className="flex items-center justify-center pb-9">
                  <button
                    type="submit"
                    className="flex items-center justify-center uppercase mt-2 text-center bg-btnbg  rounded-lg py-4 px-6 w-1/2 button-hero"
                  >
                    <span>
                      <AiOutlineLink className="w-5 h-5 mr-1" />
                    </span>
                    <span className="font-bold">Copy link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* share social media */}
          <div className="flex items-center justify-center">
            <p className="md:text-24 font-semibold capitalize mt-5 mr-3 md:mt-8">
              Share this on:
            </p>
            <div className="flex justify-center items-center gap-5 mt-5 md:mt-8">
              {s.map((i) => (
                <a
                  href={i.link}
                  key={i.id}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-lg md:text-3xl text-black bg-white p-4 rounded-full hover:text-btnbg"
                >
                  {i.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Referrals;
