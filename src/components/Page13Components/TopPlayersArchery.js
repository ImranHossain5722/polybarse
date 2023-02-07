import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import Container from "../container";
import TimerReword from "../Page13Components/TimerReword";
const TopPlayersArchery = () => {
  return (
    <Container className="max-w-[1200px]">
      <div className="md:flex justify-between mt-20  ">
        <div className="w-full md:w-[786px]  bg-[#061E42] mr-3">
          <div className=" md:flex px-7 py-5 items-center justify-between">
            <p className="font-extraBold text-30 text-white">
              Top Players Archery
            </p>
            <div className="flex items-center">
              <p className="font-medium text-[12px]">
                Next Leaderboard Update in
              </p>
              <TimerReword />
            </div>
          </div>
          <div className=" w-full md:w-[780px] mx-auto shadow-lg rounded-sm">
            <div className="px-7 py-5">
              {/* table player archery */}
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className=" h-16 font-semibold capitalize text-white border-2 border-[#0D0A3A] bg-[#0C2B58] rounded-5">
                    <tr className="">
                      <th className="py-2 px-8 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="font-extraBold text-center text-white text-18 m-1">
                          Rank
                        </div>
                      </th>
                      <th className="py-2 px-8 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="font-extraBold text-center text-white text-18">
                          Player
                        </div>
                      </th>
                      <th className="py-2 px-8  whitespace-nowrap">
                        <div className="font-extraBold text-center text-white text-18">
                          Prizes
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm  divide-[#0D0A3A]">
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            1
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Mike</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center w-full md:w-8 text-white">
                            <p className="uppercase">1M</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            2
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">500K</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            3
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Bob</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div
                            className="font-medium text-20 text-center text-white w-full 
                          md:w-8"
                          >
                            <p className="uppercase">100K</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            4
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Matt</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            5
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            6
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            7
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            8
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            9
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#133568] h-10">
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            10
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Luke</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-6 h-6 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                          <div className="font-medium text-20 text-center text-white w-full md:w-8">
                            <p className="uppercase">-</p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className=" bg-[#044C6B] h-14">
                      <td className="relative py-2 px-10 whitespace-nowrap border-l-2 border-[#0D0A3A]">
                        <div className=" absolute top-4">
                          <Link
                            to="#"
                            className="rounded-full py-2 px-4  font-extraBold bg-[#FF3300]"
                          >
                            You
                          </Link>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="font-medium text-20 text-white">
                            151
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap border-x-2 border-[#0D0A3A]">
                        <div className="text-center text-white text-20">
                          <p>Mike</p>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap  ">
                        <div className="flex items-center justify-center">
                          <div className="">
                            <AiOutlineArrowRight className="font-medium text-20  text-white text-right" />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/*total rewards div  */}
        <div className=" w-full md:w-[374px]  bg-[#0A264F] px-6 mt-4 md:mt-0 pb-3 md:pb-0 rounded-5">
          <p className="font-extraBold text-30 text-white text-center pt-5">
            Total Rewards
          </p>
          <div className="flex items-center justify-center pt-3">
            <div className="w-10 h-10 flex items-center ">
              <img
                className="rounded-full w-6 h-6 "
                src="/images/singleCoin.png"
                alt="coin"
              />
            </div>
            <div className="font-extraBold text-16 text-center text-white">
              <p className="uppercase">1.600.000 PLV</p>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <img
              className=" w-48 h-full "
              src="/images/big-cup.png"
              alt="coin"
            />
          </div>
          <div className="overflow-x-auto pt-10">
            <table className="table-auto w-full">
              <tbody className="text-sm ">
                <tr className=" bg-[#133568] h-20 border-b-4 border-[#0A264F] ">
                  <td className="p-2 whitespace-nowrap ">
                    <div className="text-center text-white text-20">
                      <p>Mike</p>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center gap-2 mr-2 sm:mr-3">
                        <img
                          className="rounded-full w-6 h-6 "
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-20 text-center w-8 text-white">
                        <p className="uppercase">1M</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className=" bg-[#133568] h-20  border-b-4 border-[#0A264F]">
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center text-white text-20">
                      <p>Luke</p>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap ">
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center gap-2 mr-2 sm:mr-3">
                        <img
                          className="rounded-full w-6 h-6 "
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-20 w-8 text-center text-white">
                        <p className="uppercase">500K</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" bg-[#133568] h-20">
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center text-white text-20">
                      <p>Bob</p>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap ">
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 flex items-center gap-2 mr-2 sm:mr-3">
                        <img
                          className="rounded-full w-6 h-6 "
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-20 w-8 text-center text-white">
                        <p className="uppercase">100K</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopPlayersArchery;
