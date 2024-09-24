"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Outro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <div
      ref={ref}
      className="flex justify-center items-center flex-col gap-y-6 bg-white text-neutral-800"
    >
      <motion.h3
        initial="hidden"
        animate={controls}
        variants={headingVariant}
        className="font-semibold font-kawede lg:text-5xl text-2xl capitalize"
      >
        I will pray for you
      </motion.h3>
      <div className="lg:w-[60%] w-[75%] flex justify-center items-center gap-y-6 text-center flex-col lg:text-base text-sm capitalize tracking-normal font-monschone">
        <motion.p
          initial="hidden"
          animate={controls}
          variants={paragraphVariant}
        >
          Thanks for coming by, make sure you check my projects, blogs and
          resume to see my work. Also check my socials like instagram, X or
          twitter as you say, youtube and twitch, I go crazy on that lol. Check
          some other day, I&apos;ll come again with some new creativity to this
          portfolio. Peace, take care. See ya!
        </motion.p>
      </div>
    </div>
  );
};

export default Outro;
