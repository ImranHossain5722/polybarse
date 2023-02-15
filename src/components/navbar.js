import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import PlaynowBtn from "./buttons/playnow-btn";
import Container from "./container";
// custom hook
import useWindowsize from "../hooks/useWindowsize";
import useFreezescroll from "../hooks/useFreezescroll";
import Login from "../pages/Login/Login";

export default function Navbar() {
  const [setFreezescroll] = useFreezescroll();
  const width = useWindowsize();
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    if (width < 769) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  }, [width]);

  return (
    <nav className="fixed top-0 z-50 w-full py-2 md:py-4 lg:py-8" id="navbar">
      <Container className="max-w-[1200px]">
        <div className="flex justify-between items-center text-white">
          <div className="max-w-[103px] sm:max-w-[143px] w-full transition-all">
            <Link to="/" className="block">
              <img src={logo} alt="icon" />
            </Link>
          </div>
          <AnimatePresence>
            {mobileNav && (
              <List
                setMobileNav={setMobileNav}
                mobileNav={mobileNav}
                setFreezescroll={setFreezescroll}
              />
            )}
          </AnimatePresence>
          <div className="flex flex-shrink-0 items-center">
            <Login></Login>
            <div className="hidden sm:block ml-5">
              <PlaynowBtn texthidden={true} />
            </div>
            {/* mobile menu  */}
            <button
              className="border-none outline-none text-3xl ml-4 md:hidden"
              onClick={() => {
                setMobileNav(!mobileNav);
                setFreezescroll(!mobileNav);
              }}
            >
              {mobileNav ? <IoMdClose /> : <HiOutlineBars2 />}
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

// topnav links with subscribe button
function List({ mobileNav, setMobileNav, setFreezescroll }) {
  return (
    <motion.div
      className="fixed top-[57px] sm:top-[74px] w-full h-full bg-themeColor border-t-1 border-[#1F5885] md:border-t-0 md:bg-transparent pt-1 md:pt-0 md:static md:flex md:items-center"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {/* desktop menu */}
      <ul className="w-full px-5 hidden md:flex md:justify-center md:items-center ">
        {/* mobile view hidden */}
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicon.svg" alt="icon" className="w-6 mr-2" />
            Market
          </Link>
        </li>
        {/* mobile view hidden */}
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicontwo.svg" alt="icon" className="w-6 mr-2" />
            Whitepaper
          </Link>
        </li>
        {/* mobile view hidden */}
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img
              src="/images/naviconthree.svg"
              alt="icon"
              className="w-6 mr-2"
            />
            Staking
          </Link>
        </li>
      </ul>
      {/* Only mobile view */}
      <ul
        className="block md:hidden pl-3 "
        onClick={() => {
          setMobileNav(!mobileNav);
          setFreezescroll(!mobileNav);
        }}
      >
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="/page9" className="">
            <div className="flex items-center gap-2 ">
              <img className="w-5 h-5" src="images/game.png" alt="play" />
              <p className="text-18 capitalize text-white  font-extraBold ">
                Play
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="/page12" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/cup.png" alt="play" />
              <p className="text-18 capitalize text-white  font-extraBold">
                Rewards
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5  hover:text-btnbg">
          <Link to="/page13" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/tofe.png" alt="play" />
              <p className="text-18 capitalize text-white  font-extraBold">
                Leaderboard
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="/page14" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/Group 276.png" alt="play" />
              <p className="text-18 capitalize text-white  font-extraBold">
                market
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="/page20" className="">
            <div className="flex items-center gap-2 ">
              <img className="w-5 h-5" src="images/Group 277.png" alt="play" />
              <p className="text-18 capitalize text-white font-extraBold">
                Staking
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="/page22" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/Group (1).png" alt="play" />
              <p className="text-18 capitalize text-white font-extraBold">
                Polycard
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="nothing" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/map.png" alt="play" />
              <p className="text-18 capitalize text-white font-extraBold">
                Map
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5 hover:text-btnbg">
          <Link to="empty" className="">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5" src="images/bookCheck.png" alt="play" />
              <p className="text-18 capitalize text-white font-extraBold">
                Guide
              </p>
            </div>
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicontwo.svg" alt="icon" className="w-6 mr-2" />
            <p className="text-18 capitalize text-white font-extraBold">
              {" "}
              Whitepaper{" "}
            </p>
          </Link>
        </li>
      </ul>
      {/* Only mobile view end*/}
    </motion.div>
  );
}

// mobile menu animation from left
const variants = {
  exit: {
    left: "-100%",
    transition: {
      type: "easeInOut",
      duration: 0.4,
    },
  },
  enter: {
    left: 0,
    transition: {
      type: "easeInOut",
      duration: 0.4,
    },
  },
};
