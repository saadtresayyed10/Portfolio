import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Jade",
    desc: "Self-Healing journal where you can write your thoughts and plan beautiful things ahead.",
    link: "https://jadebygrove.vercel.app",
    image: "/project/jade.png",
  },
  {
    id: 2,
    name: "Euphoria",
    desc: "Virtual Whiteboard with features like Sticky Note, Pencil, etc... Work with your partners in realtime.",
    link: "https://euphoriabygrove.vercel.app",
    image: "/project/euphoria.png",
  },
  {
    id: 3,
    name: "Expense Tracker",
    desc: "Your go-to finance tracker, track where you earned and spent your money.",
    link: "https://expense-tracker-down.vercel.app/",
    image: "/project/finance.png",
  },
];

const ProjectPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-y-10 lg:mt-20 mt-14 bg-white text-neutral-800">
      <div className="absolute lg:top-36 top-32 flex justify-between items-center w-full px-8">
        <Link href="/">
          <ArrowLeft className="lg:h-12 h-8 w-10 lg:w-16 stroke-[1]" />
        </Link>
        <div />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex justify-center items-center p-8 flex-col gap-y-2 border border-neutral-800 rounded-lg font-monschone uppercase bg-white"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="border-2 border-black rounded-md p-2"
            />
            <div className="text-black text-center mt-4 gap-y-2">
              <h3 className="font-extrabold lg:text-2xl text-xl up">
                {project.name}
              </h3>
              <p className="font-medium lg:text-sm text-xs tracking-wide">
                {project.desc}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="underline lowercase font-kawede text-xs lg:text-sm mt-2 flex items-center justify-center gap-x-2"
              >
                Visit {project.name} <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
