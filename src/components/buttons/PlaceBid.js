import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./button.css";
export default function PlaceBid() {
  return (
    <button className="w-full flex items-center justify-center gap-4  text-16 lg:text-18 border-2 border-[#497BEE] font-semibold px-24 md:px-7 py-4  bg-[#497BEE] hover:bg-transparent rounded-lg md:rounded-full lg:px-44 lg:py-3 uppercase  mt-8 button-hero">
      <span className="mr-2 text-center">
        <AiOutlineShoppingCart />
      </span>
      <span className="text-center">Place Bid</span>
    </button>
  );
}
