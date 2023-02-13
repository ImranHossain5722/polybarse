import React from "react";
import herobg from "../../images/page2-bg.png";
import Container from "../container";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../buttons/EditButton";
import ViewPublicProfile from "../buttons/ViewPublicProfile";
import "./page2Hero.css";
import Chart from "./Chart";
const Page2Hero = () => {
  return (
    <div className="pt-32">
      <div className="page2Hero">
        <img className="" src={herobg} />
        <Container className="px-3 max-w-[1200px]">
          <div className="flex">
            <div className="flex items-start  ">
              <img
                className="w-36 h-36 md:w-80 md:h-80 md:mr-4 -mt-20 md:-mt-52"
                src={userProfile}
                alt="user profile"
              />
              <div className="mt-[77px] -ml-[140px] md:ml-0 md:mt-0">
                <p className="text-30 font-extraBold">Mike White</p>
                <a href="#" className="text-sm font-bold hover:text-[#497BEE]">
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
                  <Chart />
                </div>
              </div>
            </div>

            <div className=" gap-2 flex md:gap-4 -mt-3 md:ml-[100px]">
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
