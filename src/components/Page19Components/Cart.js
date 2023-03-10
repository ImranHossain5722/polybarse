import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "../../components/buttons/button.css";
const Cart = () => {
  return (
    <div className="my-[70px]">
      <div className="md:flex gap-1 justify-between">
        <div className="w-[740px]">
          {/* start for Only mobile view */}
          <div className="block md:hidden">
            <div className="md:flex items-center justify-between border-b-1 border-[#444172] py-14 ">
              {/* title */}
              <div className="md:flex gap-8 items-center">
                <p className="font-extraBold text-20 text-white text-left">
                  Super Hat TOp #1000 epic collection
                </p>
              </div>
              <div className="button-box-wrap flex items-center gap-3 mt-2">
                <div>
                  <div className="flex items-center gap-2">
                    {/* product image */}
                    <img
                      className=" w-28 h-28 rounded-5"
                      src="images/avatarProfile.png"
                      alt="images"
                    />
                    {/* button */}
                    <div>
                      <div className="flex gap-2 items-center border border-[#476DA4] py-3 px-5 rounded-5">
                        <AiOutlinePlus className="text-white text-18 font-bold cursor-pointer" />
                        <p className="text-white text-18 font-bold">1</p>
                        <AiOutlineMinus className="text-white text-18 font-bold cursor-pointer" />
                      </div>
                      {/* caption */}
                      <p className="text-[12px] font-medium  mt-1 ml-2">
                        Available 10 pcs.
                      </p>
                    </div>
                    <MdDelete className="text-[#476DA4] text-20 cursor-pointer" />
                  </div>
                </div>
                {/* price */}
                <div className="flex gap-2 items-center">
                  <img
                    className="w-4 h-4  md:w-9 md:h-9 "
                    src="images/singleCoin.png"
                    alt="images"
                  />
                  <p className="text-20 font-extraBold">50,00</p>
                </div>
              </div>
            </div>
            <div className="md:flex items-center justify-between border-b-1 border-[#444172] py-14 ">
              {/* title */}
              <div className="md:flex gap-8 items-center">
                <p className="font-extraBold text-20 text-white text-left">
                  Super Hat TOp #1000 epic collection
                </p>
              </div>
              <div className="button-box-wrap flex items-center gap-3 mt-2">
                <div>
                  <div className="flex items-center gap-2">
                    {/* product image */}
                    <img
                      className=" w-28 h-28 rounded-5"
                      src="images/avatarProfile.png"
                      alt="images"
                    />
                    {/* button */}
                    <div>
                      <div className="flex gap-2 items-center border border-[#476DA4] py-3 px-5 rounded-5">
                        <AiOutlinePlus className="text-white text-18 font-bold cursor-pointer" />
                        <p className="text-white text-18 font-bold">1</p>
                        <AiOutlineMinus className="text-white text-18 font-bold cursor-pointer" />
                      </div>
                      {/* caption */}
                      <p className="text-[12px] font-medium  mt-1 ml-2">
                        Available 10 pcs.
                      </p>
                    </div>
                    <MdDelete className="text-[#476DA4] text-20 cursor-pointer" />
                  </div>
                </div>
                {/* price */}
                <div className="flex gap-2 items-center">
                  <img
                    className="w-4 h-4  md:w-9 md:h-9 "
                    src="images/singleCoin.png"
                    alt="images"
                  />
                  <p className="text-20 font-extraBold">50,00</p>
                </div>
              </div>
            </div>
          </div>
          {/*for Only mobile view --end--*/}

          {/* Start for Desktop-design  */}
          <div className="hidden md:block">
            <div className="flex-none md:flex items-center justify-between border-b-1 border-[#444172] py-14 ">
              <div className="md:flex gap-8 items-center">
                <img
                  className="order-2 md:order-1 w-28 h-28 rounded-5"
                  src="images/avatarProfile.png"
                  alt="images"
                />
                <p className="order-1 md:order-2 font-extraBold text-20 text-white text-left">
                  Super Hat TOp #1000 epic collection
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-9 h-9 "
                  src="images/singleCoin.png"
                  alt="images"
                />
                <p className="text-20 font-extraBold">50,00</p>
              </div>
              <div className="button-box-wrap">
                <div className=" flex items-center gap-2">
                  <div className="flex gap-2 items-center border border-[#476DA4] py-3 px-5 rounded-5">
                    <AiOutlinePlus className="text-white text-18 font-bold cursor-pointer" />
                    <p className="text-white text-18 font-bold">1</p>
                    <AiOutlineMinus className="text-white text-18 font-bold cursor-pointer" />
                  </div>
                  <MdDelete className="text-[#476DA4] text-20 cursor-pointer" />
                </div>
                <p className="text-[12px] font-medium  mt-1 ml-2">
                  Available 10 pcs.
                </p>
              </div>
            </div>
            <div className="md:flex items-center justify-between border-b-1 border-[#444172] py-14 ">
              <div className="md:flex gap-8 items-center">
                <img
                  className="w-28 h-28 rounded-5"
                  src="images/avatarProfile.png"
                  alt="images"
                />
                <p className="font-extraBold text-20 text-white text-left">
                  Super Hat TOp #1000 epic collection
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-9 h-9 "
                  src="images/singleCoin.png"
                  alt="images"
                />
                <p className="text-20 font-extraBold">50,00</p>
              </div>
              <div className="button-box-wrap">
                <div className=" flex items-center gap-2">
                  <div className="flex gap-2 items-center border border-[#476DA4] py-3 px-5 rounded-5">
                    <AiOutlinePlus className="text-white text-18 font-bold cursor-pointer" />
                    <p className="text-white text-18 font-bold">1</p>
                    <AiOutlineMinus className="text-white text-18 font-bold cursor-pointer" />
                  </div>
                  <MdDelete className="text-[#476DA4] text-20 cursor-pointer" />
                </div>
                <p className="text-[12px] font-medium  mt-1 ml-2">
                  Available 10 pcs.
                </p>
              </div>
            </div>
          </div>
          {/* for Desktop-design-- End--- */}
        </div>

        <div className="mt-[35px] relative w-full md:w-[302px] md:h-[430px] bg-[#061E42] pb-20 rounded-2xl">
          <div className="bg-[#0C2B58] p-5 rounded-t-2xl ">
            <p className="text-35 text-white font-extraBold text-center">
              Total Cart
            </p>
          </div>
          <div className="mt-5">
            <div className="flex gap-1 items-center justify-center px-5">
              <img
                className="w-9 h-9 rounded-5"
                src="images/singleCoin.png"
                alt="images"
              />
              <p className="font-extraBold text-35 text-white text-center w-48">
                100,00
              </p>
            </div>
            <div className="flex gap-1 items-center justify-center px-5">
              <img
                className="w-8 h-8 rounded-5"
                src="images/doler.png"
                alt="images"
              />
              <p className="font-extraBold text-35 text-white text-center w-48">
                100,00
              </p>
            </div>
          </div>
          <div className="absolute  -bottom-5 right-[25px] md:right-20">
            <button className="inline-flex items-center text-xs sm:text-sm lg:text-18 font-semibold font-inter px-32 md:px-7 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-lg md:rounded-full lg:px-8 lg:py-3 uppercase text-center mt-8 button-hero">
              <span className="mr-2">
                <AiOutlineShoppingCart />
              </span>
              <span>buy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
