import React from "react";
import Container from "../container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { Link } from "react-router-dom";

const LeaderBoard = () => {
  return (
    <div>
      <div>
        <Container className="max-w-[1200px] z-20">
          <div className="">
            <div className="flex items-start">
              <img className="w-14 h-14" src="images/tofe.png" alt="cup" />
              <p className="font-extraBold text-45 text-white ml-3">
                Leaderboard
              </p>
            </div>
          </div>
          <div className="lg:flex items-center w-full">
            <div className="translate-y-full ">
              <SwiperPrev />
            </div>
            <Swiper
              spaceBetween={20}
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
                  slidesPerView: 6,
                },
              }}
            >
              {m.map((i) => (
                <SwiperSlide key={i.id}>
                  <div className="relative mt-8 bg-[#061E42] p-3 ">
                    <Link className="absolute -top-3 right-8" to="#">
                      <button className="py-2 px-2 uppercase text-[12px] font-extraBold bg-[#A2D132] rounded-5 button-hero">
                        Archery
                      </button>
                    </Link>
                    <img
                      className="w-[185px] h-[175px] rounded-5"
                      src="images/img-3.png"
                      alt="images"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="translate-y-full">
              <SwiperNext />
            </div>
          </div>
          <div></div>
        </Container>
      </div>
    </div>
  );
};
// slide previous button
function SwiperPrev() {
  return (
    <button className="hidden lg:flex w-8 h-8 rounded-full border-2 border-white text-white justify-center items-center text-xl hover:bg-arrwoActive prevslide">
      <FiChevronLeft />
    </button>
  );
}
// slide next button
function SwiperNext() {
  return (
    <button className="hidden lg:flex w-8 h-8 rounded-full border-2 border-white text-white justify-center items-center text-xl hover:bg-arrwoActive nextslide">
      <FiChevronRight />
    </button>
  );
}

// array
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
    img: "/images/member.png",
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
  {
    id: window.crypto.randomUUID(),
    img: "/images/member.png",
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
  {
    id: window.crypto.randomUUID(),
    img: "/images/member.png",
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
  {
    id: window.crypto.randomUUID(),
    img: "/images/member.png",
    name: "Oliver Giustia",
    title: "PhP Developer",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
  },
];
export default LeaderBoard;
