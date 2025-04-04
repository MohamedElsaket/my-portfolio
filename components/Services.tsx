import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import {
  RiBootstrapLine,
  RiJavascriptLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

const services = [
  {
    number: "01",
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum impedit consequuntur reprehenderit id iste vitae. Amet repellendus iusto illum ipsam enim blanditiis neque? Laudantium non sint molestiae labore magni.",
    href: "",
  },
  {
    number: "02",
    title: "Web Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum impedit consequuntur reprehenderit id iste vitae. Amet repellendus iusto illum ipsam enim blanditiis neque? Laudantium non sint molestiae labore magni.",
    href: "",
  },
];

const technologies = [
  {
    name: "Reactjs",
    icon: <FaReact />,
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine />,
    description: "A React framework for production",
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript />,
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine />,
    description:
      "A high-level, often just-in-time compiled, and multi-paradigm programming language",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    description:
      "The standard markup language for documents designed to be displayed in a web browser",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    description:
      "A style sheet language used for describing the presentation of a document written in HTML or XML",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
    description: "A utility-first CSS framework for rapid UI development",
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapLine />,
    description:
      "A free and open-source CSS framework directed at responsive, mobile-first front-end web development",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-3 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col justify-center gap-1 group"
            >
              <div className="flex justify-between items-center w-full">
                <div className="text-4xl xl:text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                  {item.number}
                </div>
                <Link
                  href={item.href}
                  className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-xl xl:text-3xl" />
                </Link>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-none text-white group-hover:text-accent transition-all duration-300 pb-2">
                {item.title}
              </h2>
              {/* <p className="text-white/60 mb-2 text-md">{item.description}</p> */}
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {technologies.map((tech, i) => (
            <div key={i} className="group flex flex-col items-center">
              <p className="text-5xl py-2 group-hover:text-accent transition-all duration-300">
                {tech.icon}
              </p>
              <h3 className="text-xl font-semibold ">{tech.name}</h3>
              {/* <p className="text-white/60 text-center ">{tech.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
