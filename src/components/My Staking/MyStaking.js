import React from "react";
import Popup from "../animations/popup";
import box from "../../images/box.png";
import whitecoin from "../../images/white-bg.png";
import signCoin from "../../images/singleCoin.png";
import Whitearow from "../../images/white-arrow.png";
import greenshapbg from "../../images/green-bg-shap.png";
import rightRedShap from "../../images/shapesix.png";
import Container from "../container";
import "./Mystaking.css";

const MyStaking = () => {
  return (
    <div className="relative pt-28">
      <Popup className="w-96 h-full top-0 bottom-0">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="w-32 right-0 bottom-1/2 z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div className="pb-40">
          <p className="text-45">My Staking</p>
          <div className=" flex item-center box-wrap relative  p-8">
            <div className="img -mb-40">
              <img className="" src={box} />
            </div>
            <div className="">
              <p className="flex items-center justify-center text-left text-35 w-2/3">
                EARN $PLV AND REWARDS BY CHOOSING BETWEEN FLEXIBLE AND FIXED
                STAKE.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyStaking;
