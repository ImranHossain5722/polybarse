import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import close from "../../images/Vector.png";
import fb from "../../images/fb.png";
import go from "../../images/google.png";
import walit from "../../images/walit.png";
import arow from "../../images/arow.png";
const Login = () => {
  return (
    <div className="pt-36">
      <section class="py-28">
        <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="from-wrap  w-full  rounded-lg shadow  md:mt-0 sm:max-w-md">
            <div className="close-wrap flex justify-end ">
              <img
                className="pt-5 pr-5 w-8 	
"
                src={close}
                alt="close"
              />
            </div>
            <div className="logo-wrap flex justify-center">
              <Link to="/">
                <img class=" w-60 h-28 " src={logo} alt="logo" />
              </Link>
            </div>
            <div class=" space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-35 font-bold text-white md:text-2xl  text-center">
                Explore Metaverse
              </h1>
              <form class="  space-y-4 md:space-y-6" action="#">
                <div className="user-div">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Username"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    class="bg-themeColor border border-inputBorder text-white sm:text-sm rounded-lg  placeholder-inputbgColor focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <p class="font-medium text-center capitalize text-textColor1  underline ">
                    Forgot Password
                  </p>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-btnbg 
              text-18
              hover:bg-primary-700  rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 uppercase"
                >
                  Log-in
                </button>
                <div className="flex items-center justify-evenly">
                  <div className="div-or"></div>
                  <p className="text-white">OR</p>
                  <div className="div-or"></div>
                </div>
                {/* social button */}
                <div className="flex justify-center items-center">
                  <div className="w-16 h-16 p-3 mr-3 border border-inputBorder rounded-lg  flex justify-center items-center mt-11">
                    <a href="#">
                      {" "}
                      <img className="w-7 h-7" src={go} />
                    </a>
                  </div>
                  <div className="w-16 h-16 p-3 flex justify-center items-center border border-inputBorder rounded-lg mt-11">
                    <a href="#">
                      <img className="w-4 h-7" src={fb} />
                    </a>
                  </div>
                </div>
                <div className="flex justify-around ">
                  <a href="#">
                    <div className=" p-3 border flex items-center  border-inputBorder rounded-lg mt-11">
                      <img className="w-7 h-7 mr-4" src={walit} />
                      <p className="text-18 text-white uppercase">
                        Connect with wallet
                      </p>
                    </div>
                  </a>
                </div>
                <div className="flex items-center py-12">
                  <div className="div-hr "></div>
                </div>
                <div className="flex items-center justify-center">
                  <p class="text-sm text-center font-light  text-gray-500 dark:text-gray-400">
                    Don’t have an account?
                    <a
                      href="#"
                      className="font-bold text-white mx-1 hover:underline dark:text-primary-500"
                    >
                      Create One
                    </a>
                  </p>
                  <img className="w-2 h-2 " src={arow} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
