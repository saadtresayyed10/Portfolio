"use client";

import { motion } from "framer-motion";
import WordRotate from "@/components/magicui/word-rotate";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-6 bg-white lg:p-0 p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
        className="font-kawede lg:text-[5.5rem] text-6xl font-semibold text-center tracking-wide capitalize text-neutral-800"
      >
        Saad Sayyed
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "backOut", delay: 1.2 }}
        className="flex justify-center items-center lg:gap-x-6 gap-x-4"
      >
        <WordRotate
          className="lg:text-2xl text-sm text-neutral-800 font-monschone"
          words={["Fullstack Web Developer", "Gothic Architecture"]}
          duration={2000}
        />
        <WordRotate
          className="lg:text-2xl text-sm text-neutral-800 font-monschone"
          words={["Software Engineer", "Game Developer"]}
          duration={3000}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "backOut", delay: 1.4 }}
        className="flex justify-center items-center p-6 bg-neutral-800  shadow-md"
      >
        <Image
          src="/images/greek.jpg"
          alt="Image"
          width={500}
          height={500}
          className="border-2 border-[#F5EACC] rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
