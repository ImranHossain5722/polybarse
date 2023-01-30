import React, { useState } from "react";
import "../../components/buttons/button.css";
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
import PlaceBid from "../buttons/PlaceBid";

import Sell from "../PopUp/Sell";
import Transfer from "../PopUp/Transfer";
import Auction from "../PopUp/Auction";

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
  const [transfer, setTransfer] = useState(false);
  const [auction, setAuction] = useState(false);
  const [sell, setSell] = useState(false);
  return (
    <div className="mt-[110px]">
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
            <p className="text-35 text-white font-abold">Avatar #001</p>
          </div>
          <div className="mt-4">
            <Link
              className="py-2 px-10 text-18 bg-[#A2D132] rounded-2xl"
              to="#"
            >
              Epic
            </Link>
          </div>
          <div className="flex items-center gap-20 mt-6">
            <div className="box-1">
              <div className="flex items-center mt-3">
                <p className="text-20 font-semibold uppercase">Creator</p>
                <img
                  className="w-4 h-4 ml-2"
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
              <p className="text-20 font-semibold uppercase">Stock</p>
              <div className="flex items-center mt-3">
                <p className="text-[14px] font-semibold uppercase">6/10</p>

                <img
                  className="w-3 h-3 ml-2"
                  src="images/greenCheck.png"
                  alt="check"
                />
              </div>
            </div>
            <div className="bpx-2">
              <p className="text-20 font-semibold uppercase">Type</p>
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
          <div className="button-wrap mt-6">
            <div className="flex justify-start gap-6">
              <button
                onClick={() => {
                  setAuction(!auction);
                }}
                className=" flex gap-3 text-18 font-bold text-white  border-2 border-[#497BEE] py-4 px-9 rounded-full button-hero uppercase"
              >
                <img className="w-4" src="images/axe.png" alt="axe" />
                AUCTION
              </button>

              <button
                onClick={() => {
                  setTransfer(!transfer);
                }}
                className=" flex gap-3 text-18 font-bold text-white border-2 border-[#497BEE] py-4 px-9 rounded-full button-hero uppercase"
              >
                <img className="w-4 " src="images/transfer 448.png" alt="axe" />
                Transfer
              </button>
            </div>
            {transfer && <Transfer setTransfer={setTransfer} />}
            {auction && <Auction setAuction={setAuction} />}
            {sell && <Sell setSell={setSell} />}
          </div>
          <div>
            <button
              onClick={() => setSell(!sell)}
              className="inline-flex items-center text-xs sm:text-sm lg:text-18 border-2 border-[#497BEE] font-semibold font-inter px-3 md:px-7 py-2  bg-[#497BEE] hover:bg-transparent rounded-full lg:px-44 lg:py-3 uppercase text-center mt-8 button-hero"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
