import React from "react";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import Balance from "../../components/Page22Components/Balance";
import ChooseYourPlan from "../../components/Page22Components/ChooseYourPlan";
import ComparePlans from "../../components/Page22Components/ComparePlans";
import Page22Nav from "../../components/Page22Components/Page22Nav";
import PalyCard from "../../components/Page22Components/PalyCard";

const Page22 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <div className="my-[110px]">
        <Balance />
        <PalyCard />
        <ChooseYourPlan />
        <ComparePlans />
      </div>
    </div>
  );
};

export default Page22;
