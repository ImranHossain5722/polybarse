import React from "react";
import { IoMdMap } from "react-icons/io";

export default function Mapbtn() {
  return (
    <button className="inline-flex items-center text-xs sm:text-sm lg:text-18 font-semibold border-2 border-btnBorder text-btnText rounded-full px-4 md:px-6 py-2 lg:px-8 lg:py-3 uppercase hover:bg-btnBorder hover:text-white transition">
      <span>discover the map</span>
      <span className="text-18 lg:text-2xl ml-2">
        <IoMdMap />
      </span>
    </button>
  );
}
