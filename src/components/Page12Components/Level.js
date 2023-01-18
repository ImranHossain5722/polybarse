import React from "react";
import Container from "../container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./Level.css";
import { Link } from "react-router-dom";
const Level = () => {
  return (
    <div>
      <Container className="max-w-[1200px] z-20">
        <div className="lg:flex items-center gap-3  w-full">
          <div className="translate-y-full">
            <SwiperPrev />
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".nextslide",
              prevEl: ".prevslide",
            }}
            className="mt-10 md:mt-20"
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {m.map((i) => (
              <SwiperSlide key={i.id}>
                <div className="w-52">
                  <div className="bg-[#044C6B] mx-4 mb-2 rounded-md">
                    <p className="text-center text-18 text-white">Level</p>
                  </div>
                  <div className="bg-[#061E42] mx-3">
                    <div className="flex justify-center">
                      <img
                        className=" w-[157px] h-[157px]"
                        src="/images/FreePass.png"
                        alt=""
                      />
                    </div>

                    <div className="">
                      <p className="text-30 text-center text-white">
                        Free Pass
                      </p>
                    </div>
                  </div>
                </div>
                {/* Gold pass div */}
                <div className="bg-[#FBC637] ">
                  <div className="w-52 mt-4">
                    <div className="gold-pass mx-3">
                      <div className="flex justify-center">
                        <img
                          className=" w-[157px] h-[157px]"
                          src="/images/goldPass.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-30 text-center text-white">
                          Free Pass
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="translate-y-full">
            <SwiperNext />
          </div>
        </div>
        <div>
          <div className=" md:flex justify-end mt-6 mr-10">
            <Link to="#">
              <button className="mr-4 py-6 px-20 uppercase md:text-24 font-black bg-btnbg rounded-full button-hero">
                Stake for pass
              </button>
            </Link>
            <Link to="#">
              <button className="gold-btn py-6 px-20 uppercase md:text-24 text-[#793512] font-black rounded-full button-hero">
                GET GOLD PASS
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

// slide previous button
function SwiperPrev() {
  return (
    <button className="hidden lg:flex w-8 h-8 rounded-full bg-arrowBtnColor text-white justify-center items-center text-xl hover:bg-arrwoActive prevslide">
      <FiChevronLeft />
    </button>
  );
}
// slide next button
function SwiperNext() {
  return (
    <button className="hidden lg:flex w-8 h-8 rounded-full bg-arrowBtnColor text-white justify-center items-center text-xl hover:bg-arrwoActive nextslide">
      <FiChevronRight />
    </button>
  );
}

// members array
const m = [
  {
    id: window.crypto.randomUUID(),
    img: "/images/member.png",
    name: "Oliver Giustia",
    title: "PhP Developer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/membertwo.png",
    name: "Serena Wilkerson",
    title: "Illustrator",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/memberthree.png",
    name: "Rebecca Stiepock",
    title: "Creative Director",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/memberfour.png",
    name: "Oliver Giustia",
    title: "PhP Developer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/member.png",
    name: "Oliver Giustia",
    title: "PhP Developer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
];
export default Level;
