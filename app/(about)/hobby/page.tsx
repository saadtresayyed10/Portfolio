"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const hobbies = [
  {
    desc: "Hello there! Welcome to my Portfolio... If I did not introduced myself properly back there, I will do it here again. My name is Saad Sayyed, I am 21 years old web developer that makes fullstack projects using tech stacks like react, express, node, mongo, postgres, springboot, etc...",
  },
  {
    desc: "My very first hobby is just working my ass off, I be doing so much everyday I be forgetting that I am working but it is just like a lifestyle. Like I say to every person I talk to, like I really be pushing it, staying ten toes down. Loyalty and just getting money, you know what am saying... and the people I work with in my circle, you know, I just pass it on and helps whole community grow.",
  },
  {
    desc: "This is my main time hobby, I love creating fully-fledged web projects. I wake up to it and I sleep it to. This is my very first source of getting constant money. I am a self-employed developer running an agency that helps businesses grow efficiently by providing them various types of tools and services.",
  },
  {
    desc: "Crochet is my another hobby where I enjoy spending time with myself. It is like a meditation, where my higher self aligns with me and we talk to god together and heal if I am going through something. I never made anything for anyone else until yet apart from myself, but one day I think I will turn it into my clothing brand and what not.",
  },
  {
    desc: "I love arts, so I enjoy architectural styles of buildings especially from europe like gothic, baroque, romanesque, nouveau, etc... I am learning to be an architect by online majors and specializations where they teach me about every small and big details. I love history as well, so with knowledge of architecture, history and culture goes along in a parallel relationship.",
  },
  {
    desc: "Sports are my favorite thing to do as a male not gonna lie lol... god just blessed me at dominating and bullying my opponents when it comes to any sport. Does not matter whatever your size is or how strong you look compared to me, I am cooking you on god. We can do 1-on-1 anytime at any game, if you get pumped after reading this know that I am waiting for you.",
  },
  {
    desc: "I love playing video games, that thing has been with me since I was 3-4. I grew up in a rough violent neighbourhood, so most of the time I spent was in my room just playing every type of video games. My most favorite game of all time is Assassins Creed: Origins, that just hits with different type of aura! I dont like playing PVP games but I do play triple AAA games with co-op features with my dawgs.",
  },
  {
    desc: "That is all! Thank you so much for taking your time just to read boring hobbies about a stranger or your friend. I pray you stay healthy and wealthy.",
  },
];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const HobbyPage = () => {
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
        className="font-semibold font-kawede lg:text-5xl text-2xl capitalize mb-6"
      >
        I like what I like
      </motion.h3>
      <motion.div
        initial="hidden"
        animate="show"
        variants={gridContainerVariants}
        className="lg:w-[60%] w-[75%] flex justify-center items-center gap-y-6 flex-col lg:text-base text-sm capitalize tracking-normal"
      >
        {hobbies.map((hobby, idx) => (
          <motion.p variants={gridSquareVariants} key={idx}>
            {hobby.desc}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default HobbyPage;
