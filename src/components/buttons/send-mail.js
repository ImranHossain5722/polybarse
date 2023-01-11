import React from "react";

export default function Sendmail({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center text-xs font-bold px-8 py-3 text-white border-1 bg-transparent border-white hover:bg-white hover:text-themeColor rounded-full uppercase"
    >
      send mail
    </button>
  );
}
