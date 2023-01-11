import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./container";
import { FaFacebookF, FaTiktok, FaDiscord, FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import classNames from "classnames";

export default function Footer() {
  const [state, setState] = useState(false);
  return (
    <footer className="py-10 pt-32 md:pt-32 flex relative">
      <div className="absolute inset-0">
        <img
          src="/images/footerbgshape.png"
          alt="shape"
          className="object-cover md:object-fill"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full h-10 bg-bgblur bg-opacity-50 blur-[127px]"></div>
      <Container className="max-w-[1200px] text-center z-10">
        <div className="flex flex-wrap gap-5 justify-center items-center md:text-xl font-semibold capitalize">
          <Link
            to="/"
            className="hover:text-btnbg"
          >
            marketplace
          </Link>
          <span>|</span>
          <Link
            to="/"
            className="hover:text-btnbg"
          >
            Audit
          </Link>
          <span>|</span>
          <Link
            to="/"
            className="hover:text-btnbg"
          >
            Whitepaper
          </Link>
          <span>|</span>
          <Link
            to="/"
            className="hover:text-btnbg"
          >
            persale
          </Link>
          <span>|</span>
          <Link
            to="/"
            className="hover:text-btnbg"
          >
            download
          </Link>
        </div>
        <div className="mt-10">
          <p className="md:text-xl font-semibold">Get the Newsletter</p>
          <div
            className={classNames(
              "border-2 bg-white max-w-[600px] w-full m-auto p-[5px] rounded-5 flex justify-between items-center mt-8 transition-all duration-300",
              state ? "border-btnbg" : "border-transparent"
            )}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="border-none outline-none focus:outline-none text-sm font-normal placeholder:text-inputplaceholder text-themeColor w-full h-full pl-2 md:p-5"
              onFocus={() => setState(!state)}
              onBlur={() => setState(!state)}
            />
            <button className="text-sm py-2 px-4 md:py-4 md:px-8 bg-btnbg rounded-5 font-bold capitalize tracking-wide hover:bg-opacity-90">
              subscribe
            </button>
          </div>
        </div>
        <p className="md:text-xl font-semibold capitalize mt-5 md:mt-8">follow us</p>
        <div className="flex justify-center items-center gap-5 mt-5 md:mt-8">
          {s.map((i) => (
            <a
              href={i.link}
              key={i.id}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xl md:text-3xl hover:text-btnbg"
            >
              {i.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

// social media array
const s = [
  {
    id: window.crypto.randomUUID(),
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    id: window.crypto.randomUUID(),
    icon: <AiOutlineInstagram />,
    link: "https://instagram.com",
  },
  {
    id: window.crypto.randomUUID(),
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com",
  },
  {
    id: window.crypto.randomUUID(),
    icon: <FaTiktok />,
    link: "https://tiktok.com",
  },
  {
    id: window.crypto.randomUUID(),
    icon: <AiOutlineYoutube />,
    link: "https://youtube.com",
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
