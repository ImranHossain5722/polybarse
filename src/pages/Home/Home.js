import React from "react";
import Hero from "../../components/hero";
import Partners from "../../components/partners";
import Playtoearn from "../../components/playtoearn";
import Team from "../../components/team-members";
import Timer from "../../components/timer";
import Sell from "../../components/PopUp/Sell";
import YourAreAlmostDone from "../../components/PopUp/YourAreAlmostDone";
import StakePlv from "../../components/PopUp/StakePlv";
import Auction from "../../components/PopUp/Auction";
import SelectWallet from "../../components/PopUp/SelectWallet";

const Home = () => {
  return (
    <div>
      <main>
        <SelectWallet />
        <Auction />
        <StakePlv />
        <YourAreAlmostDone />
        <Sell></Sell>

        <Hero />
        <Timer />
        <Playtoearn />
        <Partners />
        <Team />
      </main>
    </div>
  );
};

export default Home;
