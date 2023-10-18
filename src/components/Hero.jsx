"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import line from "public/llline.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <main className=" flex flex-col items-center justify-center h-screen relative -mt-28">
      <h1 className="text-[4rem] md:text-[5rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-[#5f5f5f] h-fit w-[88%] md:text-center md:mt-0">
        {`Hey, I'm Aditya!`}
        <Image
          src={line}
          width={0}
          height={0}
          className="absolute top-[19.5rem] -left-[1rem] w-[18rem] md:w-[28rem] md:left-[27rem] md:top-[22rem] lg:top-[22.5rem] lg:left-[57rem]"
          alt="The swiggly line"
        />
      </h1>
      <h2 className="text-[1.1rem] md:text-[1.5rem] mt-10 w-[88%] text-start md:text-center">
        Web Developer based in{" "}
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-white to-green-700">
          Bharat
        </span>
        <span className="font-bold"> (India)</span>
      </h2>
      <Link href="/projects">
        <Button
          text="Projects"
          className="w-[10rem] -ml-[10.7rem] md:ml-0 mt-6"
          type="button"
          onClick={() => router.push("/projects")}
        />
      </Link>
    </main>
  );
};

export default Hero;
