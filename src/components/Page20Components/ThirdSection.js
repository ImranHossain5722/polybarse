import React from "react";
import Approve from "../buttons/Approve";

const ThirdSection = () => {
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="table-auto w-[475px] md:w-full">
          <thead className=" h-16 font-semibold capitalize text-white  rounded-5">
            <tr className="">
              <th className="py-2 px-8 whitespace-nowrap ">
                <div className="font-extraBold text-center text-white text-18 m-1 uppercase">
                  Token
                </div>
              </th>
              <th className="py-2 px-8 whitespace-nowrap ">
                <div className="font-extraBold text-center text-white text-18 uppercase">
                  Apy
                </div>
              </th>
              <th className="py-2 px-8  whitespace-nowrap">
                <div className="font-extraBold text-center text-white text-18 uppercase">
                  Duration
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm  ">
            <tr className=" bg-[#0D0A3A] h-20">
              <td className="p-2 whitespace-nowrap border-r-2 border-[#1B1757]">
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center ml-2 sm:mr-3">
                    <img
                      className="rounded-full w-5 h-5 "
                      src="/images/singleCoin.png"
                      alt="coin"
                    />
                  </div>
                  <div className="font-medium text-20 text-center text-white">
                    <p className="uppercase">Play</p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap border-r-2 border-[#1B1757]">
                <div className="flex items-center justify-center">
                  <div className="font-medium text-20 text-center text-white">
                    <p className="uppercase">100%</p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap ">
                <div className="flex items-center justify-center">
                  <div className="font-medium text-20 text-center text-white">
                    <p className="uppercase">30days</p>
                  </div>
                </div>
              </td>
              <td className="p-2 whitespace-nowrap ">
                <div className="text-center text-white text-20">
                  <Approve />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThirdSection;
