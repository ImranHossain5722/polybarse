import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MapFilter.css";

const MapFilter = () => {
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    forSale: false,
    premium: false,
    sold: false,
    body: false,
    xl: false,
    xxxl: false,
    xxxxxxl: false,
    twintyFourXtwintyFour: false,
  });

  const {
    forSale,
    Premium,
    sold,
    body,
    xl,
    xxxl,
    xxxxxxl,
    twintyFourXtwintyFour,
  } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {
    setCheck({
      ...check,
      forSale: false,
      Premium: false,
      sold: false,
      body: false,
      xl: false,
      xxxl: false,
      xxxxxxl: false,
      twintyFourXtwintyFour: false,
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
        {/* availability */}
        <div className="availability px-1 md:px-6">
          <div>
            <p className="text-20 md:text-35 font-extraBold text-white text-left  pt-5">
              Map
            </p>
          </div>
          <div className=" flex space-x-2">
            <p className="text-20 font-semibold text-white pt-4">
              Availability
            </p>
          </div>
          <div className=" mt-2 grid grid-cols-1">
            <div className="checkbox-buyNow">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">For Sale </p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="forSale"
                  value="forSale"
                  checked={forSale}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>

            <div className="checkbox-buyNow">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">Premium</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="premium"
                  value="premium"
                  checked={Premium}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>
            <div className="checkbox-buyNow">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">Sold</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 "
                  name="sold"
                  value="sold"
                  checked={sold}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>
          </div>
        </div>
        {/* size */}
        <div className="size mb-5 px-1 md:px-6">
          <div className=" flex space-x-2">
            <p className="text-20 font-semibold text-white pt-2">Size</p>
          </div>
          <div className=" mt-2 grid grid-cols-1">
            <div className="checkbox-Head">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">1x1</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="xl"
                  value="xl"
                  checked={xl}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>

            <div className="checkbox-body">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">3x3</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="xxxl"
                  value="xxxl"
                  checked={xxxl}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>
            <div className="checkbox-arms">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">6x6</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="xxxxxxl"
                  value="xxxxxxl"
                  checked={xxxxxxl}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>
            <div className="checkbox-legs">
              <label class="mains">
                <p className="text-[15px] font-medium text-white">24x24</p>
                <input
                  type="checkbox"
                  className="w-4 h-4 mr-2"
                  name="twintyFourXtwintyFour"
                  value="twintyFourXtwintyFour"
                  checked={twintyFourXtwintyFour}
                  onChange={changeHandler}
                />
                <span
                  class="geekmarks
"
                ></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapFilter;
