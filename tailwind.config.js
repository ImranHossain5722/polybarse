/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#06042B",
        btnBorder: "#A2D132",
        btnText: "#A2D132",
        btnbg: "#D75D29",
        editbtnbg: "#453D6D",
        bgblur: "#00F0FF",
        inputplaceholder: "#B0B0B0",
        signupinputcolor: "#497BEE",
        inputBorder: "#497BEE",
        textColor1: "#96CDFF",
      },
      backgroundColor: {
        arrowBtnColor: "#202058",
        arrwoActive: "#D75D29",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        normal: "HK Grotesk normal",
        medium: "HK Grotesk medium",
        semibold: "HK Grotesk semibold",
        extraBold: "HK Grotesk extrabold",
        bold: "HK Grotesk bold",
        black: "HK Grotesk black",
        oxanium: "'Oxanium', cursive",
      },
      fontSize: {
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        60: "60px",
        65: "65px",
        80: "80px",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        5: "5px",
        15: "15px",
      },
      borderColor: {
        teamCardBorder: "#1C176B",
      },
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
