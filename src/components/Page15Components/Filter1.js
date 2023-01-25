import React, { useState } from "react";
import { Link } from "react-router-dom";

const Filter1 = () => {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    buyNow: false,
    ourAuction: false,
    head: false,
    body: false,
    arms: false,
    legs: false,
    generic: false,
  });

  const { buyNow, ourAuction, head, body, arms, legs, generic } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {
    setCheck({
      ...check,
      buyNow: false,
      ourAuction: false,
      head: false,
      body: false,
      arms: false,
      legs: false,
      generic: false,
    });
  };

  return (
    <div className="">
      <div
        id="filterSection"
        className={
          "relative w-full h-full" + (showFilters ? "block" : "hidden")
        }
      >
        {/* Status */}
        <div className="status px-1 md:px-6">
          <div className=" flex space-x-2">
            <p className="text-20 font-semibold text-white pt-4">Status</p>
          </div>
          <div className=" mt-8 grid grid-cols-1">
            <div className="checkbox-buyNow">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Buy Now </p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="buyNow"
                  value="buyNow"
                  checked={buyNow}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>

            <div className="checkbox-buyNow">
              <label class="main">
                <p className="text-[15px] font-medium text-white">
                  Our Auction
                </p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="ourAuction"
                  value="ourAuction"
                  checked={ourAuction}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>
          </div>
        </div>
        {/* Type box */}
        <div className="type mt-5 px-1 md:px-6">
          <div className=" flex space-x-2">
            <p className="text-20 font-semibold text-white pt-4">Type</p>
          </div>
          <div className=" mt-8 grid grid-cols-1 gap-y-3 flex-wrap">
            <div className="checkbox-Head">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Head </p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="head"
                  value="head"
                  checked={head}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>

            <div className="checkbox-body">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Body</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="body"
                  value="body"
                  checked={body}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>
            <div className="checkbox-arms">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Arms</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="arms"
                  value="arms"
                  checked={arms}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>
            <div className="checkbox-legs">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Legs</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="legs"
                  value="legs"
                  checked={legs}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>
            <div className="checkbox-generic">
              <label class="main">
                <p className="text-[15px] font-medium text-white">Generic</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="generic"
                  value="generic"
                  checked={generic}
                  onChange={changeHandler}
                />
                <span class="geekmark"></span>
              </label>
            </div>
          </div>
        </div>
        {/* price button */}
        <div className="pb-10">
          <div className=" flex space-x-2">
            <p className="text-20 font-semibold text-white pt-4  px-1 md:px-6">
              Price
            </p>
          </div>
          <div className="flex items-center justify-around mt-4">
            <div>
              <Link
                className="py-2 px-3 border border-[#497bee] rounded-full"
                to="#"
              >
                Min
              </Link>
            </div>
            <div>
              <p>To</p>
            </div>
            <div>
              <Link
                className="py-2 px-3 border border-[#497bee] rounded-full"
                to="#"
              >
                Max
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter1;
