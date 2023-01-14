import React from "react";
import { Link } from "react-router-dom";
import Container from "../container";
import { TabGroup } from "@statikly/funk";
import greenshapbg from "../../images/green-shap.png";
import Popup from "../animations/popup";
import rightshap from "../../images/shapeseven.png";

const InventoryTab = () => {
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
            <Link to="#" className="capitalize text-white text-30">
              Inventory
            </Link>
          </div>

          {/* tab items */}
          <div className="tab-wrap my-12 ">
            <div className="flex flex-col justify-center">
              <TabGroup numTabs={3} direction={TabGroup.direction.HORIZONTAL}>
                {/* tab header */}
                <TabGroup.TabList className="bg-[#322F6F] ">
                  <TabGroup.Tab
                    index={0}
                    className="h-12 px-12 transition-colors duration-150 uppercase"
                    activeClassName="text-white bg-black"
                    inactiveClassName="text-white"
                  >
                    All
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={1}
                    className="h-12 px-12 transition-colors duration-150 uppercase"
                    activeClassName="bg-black text-white"
                    inactiveClassName="text-white"
                  >
                    Avatar
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={2}
                    className="h-12 px-12 transition-colors duration-150 uppercase"
                    activeClassName="bg-black text-white"
                    inactiveClassName="text-white"
                  >
                    Equipments
                  </TabGroup.Tab>
                  <TabGroup.Tab
                    index={3}
                    className="h-12 px-12 transition-colors duration-150 uppercase"
                    activeClassName="bg-black text-white"
                    inactiveClassName="text-white"
                  >
                    Land
                  </TabGroup.Tab>
                </TabGroup.TabList>

                {/* tab body */}
                <TabGroup.TabPanel
                  index={0}
                  className="p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img className="w-52 h-52" src={i.img} alt="" />
                        <div className="bt-2 flex justify-center -mt-5">
                          <Link
                            to="#"
                            className="uppercase text-white text-sm bg-btnbg rounded-3xl py-3 px-10"
                          >
                            CLAIM NFT
                          </Link>
                        </div>
                        <p className="text-24 mt-5">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 ">By {i.author}</p>
                          <img className="w-4 h-4 ml-5" src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={1}
                  className="p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img className="w-52 h-52" src={i.img} alt="" />

                        <p className="text-24 mt-5">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 ">By {i.author}</p>
                          <img className="w-4 h-4 ml-5" src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={2}
                  className="p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img className="w-52 h-52" src={i.img} alt="" />
                        <p className="text-24 mt-5">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 ">By {i.author}</p>
                          <img className="w-4 h-4 ml-5" src={i.img2} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabGroup.TabPanel>

                <TabGroup.TabPanel
                  index={3}
                  className="p-16 transition-all transform"
                  activeClassName="opacity-100 duration-500 translate-x-0"
                  inactiveClassName="absolute opacity-0 -translate-x-2"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {s.map((i) => (
                      <div className="mb-10 ">
                        <img className="w-52 h-52" src={i.img} alt="" />
                        <p className="text-24 mt-5">
                          {i.name} {i.number}{" "}
                        </p>
                        <div className="flex items-center mt-3">
                          <p className="text-18 ">By {i.author}</p>
                          <img className="w-4 h-4 ml-5" src={i.img2} alt="" />
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
