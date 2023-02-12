import React from "react";
import { TabGroup } from "@statikly/funk";
import Container from "../container";
import { Link } from "react-router-dom";

const ChildeNavBar = () => {
  const s = [
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/Rp1RxBZ/avatar4.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/HP74wMN/image-28.png",
    },
  ];
  return (
    <div>
      <Container className="max-w-[1200px]">
        <div className="mt-28">
          {/* tab items */}
          <div className="tab-wrap md:my-12 flex justify-center">
            <div className="flex flex-col justify-center items-center ">
              <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                {/* tab header */}
                <TabGroup.TabList className="bg-[#322F6F] w-full md:w-[720px] rounded-5 flex justify-center items-center">
                  <TabGroup.Tab
                    index={0}
                    className="w-full h-full md:h-12 md:px-7 text-[12px] transition-colors duration-150 uppercase md:border-r-4 border-[#534F9C] py-3 "
                    activeClassName="text-white border-b-2 border-btnb focus:outline-none"
                    inactiveClassName="text-white"
                  >
                    <div className="text-[12px] font-extraBold">
                      Select your avatar
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={1}
                    className="w-full h-full md:h-12 md:px-20 text-[12px] text-center transition-colors duration-150 uppercase md:border-r-4  border-[#534F9C]  "
                    activeClassName="text-white"
                    inactiveClassName="text-white"
                  >
                    <div className="relative">
                      <div className=" absolute -top-[48px] md:-top-[40px] bottom-0 left-[23px] md:left-5 right-0 w-[80px] ">
                        <p className="text-white text-[8px] text-center uppercase bg-red-700 p-2 rounded-md">
                          coming soon
                        </p>
                      </div>
                      <p className="text-[12px] font-extraBold">Shop</p>
                    </div>
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={2}
                    className="w-full h-full md:h-12 md:px-20 text-[12px] text-center transition-colors duration-150 uppercase"
                    activeClassName="text-white "
                    inactiveClassName="text-white"
                  >
                    <div className="relative">
                      <div className=" absolute -top-[48px] md:-top-[40px] bottom-0 left-[23px] md:left-[15px] right-0 w-[80px] ">
                        <p className="text-white text-[8px] text-center uppercase bg-red-700 p-2 rounded-md">
                          coming soon
                        </p>
                      </div>
                      <p className="text-[12px]  font-extraBold -ml-[14px]md:-ml-0">
                        Configure
                      </p>
                    </div>
                  </TabGroup.Tab>
                </TabGroup.TabList>

                {/* tab body */}
                <TabGroup.TabPanel
                  index={0}
                  className="md:p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="flex items-center justify-center mt-[10px] md:my-[60px] gap-1 md:gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3  bg-[#322F6F] w-full md:w-1/2 h-[475px] md:p-3 overflow-x-auto  scrollbar-thin scrollbar-h-4  scrollbar-track-[#6F81C7] scrollbar-thumb-[#06042B] scrollbar-track-rounded-15 scrollbar-thumb-rounded-15">
                      {s.map((i) => (
                        <div className="my-1 flex justify-center hover:bg-[#282561]  ">
                          <img className="w-28 h-28" src={i.img} alt="" />
                        </div>
                      ))}
                    </div>

                    <div className="boxPlay w-full md:w-1/2">
                      <img
                        className="md:p-3 w-full h-full md:w-[460px] md:h-[423px] mt-5 md:mt-0"
                        src="/images/avatar3.png"
                        alt="play"
                      />
                    </div>
                  </div>
                  <div className="bt-2 my-12 flex justify-center">
                    <Link
                      to="#"
                      className="uppercase text-white text-20 bg-btnbg rounded-3xl py-3 px-24 md:px-10 hover:scale-75 hover:transition duration-300  cursor-pointer font-extraBold"
                    >
                      CONFIRM
                    </Link>
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={1}
                  className="md:p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="flex items-center justify-center mt-[10px] md:my-[60px] gap-1 md:gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3  bg-[#322F6F] w-full md:w-1/2 h-[475px] p-3 overflow-x-auto  scrollbar-thin scrollbar-h-4  scrollbar-track-[#6F81C7] scrollbar-thumb-[#06042B] scrollbar-track-rounded-15 scrollbar-thumb-rounded-15">
                      {s.map((i) => (
                        <div className="my-1 flex justify-center hover:bg-[#282561]  ">
                          <img className="w-28 h-28" src={i.img} alt="" />
                        </div>
                      ))}
                    </div>

                    <div className="boxPlay w-full md:w-1/2">
                      <img
                        className="md:p-3 w-full h-full md:w-[460px] md:h-[423px] mt-5 md:mt-0"
                        src="/images/avatar3.png"
                        alt="play"
                      />
                    </div>
                  </div>
                  <div className="bt-2 my-12 flex justify-center">
                    <Link
                      to="#"
                      className="uppercase text-white text-20 bg-btnbg rounded-3xl py-3 px-24 md:px-10 hover:scale-75 hover:transition duration-300  cursor-pointer font-extraBold"
                    >
                      CONFIRM
                    </Link>
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={2}
                  className="md:p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="flex items-center justify-center mt-[10px] md:my-[60px] gap-1 md:gap-4">
                    <div className=" grid grid-cols-1 md:grid-cols-3  bg-[#322F6F] w-full md:w-1/2 h-[475px] p-3 overflow-x-auto  scrollbar-thin scrollbar-h-4  scrollbar-track-[#6F81C7] scrollbar-thumb-[#06042B] scrollbar-track-rounded-15 scrollbar-thumb-rounded-15">
                      {s.map((i) => (
                        <div className="my-1 flex justify-center hover:bg-[#282561]  ">
                          <img className="w-28 h-28" src={i.img} alt="" />
                        </div>
                      ))}
                    </div>

                    <div className="boxPlay w-full md:w-1/2">
                      <img
                        className="md:p-3 w-full h-full md:w-[460px] md:h-[423px] mt-5 md:mt-0"
                        src="/images/avatar3.png"
                        alt="play"
                      />
                    </div>
                  </div>
                  <div className="bt-2 my-12 flex justify-center">
                    <Link
                      to="#"
                      className="uppercase text-white text-20 bg-btnbg rounded-3xl py-3 px-20 md:px-10 hover:scale-75 hover:transition duration-300  cursor-pointer font-extraBold"
                    >
                      CONFIRM
                    </Link>
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

export default ChildeNavBar;
