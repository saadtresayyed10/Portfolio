"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "backOut", delay: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "backOut", delay: 1.0 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex justify-center items-center flex-col gap-y-6 bg-white text-black w-full font-monschone text-center"
    >
      <motion.h3
        initial="hidden"
        animate={controls}
        variants={headingVariants}
        className="font-semibold font-kawede lg:text-5xl text-2xl capitalize"
      >
        About me
      </motion.h3>
      <div className="lg:w-[60%] w-[75%] flex justify-center items-center gap-y-6 flex-col lg:text-base text-sm capitalize tracking-normal">
        <motion.p
          initial="hidden"
          animate={controls}
          variants={paragraphVariants}
        >
          <span className="lg:text-4xl text-2xl">T</span>his all started in 2020
          in my bedroom when I was thinking about life, goals and things of that
          nature. My dream job was to be a game developer so I started learning
          and invested a lot of time. I made several 2D RPG-based games, but had
          no idea or money to publish on platforms like Steam, Epic, etc... I am
          from a country called India, and there isn&apos;t much craze about
          videogames like that but people here tend to like gambling games which
          for me...
        </motion.p>
        <motion.button
          initial="hidden"
          animate={controls}
          variants={buttonVariants}
          className="px-6 py-2 hover:bg-[#F5EACC] hover:text-black text-white transition rounded-lg text-sm lg:text-base border-2 border-[#000000] bg-black"
        >
          <Link href="/about">Read More</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default About;
