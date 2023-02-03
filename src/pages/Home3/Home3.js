import React from "react";
import Hero from "../../components/hero";
import Partners from "../../components/partners";
import Playtoearn from "../../components/playtoearn";
import Team from "../../components/team-members";
import Timer from "../../components/timer";
import Navbar3 from "./navbar3";

const Home = () => {
  return (
    <div>
      <main>
        <Navbar3 />
        <div className="mt-40">
          <Hero />
        </div>

        <Timer />
        <Playtoearn />
        <Partners />
        <Team />
      </main>
    </div>
  );
};

export default Home;
