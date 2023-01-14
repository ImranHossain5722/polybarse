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
        <div>
          {/* tab items */}
          <div className="tab-wrap my-12 ">
            <div className="flex flex-col justify-center">
              <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                {/* tab header */}
                <TabGroup.TabList className="bg-[#100E4F] w-[750px] ">
                  <TabGroup.Tab
                    index={0}
                    className="h-12 px-7 text-[12px] transition-colors duration-150 uppercase border-r-4 border-[#534F9C] "
                    activeClassName="text-white border-b-2 border-btnbg"
                    inactiveClassName="text-white"
                  >
                    <div className="">Select your avatar</div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={1}
                    className="h-12 px-20 text-[12px] text-center transition-colors duration-150 uppercase border-r-4 border-[#534F9C] "
                    activeClassName="text-white "
                    inactiveClassName="text-white"
                  >
                    <div className="relative">
                      <div className=" absolute -top-11 bottom-0 -left-5 right-0 w-[80px] ">
                        <p className="text-white text-[8px] text-center uppercase bg-red-700 p-2 rounded-md">
                          coming soon
                        </p>
                      </div>
                      Shop
                    </div>
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={2}
                    className="h-12 px-20 text-[12px] text-center transition-colors duration-150 uppercase "
                    activeClassName="text-white "
                    inactiveClassName="text-white"
                  >
                    <div className="relative">
                      <div className=" absolute -top-11 bottom-0 -left-5 right-0 w-[80px] ">
                        <p className="text-white text-[8px] text-center uppercase bg-red-700 p-2 rounded-md">
                          coming soon
                        </p>
                      </div>
                      Configure
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
                  <div className=" md:flex items-center justify-between my-[105px] gap-4">
                    <div className=" grid grid-cols-1 md:grid-cols-3  bg-[#322F6F] w-full md:w-1/2 h-[475px] p-3 overflow-x-scroll">
                      {s.map((i) => (
                        <div className="my-1 flex justify-center hover:bg-[#282561]  ">
                          <img className="w-28 h-28" src={i.img} alt="" />
                        </div>
                      ))}
                    </div>

                    <div className="boxPlay w-full md:w-1/2">
                      <img
                        className="p-3 w-[460px] h-[423px]"
                        src="/images/avatar3.png"
                        alt="play"
                      />
                    </div>
                  </div>
                  <div className="bt-2 my-12 flex justify-center">
                    <Link
                      to="#"
                      className="uppercase text-white text-sm bg-btnbg rounded-3xl py-3 px-10"
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
