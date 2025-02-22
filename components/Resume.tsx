"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I’m Mohamed, a passionate front-end developer with expertise in HTML, CSS, and JavaScript, along with modern frameworks like React and Next.js. I focus on creating responsive and user-friendly web applications that deliver seamless experiences. I’m eager to leverage my skills to build innovative solutions and contribute to impactful projects.",
  items: [
    {
      company: "Slash Hub",
      position: "Front-End Team Leader",
      duration: "11/2023 - 1/2025",
      description:
        "Developed and maintained web large e-commerce using Next.js and Typesript. I worked on handling the data fetching and optimizing performance and enhancing user experience to deliver high-quality products.",
    },
    {
      company: "Creativo",
      position: "Front-End Developer",
      duration: "2/2020 - 5/2021",
      description:
        "Worked on developing responsive user interfaces and optimizing web applications for better performance. I collaborated with the team to enhance user experience and implement best practices in front-end development.",
    },

    {
      company: "Freelance",
      position: "Front-End Developer",
      duration: "11/2023 - Peresnt",
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
                <p className="w-full text-sm md:text-md lg:text-lg leading-7 text-white/60 mx-auto xl:mx-0 mb-3 xl:mb-6">
                  {experience.description}
                </p>
                <ScrollArea className="h-[450px]">
                  <ul className="flex flex-col gap-6">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] h-[240px] py-6 px-4 xl:px-10 rounded-xl flex flex-col justify-between gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>

                        <h3 className="text-xl max-w-[260px]">
                          {item.position}
                        </h3>

                        <p className="text-white/60">{item.description}</p>
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
