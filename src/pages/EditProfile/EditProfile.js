import React from "react";
import herobg from "../../images/page2-bg.png";
import userProfile from "../../images/user-profileImage.png";
import file from "../../images/fileicon.png";
import EditButton from "../../components/buttons/EditButton";
import Container from "../../components/container";
import uparow from "../../images/upArow.png";
import fils from "../../images/file.png";
import editicon from "../../images/edit.png";
import greenshapbg from "../../images/green-shap.png";
import rightRedShap from "../../images/right-shap-red.png";
import Shapsix from "../../images/shapesix.png";
import purpaleShape from "../../images/purplepyramid.png";
import "./EditProfile.css";
import Popup from "../../components/animations/popup";
const EditProfile = () => {
  return (
    <div className="relative pt-32">
      <div className="absolute max-w-xl -left-32 top-1/2 -translate-y-[45%] -z-10">
        <img
          src="/images/dots.png"
          alt="herobg"
          className="object-contain object-right"
        />
      </div>
      <Popup className="w-32 h-32 top-1/2 left-5 bottom-0">
        <img src={greenshapbg} alt="shape" />
      </Popup>
      <Popup className="right-0 top-1/4 w-32  z-10">
        <img src={rightRedShap} alt="shape" />
      </Popup>
      <Popup className="right-0 top-2/3 w-32  z-10">
        <img src={Shapsix} alt="shape" />
      </Popup>
      <Popup className=" bottom-48 w-44 h-44 z-10">
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

        <Container className="max-w-[1200px]">
          <from>
            <div className="flex justify-between">
              {/* from image div */}
              <div className="flex ">
                <label>
                  <img
                    className="w-96 h-96 mr-4 -mt-32 bg-gray-600 rounded-full cursor-pointer
                    "
                    src={fils}
                  />
                  <input type="file" class="opacity-0" />
                </label>
              </div>
              {/* from inputs div */}
              <div className="">
                <p className="text-30 mb-6">Personal Information</p>
                <div className="userName">
                  <label htmlFor="UserName" className="text-white text-24 pb-4">
                    User Name
                  </label>
                  <input
                    id="User-Name"
                    name="UserName"
                    type="text"
                    autoComplete="text"
                    required
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Mike 123"
                  />
                </div>
                <div className="name">
                  <label htmlFor="name" className="text-white text-24">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="text"
                    required
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Mike White"
                  />
                </div>
                <div className="website">
                  <label htmlFor="website" className="text-white text-24">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    autoComplete="text"
                    required
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="www.mysite.com"
                  />
                </div>
                <div className="Bio">
                  <label htmlFor="Bio" className="text-white text-24">
                    Bio
                  </label>
                  <textarea
                    id="Bio"
                    name="Bio"
                    type="text"
                    autoComplete="text"
                    required
                    rows="8"
                    className="mt-4 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="www.mysite.com"
                  />
                </div>

                <p className="text-30 mt-20 mb-16">Email & Password</p>

                <div className="email">
                  <label htmlFor="email" className="text-white text-24">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="test@email.it"
                  />
                  <div className="flex items-center justify-end">
                    <img className="w-3 h-3 mr-1" src={editicon} />
                    <a href="#">Change</a>
                  </div>
                </div>
                <div className="password">
                  <label htmlFor="password" className="text-white text-24">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="passwordl"
                    required
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="*********"
                  />
                  <div className="flex items-center justify-end">
                    <img className="w-3 h-3 mr-1" src={editicon} />
                    <a href="#">Change</a>
                  </div>
                </div>
                <p className="text-30 my-14">Social</p>
                {/* telegram */}
                <div className="telegram">
                  <label htmlFor="telegram" className="text-white text-24">
                    Telegram
                  </label>
                  <input
                    id="telegram"
                    name="telegram"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Telegram Name"
                  />
                </div>
                {/* instagram */}
                <div className="instagram">
                  <label htmlFor="instagram" className="text-white text-24">
                    Instagram
                  </label>
                  <input
                    id="instagram"
                    name="instagram"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Instagram Name"
                  />
                </div>
                {/* discord */}
                <div className="discord">
                  <label htmlFor="discord" className="text-white text-24">
                    Discord
                  </label>
                  <input
                    id="discord"
                    name="discord"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Discord Name"
                  />
                </div>
                {/* facebook */}
                <div className="facebook">
                  <label htmlFor="facebook" className="text-white text-24">
                    Facebook
                  </label>
                  <input
                    id="facebook"
                    name="facebook"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Facebook Name"
                  />
                </div>
                {/* youtube */}
                <div className="youtube">
                  <label htmlFor="youtube" className="text-white text-24">
                    Youtube
                  </label>
                  <input
                    id="youtube"
                    name="youtube"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Youtube Name"
                  />
                </div>
                {/* tiktok */}
                <div className="tiktok">
                  <label htmlFor="tiktok" className="text-white text-24">
                    Tiktok
                  </label>
                  <input
                    id="tiktok"
                    name="tiktok"
                    type="text"
                    autoComplete="text"
                    className="my-3 bg-themeColor border border-[#A2D132] text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Tiktok Name"
                  />
                </div>
                <button
                  type="submit"
                  className="uppercase mt-14 bg-btnbg py-4 px-6 w-full rounded-3xl"
                >
                  save
                </button>
              </div>
              {/* edit profile button */}
              <div className="flex gap-1 ">
                <EditButton />
              </div>
            </div>
          </from>
        </Container>
      </div>
    </div>
  );
};

export default EditProfile;