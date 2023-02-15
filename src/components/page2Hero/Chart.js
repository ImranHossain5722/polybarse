import React from "react";

const Chart = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full bg-[#0D0A3A] shadow-2xl p-4 rounded-5">
        <div>
          <p className="text-white capitalize text-[14px] font-bold">
            Season Level
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-4 ">
          <div className="text-white uppercase text-[14px] font-extrabold mt-0 md:mt-[22px] text-center">
            Lvl 10
          </div>
          <div className="grid grid-cols-10 gap-[1.5rem] md:gap-[2px] mr-[25px] md:mr-0 -scale-y-[1]">
            <div className="w-[20px] h-[3px]  bg-[#FFF6E2]"></div>
            <div className="w-[20px] h-[4.5px] bg-[#FFE9BA]"></div>
            <div className="w-[20px] h-[7px]  bg-[#FFDE96]"></div>
            <div className="w-[20px] h-[10px] bg-[#FFD372]"></div>
            <div className="w-[20px] h-[13px] bg-[#FFC33F]"></div>
            <div className="w-[20px] h-[16px] bg-[#E39C00]"></div>
            <div className="w-[20px] h-[19.5px] bg-[#CA8A00]"></div>
            <div className="w-[20px] h-[24px] bg-[#976700]"></div>
            <div className="w-[20px] h-[30px] bg-[#938BBC]"></div>
            <div className="w-[20px] h-[37px] bg-[#938BBC]"></div>
          </div>
          <div>
            {" "}
            <p className="uppercase text-white text-[14px] font-extrabold mt-0 md:mt-[22px] text-center">
              LvL 11{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
