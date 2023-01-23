import React from "react";
import "./button.css";
export default function Approve() {
  return (
    <button className="inline-flex items-center text-xs sm:text-sm lg:text-18 font-semibold font-inter px-3 md:px-7 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-full lg:px-20 lg:py-3 uppercase text-center button-hero">
      <span>Approve</span>
    </button>
  );
}
