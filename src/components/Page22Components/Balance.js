import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "../../components/buttons/button.css";
const Balance = () => {
  return (
    <div>
      <div>
        <p className="text-30 font-extraBold my-10">Balance</p>
      </div>
      <div className=" flex gap-4 bg-[#0D0A3A] p-8 pb-11 rounded-5">
        <div className="w-[370px] ">
          <div className="flex gap-2 items-center bg-[#BC4D1E] p-6 pb-11 rounded-t-15 ">
            <img
              className="w-16 h-16 "
              src="images/white-bg.png"
              alt="images"
            />
            <p className="text-30 font-extraBold">Total Balance:</p>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-[475px] md:w-full ">
              <tbody className="text-sm  ">
                <tr className=" bg-[#D75D29] h-20">
                  <td className="p-2 whitespace-nowrap border-b-2 border-[#fff]">
                    <div className="flex items-center ">
                      <div className="w-10 h-10 flex items-center ml-2 sm:mr-3">
                        <img
                          className="rounded-full w-5 h-5 "
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-24 text-center text-white">
                        <p className="uppercase">PLV</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap  border-b-2 border-[#fff] ">
                    <div className="flex items-center justify-center">
                      <div className="font-medium text-20 text-center text-white">
                        <p className="uppercase">18.324,15</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className=" bg-[#D75D29] h-20 ">
                  <td className="p-2 whitespace-nowrap rounded-bl-15 ">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center ml-2 sm:mr-3">
                        <img
                          className="rounded-full w-5 h-5 "
                          src="/images/singleCoin.png"
                          alt="coin"
                        />
                      </div>
                      <div className="font-medium text-24 text-center text-white">
                        <p className="uppercase">V-COIN</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap  rounded-br-15 ">
                    <div className="flex items-center justify-center">
                      <div className="font-medium text-20 text-center text-white">
                        <p className="uppercase">58.515,10</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[710px] bg-[#06042A] rounded-5 px-5 p-8">
          <div>
            <p className="text-30 font-extraBold">Swap</p>
          </div>
          <form className="relative">
            <div className="from-div">
              <p className="text-[12px] text-white font-normal text-right">
                Balance 57600,10
              </p>
              <label className="relative">
                <input
                  id="User-Name"
                  name="UserName"
                  type="text"
                  autoComplete="text"
                  required
                  className="my-3 bg-[#1B1757]  text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                  placeholder="From 0,0 "
                />
                <div className="flex items-center absolute top-4 right-3">
                  <div className="flex items-center">
                    <p className="uppercase font-semibold text-18 text-center text-white">
                      Max
                    </p>
                    <img
                      className="rounded-full w-6 h-6 flex items-center ml-2 sm:mr-3"
                      src="/images/singleCoin.png"
                      alt="coin"
                    />
                    <p className="uppercase font-semibold text-18 text-center text-white">
                      V-con
                    </p>
                  </div>
                </div>
              </label>
            </div>

            <div className="absolute left-1/2 form-button bg-[#1B1757] w-7 h-7 rounded-full flex items-center justify-center">
              <button>
                <AiOutlineDown className="" />
              </button>
            </div>
            <div className="To-div mt-10">
              <p className="text-[12px] text-white font-normal text-right">
                Balance 57600,10
              </p>
              <label className="relative">
                <input
                  id="to"
                  name="to"
                  type="text"
                  autoComplete="text"
                  required
                  className="my-3 bg-[#1B1757]  text-white text-18 font-semibold rounded-lg  placeholder-[#fff] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5 "
                  placeholder="To 0,0 "
                />
                <div className="flex items-center absolute top-4 right-3">
                  <div className="flex items-center">
                    <img
                      className="rounded-full w-6 h-6 flex items-center ml-2 sm:mr-3"
                      src="/images/singleCoin.png"
                      alt="coin"
                    />
                    <p className="uppercase font-semibold text-18 text-center text-white">
                      PLV
                    </p>
                  </div>
                </div>
              </label>
            </div>
            <div className="absolute left-60 top-56 form-button bg-[#D75D29] px-7 py-3 rounded-full flex items-center justify-center button-hero">
              <button className="uppercase font-bold text-24 ">Confirm</button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Balance;