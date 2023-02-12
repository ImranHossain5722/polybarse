import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./button.css";
export default function BuyNow() {
  return (
    <button className="flex items-center text-20 font-semibold font-inter px-28 md:px-7 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-lg md:rounded-full lg:px-44 lg:py-3 uppercase text-center mt-8 button-hero">
      <span className="mr-2">
        <AiOutlineShoppingCart />
      </span>
      <span>buy</span>
    </button>
  );
}
