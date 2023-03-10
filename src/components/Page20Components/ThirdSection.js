import React, { useState } from "react";
import Approve from "../buttons/Approve";
import Container from "../container";
import StakePlv from "../PopUp/StakePlv";
import "./thiredSection.css";

const ThirdSection = () => {
  const [stakePlv, setStakePlv] = useState(false);
  return (
    <Container className="max-w-[1200px]">
      <div className="mt-10">
        {stakePlv && <StakePlv setStakePlv={setStakePlv} />}
        <div className="overflow-x-auto">
          <table className="table-auto w-[475px] md:w-full">
            <thead className=" h-16 font-semibold capitalize text-white  rounded-5">
              <tr className="">
                <th className="py-2 px-8 whitespace-nowrap token">
                  <div className="font-extraBold text-center text-white text-18  uppercase ">
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
                <td className="p-2 whitespace-nowrap border-r-2 border-[#1B1757] token">
                  <div className="">
                    <div className="flex items-center justify-center ">
                      <div className="w-10 h-10 flex items-center ml-2 sm:mr-3">
                        <img
                          className="rounded-full w-7 h-7"
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-20 text-center text-white">
                        <p className="uppercase">Play</p>
                      </div>
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
                  <div
                    onClick={() => setStakePlv(!stakePlv)}
                    className="text-center text-white text-20"
                  >
                    <Approve />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ThirdSection;
