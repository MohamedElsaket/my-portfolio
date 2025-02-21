"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = {
  icon: "/assets/resume/badge.svg",
  title: "My projects",
  items: [
    {
      projectName: "BookWise",
      image: "/assets/work/bookwise.png",
      technologies: "Nextjs - TailwimdCss - Neon - Auth - React-Hook-Form",
      href: "https://university-library-ten-sand.vercel.app/",
    },
    {
      projectName: "FastPizza.",
      image: "/assets/work/Fast React Pizza.png",
      technologies: "React.js - React Router - TailwimdCss - Redux",
      href: "https://mohamedelsaket.github.io/Pizza/",
    },
    {
      projectName: "Smart Villa",
      image: "/assets/work/smart-villa (2).png",
      technologies: "React.js - React Router - TailwimdCss - Redux",
      href: "https://mohamedelsaket.github.io/smart-villa/",
    },
    {
      projectName: "Fitness Exercises",
      image: "/assets/work/fitness-exercises.png",
      technologies: "React.js - React Router - TailwimdCss - Redux",
      href: "https://mohamedelsaket.github.io/fitness-exercises-app/",
    },
    {
      projectName: "BrainWave",
      image: "/assets/work/Brainwave.png",
      technologies: "React.js - React Router - TailwimdCss",
      href: "https://mohamedelsaket.github.io/Brainwave/",
    },
    {
      projectName: "MediTro",
      image: "/assets/work/meditro.png",
      technologies: "React.js - React Router - TailwimdCss",
      href: "https://mohamedelsaket.github.io/MediTro/",
    },
    {
      projectName: "Popcorn",
      image: "/assets/work/popcorn.png",
      technologies: "React.js - REST APIs - TailwimdCss - Redux",
      href: "https://mohamedelsaket.github.io/Popcorn/",
    },
  ],
};

export default function Projects() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-3 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
        >
          <div className="flex flex-col xl:flex-row gap-[60px]">
            <div className="min-h-[70vh] w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className="felx flex-col gap-[30px]"
              >
                <h3 className="text-4xl font-bold flex items-center gap-4 mb-6">
                  <Image
                    src={projects.icon}
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <span> {projects.title} </span>
                </h3>
                <ScrollArea className="h-[500px]">
                  <ul className="">
                    {projects.items.map((item, i) => (
                      <Link
                        href={item.href}
                        key={i}
                        className="group relative bg-[#232329] py-12 px-4 xl:px-10 rounded-xl flex flex-col items-center md:flex-row gap-12 overflow-hidden border-b border-accent w-full"
                      >
                        <Image
                          src={item.image}
                          alt="project photo"
                          width={300}
                          height={200}
                          className="rounded-xl w-full flex-1 group-hover:scale-110 duration-300"
                        />

                        <div className="flex flex-2 flex-col gap-3 w-full">
                          <motion.h3 className="text-xl text-accent hover:ml-1 transition-all">
                            {item.projectName}
                          </motion.h3>

                          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4">
                            <p className="flex items-center gap-4">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <span>Technologies: </span>
                            </p>
                            <span className="text-white/60">
                              {" "}
                              {item.technologies}{" "}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </ul>
                </ScrollArea>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
