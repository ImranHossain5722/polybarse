import React from "react";
import { MdShoppingCart } from "react-icons/md";

export default function Buyland() {
  return (
    <button className="inline-flex items-center text-xs sm:text-sm lg:text-18 font-semibold font-inter px-3 md:px-6 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-full lg:px-8 lg:py-3 uppercase">
      <span>buy land</span>
      <span className="ml-2">
        <MdShoppingCart />
      </span>
    </button>
  );
}
