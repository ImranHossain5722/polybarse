import React from "react";
import DashBoardNav from "../../components/DashBoardNav/DashBoardNav";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import LeaderBoard from "../../components/Page13Components/LeaderBoard";
import Page13Nav from "../../components/Page13Components/Page13Nav";
import TopPlayersArchery from "../../components/Page13Components/TopPlayersArchery";

const Page13 = () => {
  return (
    <div>
      {/* <Page13Nav></Page13Nav> */}

      <NaveHeader></NaveHeader>
      <div className="my-[110px]">
        <LeaderBoard />
        <TopPlayersArchery />
      </div>
    </div>
  );
};

export default Page13;
