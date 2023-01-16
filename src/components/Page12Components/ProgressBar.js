import React from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  return (
    <div className="max-w-[900px]">
      <p className="capitalize text-white text-16 ">Season 1</p>
      {/* progress bar cod */}
      <div className="relative pt-14 ml-14 ">
        <div
          style={{
            background: `url('/images/num-bg.png')`,
            width: "113px",
            height: "111px",
          }}
          className="img absolute bottom-0 top-6 -left-3"
        >
          <p className="prog-t text-60 font-bold text-center mt-2">3</p>
        </div>

        <div className="ml-28">
          <p className=" text-left text-20 uppercase font-extraBold">
            SEASON PASS LEVEL
          </p>
        </div>
        <div className="overflow-hidden h-5  text-xs flex rounded bg-[#044C6B]">
          <div
            style={{ width: "50%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
        <div className="ml-28">
          <p className=" text-left text-20 uppercase font-extraBold">335xp</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
