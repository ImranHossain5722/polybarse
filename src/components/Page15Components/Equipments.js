import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Equipments = () => {
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
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-35 font-extraBold text-white text-left mb-11">
            NFT Market
          </p>
        </div>
        <div className="searchBar-wrap">
          <div class="max-w-md mx-auto">
            <div class="relative flex items-center w-full h-full rounded-lg focus-within:shadow-lg bg-[#061E42] overflow-hidden border border-[#A2D132]">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-[55px] w-full outline-none text-sm text-white pr-8 bg-[#061E42] rounded-lg "
                type="text"
                id="search"
                placeholder="Search by name or attributes"
              />
            </div>
          </div>
        </div>
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
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                    <option value="">All Type</option>
                    <option value="for-rent">For Rent</option>
                    <option value="for-sale">For Sale</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
