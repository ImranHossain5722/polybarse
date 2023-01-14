import React from "react";
import herobg from "../../images/page2-bg.png";
import Container from "../container";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../buttons/EditButton";
import ViewPublicProfile from "../buttons/ViewPublicProfile";
import { FaRegPaperPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Hero = () => {
  // social media array
  const s = [
    {
      id: window.crypto.randomUUID(),
      icon: <AiOutlineTwitter />,
      link: "https://twitter.com",
    },

    {
      id: window.crypto.randomUUID(),
      icon: <FaRegPaperPlane />,
      link: "https://telegram.com",
    },
  ];
  return (
    <div>
      <div className="pt-32">
        <div className="page2Hero">
          <img className="" src={herobg} />
          <Container className="max-w-[1200px]">
            <div className="flex justify-around">
              <div className="flex items-start  ">
                <img
                  className="w-40 h-40 md:w-80 md:h-80 mr-4 -mt-32"
                  src={userProfile}
                />
                <div className="">
                  <p className="text-30">Mike White</p>
                  <p className="text-sm">@Mike123</p>
                  <div className="flex items-center">
                    <p>0x990x9dhduehdd30u.........3u3ifh</p>
                    <img className="w-3 h-3 ml-2" src={file} />
                  </div>
                </div>
              </div>
              {/* social icon array */}
              <div className=" gap-1 -mt-3">
                <div className="flex justify-center items-center gap-5 mt-5 md:mt-8">
                  {s.map((i) => (
                    <a
                      href={i.link}
                      key={i.id}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-lg md:text-3xl text-black bg-white p-4 rounded-full hover:text-btnbg"
                    >
                      {i.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-36">
              <p className="text-18 text-white p-10">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Hero;
