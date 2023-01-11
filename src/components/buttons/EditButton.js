import React from "react";
import edit from "../../images/edit.png";

const EditButton = () => {
  return (
    <div>
      <a href="#">
        <button className="flex items-center justify-between bg-editbtnbg text-sm lg:text-18 font-semibold px-6 py-2 rounded-full lg:px-10 lg:py-3">
          Edit
          <img src={edit} alt="icon" className="w-3 h-3 ml-2" />
        </button>
      </a>
    </div>
  );
};

export default EditButton;
