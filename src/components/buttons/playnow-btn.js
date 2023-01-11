import React from "react";
import { BsPlayFill } from "react-icons/bs";

export default function PlaynowBtn() {
  return (
    <button className="inline-flex items-center text-sm lg:text-18 font-semibold px-2 py-2 border-2 border-btnBorder text-btnText rounded-full lg:px-6 lg:py-3 uppercase hover:bg-btnBorder hover:text-white transition">
      <span className="hidden lg:block mr-2">play now</span>
      <span className="text-18 lg:text-2xl">
        <BsPlayFill />
      </span>
    </button>
  );
}
