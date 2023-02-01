import React from "react";
import Hero from "../../components/hero";
import Partners from "../../components/partners";
import Playtoearn from "../../components/playtoearn";
import Team from "../../components/team-members";
import Timer from "../../components/timer";

const Home = () => {
  return (
    <div>
      <main>
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
