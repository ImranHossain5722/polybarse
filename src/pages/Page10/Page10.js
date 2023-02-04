import React from "react";
import { Link, NavLink } from "react-router-dom";
import Popup from "../../components/animations/popup";
import Container from "../../components/container";
import greenshapbg from "../../images/green-shap.png";
import rightshap from "../../images/redShape.png";

const Page10 = () => {
  const activeLink =
    "border-b-2 border-[#D75D29] text-white pb-[16px] w-[100px]";
  const normalLink = "";
  return (
    <div>
      <div className=" hidden md:block absolute max-w-xl -left-44 top-0 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <div className=" hidden md:block absolute max-w-xl -left-0 top-2/4 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <div className=" hidden md:block absolute max-w-3xl right-0  top-80 -translate-y-[45%] -z-10">
        <img
          src="/images/rifgtDotts.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/3 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-1/3 w-32  z-10">
        <img src={rightshap} alt="shape" />
      </Popup>

      <Container className="max-w-[1200px]">
        {/* nav */}
        <section className="mt-40">
          <div className="w-full h-full md:h-[63px] bg-[#100E4F] rounded-5 font-bold   flex flex-col md:flex-row gap-14 px-9 py-6 overflow-hidden ">
            {/* nav1 */}

            <NavLink
              to="/page9"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2 ">
                <img className="w-5 h-5" src="images/game.png" alt="play" />
                <p className="uppercase text-white text-[12px] font-bold">
                  Play
                </p>
              </div>
            </NavLink>

            {/* nav-2 */}

            <NavLink
              to="/page12"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src="images/cup.png" alt="play" />
                <p className="uppercase text-white text-[12px] font-bold">
                  Rewards
                </p>
              </div>
            </NavLink>

            {/* nav-3 */}

            <NavLink
              to="/page13"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src="images/tofe.png" alt="play" />
                <p className="uppercase text-white text-[12px] font-bold">
                  Leaderboard
                </p>
              </div>
            </NavLink>

            {/* nav-4 */}

            <NavLink
              to="/page14"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  src="images/Group 276.png"
                  alt="play"
                />
                <p className="uppercase text-white text-[12px] font-bold">
                  market
                </p>
              </div>
            </NavLink>

            {/* nav-5 */}

            <NavLink
              to="/page20"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2 ">
                <img
                  className="w-5 h-5"
                  src="images/Group 277.png"
                  alt="play"
                />
                <p className="uppercase text-white text-[12px] font-bold">
                  Staking
                </p>
              </div>
            </NavLink>

            {/* nav-6 */}

            <NavLink
              to="/page22"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  src="images/Group (1).png"
                  alt="play"
                />
                <p className="uppercase text-white text-[12px] font-bold">
                  Polycard
                </p>
              </div>
            </NavLink>

            {/* nav-7 */}

            <NavLink
              to="nothing"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" src="images/map.png" alt="play" />
                <p className="uppercase text-white text-[12px] font-bold">
                  Map
                </p>
              </div>
            </NavLink>

            {/* nav-8 */}

            <NavLink
              to="empty"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  src="images/bookCheck.png"
                  alt="play"
                />
                <p className="uppercase text-white text-[12px] font-bold">
                  Guide
                </p>
              </div>
            </NavLink>
          </div>
        </section>
        {/*  */}
        <div className=" grid grid-cols-1 md:grid-cols-2  place-content-center my-[60px]">
          <div className="boxAvatar">
            <img
              className="w-full h-full md:w-[276px] md:h-[547px]"
              src="/images/avatat2.png"
              alt="avatar"
            />
            <div className="bt-2 my-12 flex items-center justify-center md:flex-none md:items-start md:justify-start ">
              <Link
                to="#"
                className="uppercase text-white text-sm font-semibold bg-btnbg rounded-3xl py-3 px-10 hover:scale-75 hover:transition duration-300  cursor-pointer"
              >
                CHOOSE YOUR AVATAR
              </Link>
            </div>
          </div>
          <div className="boxPlay mt-44 md:mt-0">
            <img
              className="w-full h-full md:w-[523px] md:h-[523px]"
              src="/images/play.png"
              alt="play"
            />

            <div className="bt-2 my-12 flex items-center justify-center">
              <Link
                to="#"
                className="uppercase flex items-center justify-center border-4 border-black text-[25px] font-extraBold text-black bg-btnBorder rounded-3xl py-3 px-10 hover:scale-75 hover:transition duration-300  cursor-pointer"
              >
                Play now
                <img
                  className="w-8 h-7"
                  src="/images/playGrernIcon.png"
                  alt="playicon"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page10;
