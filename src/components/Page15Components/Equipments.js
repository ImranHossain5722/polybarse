import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Filter1 from "./Filter1";
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
      img: "https://i.ibb.co/wdV3Tgg/Rectangle-18.png",
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
      img: "https://i.ibb.co/s5g7rGw/2-2.png",
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
      img: "https://i.ibb.co/wdV3Tgg/Rectangle-18.png",
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
      img: "https://i.ibb.co/wdV3Tgg/Rectangle-18.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
  ];

  return (
    <div className="mt-[110px]">
      <div className="flex justify-between">
        <div>
          <p className="text-20 md:text-35 font-extraBold text-white text-left mb-11">
            NFT Market
          </p>
        </div>
        {/* search bar  */}
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
        <div className=" w-full md:w-[200px] h-full bg-[#061E42] rounded-5">
          <div className="category-wrap">
            {/* category*/}
            <Filter1 />
          </div>
        </div>

        <div className="w-[931px] ml-9">
          {/* Equipments */}
          <div className="Equipments-wrap">
            <div className=" md:flex justify-between  mb-6">
              <p className="text-18 md:text-30 font-semibold text-white">
                Equipments <span>(145)</span>
              </p>
              {/* filter  */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="mr-2 mt-2 font-semibold text-sm"> Order By</p>
                </div>
                <div class="grid grid-cols-1  gap-4 mt-4">
                  <select
                    class="px-4 py-3 w-full rounded-md bg-[#061E42] border border-[#133567]   
                   focus:bg-[#061E42] focus:ring-0 text-sm"
                  >
                    <option value="">All Type</option>
                    <option value="for-rent">For Rent</option>
                    <option value="for-sale">For Sale</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Equipments start */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {s.map((i) => (
                  <div className="mb-10 ">
                    <img
                      className="w-52 h-52  hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                      src={i.img}
                      alt=""
                    />
                    <p className="text-24 mt-5 hover:text-[#497BEE] cursor-pointer">
                      {i.name} {i.number}{" "}
                    </p>
                    <div className="flex items-center mt-3">
                      <p className="text-18 hover:text-[#497BEE] cursor-pointer">
                        By {i.author}
                      </p>
                      <img className="w-4 h-4 ml-2" src={i.img2} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Equipments end */}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
