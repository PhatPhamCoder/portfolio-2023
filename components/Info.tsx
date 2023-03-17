/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Info({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's PhatPham",
      "Guy-who-loves-Travel.tsx",
      "<ButLoveCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 max-auto object-cover"
        src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQpDLUNBkuegwN0mDwLp9m3WlXCp1IrPOXR07RxqB5F9Kyzj-7KOzU9jEPJxsriGVLe0ifVMJvJg8bR_ts"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Sofware Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="SectionButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="SectionButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="SectionButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="SectionButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
