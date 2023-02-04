import React from "react";
import editicon from "../../images/edit.png";
import "./button.css";
const EditProfileButton = () => {
  return (
    <div>
      <div className="flex gap-2 items-center justify-end">
        <img className="w-6 h-6 mr-" src="images/edit.png" alt="edit profile" />
        <a href="#" className="text-24 font-semibold">
          Edit profile
        </a>
      </div>
    </div>
  );
};

export default EditProfileButton;
