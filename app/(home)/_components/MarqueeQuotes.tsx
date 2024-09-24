"use client";

import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const reviews = [
  {
    name: "Me",
    username: "@saadsayyed",
    body: "Look mom I can fly.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Me",
    username: "@saadsayyed",
    body: "African genes, no alterations.",
    img: "https://avatar.vercel.sh/jill",
  },

  {
    name: "Me",
    username: "@saadsayyed",
    body: "See me, they be like: Wagwan, G-G .",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Trevor",
    username: "@trevorrozierr",
    body: "I am a top boy like Sully, with a six figure hobby!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Trevor",
    username: "@trevorrozierr",
    body: "I think I need more hours in a day than more days on the calendar.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Trevor",
    username: "@trevorrozierr",
    body: "Close the door and put in the work, that's what you need to bust.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeQuotes() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const divVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={divVariants}
      className="relative flex h-[500px] lg:max-w-[1000px] max-w-[320px] flex-col items-center justify-center overflow-hidden"
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </motion.div>
  );
}
