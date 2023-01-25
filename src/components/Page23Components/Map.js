import React from "react";
import MapFilter from "./MapFilter";

const Map = () => {
  return (
    <div>
      <div className="flex">
        <div className=" w-full md:w-[200px] h-full bg-[#061E42] rounded-5">
          <div className="category-wrap">
            {/* category*/}
            <MapFilter />
          </div>
        </div>

        <div className="w-[931px] ml-9">
          <img src="images/map (2).png" />
        </div>
      </div>
    </div>
  );
};

export default Map;
