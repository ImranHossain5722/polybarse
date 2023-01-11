import React from "react";
import { Autoplay } from "swiper";
import Container from "../container";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LogoCarosel() {
  return (
    <Container className="max-w-[1180px] flex gap-5 flex-wrap justify-center items-center mt-16 md:mt-28">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        className="w-full"
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {logos.map((i) => (
          <SwiperSlide key={i.id}>
            <img
              src={i.img}
              alt="logo"
              className="w-40"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const logos = [
  {
    id: window.crypto.randomUUID(),
    img: "/images/yahoo.png",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/benzinga.png",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/coinmarket.png",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/coingeco.png",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/oculus.png",
  },
  {
    id: window.crypto.randomUUID(),
    img: "/images/crypto.png",
  },
];
