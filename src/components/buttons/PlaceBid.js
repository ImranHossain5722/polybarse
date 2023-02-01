import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./button.css";
export default function PlaceBid() {
  return (
    <button className="inline-flex items-center text-xs sm:text-sm lg:text-18 border-2 border-[#497BEE] font-semibold font-inter px-3 md:px-7 py-2  bg-[#497BEE] hover:bg-transparent rounded-full lg:px-44 lg:py-3 uppercase text-center mt-8 button-hero">
      <span className="mr-2">
        <AiOutlineShoppingCart />
      </span>
      <span>Place Bid</span>
    </button>
  );
}
