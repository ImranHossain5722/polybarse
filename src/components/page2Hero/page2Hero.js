import React from "react";
import herobg from "../../images/page2-bg.png";
import Container from "../container";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../buttons/EditButton";
import ViewPublicProfile from "../buttons/ViewPublicProfile";
const Page2Hero = () => {
  return (
    <div className="pt-32">
      <div className="page2Hero">
        <img className="" src={herobg} />
        <Container className="max-w-[1200px]">
          <div className="flex">
            <div className="flex items-start  ">
              <img className="w-80 h-80 mr-4 -mt-32" src={userProfile} />
              <div className="">
                <p className="text-30">Mike White</p>
                <p className="text-sm">@Mike123</p>
                <div className="flex items-center">
                  <p>0x990x9dhduehdd30u.........3u3ifh</p>
                  <img className="w-3 h-3 ml-2" src={file} />
                </div>
              </div>
            </div>

            <div className="flex gap-1 -mt-3">
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
