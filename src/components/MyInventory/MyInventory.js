import React from "react";
import Container from "../container";
import img1 from "../../images/man.png";
import img2 from "../../images/cap.png";
import img3 from "../../images/map.png";
import "./MInventory.css";

const MyInventory = () => {
  return (
    <div className="mt-32">
      <div>
        <Container className="max-w-[1200px]">
          <div>
            <p className="text-center md:text-left lg:text-left text-45 mb-6 font-extraBold">
              My Inventory{" "}
            </p>
            <div className="div-wrap grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center w-full">
              <div className="w-72">
                <p className="text-center  text-30 mb-7 font-extraBold">
                  AVATARS
                </p>
                <div className="div1">
                  <img className="z-40" src={img1} alt="avatar" />
                  <div className="flex justify-end">
                    <p className="text-wrap text-right z-20 w-[65px] h-[74px] bg-image pr-3 pt-[18px]">
                      x50
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <p className="text-center  text-30 mb-7 font-extraBold">
                  EQUIPMENT{" "}
                </p>
                <div className="div2">
                  <img className="z-40" src={img2} alt="cap" />
                  <div className="flex justify-end">
                    <p className=" text-wrap text-right z-20 w-[65px] h-[74px] bg-image pr-4 pt-4 pl-[26px]">
                      x100
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-72">
                <p className="text-center text-30 mb-7 font-extraBold">LAND</p>
                <div className="div3 relative">
                  <img className="rounded-[42px]" src={img3} alt="location" />
                  <div className="flex justify-end">
                    {/* <img
                      className="absolute -right-4 bottom-0 w-24 h-16"
                      src="images/bg-p.png"
                    /> */}
                    <p className="text-wrap text-right z-20 w-[65px] h-[74px] bg-image pr-4">
                      x5
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MyInventory;
