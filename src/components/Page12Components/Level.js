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
        <div className="lg:flex items-center gap-[0.5rem] w-full">
          <div className="translate-y-full">
            <SwiperPrev />
          </div>
          {/* for mobile level */}
          <div className="md:w-[200px] bg-[#044C6B] rounded-md mt-[50px] md:mt-0 block md:hidden">
            <p className="text-center text-18 text-white">Level</p>
          </div>
          <div className="freePass mt-4 md:mt-0 flex gap-3 md:gap-0 md:block">
            <div className="w-full md:w-[200px] h-[238px] rounded-5 ">
              <div className="w-full md:w-[200px] bg-[#044C6B] rounded-md hidden md:block">
                <p className="text-center text-18 text-white">Level</p>
              </div>
              <div className="w-full md:w-[200px] bg-[#061E42] mt-2">
                <div className="flex justify-center">
                  <img
                    className="w-[155px] h-[155px]"
                    src="/images/FreePass.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="text-30 text-center text-white">Free Pass</p>
                </div>
              </div>
            </div>
            {/* gold */}
            <div className="w-full md:w-[200px] rounded-5  mt-2 md:mt-3 ">
              <div className="relative bg-[#ffcb5bda]">
                <div className="">
                  <div className="flex justify-center">
                    <img
                      className="w-[155px] h-[155px]"
                      src="/images/goldPass.png"
                      alt=""
                    />
                  </div>{" "}
                  <div className="">
                    <p className="text-30 text-center text-white">Free Pass</p>
                  </div>
                </div>
                <div className="absolute top-[166px] md:top-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[93px] h-[35px] bg-[#363532a4]">
                  <img
                    className="w-[19px] h-[24px]"
                    src="images/locker.png"
                    alt=""
                  />
                  <p className="text-white text-20 font-semibold">Locked</p>
                </div>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".nextslide",
              prevEl: ".prevslide",
            }}
            className="mySwiper mt-3 md:mt-20"
            modules={[Navigation]}
            breakpoints={{
              375: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
          >
            {" "}
            <div className="slider">
              <SwiperSlide className="">
                <div className="md:w-64">
                  <div className="">
                    <div className="w-[150px] bg-[#5FAF5F]  mb-2 rounded-md">
                      <p className="text-center text-18 text-white">1</p>
                    </div>
                    <div className="bg-[#061E42] w-[150px] h-[200px] rounded-5">
                      <div className="bg-[#061E42] relative ">
                        <div className="flex justify-center">
                          <img
                            className="w-[100px] h-[100px] pt-11 px-5 opacity-30 "
                            src="/images/ticket.png"
                            alt=""
                          />
                        </div>

                        <div className="mt-12">
                          <p className="text-18 font-extraBold text-center text-white opacity-30">
                            1 Ticket
                          </p>
                        </div>
                        <div className="absolute top-[60px] left-[47px] flex justify-center">
                          <img
                            className="w-[53px] h-[40px] "
                            src="images/pngkey 1.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    {/* {gold} */}
                    <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4  rounded-5">
                      <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                        <div className="relative">
                          <div className="relative flex justify-center ">
                            <img
                              className="w-[100px] h-[100px] pt-11 px-5 opacity-40"
                              src="/images/glass.png"
                              alt=""
                            />
                            <div className="absolute top-[77px] button-hero">
                              <Link className="py-1 px-3 border-2 border-[#6E3C22] text-[#6E3C22] uppercase text-[22px] bg-[#F9D357] font-bold rounded-[10px] button-hero">
                                Claim
                              </Link>
                            </div>
                          </div>
                          <div className="flex justify-center mt-12 opacity-40">
                            <Link
                              to="#"
                              className="py-1 px-3  text-white uppercase text-[12px] bg-[#044C6B] font-extraBold rounded-[10px]"
                            >
                              RARE NFT
                            </Link>
                          </div>
                          <div className="absolute -bottom-[26px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                            <img
                              className="w-[19px] h-[24px]"
                              src="images/locker.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="md:w-64">
                  <div className="w-[150px] bg-[#5FAF5F] mb-2 rounded-md">
                    <p className="text-center text-18 text-white">2</p>
                  </div>
                  <div className="bg-[#061E42] w-[150px] h-[200px]  rounded-5">
                    <div className="bg-[#061E42] relative ">
                      <div className="flex justify-center">
                        <img
                          className="w-[100px] h-[100px] pt-11 px-5 opacity-30 "
                          src="/images/ticket.png"
                          alt=""
                        />
                      </div>
                      <div className="mt-12">
                        <p className="text-18 font-extraBold text-center text-white opacity-30">
                          1 Ticket
                        </p>
                      </div>
                      <div className="absolute top-[60px] left-[47px] flex justify-center">
                        <img
                          className="w-[53px] h-[40px] "
                          src="images/pngkey 1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* Gold pass div */}
                  <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4 rounded-5">
                    <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                      <div className="relative">
                        <div className="relative flex justify-center ">
                          <img
                            className=" w-[100px] h-[100px] pt-11 px-5 opacity-40"
                            src="/images/goldBag.png"
                            alt=""
                          />
                          <div className="absolute top-[77px] button-hero">
                            <Link className="py-1 px-3 border-2 border-[#6E3C22] text-[#6E3C22] uppercase text-[22px] bg-[#F9D357] font-bold rounded-[10px] button-hero">
                              Claim
                            </Link>
                          </div>
                        </div>
                        <div className="flex justify-center items-center mt-12 opacity-40">
                          <img
                            className="w-[24px] h-[24px]"
                            src="images/singleCoin.png"
                            alt="coin"
                          />
                          <p className="text-24 font-extraBold text-center text-white">
                            500
                          </p>
                        </div>
                        <div className="absolute -bottom-[16px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                          <img
                            className="w-[19px] h-[24px]"
                            src="images/locker.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-64">
                  <div className="w-[150px] bg-[#5FAF5F]  mb-2 rounded-md">
                    <p className="text-center text-18 text-white">3</p>
                  </div>
                  <div className="bg-[#061E42] w-[150px] h-[200px]  rounded-5">
                    <div className="bg-[#061E42] relative ">
                      <div className="flex justify-center">
                        <img
                          className="w-[100px] h-[100px] pt-11 px-5 opacity-30 "
                          src="/images/ticket.png"
                          alt=""
                        />
                      </div>

                      <div className="mt-12">
                        <p className="text-18 font-extraBold text-center text-white opacity-30">
                          1 Ticket
                        </p>
                      </div>
                      <div className="absolute top-[60px] left-[30px] flex justify-center">
                        <Link className="py-1 px-3 border-2 border-[#3D4744] text-[#3D4744] uppercase text-[22px] bg-[#ECFAF1] font-bold rounded-[10px] button-hero">
                          {" "}
                          Claim
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Gold pass div */}
                  <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4 rounded-5">
                    <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                      <div className="relative">
                        <div className="relative flex justify-center ">
                          <img
                            className=" w-[100px] h-[100px] pt-11 px-5 opacity-40"
                            src="/images/glass.png"
                            alt=""
                          />
                          <div className="absolute top-[77px] button-hero">
                            <Link className="py-1 px-3 border-2 border-[#6E3C22] text-[#6E3C22] uppercase text-[22px] bg-[#F9D357] font-bold rounded-[10px] ">
                              {" "}
                              Claim
                            </Link>
                          </div>
                        </div>
                        <div className="flex justify-center mt-12 opacity-40">
                          <Link className="py-1 px-3  text-white uppercase text-[12px] bg-[#044C6B] font-extraBold rounded-[10px]">
                            RARE NFT
                          </Link>
                        </div>
                        <div className="absolute -bottom-[26px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                          <img
                            className="w-[19px] h-[24px]"
                            src="images/locker.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-64">
                  <div className="w-[150px] bg-[#044C6B] mb-2 rounded-md">
                    <p className="text-center text-18 text-white">4</p>
                  </div>
                  <div className="bg-[#061E42] w-[150px] h-[200px] rounded-5">
                    <div className="flex justify-center">
                      <img
                        className="w-[100px] h-[100px] pt-11 px-5"
                        src="/images/goldBag.png"
                        alt=""
                      />
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2">
                      <img
                        className="w-[24px] h-[24px]"
                        src="images/singleCoin.png"
                        alt="coin"
                      />
                      <p className="text-24 font-extraBold text-center text-white">
                        500
                      </p>
                    </div>
                  </div>
                  {/* gold */}
                  <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4  rounded-5">
                    <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                      <div className="relative">
                        <div className="relative flex justify-center ">
                          <img
                            className=" w-[100px] h-[100px] pt-11 px-5 opacity-40"
                            src="/images/goldBag.png"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center items-center mt-12 opacity-40">
                          <img
                            className="w-[24px] h-[24px]"
                            src="images/singleCoin.png"
                            alt="coin"
                          />
                          <p className="text-24 font-extraBold text-center text-white">
                            1500
                          </p>
                        </div>
                        <div className="absolute -bottom-[16px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                          <img
                            className="w-[19px] h-[24px]"
                            src="images/locker.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-64">
                  <div className="w-[150px] bg-[#044C6B] mb-2 rounded-md">
                    <p className="text-center text-18 text-white">5</p>
                  </div>
                  <div className="bg-[#061E42] w-[150px] h-[200px]  rounded-5">
                    <div className="flex justify-center">
                      <img
                        className="w-[100px] h-[100px] pt-11 px-5"
                        src="/images/glass.png"
                        alt=""
                      />
                    </div>

                    <div className="flex justify-center mt-12">
                      <Link className="py-1 px-3  text-white uppercase text-[12px] bg-[#044C6B] font-extraBold rounded-[10px]">
                        Common NFT
                      </Link>
                    </div>
                  </div>
                  {/* gold */}
                  <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4 rounded-5">
                    <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                      <div className="relative">
                        <div className="relative flex justify-center ">
                          <img
                            className=" w-[100px] h-[100px] pt-11 px-5 "
                            src="/images/ticket.png"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center mt-12">
                          <p className="py-1 px-3  text-white uppercase text-[12px] font-extraBold rounded-[10px]">
                            10 Ticket
                          </p>
                        </div>
                        <div className="absolute -bottom-[26px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                          <img
                            className="w-[19px] h-[24px]"
                            src="images/locker.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:w-64">
                  <div className="w-[150px] bg-[#044C6B]  mb-2 rounded-md">
                    <p className="text-center text-18 text-white">6</p>
                  </div>
                  <div className="bg-[#061E42] w-[150px] h-[200px]  rounded-5">
                    <div className="flex justify-center">
                      <img
                        className="w-[100px] h-[100px] pt-11 px-5"
                        src="/images/ticket.png"
                        alt=""
                      />
                    </div>
                    <div className="mt-12">
                      <p className="text-18 font-extraBold text-center text-white">
                        1 Ticket
                      </p>
                    </div>
                  </div>
                  {/* gold */}
                  <div className="bg-[#FBC637] w-[150px] h-[200px] mt-4 rounded-5">
                    <div className="gold-bg w-[150px] h-[200px] shadow-2xl rounded-5">
                      <div className="relative">
                        <div className="relative flex justify-center ">
                          <img
                            className=" w-[100px] h-[100px] pt-11 px-5"
                            src="/images/glass.png"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center mt-12">
                          <Link className="py-1 px-3  text-white uppercase text-[12px] bg-[#044C6B] font-extraBold rounded-[10px]">
                            RARE NFT
                          </Link>
                        </div>
                        <div className="absolute -bottom-[26px] left-0 flex justify-center items-center rounded-tr-5 rounded-bl-5 w-[35px] h-[35px] bg-[#363532a4]">
                          <img
                            className="w-[19px] h-[24px]"
                            src="images/locker.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="translate-y-full">
            <SwiperNext />
          </div>
        </div>
        <div>
          <div className="flex justify-end -mt-[40px] mr-10 ">
            <Link
              to="#"
              className="flex justify-end cursor-pointer button-hero z-30"
            >
              <button className="mr-4 py-3 px-6 md:px-12 uppercase text-sm md:text-24 font-black bg-btnbg rounded-full ">
                Stake for pass
              </button>
            </Link>
            <Link
              className="flex justify-end  button-hero cursor-pointer z-30"
              to="#"
            >
              <button className="gold-btn py-3 px-4 md:px-12 uppercase text-sm md:text-24 text-[#793512] font-black rounded-full">
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
];
export default Level;
