import { motion } from "framer-motion";
import React from "react";
type Props = {};
// src =
//   "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQpDLUNBkuegwN0mDwLp9m3WlXCp1IrPOXR07RxqB5F9Kyzj-7KOzU9jEPJxsriGVLe0ifVMJvJg8bR_ts";

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQpDLUNBkuegwN0mDwLp9m3WlXCp1IrPOXR07RxqB5F9Kyzj-7KOzU9jEPJxsriGVLe0ifVMJvJg8bR_ts"
        alt=""
        className="-md-20 md:mb-0 flex-shrink-0 rounded-full h-56 w-56 object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-04xl font-semibold">Here is alitte background</h4>
      </div>
    </div>
  );
}
