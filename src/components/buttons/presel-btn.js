import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function PreselBtn() {
  return (
    <button className="inline-flex items-center text-sm lg:text-18 font-semibold px-10 py-3 border-1 border-white text-white rounded-full lg:px-6 lg:py-3 capitalize hover:bg-white hover:text-themeColor transition">
      <span className="mr-2">go to presale</span>
      <span className="text-18 lg:text-2xl">
        <HiArrowRight />
      </span>
    </button>
  );
}
