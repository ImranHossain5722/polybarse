import React from "react";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import Market from "../../components/Page14Components/Market";

const Page14 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <div className="mt-[60px]">
        <Market />
      </div>
    </div>
  );
};

export default Page14;
