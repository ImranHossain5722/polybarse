import React from "react";
import herobg from "../../images/page2-bg.png";
import Container from "../container";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../buttons/EditButton";
import ViewPublicProfile from "../buttons/ViewPublicProfile";
import "./page2Hero.css";
const Page2Hero = () => {
  return (
    <div className="pt-32">
      <div className="page2Hero">
        <img className="" src={herobg} />
        <Container className="max-w-[1200px]">
          <div className="flex">
            <div className="flex items-start  ">
              <img
                className="w-40 h-40 md:w-80 md:h-80 mr-4 -mt-32"
                src={userProfile}
              />
              <div className="">
                <p className="text-30 font-extraBold">Mike White</p>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-[#497BEE]"
                >
                  @Mike123
                </a>
                <div className=" cursor-pointer flex items-center">
                  <a href="#" className=" hover:text-[#497BEE]">
                    0x990x9dhduehdd30u.........3u3ifh
                  </a>
                  <img
                    className="w-3 h-3 ml-2 hover:text-[#497BEE]"
                    src={file}
                  />
                </div>
                <div className="mt-3">
                  <img src="images/chart.png" alt="chart" />
                </div>
              </div>
            </div>

            <div className="md:flex gap-4 -mt-3">
              <EditButton />
              <ViewPublicProfile />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page2Hero;
