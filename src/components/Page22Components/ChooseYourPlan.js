import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
// import required modules
import { Keyboard, Pagination, Navigation, EffectCoverflow } from "swiper";

import "./ChooseYourPlan.css";

const ChooseYourPlan = () => {
  return (
    <div className="mt-24 relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        initialSlide={2}
        loop={false}
        spaceBetween={100}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={false}
        modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[280px] div relative border-1 border-[#373371] rounded-5 bg-[#0D0A3A] ">
            <div className="flex items-center justify-center py-5">
              <img
                className="w-[240px] h-[152px]"
                src="images/base-card.png"
                alt="card"
              />
            </div>
            <div className="pb-12">
              <p className="text-center text-18  font-extraBold ">
                Daily V-Coin Swap Limit{" "}
              </p>
              <div className="flex items-center gap-1 justify-center">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase text-18">1k</p>
                </div>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                  <p className="text-18 capitalize font-extraBold ml-1">
                    V-coin
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-[145px] ">
              <button className=" flex items-center justify-center bg-[#373371] py-2 px-4 rounded-full">
                <p className="uppercase font-bold text-24 ">Free</p>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[280px] div relative border-1 border-[#373371] rounded-5 bg-[#0D0A3A] ">
            <div className="flex items-center justify-center py-5">
              <img
                className="w-[240px] h-[152px]"
                src="images/silver.png"
                alt="Silver card"
              />
            </div>
            <div className="pb-12">
              <p className="text-center text-18  font-extraBold ">
                Daily V-Coin Swap Limit{" "}
              </p>
              <div className="flex items-center gap-1 justify-center">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase text-18">3k</p>
                </div>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                  <p className="text-18 capitalize font-extraBold ml-1">
                    V-coin
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-[145px] ">
              <button className=" flex items-center justify-center bg-[#373371] py-2 px-4 rounded-full">
                <p className="uppercase font-bold text-24 ">3k</p>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="w-[280px] div relative border-1 border-[#373371] rounded-5 bg-[#0D0A3A]">
            <div className="flex items-center justify-center py-5">
              <img
                className="w-[240px] h-[152px]"
                src="images/goldCard.png"
                alt="Gold card"
              />
            </div>
            <div className="pb-12">
              <p className="text-center text-18  font-extraBold">
                Daily V-Coin Swap Limit{" "}
              </p>
              <div className="flex items-center gap-1 justify-center">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase text-18">10k</p>
                </div>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                  <p className="text-18 capitalize font-extraBold ml-1">
                    V-coin
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-[145px] ">
              <button className=" flex items-center justify-center bg-[#373371] py-2 px-4 rounded-full">
                <p className="uppercase font-bold text-24 ">5k</p>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[280px] div relative border-1 border-[#373371] rounded-5 bg-[#0D0A3A]">
            <div className="flex items-center justify-center py-5">
              <img
                className="w-[240px] h-[152px]"
                src="images/Platinum.png"
                alt="card"
              />
            </div>
            <div className="pb-12">
              <p className="text-center text-18  font-extraBold">
                Daily V-Coin Swap Limit{" "}
              </p>
              <div className="flex items-center gap-1 justify-center">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase text-18">50k</p>
                </div>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                  <p className="text-18 capitalize font-extraBold ml-1">
                    V-coin
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-[145px] ">
              <button className=" flex items-center justify-center bg-[#373371] py-2 px-4 rounded-full">
                <p className="uppercase font-bold text-24 ">10k</p>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[280px] div relative border-1 border-[#373371] rounded-5 bg-[#0D0A3A]">
            <div className="flex items-center justify-center py-5">
              <img
                className="w-[240px] h-[152px]"
                src="images/Diamond.png"
                alt="card"
              />
            </div>
            <div className="pb-12">
              <p className="text-center text-18  font-extraBold ">
                Daily Claim Limit{" "}
              </p>
              <div className="flex items-center gap-1 justify-center">
                <div className="font-extraBold text-16 text-center text-white">
                  <p className="uppercase text-18">No Limit</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-[145px] ">
              <button className=" flex items-center justify-center bg-[#373371] py-2 px-4 rounded-full">
                <p className="uppercase font-bold text-24 ">20k</p>
                <div className="flex items-center ">
                  <img
                    className="rounded-full w-5 h-5 "
                    src="/images/singleCoin.png"
                    alt="coin"
                  />
                </div>
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* <div className="swiper-pagination swiper-pagination-horizontal"></div> */}
      </Swiper>
    </div>
  );
};
export default ChooseYourPlan;
// slide previous button

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
