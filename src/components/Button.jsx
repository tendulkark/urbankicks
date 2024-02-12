import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex gap-2 border font-montserrat justify-center items-center ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      }  py-4 px-8 rounded-full ${fullWidth && "w-full"}  text-lg leading-none`}
    >
      {label} {iconURL ? <img src={iconURL} alt="arrow right" /> : ""}
    </button>
  );
};

export default Button;
