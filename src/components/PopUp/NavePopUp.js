import React from "react";
import { Link } from "react-router-dom";

const NavePopUp = () => {
  return (
    <div>
      <div className="fixed top-[276px]  w-[207px] h-[186px] bg-[#100E4F]  rounded-5">
        <Link
          to="#"
          className="flex items-start  gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564] hover:rounded-t-5"
        >
          <div>
            <img
              className="w-[22px] h-[22px] "
              src="images/profile.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold">Profile</p>
          </div>
        </Link>
        <Link
          to="#"
          className="flex items-start  gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564]"
        >
          <div>
            <img
              className="w-[22px] h-[22px] "
              src="images/inventory.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold">Inventory</p>
          </div>
        </Link>
        <Link
          to="#"
          className="flex items-start  gap-3 border-b-1 border-[#2A268D] py-3 px-5 cursor-pointer hover:bg-[#171564]"
        >
          <div>
            <img
              className="w-[22px] h-[22px] "
              src="images/referral.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-[14px] font-semibold">Referral</p>
          </div>
        </Link>
        <Link
          to="#"
          className="flex items-start  gap-3  py-2 px-5 cursor-pointer hover:bg-[#171564] hover:py-3 hover:rounded-b-5 "
        >
          <div>
            <p className="text-[14px] font-semibold">Logout</p>
          </div>
          <div className="flex items-center ml-20">
            <img
              className="w-[22px] h-[22px] "
              src="images/logout.png"
              alt=""
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavePopUp;
