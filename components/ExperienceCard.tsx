/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col items-center space-y-10 flex-shrink-0 w-[500px]
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] rounded-lg p-10 opacity-40 cursor-pointer 
    translate-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF PTECH</h4>
        <p className="font-bold text-2xl mt-1">PTECH</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png?fit=500%2C500&ssl=1"
            alt=""
          />
        </div>
        <p>Started work.... - ended....</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary point Sumary point Sumary point</li>
          <li>Sumary point Sumary point Sumary point</li>
          <li>Sumary point Sumary point Sumary point</li>
          <li>Sumary point Sumary point Sumary point</li>
          <li>Sumary point Sumary point Sumary point</li>
        </ul>
      </div>
    </article>
  );
}
