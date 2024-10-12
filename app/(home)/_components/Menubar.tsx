"use client";

import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="lg:w-6 lg:h-6 w-5 h-5 stroke-[1.5]" />
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center w-full bg-[#F5EACC] text-black font-monschone lg:border-l-2 border-black text-center">
        <motion.div className="flex justify-center items-center flex-col gap-y-5">
          <Link href="/blog" onClick={closeSheet}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "backOut", delay: 0.4 }}
              className="text-4xl font-bold uppercase transition hover:underline"
            >
              Blog
            </motion.h1>
          </Link>
          <Link
            href="https://www.canva.com/design/DAGOviJK-SI/Srzb8IYnAFDU8TY1431_rA/view?utm_content=DAGOviJK-SI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            onClick={closeSheet}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
              className="text-4xl font-bold uppercase transition hover:underline"
            >
              Resume
            </motion.h1>
          </Link>
          <Link href="/hobby" onClick={closeSheet}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "backOut", delay: 0.8 }}
              className="text-4xl font-bold uppercase transition hover:underline"
            >
              Hobbies
            </motion.h1>
          </Link>
          <Link href="/project" onClick={closeSheet}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "backOut", delay: 1.0 }}
              className="text-4xl font-bold uppercase transition hover:underline-none bg-black text-[#F5EACC] px-6 py-2 border-2 border-black hover:bg-[#F5EACC] hover:text-black rounded-lg lg:mt-3 mt-4"
            >
              Projects
            </motion.h1>
          </Link>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default Menubar;
