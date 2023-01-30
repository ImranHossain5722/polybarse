import React from "react";
import DashBoardNav from "../../components/DashBoardNav/DashBoardNav";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import Level from "../../components/Page12Components/Level";
import OwnerRewards from "../../components/Page12Components/OwnerRewards";
import Page12nav from "../../components/Page12Components/Page12nav";
import RewardBanner from "../../components/Page12Components/RewardBanner";

const Page12 = () => {
  return (
    <div className="">
      <NaveHeader></NaveHeader>
      <div className="my-[10px]">
        <RewardBanner></RewardBanner>
        <Level></Level>
        <OwnerRewards></OwnerRewards>
      </div>
    </div>
  );
};

export default Page12;
