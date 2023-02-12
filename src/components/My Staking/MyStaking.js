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
import StakeNow from "../buttons/StakeNow";

const MyStaking = () => {
  return (
    <div className=" relative pt-8 md:pt-28">
      <Popup className="hidden md:block  w-32 right-0 bottom-1/2 z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <Container className="max-w-[1200px]">
        <div className="pb-8 md:pb-40">
          <p className="text-center md:text-left lg:text-left text-45 font-extraBold mb-8">
            My Staking
          </p>
          <div className=" flex item-center border-8 border-[#052f52] ">
            <div className=" hidden md:block img -my-16">
              <img className="" src={box} />
            </div>
            <div className="">
              <p className="text-center md:text-left text-20 md:text-35 md:w-2/3 font-extraBold md:ml-5 pt-9 md:py-9">
                EARN $PLV AND REWARDS BY CHOOSING BETWEEN FLEXIBLE AND FIXED
                STAKE.
              </p>
              <div className="flex justify-center md:justify-end p-4">
                <StakeNow></StakeNow>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyStaking;
