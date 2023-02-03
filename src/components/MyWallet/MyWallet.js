import React from "react";
import Popup from "../animations/popup";
import coin from "../../images/gold2.png";
import whitecoin from "../../images/white-bg.png";
import signCoin from "../../images/singleCoin.png";
import starCoin from "../../images/starCoin.png";
import Whitearow from "../../images/white-arrow.png";
import greenshapbg from "../../images/green-shap.png";
import rightRedShap from "../../images/right-shap-red.png";
import Container from "../container";
import "./Mywallet.css";

const MyWallet = () => {
  return (
    <div className="relative pt-28">
      <div className=" hidden md:block absolute max-w-xl -left-32 top-3/4 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/4 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block w-32 right-0 bottom-1/2 z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div>
          <p className="text-center md:text-left lg:text-left text-45 from-btnText font-extraBold  ">
            My Wallet
          </p>
          <div className=" flex item-center border-wrap relative ">
            <div className="org-div bg-arrwoActive ">
              <div className=" flex items-center gap-x-4 md:gap-x-72">
                <div className="flex items-center ">
                  <img className="w-16 h-16 mr-2" src={whitecoin} />
                  <p className="text-16 md:text-30 font-extraBold">Balance</p>
                </div>
                <div>
                  <img className="w-6 h-6" src={Whitearow} />
                </div>
              </div>
              <hr className=" my-4 md:my-6" />
              <div className="singleCoin-wrap md:flex items-center justify-around ">
                <div className="flex items-center justify-center gap-2 md:mb-7">
                  <p className="w-30 text-16 md:text-30 font-extraBold">
                    1000 V-COIN
                  </p>
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src={signCoin}
                    alt="coin"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 md:mb-7">
                  <p className="w-30 text-16 md:text-30 font-extraBold">
                    150.50 PLV
                  </p>
                  <img
                    className="w-10 h-10 md:w-12 md:h-12"
                    src={starCoin}
                    alt="coin"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block img absolute  top-[-100px] -right-44 bottom-0 ">
              <img
                className="gold-coin ml-[10px] md:ml-0"
                src={coin}
                alt="coin"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyWallet;
