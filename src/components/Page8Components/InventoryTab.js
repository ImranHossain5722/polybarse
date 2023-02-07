import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../container";
import { TabGroup } from "@statikly/funk";
import greenshapbg from "../../images/green-shap.png";
import Popup from "../animations/popup";
import rightshap from "../../images/shapeseven.png";

const InventoryTab = () => {
  const activeLink =
    "border-b-2 border-[#D75D29] text-white pb-[35px] w-[100px]";
  const normalLink = "";
  const s = [
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/dkc3pTF/1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/s5g7rGw/2-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/r0c2tbh/3-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/wdV3Tgg/Rectangle-18.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/MGcSDmP/Rectangle-18-1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/VwwKMjD/Rectangle-18-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/VwwKMjD/Rectangle-18-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/r0c2tbh/3-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/dkc3pTF/1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/MGcSDmP/Rectangle-18-1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
  ];
  return (
    <div>
      <div className=" hidden md:block absolute max-w-xl -left-32 top-1/4 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <div className=" hidden md:block absolute max-w-xl -right-32  top-1/4 -translate-y-[45%] -z-10">
        <img
          src="/images/rightbg.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/4 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-[580px] w-32  z-10">
        <img src={rightshap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div>
          {/* button */}

          <div className="bt-1 mt-28">
            <Link
              to="#"
              className="capitalize text-white text-30 font-extraBold"
            >
              Inventory
            </Link>
          </div>
          {/* tab */}
          <div className="tab-wrap mt-5 md:mt-9  flex">
            <div className="md:flex flex-col justify-center items-center ">
              <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                {/* tab header */}
                <TabGroup.TabList className="bg-[#322F6F] w-full  rounded-5 flex justify-start items-center">
                  <TabGroup.Tab
                    index={0}
                    className="w-full h-full md:h-12 px-7 text-18 transition-colors duration-150 uppercase  py-3 "
                    activeClassName="text-white border-b-2 border-[#D75D29] focus:outline-none mb-3 md:mb-0"
                    inactiveClassName="text-white"
                  >
                    <div className="text-[15px] md:text-18 font-extraBold">
                      All
                    </div>
                  </TabGroup.Tab>

                  <TabGroup.Tab
                    index={1}
                    className="w-full h-full md:h-12 px-20 text-18 text-center transition-colors duration-150 uppercase"
                    activeClassName="text-white border-b-2 border-[#D75D29]"
                    inactiveClassName="text-white"
                  >
                    <div className="">
                      <p className="text-[15px] md:text-18 font-extraBold">
                        Avatar
                      </p>
                    </div>
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={2}
                    className="w-full h-full md:h-12 px-20 text-18 text-center transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-[#D75D29]"
                    inactiveClassName="text-white"
                  >
                    <div className="">
                      <p className="text-[15px] md:text-18  font-extraBold -ml-[14px]md:-ml-0">
                        Equipments
                      </p>
                    </div>
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={3}
                    className="w-full h-full md:h-12 px-20 text-18 text-center transition-colors duration-150 uppercase "
                    activeClassName="text-white border-b-2 border-[#D75D29]"
                    inactiveClassName="text-white"
                  >
                    <div className="">
                      <p className="text-[15px] md:text-18  font-extraBold -ml-[14px]md:-ml-0">
                        Land
                      </p>
                    </div>
                  </TabGroup.Tab>
                </TabGroup.TabList>

                {/* tab body */}
                <TabGroup.TabPanel
                  index={0}
                  className="py-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0 "
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center  gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img
                          className="w-52 h-48 md:w-52 md:h-52 hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                          src={i.img}
                          alt=""
                        />
                        <p className="text-24 mt-5 font-semibold hover:text-[#497BEE] cursor-pointer">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 hover:text-[#497BEE] cursor-pointer">
                            By {i.author}
                          </p>
                          <img className="w-4 h-4 ml-2 " src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={1}
                  className="py-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0 "
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center  gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img
                          className="w-52 h-48 md:w-52 md:h-52 hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                          src={i.img}
                          alt=""
                        />
                        <p className="text-24 mt-5 font-semibold hover:text-[#497BEE] cursor-pointer">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 hover:text-[#497BEE] cursor-pointer">
                            By {i.author}
                          </p>
                          <img className="w-4 h-4 ml-2 " src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={2}
                  className="py-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0 border-b-2"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center  gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img
                          className="w-52 h-48 md:w-52 md:h-52 hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                          src={i.img}
                          alt=""
                        />
                        <p className="text-24 mt-5 font-semibold hover:text-[#497BEE] cursor-pointer">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 hover:text-[#497BEE] cursor-pointer">
                            By {i.author}
                          </p>
                          <img className="w-4 h-4 ml-2 " src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>
                <TabGroup.TabPanel
                  index={3}
                  className="py-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-content-center  gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img
                          className="w-52 h-48 md:w-52 md:h-52 hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                          src={i.img}
                          alt=""
                        />
                        <p className="text-24 mt-5 font-semibold hover:text-[#497BEE] cursor-pointer">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 hover:text-[#497BEE] cursor-pointer">
                            By {i.author}
                          </p>
                          <img className="w-4 h-4 ml-2 " src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
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

export default InventoryTab;
