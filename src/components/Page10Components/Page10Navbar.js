import React from "react";
import { TabGroup } from "@statikly/funk";
import Container from "../container";
import { Link } from "react-router-dom";
import greenshapbg from "../../images/green-shap.png";
import Popup from "../animations/popup";
import rightshap from "../../images/redShape.png";

const Page10Navbar = () => {
  return (
    <div className="mt-40">
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
        <div>
          {/* tab items */}
          <div className="tab-wrap my-12 ">
            <div className="flex flex-col justify-center">
              <TabGroup numTabs={7} direction={TabGroup.direction.HORIZONTAL}>
                {/* tab header */}
                <TabGroup.TabList className="bg-[#100E4F] ">
                  <TabGroup.Tab
                    index={0}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/game.png"
                        alt="game"
                      />
                      Play
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={1}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/cup.png"
                        alt="game"
                      />
                      Rewards
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={2}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/tofe.png"
                        alt="game"
                      />
                      LeaderBoard
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={3}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/Group 276.png"
                        alt="game"
                      />
                      Market
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={4}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/Group 277.png"
                        alt="game"
                      />
                      Staking
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={5}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/bookCheck.png"
                        alt="game"
                      />
                      polycard
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={6}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/map.png"
                        alt="game"
                      />
                      Map
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={7}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        className="w-5 h-5 mr-1"
                        src="/images/bookCheck.png"
                        alt="game"
                      />
                      Guide
                    </div>
                  </TabGroup.Tab>
                </TabGroup.TabList>

                {/* tab body */}
                <TabGroup.TabPanel
                  index={0}
                  className="p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className=" md:flex items-center justify-between my-[275px]">
                    <div className="boxAvatar">
                      <img
                        className="w-[276px] h-[547px]"
                        src="/images/avatat2.png"
                        alt="avatar"
                      />
                      <div className="bt-2 my-12 flex justify-center">
                        <Link
                          to="#"
                          className="uppercase text-white text-sm bg-btnbg rounded-3xl py-3 px-10"
                        >
                          CHOOSE YOUR AVATAR
                        </Link>
                      </div>
                    </div>
                    <div className="boxPlay">
                      <img
                        className="w-[523px] h-[523px]"
                        src="/images/play.png"
                        alt="play"
                      />

                      <div className="bt-2 my-12 flex items-center justify-center">
                        <Link
                          to="#"
                          className="uppercase flex items-center justify-center text-black border-2 border-black  text-sm font-bold bg-btnBorder rounded-3xl py-3 px-10"
                        >
                          Play now
                          <img
                            className="w-7 h-7"
                            src="/images/playGrernIcon.png"
                            alt="playicon"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabGroup.TabPanel>
              </TabGroup>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page10Navbar;
