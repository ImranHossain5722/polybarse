import React from "react";
import editicon from "../../images/edit.png";
import "./button.css";
const EditProfileButton = () => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-end">
        <img
          className="w-4 h-4 md:w-6 md:h-6"
          src="images/edit.png"
          alt="edit profile"
        />
        <a href="#" className="text-[12px] md:text-24 font-semibold">
          Edit profile
        </a>
      </div>
    </div>
  );
};

export default EditProfileButton;
