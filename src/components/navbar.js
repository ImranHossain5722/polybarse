import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import PlaynowBtn from "./buttons/playnow-btn";
import Container from "./container";
import SigninBtn from "./buttons/signin";
// custom hook
import useWindowsize from "../hooks/useWindowsize";
import useFreezescroll from "../hooks/useFreezescroll";
import SignUp from "../pages/SignUp/signUp";

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
    <nav className="fixed top-0 z-30 w-full py-2 md:py-4 lg:py-8" id="navbar">
      <Container className="max-w-[1200px]">
        <div className="flex justify-between items-center text-white">
          <div className="max-w-[103px] sm:max-w-[143px] w-full transition-all">
            <Link to="/" className="block">
              <img src={logo} alt="icon" />
            </Link>
          </div>
          <AnimatePresence>{mobileNav && <List />}</AnimatePresence>
          <div className="flex flex-shrink-0 items-center">
            <SignUp></SignUp>
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
function List() {
  return (
    <motion.div
      className="fixed top-[57px] sm:top-[74px] w-full h-full bg-themeColor md:bg-transparent pt-16 md:pt-0 md:static md:flex md:items-center"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <ul className="w-full px-5 md:flex md:justify-center md:items-center">
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicon.svg" alt="icon" className="w-6 mr-2" />
            Market
          </Link>
        </li>
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicontwo.svg" alt="icon" className="w-6 mr-2" />
            Whitepaper
          </Link>
        </li>
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
