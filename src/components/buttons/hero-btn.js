import React from "react";
import { BsPlayFill } from "react-icons/bs";

export default function Herobtn() {
  return (
    <button className="inline-flex items-center text-sm lg:text-18 font-semibold px-6 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-full lg:px-10 lg:py-3">
      <img
        src="/images/whiterectangle.png"
        alt="icon"
        className="w-6 h-4 mr-2"
      />
      oculus
    </button>
  );
}

export function HerobtnTwo() {
  return (
    <button className="inline-flex items-center text-sm lg:text-18 font-semibold border-2 border-btnBorder text-btnText rounded-full px-6 py-3 uppercase hover:bg-btnBorder hover:text-white transition">
      <span className=" mr-2">play now</span>
      <span className="text-18 lg:text-2xl">
        <BsPlayFill />
      </span>
    </button>
  );
}
