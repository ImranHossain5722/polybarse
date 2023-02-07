import React from "react";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import LeaderBoard from "../../components/Page13Components/LeaderBoard";
import TopPlayersArchery from "../../components/Page13Components/TopPlayersArchery";

const Page13 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <div className="my-[60px]">
        <LeaderBoard />
        <TopPlayersArchery />
      </div>
    </div>
  );
};

export default Page13;
