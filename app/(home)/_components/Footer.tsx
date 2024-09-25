import {
  ArrowUpRight,
  Gamepad2,
  Instagram,
  TwitchIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-2 bg-[#F5EACC] text-neutral-800 lg:p-8 p-4 pb-2 border-t-4 border-black lg:mt-20 mt-12">
      <h1 className="lg:text-4xl text-3xl font-modesfa font-semibold text-center">
        Grove Street
      </h1>
      <div className="flex items-center justify-center gap-x-6">
        <Link href="https://www.instagram.com/sameoldtreva/" target="_blank">
          <Instagram className="w-4 h-4 stroke-[1.5]" />
        </Link>
        <Link href="https://x.com/trEvoR7223" target="_blank">
          <Twitter className="w-4 h-4 stroke-[1.5]" />
        </Link>
        <Link
          href="https://www.youtube.com/@stealthgamingsf5909"
          target="_blank"
        >
          <Gamepad2 className="w-4 h-4 stroke-[1.5]" />
        </Link>
        <Link href="https://www.twitch.tv/trevorrozier" target="_blank">
          <TwitchIcon className="w-4 h-4 stroke-[1.5]" />
        </Link>
      </div>
      <p className="lg:text-sm text-xs font-monschone text-center mt-2">
        Kondhwa Budruk, Pune - 411048, Maharashtra, India
      </p>
      <Link
        href="https://pcrf1.app.neoncrm.com/forms/zakat-gaza-relief"
        target="_blank"
      >
        <p className="mt-2 lg:text-[10px] text-[6px] flex justify-center items-center gap-x-1 text-center underline font-bold">
          Donate To Palestine
          <ArrowUpRight className="w-2 h-2" />
        </p>
      </Link>
    </div>
  );
};

export default Footer;
