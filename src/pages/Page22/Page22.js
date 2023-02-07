import React from "react";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import Balance from "../../components/Page22Components/Balance";
import ChooseYourPlan from "../../components/Page22Components/ChooseYourPlan";
import ComparePlans from "../../components/Page22Components/ComparePlans";
import PalyCard from "../../components/Page22Components/PalyCard";

const Page22 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <div className="my-[60px]">
        <Balance />
        <PalyCard />
        <ChooseYourPlan />
        <ComparePlans />
      </div>
    </div>
  );
};

export default Page22;
