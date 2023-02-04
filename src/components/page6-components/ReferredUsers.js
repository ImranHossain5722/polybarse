import React, { memo } from "react";
import Container from "../container";

const ReferredUsers = memo(() => {
  return (
    <Container className="max-w-[1200px]">
      {/* < component  */}
      <div className="antialiased  text-gray-600 px-8 mt-28 mb-36">
        <div className="flex flex-col justify-center h-full">
          {/* <!-- Table --> */}
          <div className=" bg-[#0D0A3A] shadow-lg rounded-sm">
            <div className="px-5 py-5 bg-[#06042A] ">
              <h2 className="font-semibold text-white text-30">
                Referred Users
              </h2>
            </div>
            <div className="px-4 py-5">
              <div className="overflow-x-auto">
                <table className="table-auto w-[475px] md:w-full">
                  <thead className=" h-16 font-semibold capitalize text-white border-b-8 border-[#0D0A3A] bg-[#06042A]">
                    <tr className="">
                      <th className="py-2">
                        <div className="font-semibold text-left text-white text-20 pl-6">
                          Username
                        </div>
                      </th>
                      <th className="py-2 ">
                        <div className="font-semibold flex justify-end text-white text-20">
                          NFT Buyed
                        </div>
                      </th>
                      <th className="py-2 ">
                        <div className="font-semibold text-right pr-16 text-white text-20">
                          Your Earn
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y-8 divide-[#0D0A3A]">
                    <tr className=" bg-[#06042A] h-20">
                      <td className="p-2 whitespace-nowrap">
                        <div
                          className="flex items-center justify-start pl-3
                        "
                        >
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/user-profileImage.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right text-white text-20 pr-8">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#06042A] h-20 ">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-start pl-3">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/membertwo.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right pr-8 text-white text-20">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#06042A] h-20">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-start pl-3">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/member.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right pr-8 text-white text-20">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#06042A] h-20">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-start pl-3">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/memberfour.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right pr-8 text-white text-20">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#06042A] h-20">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-start pl-3">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/memberthree.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right pr-8 text-white text-20">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className=" bg-[#06042A] h-20">
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-start pl-3">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="/images/membertwo.png"
                              width="40"
                              height="40"
                              alt="user-image"
                            />
                          </div>
                          <div className="font-medium text-20 text-white">
                            Rose
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-right pr-8 text-white text-20">
                          1
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <div className="font-medium text-20 text-center text-white">
                            2000,00 PLV
                          </div>
                          <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                            <img
                              className="rounded-full w-5 h-5 "
                              src="/images/singleCoin.png"
                              alt="coin"
                            />
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
      </div>
    </Container>
  );
});

export default ReferredUsers;
