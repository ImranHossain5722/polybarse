import React from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  return (
    <div className="max-w-[1100px]">
      <p className="capitalize text-white text-16 mt-7 md:mt-0">Season 1</p>
      {/* progress bar cod */}
      <div className="w-full relative pt-14 ml-2 md:ml-14 ">
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
          <p className=" text-left text-sm md:text-20 uppercase font-extraBold mb-1">
            SEASON PASS LEVEL
          </p>
        </div>
        <div className="overflow-visible w-full h-5  text-xs flex rounded bg-[#044C6B]">
          <div
            style={{ width: "50%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
        <div className="ml-28">
          <p className=" text-left text-sm md:text-20 uppercase font-extraBold mt-1">
            335xp
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
