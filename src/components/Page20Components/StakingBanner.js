import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../container";
const StakingBanner = () => {
  return (
    <Container className="max-w-[1200px]">
      <div>
        <div className="bg-[#061E42] relative rounded-15">
          <div className="Staking px-8 py-10">
            <p className="text-50 font-extraBold">Staking</p>
            <p className="text-30 font-thin text-white">Earn PLV and rewards</p>
            <p className="text-30 font-thin text-white">
              by choosing between flexible and fixed STAKE.
            </p>

            <div>
              <Link
                className="flex items-center mt-3 text-[25px] font-semibold hover:text-btnbg"
                to="#"
              >
                How to stake
                <IoIosArrowForward className="mt-1 ml-2" />
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="hidden md:block absolute -top-14 right-0 w-96 h-96 pr-4"
              src="images/box.png"
              alt="box"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StakingBanner;
