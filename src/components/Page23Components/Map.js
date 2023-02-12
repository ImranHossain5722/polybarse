import React from "react";
import MapFilter from "./MapFilter";
import MapFilterMenu from "./MapFilterMenu";

const Map = () => {
  return (
    <div className="my-[60px]">
      <div className="md:flex">
        {/*mobile view category  */}
        <div className=" my-16 block md:hidden">
          <MapFilterMenu />
        </div>
        <div className=" w-full md:w-[200px] h-full bg-[#061E42] rounded-5">
          {/* desktop  category*/}
          <div className="category-wrap hidden md:block">
            {/* desktop  category*/}
            <MapFilter />
          </div>
        </div>

        <div className="w-full md:w-[931px] mt-5 md:mt-0 md:ml-9">
          <img src="images/map (2).png" />
        </div>
      </div>
    </div>
  );
};

export default Map;
