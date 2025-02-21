"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

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
    title: "UI & UX Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum impedit consequuntur reprehenderit id iste vitae. Amet repellendus iusto illum ipsam enim blanditiis neque? Laudantium non sint molestiae labore magni.",
    href: "",
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum impedit consequuntur reprehenderit id iste vitae. Amet repellendus iusto illum ipsam enim blanditiis neque? Laudantium non sint molestiae labore magni.",
    href: "",
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum impedit consequuntur reprehenderit id iste vitae. Amet repellendus iusto illum ipsam enim blanditiis neque? Laudantium non sint molestiae labore magni.",
    href: "",
  },
];

export default function page() {
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
              className="flex-1 flex flex-col justify-center gp-6 group"
            >
              <div className="flex justify-between items-center w-full">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                  {item.number}
                </div>
                <Link
                  href={item.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">
                {item.title}
              </h2>
              <p className="text-white/60 mb-2">{item.description}</p>
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
