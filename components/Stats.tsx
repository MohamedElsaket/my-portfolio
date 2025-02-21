"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 12,
    text: "Years of experience",
  },
  {
    number: 26,
    text: "Projects completed",
  },
  {
    number: 8,
    text: "Technologies mastered",
  },
  {
    number: 500,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
          >
            <CountUp
              end={item.number}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
            />
            <p className="max-w-[100px] leading-snug text-white/80">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
