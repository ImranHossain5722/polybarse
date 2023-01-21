import React from "react";

const History = () => {
  return (
    <div className="mt-16">
      <div className="bg-[#061E42] p-3">
        <p className="text-35 font-extraBold">Description</p>
        <p className="text-18 text-white font-normal">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
      </div>

      <div className="my-14">
        <div className="overflow-x-auto">
          <div className="bg-[#061E42] p-3">
            <p className="text-24 font-extraBold uppercase">History</p>
          </div>
          <table className="table-auto w-[475px] md:w-full">
            <thead className=" h-16 font-semibold capitalize text-white border-2 border-[#0D0A3A] bg-[#0C2B58] rounded-5">
              <tr className="">
                <th className="py-2 px-8 whitespace-nowrap border-2 border-[#0D0A3A]">
                  <div className="font-extraBold text-center text-white text-18 m-1 uppercase">
                    From
                  </div>
                </th>
                <th className="py-2 px-8 whitespace-nowrap border-2 border-[#0D0A3A]">
                  <div className="font-extraBold text-center text-white text-18 uppercase">
                    To
                  </div>
                </th>
                <th className="py-2 px-8  whitespace-nowrap">
                  <div className="font-extraBold text-center text-white text-18 uppercase">
                    TYPE
                  </div>
                </th>
                <th className="py-2 px-8  whitespace-nowrap">
                  <div className="font-extraBold text-center text-white text-18 uppercase">
                    WHen
                  </div>
                </th>
                <th className="py-2 px-8  whitespace-nowrap">
                  <div className="font-extraBold text-center text-white text-18 uppercase">
                    Price
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm  divide-[#0D0A3A]">
              <tr className=" bg-[#133568] h-10">
                <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                  <div className="flex items-center justify-center">
                    <div className="font-medium text-20 text-white">1</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                  <div className="text-center text-white text-20">
                    <p>Mike</p>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap border-2 border-[#0D0A3A]">
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center mr-2 sm:mr-3">
                      <img
                        className="rounded-full w-5 h-5 "
                        src="/images/singleCoin.png"
                        alt="coin"
                      />
                    </div>
                    <div className="font-medium text-20 text-center text-white">
                      <p className="uppercase">1M</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
