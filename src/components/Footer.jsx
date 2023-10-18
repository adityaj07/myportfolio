"use client"

import React, { useEffect, useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="my-6 px-4 w-full text-center">
      <span>
        Made with {" "}
        {isClient && (
          <>
            <TbBrandNextjs className="inline-block align-text-bottom" />{", "}
            <BiLogoTailwindCss className="inline-block align-text-bottom" />{" & "}
            <AiFillHeart className="inline-block align-text-bottom" />
          </>
        )}
      </span>{"  |  "}
      Aditya Joshi
    </div>
  );
};

export default Footer;
