import React from "react";
import herobg from "../../images/page2-bg.png";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../../components/buttons/EditButton";
import Container from "../../components/container";
import uparow from "../../images/upArow.png";
import fils from "../../images/userP.png";
import userC from "../../images/userC.png";
import editicon from "../../images/edit.png";
import greenshapbg from "../../images/green-shap.png";
import rightRedShap from "../../images/right-shap-red.png";
import Shapsix from "../../images/shapesix.png";
import purpaleShape from "../../images/purplepyramid.png";
import "./EditProfile.css";
import Popup from "../../components/animations/popup";
import EditProfileButton from "../../components/buttons/EditProfileButton";
const EditProfile = () => {
  return (
    <div className="relative pt-32">
      <Popup className="hidden md:block w-32 h-32 top-[950px] left-5 bottom-0">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="hidden md:block right-0 top-1/4 w-32  z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <div className=" hidden md:block absolute max-w-5xl -left-20 top-2/4 -translate-y-[45%] z-10">
        <img
          src="/images/dottss.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <div className=" hidden md:block absolute w-[850px] right-0  top-[450px] -translate-y-[45%] -z-10">
        <img
          src="/images/rifgtDotts.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="hidden md:block right-0 top-2/3 w-32  z-10">
        <img src={Shapsix} alt="shape" />
      </Popup>
      <Popup className="hidden md:block bottom-48 w-44 h-44 z-10">
        <img src={purpaleShape} alt="shape" />
      </Popup>
      <div className="page2Hero">
        <div className="banner-bg">
          <div className="pt-24">
            <a className="" href="#">
              <div className="flex justify-center items-center">
                <img className="w-5 h-5" src={uparow} />
                <p className="text-white text-30">Add a banner image</p>
              </div>
              <p className="text-white text-20 text-center">
                Optimal dimensions 2000 x 330
              </p>
            </a>
          </div>
        </div>

        <Container className="max-w-[1200px] pb-14">
          <from>
            <div className="grid grid-cols-3 place-content-center md:gap-40 -ml-[50px] md:ml-[25px]">
              {/* from image div */}
              <div className="flex ">
                <label>
                  <div className="relative">
                    <img
                      className="  w-24 h-24 md:w-[300px] md:h-[300px] ml-12 -mt-12 md:-mt-48 bg-[#A5A5A5]  cursor-pointer rounded-full
                    "
                      src="images/Mask group.png"
                      alt="Upload"
                    />
                    <img
                      className="absolute top-[67px] md:top-[224px] left-[100px] md:left-[220px] w-[40px] h-[40px] md:w-[85px] md:h-[85px]  bg-[#DEE0E6] rounded-full cursor-pointer
                    "
                      src={userC}
                      alt="Upload"
                    />
                    <input type="file" class="opacity-0" />
                  </div>
                </label>
              </div>
              {/* from inputs div */}
              <div className=" flex items-center justify-center -mr-[126px] -ml-[76px] md:-ml-0 md:-mr-[60px] mt-[84px] md:mt-0">
                <div className="w-full">
                  <p className="text-20 text-left  md:text-30 mb-6 font-extraBold">
                    Personal Information
                  </p>
                  <div className="userName ">
                    <label
                      htmlFor="UserName"
                      className="text-white text-16 md:text-24 pb-4 font-semibold"
                    >
                      User Name
                    </label>
                    <input
                      id="User-Name"
                      name="UserName"
                      type="text"
                      autoComplete="text"
                      required
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Mike 123"
                    />
                  </div>
                  <div className="name">
                    <label
                      htmlFor="name"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="text"
                      required
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Mike White"
                    />
                  </div>
                  <div className="website">
                    <label
                      htmlFor="website"
                      className="text-white text-16 md:text-24"
                    >
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      autoComplete="text"
                      required
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="www.mysite.com"
                    />
                  </div>
                  <div className="Bio">
                    <label
                      htmlFor="Bio"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Bio
                    </label>
                    <textarea
                      id="Bio"
                      name="Bio"
                      type="text"
                      autoComplete="text"
                      required
                      rows="8"
                      className="mt-4 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="www.mysite.com"
                    />
                  </div>

                  <p className="text-16 md:text-30 my-5 md:my-14 font-extraBold">
                    Email & Password
                  </p>

                  <div className="email">
                    <label
                      htmlFor="email"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="test@email.it"
                    />
                    <div className="flex items-center justify-end">
                      <img
                        className="w-3 h-3 mr-1"
                        src="images/edit.png"
                        alt="edit profile"
                      />
                      <a href="#">Change</a>
                    </div>
                  </div>
                  <div className="password">
                    <label
                      htmlFor="password"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="passwordl"
                      required
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="*********"
                    />
                    <div className="flex items-center justify-end">
                      <img className="w-3 h-3 mr-1" src={editicon} />
                      <a href="#">Change</a>
                    </div>
                  </div>
                  <p className="text-16 md:text-30 my-5 md:my-14">Social</p>
                  {/* telegram */}
                  <div className="telegram">
                    <label
                      htmlFor="telegram"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Telegram
                    </label>
                    <input
                      id="telegram"
                      name="telegram"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Telegram Name"
                    />
                  </div>
                  {/* instagram */}
                  <div className="instagram">
                    <label
                      htmlFor="instagram"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Instagram
                    </label>
                    <input
                      id="instagram"
                      name="instagram"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Instagram Name"
                    />
                  </div>
                  {/* discord */}
                  <div className="discord">
                    <label
                      htmlFor="discord"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Discord
                    </label>
                    <input
                      id="discord"
                      name="discord"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Discord Name"
                    />
                  </div>
                  {/* facebook */}
                  <div className="facebook">
                    <label
                      htmlFor="facebook"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Facebook
                    </label>
                    <input
                      id="facebook"
                      name="facebook"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Facebook Name"
                    />
                  </div>
                  {/* youtube */}
                  <div className="youtube">
                    <label
                      htmlFor="youtube"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Youtube
                    </label>
                    <input
                      id="youtube"
                      name="youtube"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Youtube Name"
                    />
                  </div>
                  {/* tiktok */}
                  <div className="tiktok">
                    <label
                      htmlFor="tiktok"
                      className="text-white text-16 md:text-24 font-semibold"
                    >
                      Tiktok
                    </label>
                    <input
                      id="tiktok"
                      name="tiktok"
                      type="text"
                      autoComplete="text"
                      className="my-3 bg-[#0E0B3B] border border-[#A2D132] text-white sm:text-sm rounded-full  placeholder-[#474574] focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                      placeholder="Tiktok Name"
                    />
                  </div>
                  <button
                    type="submit"
                    className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-3xl font-bold button-hero"
                  >
                    save
                  </button>
                </div>
              </div>
              {/* edit profile button */}
              <div className="flex gap-1 ml-[40px] md:ml-0">
                <EditProfileButton></EditProfileButton>
              </div>
            </div>
          </from>
        </Container>
      </div>
    </div>
  );
};

export default EditProfile;
