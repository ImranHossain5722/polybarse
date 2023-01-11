import React from "react";
import Popup from "../animations/popup";
import coin from "../../images/coin.png";
import whitecoin from "../../images/white-bg.png";
import signCoin from "../../images/singleCoin.png";
import Whitearow from "../../images/white-arrow.png";
import greenshapbg from "../../images/green-bg-shap.png";
import rightRedShap from "../../images/right-shap-red.png";
import Container from "../container";
import "./Mywallet.css";

const MyWallet = () => {
  return (
    <div className="relative pt-28">
      <Popup className="w-96 h-full top-0 bottom-0">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="w-32 right-0 bottom-1/2 z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div>
          <p className="text-45">My Wallet</p>
          <div className=" flex item-center border-wrap relative ">
            <div className="org-div bg-arrwoActive">
              <div className=" flex justify-between">
                <div className="flex items-center justify-center">
                  <img className="w-16 h-16 mr-2" src={whitecoin} />
                  <p className="text-30">Balance</p>
                </div>
                <div>
                  <img className="w-6 h-6" src={Whitearow} />
                </div>
              </div>
              <hr className="my-10" />
              <div className="singleCoin-wrap flex items-center justify-around ">
                <div className="flex items-center justify-center mb-6">
                  <p className="text-30">1000 V-COIN</p>
                  <img className="w-12 h-12" src={signCoin} />
                </div>
                <div className="flex items-center justify-center mb-6">
                  <p className="text-30">150.50 PLV</p>
                  <img className="w-12 h-12" src={signCoin} />
                </div>
              </div>
            </div>
            <div className="img absolute left-100 top-[-180px] right-0 bottom-0 ">
              <img className="gold-coin" src={coin} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyWallet;
