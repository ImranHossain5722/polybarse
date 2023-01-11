import React from "react";
import MyStaking from "../../components/My Staking/MyStaking";
import MyInventory from "../../components/MyInventory/MyInventory";
import MyWallet from "../../components/MyWallet/MyWallet";
import Page2Hero from "../../components/page2Hero/page2Hero";

const PageTwo = () => {
  return (
    <div className="">
      <main>
        <Page2Hero></Page2Hero>
        <MyWallet></MyWallet>
        <MyInventory></MyInventory>
        <MyStaking></MyStaking>
      </main>
    </div>
  );
};

export default PageTwo;
