import React from "react";
import edit from "../../images/edit.png";
import "./button.css";

const EditButton = () => {
  return (
    <div>
      <a className="" href="#">
        <button className="button-hero flex items-center justify-between bg-editbtnbg text-sm lg:text-18 font-semibold px-6 py-2 rounded-full lg:px-10 lg:py-3">
          Edit
          <img src={edit} alt="icon" className="w-3 h-3 ml-2" />
        </button>
      </a>
    </div>
  );
};

export default EditButton;
