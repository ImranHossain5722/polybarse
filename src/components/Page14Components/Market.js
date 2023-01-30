import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../container";
const Market = () => {
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
  ];
  return (
    <Container className="max-w-[1200px]">
      <div>
        <div>
          <p className="text-35 font-extraBold text-white text-left mb-11">
            Welcome to the Polyverse NFT Market
          </p>
        </div>
        <div className="flex">
          <div className=" w-full md:w-[200px] h-[250px] bg-[#061E42] rounded-5">
            <p className="text-20 font-semibold p-3">Category</p>
            <div className="category-wrap">
              <div className="h-1 w-full bg-[#203D69] mb-3"></div>
              {/* avatar */}
              <div className="avatar pl-6">
                <Link to="#" className="flex ">
                  <img
                    className="w-6 h-6"
                    src="images/monkeyAvter.png"
                    alt="avatar"
                  ></img>
                  <p className="text-white text-[15px] ml-3">Avatar</p>
                </Link>
              </div>
              {/* Equipments */}
              <div className="Equipments my-5 pl-2 md:pl-6">
                <Link to="#" className="flex  ">
                  <img
                    className="w-6 h-6"
                    src="images/equipments.png"
                    alt="avatar"
                  ></img>
                  <p className="text-white text-[15px] ml-3">Equipments</p>
                </Link>
              </div>
              {/* avatar */}
              <div className="Land my-5 pl-6">
                <Link to="#" className="flex ">
                  <img
                    className="w-6 h-6"
                    src="images/land.png"
                    alt="avatar"
                  ></img>
                  <p className="text-white text-[15px] ml-3">Land</p>
                </Link>
              </div>
              <div className="Art pl-6">
                <Link to="#" className="flex ">
                  <img
                    className="w-6 h-6"
                    src="images/Art.png"
                    alt="avatar"
                  ></img>
                  <p className="text-white text-[15px] ml-3">Art</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[931px] ml-9">
            {/* Avatars */}
            <div className="Avatars-wrap">
              <div className=" flex justify-between mb-6">
                <p className="text-30 font-semibold text-white">Avatars</p>
                <div>
                  <Link
                    className="flex items-center justify-between text-sm font-semibold hover:text-btnbg"
                    to="#"
                  >
                    Explore Category
                    <IoIosArrowForward className="mt-1 ml-2" />
                  </Link>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {s.map((i) => (
                    <div className="mb-10 ">
                      <img
                        className="w-52 h-52  hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer "
                        src={i.img}
                        alt=""
                      />
                      <p className="text-24 mt-5">
                        {i.name} {i.number}{" "}
                      </p>
                      <div className="flex items-center mt-3">
                        <p className="text-18 ">By {i.author}</p>
                        <img className="w-4 h-4 ml-2" src={i.img2} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Equipments */}
            <div className="Equipments-wrap">
              <div className=" flex justify-between mb-6">
                <p className="text-30 font-semibold text-white">Equipments</p>
                <div>
                  <Link
                    className="flex items-center justify-between text-sm font-semibold hover:text-btnbg"
                    to="#"
                  >
                    Explore Category
                    <IoIosArrowForward className="mt-1 ml-2" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {s.map((i) => (
                    <div className="mb-10 ">
                      <img
                        className="w-52 h-52  hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                        src={i.img}
                        alt=""
                      />
                      <p className="text-24 mt-5">
                        {i.name} {i.number}{" "}
                      </p>
                      <div className="flex items-center mt-3">
                        <p className="text-18 ">By {i.author}</p>
                        <img className="w-4 h-4 ml-2" src={i.img2} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Lands */}
            <div className="Lands-wrap">
              <div className=" flex justify-between mb-6">
                <p className="text-30 font-semibold text-white">Lands</p>
                <div>
                  <Link
                    className="flex items-center justify-between text-sm font-semibold hover:text-btnbg"
                    to="#"
                  >
                    Explore Category
                    <IoIosArrowForward className="mt-1 ml-2" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {s.map((i) => (
                    <div className="mb-10 ">
                      <img
                        className="w-52 h-52  hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                        src={i.img}
                        alt=""
                      />
                      <p className="text-24 mt-5">
                        {i.name} {i.number}{" "}
                      </p>
                      <div className="flex items-center mt-3">
                        <p className="text-18 ">By {i.author}</p>
                        <img className="w-4 h-4 ml-2" src={i.img2} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Market;
