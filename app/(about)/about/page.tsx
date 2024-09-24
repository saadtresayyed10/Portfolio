"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-6 bg-white text-neutral-800 w-full font-monschone text-center my-20">
      <div className="flex justify-between items-center w-full px-8">
        <Link href="/">
          <ArrowLeft className="lg:h-12 h-8 w-10 lg:w-16 stroke-[1]" />
        </Link>
        <div />
      </div>
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "backIn", delay: 0.4 }}
        className="font-semibold font-kawede lg:text-5xl text-2xl capitalize"
      >
        Lil background check
      </motion.h3>
      <motion.div
        initial="hidden"
        animate="show"
        variants={gridContainerVariants}
        className="lg:w-[60%] w-[75%] flex justify-center items-center gap-y-6 flex-col lg:text-base text-sm capitalize tracking-normal"
      >
        <motion.p variants={gridSquareVariants}>
          <span className="lg:text-4xl text-2xl">T</span>his all started in 2020
          in my bedroom when I was thinking about life, goals and things of that
          nature. My dream job was to be a game developer so I started learning
          and invested alot of time. I made several 2D rpg based games, but had
          no idea or money to publish on platforms like steam, epic, etc... i am
          from a country called India, and there isn&apos;t much craze about
          videogames like that but people here tend to like gambling-games which
          for me was kinda off.
        </motion.p>
        <motion.p variants={gridSquareVariants}>
          I gave up on that for a while as I didn&apos;t even had no 1000₹ to my
          name neither a bank account. So like a year later I ended up taking
          admission in computer science majors with no idea what to do now.
          People told me to be this and that, someone wise explaind briefly
          about Artficial intelligence and data science to me. Which I gave very
          much interest to, at that point. The college i went to for Computer
          Science didn&apos;t taught AIDS and AIML so I had to get another
          majors in AIDS and AIML.
        </motion.p>
        <motion.p variants={gridSquareVariants}>
          Fast forward 2022, i was doing well in AIDS and CS but I always felt
          like I don&apos;t wanna do this. I never enjoyed it and forced myself
          to hustle for grades to save some shame and don&apos;t leave my
          parents in disappointment. So I knew web development was in much of a
          trend just like AI... I always had interest in arts, any type you ask,
          I&apos;ve been a painter, singer, rapper, stylist, actor, etc... back
          in my school days.
        </motion.p>
        <motion.p variants={gridSquareVariants}>
          i started learning html, css and js in late 2022. I was going bersek
          let me tell you, I was doing very well than anything I was doing this
          whole time in CS and AIDS. Someone very wise told me to help people
          with small businesses to expand it through offering them websites and
          invest that money on stocks and mutual funds which I still do to this
          day. So I did alot of Projects for people and hosted their websites.
        </motion.p>
        <motion.p variants={gridSquareVariants}>
          Then as I was developing in this mainstream I got introduced to
          libraries and frameworks like React, Node, Next, Express, etc... So I
          grinded alot in that as well but the main weapons in my tool-box are
          React, Express, Node, Next, Postgres and MongoDB. Rest like
          Springboot, Django, dotnet... I learned them too but my love for MERN,
          PERN and Next.js is beyond them.
        </motion.p>

        <motion.p variants={gridSquareVariants}>
          I hope you&apos;ll check my projects and my other social links. Feel
          free to dm, I run an agency as well so my team will take care of your
          business problems. Thanks for reading till here, I pray god be with
          you.
        </motion.p>
        <motion.div
          variants={gridSquareVariants}
          className="flex justify-center items-center p-6 bg-neutral-800  shadow-md"
        >
          <Image
            src="/images/saad.jpg"
            alt="Image"
            width={200}
            height={200}
            className="border-2 border-[#F5EACC] rounded-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
