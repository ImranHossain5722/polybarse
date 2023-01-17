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
            <p className="text-45 mb-6 font-extraBold">My Inventory </p>
            <div className="div-wrap md:flex items-center justify-center ">
              <div>
                <p className="md:text-center text-30 mb-7 font-extraBold">
                  AVATARS
                </p>
                <div className="div1 mx-1">
                  <img className="z-40" src={img1} />
                  <div className="flex justify-end w-4/3 relative">
                    <p className="bg-[#0b5d7e] text-wrap p-3 absolute top-0 bottom-0 right-0">
                      x50
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className=" md:text-center text-30 mb-7 font-extraBold">
                  EQUIPMENT{" "}
                </p>
                <div className="div2 mx-1">
                  <img className="z-40" src={img2} />
                  <div className="flex justify-end w-4/3 relative">
                    <p className="bg-[#0b5d7e] text-wrap p-3 absolute top-0 bottom-0 right-0">
                      x100
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className=" md:text-center text-30 mb-7 font-extraBold">
                  LAND
                </p>
                <div className="div3 mx-1">
                  <img className="z-40" src={img3} />
                  <div className="flex justify-end w-4/3 relative">
                    <p className="bg-[#0b5d7e] text-wrap p-3 absolute top-0 bottom-0 right-0">
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
