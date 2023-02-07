import React from "react";
import Copyright from "./components/copy-right";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Partners from "./components/partners";
import Playtoearn from "./components/playtoearn";
import Team from "./components/team-members";
import Timer from "./components/timer";
import useWindowscroll from "./hooks/useWindowscroll";
// aos animation
import AOS from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import SignUp from "./pages/SignUp/signUp";
// import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Page2 from "./pages/Page2/Page2";
import EditProfile from "./pages/EditProfile/EditProfile";
import EditPassword from "./pages/Page4/EditPassword";
import EditMail from "./pages/page5/EditMail";
import Page6 from "./pages/page6/Page6";
import Page7 from "./pages/page7/Page7";
import Page8 from "./pages/Page8/Page8";
import Page9 from "./pages/Page9/Page9";
import Page10 from "./pages/Page10/Page10";
import Page11 from "./pages/Page11/Page11";
import Page12 from "./pages/Page12/Page12";
import Page13 from "./pages/Page13/Page13";
import Page14 from "./pages/Page14/Page14";
import Page15 from "./pages/Page15/Page15";
import Page16 from "./pages/Page16/Page16";
import Page17 from "./pages/Page17/Page17";
import Page18 from "./pages/Page18/Page18";
import Page19 from "./pages/Page19/Page19";
import Page20 from "./pages/Page20/Page20";
import Page22 from "./pages/Page22/Page22";
import Page23 from "./pages/Page23/Page23";
import Home2 from "./pages/Home2/Home2";
import Home3 from "./pages/Home3/Home3";

// the css file added to the public index file a cdn link
AOS.init();

export default function App() {
  useWindowscroll();
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/page9" element={<Page9 />} />
        <Route path="/page10" element={<Page10 />} />
        <Route path="/page11" element={<Page11 />} />
        <Route path="/page12" element={<Page12 />} />
        <Route path="/page13" element={<Page13 />} />
        <Route path="/page14" element={<Page14 />} />
        <Route path="/page15" element={<Page15 />} />
        <Route path="/page16" element={<Page16 />} />
        <Route path="/page17" element={<Page17 />} />
        <Route path="/page18" element={<Page18 />} />
        <Route path="/page19" element={<Page19 />} />
        <Route path="/page20" element={<Page20 />} />
        <Route path="/page22" element={<Page22 />} />
        <Route path="/page23" element={<Page23 />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/editpassword" element={<EditPassword />} />
        <Route path="/editmail" element={<EditMail />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Copyright />
      {/* <div className="absolute w-64 h-64 top-80 right-1/4 -z-10 bg-bgblur blur-[227px] mix-blend-normal opacity-70"></div>
      <div className="absolute w-64 h-64 top-1/4 left-0 -z-10 bg-bgblur blur-[227px] mix-blend-normal opacity-70"></div>
      <div className="absolute left-1/2 bottom-40 md:bottom-96 -translate-x-1/2 max-w-6xl w-full -z-10">
        <img
          src="/images/teammembersbg.png"
          alt="shape"
          className="object-contain"
        />
      </div> */}
    </div>
  );
}
