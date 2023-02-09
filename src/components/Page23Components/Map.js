import React from "react";
import MapFilter from "./MapFilter";

const Map = () => {
  return (
    <div className="my-[60px]">
      <div className="md:flex">
        <div className=" w-full md:w-[200px] h-full bg-[#061E42] rounded-5">
          <div className="category-wrap">
            {/* category*/}
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
