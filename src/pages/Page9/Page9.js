import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/container";
import DashBoardNav from "../../components/DashBoardNav/DashBoardNav";
import NaveHeader from "../../components/DashBoardNav/NaveHeader";
import Page9NavBar from "../../components/Page9Components/Page9NavBar";

const Page9 = () => {
  return (
    <div>
      <NaveHeader></NaveHeader>
      <Container className="max-w-[1200px]">
        <div className=" grid grid-cols-1 md:grid-cols-2  place-content-center my-[100px] md:my-[60px]">
          <div className="boxAvatar ">
            <img
              className="w-full h-full md:w-[474px] md:h-[547px]"
              src="/images/avatar.png"
              alt="avatar"
            />
            <div className="bt-2 mt-12 flex justify-center">
              <Link
                to="#"
                className="uppercase text-white text-sm bg-btnbg rounded-3xl font-semibold py-3 px-10 hover:scale-75 hover:transition duration-300  cursor-pointer"
              >
                CHOOSE YOUR AVATAR
              </Link>
            </div>
          </div>
          <div className="boxMap mt-44 md:mt-0">
            <img
              className="w-full h-full md:w-[523px] md:h-[523px]"
              src="/images/play.png"
              alt="play"
            />

            <div className="bt-2 mt-12 flex justify-center">
              <Link
                to="#"
                className="uppercase text-white text-sm bg-btnbg rounded-3xl font-semibold py-3 px-10 hover:scale-75 hover:transition duration-300  cursor-pointer"
              >
                CHOOSE YOUR AVATAR
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page9;
