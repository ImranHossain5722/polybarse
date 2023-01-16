import React from "react";
import Container from "../container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
const Level = () => {
  return (
    <div>
      <Container className="max-w-[1300px] z-20">
        <h2 className="text-center capitalize text-2xl lg:text-50 font-black">
          team members
        </h2>
        <div className="lg:flex items-center gap-3">
          <div className="translate-y-full">
            <SwiperPrev />
          </div>
          <Swiper
            spaceBetween={30}
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
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {m.map((i) => (
              <SwiperSlide key={i.id}>
                <div className="w-52">
                  <div className="bg-[#044C6B] w-48 h-7 my-1 mx-3 rounded-md">
                    <p className="text-center text-18 text-white">Level</p>
                  </div>
                  <div className="bg-[#061E42] mx-3 ">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="translate-y-full">
            <SwiperNext />
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
