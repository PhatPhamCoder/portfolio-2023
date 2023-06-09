import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};
export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl mb-20">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory background-cricle">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
