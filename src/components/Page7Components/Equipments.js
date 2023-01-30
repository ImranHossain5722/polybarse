import React from "react";
import { Link, NavLink } from "react-router-dom";
import Popup from "../animations/popup";
import greenshapbg from "../../images/green-shap.png";
import rightshap from "../../images/shapeseven.png";
import Container from "../container";
import Hero from "./Hero";
import "./TabSection.css";
const Equipments = () => {
  const activeLink =
    "border-b-2 border-[#D75D29] text-white pb-[10px] w-[100px]";
  const normalLink = "";
  const s = [
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/dkc3pTF/1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/s5g7rGw/2-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/r0c2tbh/3-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/wdV3Tgg/Rectangle-18.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/MGcSDmP/Rectangle-18-1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/VwwKMjD/Rectangle-18-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/VwwKMjD/Rectangle-18-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/r0c2tbh/3-2.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/dkc3pTF/1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
    {
      id: window.crypto.randomUUID(),
      img: "https://i.ibb.co/MGcSDmP/Rectangle-18-1.png",
      name: "Jojo",
      number: "#001",
      author: "Sharifulgr",
      img2: "https://i.ibb.co/StHbd1F/check.png",
    },
  ];
  return (
    <div>
      <div className=" hidden md:block absolute max-w-xl -left-32 top-1/4 -translate-y-[45%] -z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <div className=" hidden md:block absolute max-w-xl -right-32  top-1/4 -translate-y-[45%] -z-10">
        <img
          src="/images/rightbg.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block w-32 h-32 top-1/4 left-5 bottom-0 z-10">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-[580px] w-32  z-10">
        <img src={rightshap} alt="shape" />
      </Popup>
      <Hero></Hero>
      <Container className="max-w-[1200px]">
        {/* two button */}
        <div className=" flex items-start">
          <div className="bt-1 mr-5">
            <Link
              to="#"
              className="uppercase bg-btnbg text-white text-18 hover:bg-btnbg rounded-3xl py-3 px-10 font-extraBold"
            >
              05 on sale
            </Link>
          </div>
          <div className="bt-2">
            <Link
              to="#"
              className="uppercase bg-[#322F6F] text-white text-18 hover:bg-btnbg rounded-3xl py-3 px-10 font-extraBold"
            >
              20 Inventory
            </Link>
          </div>
        </div>
        <section className="mt-9">
          <div className="w-full h-16 bg-[#322F6F] rounded-5  grid grid-cols-8   px-9 py-6 overflow-hidden">
            {/* nav1 */}
            <NavLink
              to="/page7"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <p className="uppercase text-white text-18 font-extraBold">
                  All
                </p>
              </div>
            </NavLink>

            {/* nav2 */}
            <NavLink
              to="/avatar"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center gap-2">
                <p className="uppercase text-white text-18 font-extraBold">
                  AVATAR
                </p>
              </div>
            </NavLink>
            {/* nav3 */}
            <NavLink
              to="/equipment"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center ">
                <p className="uppercase text-white text-18 font-extraBold">
                  EQUIPMENTS
                </p>
              </div>
            </NavLink>
            {/* nav4 */}
            <NavLink
              to="/land"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <div className="flex items-center  pl-8">
                <p className="uppercase text-white text-18 font-extraBold">
                  Land
                </p>
              </div>
            </NavLink>
          </div>
        </section>
        {/* content*/}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          {s.map((i) => (
            <div className="mb-10 ">
              <img
                className="w-52 h-52 hover:scale-110 hover:transition duration-1000 ease-in-out cursor-pointer"
                src={i.img}
                alt=""
              />
              <p className="text-24 mt-5 font-semibold">
                {i.name} {i.number}{" "}
              </p>
              <div className="flex items-center mt-3">
                <p className="text-18 ">By {i.author}</p>
                <img className="w-4 h-4 ml-5" src={i.img2} alt="" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Equipments;
