import React, { useState } from "react";

export default function SigninBtn() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <button
      onClick={() => setShowPopUp(true)}
      className="inline-flex items-center text-sm lg:text-18 font-semibold font-inter px-6 py-2 border-2 bg-btnbg border-btnbg hover:bg-transparent rounded-full lg:px-10 lg:py-3 uppercase"
    >
      sign in
    </button>
  );
}
