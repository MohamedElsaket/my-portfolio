"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquam, harum natus quod sequi eligendi, architecto corrupti unde placeat laboriosam nam obcaecati! Nulla dolore sunt eligendi, commodi nisi sed dolorum!",
  items: [
    {
      company: "Slash Hub",
      position: "Front-End Developer",
      duration: "11/2023 - 1/2025",
    },
    {
      company: "Slash Hub",
      position: "Front-End Developer",
      duration: "11/2023 - 1/2025",
    },
    {
      company: "Slash Hub",
      position: "Front-End Developer",
      duration: "11/2023 - 1/2025",
    },
  ],
};

export default function Resume() {
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
                <h3 className="text-4xl font-bold flex items-center gap-4 mb-3">
                  <Image
                    src={experience.icon}
                    alt="icon"
                    width={30}
                    height={30}
                  />
                  <span>{experience.title}</span>
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-3 xl:mb-6">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="flex flex-col gap-6 mt-8">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] h-[180px] py-6 px-4 xl:px-10 rounded-xl flex flex-col justify-center gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px]">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
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
