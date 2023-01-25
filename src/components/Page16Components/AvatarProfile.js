import React from "react";
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
import { Link } from "react-router-dom";
import Buyland from "../buttons/buy-land";
import BuyNow from "../buttons/buy-now";

const AvatarProfile = () => {
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
      <div className="flex justify-between">
        <div className="w-2/4 pr-14">
          <img
            className="w-[500px] h-[500px] rounded-3xl"
            src="images/avatarProfile.png"
            alt="avatar profile"
          />

          {/* share social media */}
          <div className="flex items-center justify-center">
            <p className="md:text-24 font-semibold capitalize mt-5  md:mt-12">
              Share this on:
            </p>
            <div className="flex justify-center items-center gap-5 ml-4 mt-5 md:mt-12">
              {s.map((i) => (
                <a
                  href={i.link}
                  key={i.id}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-lg md:text-3xl text-black bg-white p-3 rounded-full hover:text-btnbg"
                >
                  {i.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/4 pl-14">
          <div className="">
            <p className="text-35 text-white font-extrabold">Avatar #001</p>
          </div>
          <div className="mt-4">
            <Link className="py-2 px-8 bg-[#A2D132] rounded-2xl" to="#">
              Epic
            </Link>
          </div>
          <div className="flex items-center justify-between mt-6">
            <div className="box-1">
              <div className="flex items-center mt-3">
                <p className="text-20 font-semibold uppercase">Creator</p>
                <img
                  className="w-4 h-4 ml-5"
                  src="images/check.png"
                  alt="check"
                />
              </div>
              <img
                className="w-28 h-12 mt-3"
                src="images/logoPolyVerse.png"
                alt=""
              />
            </div>
            <div className="bpx-2">
              <p className="text-20 font-semibold uppercase">Type</p>
              <div className="flex items-center mt-3">
                <p className="text-[14px] font-semibold uppercase">6/10</p>

                <img
                  className="w-3 h-3 ml-5"
                  src="images/greenCheck.png"
                  alt="check"
                />
              </div>
            </div>
            <div className="bpx-2">
              <p className="text-20 font-semibold uppercase">Stock</p>
              <div className="flex items-center mt-3">
                <p className="text-[14px] font-semibold">Head</p>
              </div>
            </div>
          </div>
          <div className="flex items-center  mt-6">
            <div className="box-1">
              <div className="mt-3">
                <p className="text-24 font-extraBold capitalize">
                  Sold By
                  <span className="text-24 text-[#4270ED] font-extraBold">
                    {" "}
                    @polyverse
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="bpx-2 ml-12">
              <p className="text-20 font-semibold uppercase">Tags</p>
              <div className="flex items-center justify-evenly mt-4">
                <div>
                  <Link
                    className="py-2 px-3 bg-[#2A2848] text-[10px] rounded-full mr-3"
                    to="#"
                  >
                    Fantacy
                  </Link>
                </div>
                <div>
                  <Link
                    className="py-2 px-3 bg-[#2A2848] text-[10px] rounded-full"
                    to="#"
                  >
                    Magic
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="priceBox mt-16">
            <div className="flex items-center">
              <p className="text-[35px] font-extraBold uppercase">
                Price:150,00
              </p>

              <img
                className="w-8 h-9 ml-4"
                src="images/priceCoin.png"
                alt="check"
              />
            </div>
          </div>
          <div>
            <BuyNow></BuyNow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;