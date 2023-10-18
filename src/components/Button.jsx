import React from "react";
// import Image from "next/image";

const Button = ({text, className, onClick, type}) => {
  return (
    <div className={`bg-gradient-to-r from-[#aa6efa] to-[#5b07a0] p-[1px] rounded-md mb-4 ${className}`}>
      <button type={type} onClick={onClick} className="bg-gradient-to-r from-[#7B00B2] to-[#4B006C] rounded-md w-full py-4 shadow-xl drop-shadow-2xl hover:bg-[#34014B] text-gray-300 font-bold flex items-center justify-center">
        {text}
      </button>
    </div>
  );
};

export default Button;
