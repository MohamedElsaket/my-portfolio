"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
  title: "About",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquam, harum natus quod sequi eligendi, architecto corrupti unde placeat laboriosam nam obcaecati! Nulla dolore sunt eligendi, commodi nisi sed dolorum!",
  info: [
    {
      feildName: "Name",
      feildValue: "Mohamed Elsaket",
    },
    {
      feildName: "Phone",
      feildValue: "(+20) 103 0848 281",
    },
    {
      feildName: "Experience",
      feildValue: "+1 Years",
    },
    {
      feildName: "Email",
      feildValue: "mohamedelsaket25@gmail.com",
    },
    {
      feildName: "Nationality",
      feildValue: "Eygption",
    },
    {
      feildName: "Freelance",
      feildValue: "Available",
    },
    {
      feildName: "Languages",
      feildValue: "Arabic, English",
    },
  ],
};

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
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquam, harum natus quod sequi eligendi, architecto corrupti unde placeat laboriosam nam obcaecati! Nulla dolore sunt eligendi, commodi nisi sed dolorum!",
  items: [
    {
      institution: "Creativo",
      degree: "Diploma in Front-End Development",
      duration: "2021",
    },
    {
      institution: "Online Course",
      degree: "Diploma in React.js Development",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aliquam, harum natus quod sequi eligendi, architecto corrupti unde placeat laboriosam nam obcaecati! Nulla dolore sunt eligendi, commodi nisi sed dolorum!",
  items: [
    {
      icon: <FaHtml5 />,
      skillName: "HTML",
    },
    {
      icon: <FaCss3 />,
      skillName: "CSS",
    },
    {
      icon: <FaJs />,
      skillName: "JavaScript",
    },
    {
      icon: <FaJs />,
      skillName: "TypeScript",
    },
    {
      icon: <FaReact />,
      skillName: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      skillName: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      skillName: "TailwindCss",
    },
  ],
};

export default function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-3 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
        >
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              {/*  */}
              <TabsContent className="w-full" value="experience">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className="felx flex-col gap-[30px] text-center xl:text-start"
                >
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="flex flex-col gap-6 mt-8">
                      {experience.items.map((item, i) => (
                        <li
                          key={i}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">
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
              </TabsContent>

              {/*  */}
              <TabsContent className="w-full" value="education">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className="felx flex-col gap-[30px] text-center xl:text-start"
                >
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="flex flex-col gap-6 mt-8">
                      {education.items.map((item, i) => (
                        <li
                          key={i}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              </TabsContent>

              {/*  */}
              <TabsContent className="w-full h-full" value="skills">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className="flex flex-col gap[30px]"
                >
                  <div className="flex flex-col gap[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ul>
                    {skills.items.map((item, i) => (
                      <li key={i}>{item.skillName}</li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>

              {/*  */}
              <TabsContent className="w-full" value="about">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  about me
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
