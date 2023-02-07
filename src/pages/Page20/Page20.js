import React from "react";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import SecondSection from "../../components/Page20Components/SecondSection";
import StakingBanner from "../../components/Page20Components/StakingBanner";
import ThirdSection from "../../components/Page20Components/ThirdSection";

const Page20 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <div className="mt-[60px] pb-[250px]">
        <StakingBanner></StakingBanner>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
      </div>
    </div>
  );
};

export default Page20;
