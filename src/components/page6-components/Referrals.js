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
import "./Referrals.css";
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
    <div>
      <Container className="max-w-[1200px]">
        <div className="relative">
          <p className="text-30 my-7">Referrals</p>
          <div className="three-box md:flex items-center justify-around bg-[#0D0A3A] p-8">
            <div className="box-1 bg-[#06042A] p-5 md:w-4/12 m-5 pt-16 pb-16 ">
              <p className="text-30 text-center">Friend Referred</p>
              <p className="text-50 text-center">04</p>
            </div>
            <div className="box-2 bg-[#06042A] p-5 md:w-4/12 m-5 ">
              <p className="text-30 text-center">Invite your friend</p>
              <div className="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="my-3 bg-themeColor border border-[#0D0A3A] text-white sm:text-sm  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="Enter Email"
                />
                <button
                  type="submit"
                  className="uppercase mt-14 bg-btnbg py-4 px-6 w-full"
                >
                  Invite Now
                </button>
              </div>
            </div>
            <div className="box-3 bg-[#06042A] p-5 md:w-4/12 m-5 ">
              <p className="text-30 text-center">Your Earnings</p>
              <p className="text-40 text-center">4000,15 PLV</p>
              <button
                type="submit"
                className="uppercase mt-14 bg-btnbg py-4 px-6 w-full"
              >
                CLAIM
              </button>
            </div>
          </div>
          <div>
            <img
              className="absolute lg:block md:hidden sm:hidden -right-16 bottom-0 w-36 h-52"
              src="/images/gold-bag.png"
            />
          </div>
        </div>
        {/* or div */}
        <div className="or-div-wrap mt-20 mb-14">
          <div className="flex items-center justify-center">
            <div className="div-ors"></div>
            <p className="text-white mx-2">OR</p>
            <div className="div-ors"></div>
          </div>
        </div>
        {/* share your referrals link section */}
        <div>
          <div className="flex items-center justify-center">
            <div className="box-2 bg-[#0D0A3A] p-5 w-4/6 m-5 rounded-md ">
              <p className="text-30 text-center">Share your referrals link</p>
              <div className="text">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autoComplete="text"
                  required
                  className="my-3 bg-themeColor border border-[#0D0A3A] text-white sm:text-sm  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  placeholder="https://www.deioheieheuhcjehehih.comjdihihd"
                />
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center uppercase mt-14 text-center bg-btnbg  rounded-lg py-4 px-6 w-1/2"
                  >
                    <span>
                      <AiOutlineLink className="w-5 h-5 mr-1" />
                    </span>
                    <span>Copy link</span>
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
                  className="inline-block text-xl md:text-3xl text-black bg-white p-4 rounded-full hover:text-btnbg"
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
