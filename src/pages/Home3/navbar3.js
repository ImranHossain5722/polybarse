import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import PlaynowBtn from "../../components/buttons/playnow-btn";

// custom hook
import useWindowsize from "../../hooks/useWindowsize";
import useFreezescroll from "../../hooks/useFreezescroll";
import Login from "../Login/Login";
import Container from "../../components/container";
import NavePopUp from "../../components/PopUp/NavePopUp";
import BlancePopUp from "../../components/PopUp/BlancePopUp";

export default function Navbar3() {
  const [setFreezescroll] = useFreezescroll();
  const width = useWindowsize();
  const [mobileNav, setMobileNav] = useState(false);
  const [showNavPopup, setShowNavPopUp] = useState(false);
  const [showBlancePopup, setShowBlancePopUp] = useState(false);
  useEffect(() => {
    if (width < 769) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  }, [width]);

  return (
    <nav
      className="fixed top-0 z-30 w-full py-2 md:py-4 lg:py-8 mt-40"
      id="navbar"
    >
      <Container className="max-w-[1200px]">
        <div className="flex justify-between items-center text-white">
          <div className="max-w-[103px] sm:max-w-[143px] w-full transition-all">
            <Link to="/" className="block">
              <img src={logo} alt="icon" />
            </Link>
          </div>
          <AnimatePresence>{mobileNav && <List />}</AnimatePresence>
          <div className="flex items-center gap-[10px]">
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowBlancePopUp(!showBlancePopup);
              }}
            >
              <img
                className="w-[35px] md:w-[60px] h-[35px] md:h-[45px]"
                src="images/singleCoin.png"
                alt="coin"
              />
              {showBlancePopup && (
                <BlancePopUp setShowBlancePopUp={setShowBlancePopUp} />
              )}
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setShowNavPopUp(!showNavPopup);
              }}
            >
              <img
                className="rounded-full w-[35px] md:w-[60px] h-[35px] md:h-[45px]"
                src="images/tol.png"
                alt="User Profile"
              />
              {showNavPopup && <NavePopUp setShowNavPopUp={setShowNavPopUp} />}
            </div>
            <div className="relative">
              <img
                className="w-[35px] md:w-[60px] h-[35px] md:h-[45px]"
                src="images/cart.svg"
                alt="User Profile"
              />
              <div className="flex items-center justify-center absolute -top-[10px] left-[30px] w-7 h-7 bg-[#D62121] rounded-full border-1 border-[#98D8E2]">
                <p className="text-white text-20 text-center ">3</p>
              </div>
            </div>
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
      <ul className="w-full px-5 md:flex md:justify-center md:items-center ">
        <li className="py-3 md:py-0 md:px-5">
          <Link
            to="/"
            className="flex items-center font-extraBold tracking-wide hover:text-btnbg"
          >
            <img src="/images/navicon.svg" alt="icon" className="w-6 mr-2" />
            Marketss
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
