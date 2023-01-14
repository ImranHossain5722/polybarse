import React from "react";
import herobg from "../../images/page2-bg.png";
import Container from "../container";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../buttons/EditButton";
import ViewPublicProfile from "../buttons/ViewPublicProfile";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <div className="pt-32">
        <div className="page2Hero">
          <img className="" src={herobg} alt="banner" />
          <Container className="max-w-[1200px]">
            <div className="flex">
              <div className="flex items-start  ">
                <img
                  className="w-40 h-40 md:w-80 md:h-80 mr-4 -mt-32"
                  src={userProfile}
                  alt="useImage"
                />
                <div className="">
                  <p className="text-30">Mike White</p>
                  <p className="text-sm">@Mike123</p>
                  <div className="bt-2 mt-5">
                    <Link
                      to="#"
                      className="uppercase text-white text-sm bg-btnbg rounded-3xl py-3 px-10"
                    >
                      connect the wallet
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:flex gap-1 -mt-3">
                <EditButton />
                <ViewPublicProfile />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
