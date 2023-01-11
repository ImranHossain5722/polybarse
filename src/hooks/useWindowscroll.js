import { useEffect } from "react";

export default function useWindowscroll() {
  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    function navFunc() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("bg-themeColor");
      } else {
        navbar.classList.remove("bg-themeColor");
      }
    }
    window.addEventListener("scroll", navFunc);
    return () => {
      window.removeEventListener("scroll", navFunc);
    };
  }, []);
}
