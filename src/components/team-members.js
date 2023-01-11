import React from "react";
import Popup from "./animations/popup";
import Container from "./container";
import Sendmail from "./buttons/send-mail";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export default function Team() {
  return (
    <div
      className="relative pb-20 md:pb-32 flex"
      data-aos="fade-up"
    >
      <Popup className="w-20 top-1/2 left-0 z-10">
        <img
          src="/images/purplepyramid.png"
          alt="shape"
        />
      </Popup>
      <Popup className="w-32 right-0 bottom-1/2 z-10">
        <img
          src="/images/shapeeight.png"
          alt="shape"
        />
      </Popup>
      <Container className="max-w-[1300px] z-20">
        <h2 className="text-center capitalize text-2xl lg:text-50 font-black">team members</h2>
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
                slidesPerView: 4,
              },
            }}
          >
            {m.map((i) => (
              <SwiperSlide key={i.id}>
                <div className="bg-themeColor border-2 border-dashed rounded-15 border-teamCardBorder w-full h-full p-5 pt-6 pb-7">
                  <div className="w-32 h-32 border-2 border-dashed rounded-full overflow-hidden border-teamCardBorder p-2 m-auto">
                    <img
                      src={i.img}
                      alt={i.name}
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <h4 className="text-2xl font-black">{i.name}</h4>
                    <p className="text-base font-semibold mt-2">{i.title}</p>
                    <p className="text-xs font-normal mt-3">{i.text}</p>
                    <div className="mt-5">
                      <Sendmail />
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
}

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
