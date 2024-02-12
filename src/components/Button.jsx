import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex gap-2 font-montserrat justify-center items-center bg-coral-red py-4 px-8 rounded-full text-white text-lg leading-none">
      {label} {iconURL ? <img src={iconURL} alt="arrow right" /> : ""}
    </button>
  );
};

export default Button;
