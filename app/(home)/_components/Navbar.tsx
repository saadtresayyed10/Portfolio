"use client";

import { motion } from "framer-motion";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import Menubar from "./Menubar";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        borderBottom: "1px solid #000000",
        boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
      }}
      animate={
        isScrolled
          ? {
              borderBottom: "4px solid #000000",
              boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className="w-full h-min flex justify-between items-center lg:px-10 px-5 lg:py-4 py-1 text-black bg-[#F5EACC]"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
        className="flex justify-center items-center gap-x-3 lg:gap-x-4"
      >
        <Link href="https://github.com/saadtresayyed10/" target="_blank">
          <GitHubLogoIcon className="lg:w-6 w-4 h-4 lg:h-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/saad-sayyed-trev/"
          target="_blank"
        >
          <LinkedInLogoIcon className="lg:w-6 w-4 h-4 lg:h-6" />
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <Image
          src="/images/eye.gif"
          alt="Logo"
          width={120}
          height={120}
          unoptimized
          className="rounded-[100%] lg:mr-0 mr-3"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
      >
        <Menubar />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
