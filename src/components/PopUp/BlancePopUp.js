import React from "react";
import { Link } from "react-router-dom";

const BlancePopUp = ({ setShowBlancePopUp }) => {
  return (
    <>
      <div
        onClick={() => {
          setShowBlancePopUp(false);
        }}
        className="fixed inset-0 bg-transparent"
      ></div>

      <div>
        <div className="fixed top-[276px] -ml-[75px] w-[207px] h-[186px] bg-[#100E4F]  rounded-5">
          <div className="flex items-start  gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564] hover:rounded-t-5">
            <div>
              <p className="text-[14px] font-bold">Total Balance:</p>
            </div>
          </div>
          <Link
            to="#"
            className="flex items-start justify-between  gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564]"
          >
            <div className="flex items-center justify-between gap-2">
              <img
                className="w-[20px] h-[20px] "
                src="images/singleCoin.png"
                alt=""
              />
              <div>
                <p className="text-[14px] font-semibold">PLV</p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold">18324,15</p>
            </div>
          </Link>
          <Link
            to="#"
            className="flex items-start justify-between gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564]"
          >
            <div className="flex items-center gap-2 ">
              <img
                className="w-[20px] h-[20px] "
                src="images/starCoin.png"
                alt=""
              />
              <div>
                <p className="text-[14px] font-semibold">Vcoin</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold">58515,10</p>
            </div>
          </Link>

          <Link
            to="#"
            className="flex items-center ju gap-3  py-2 px-5 cursor-pointer hover:bg-[#171564] hover:py-3 hover:rounded-b-5 "
          >
            <div>
              <p className="text-[14px] font-semibold uppercase">
                Go to balance
              </p>
            </div>
            <div className="">
              <img
                className="w-[15px] h-[10px] "
                src="images/Vector.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlancePopUp;
