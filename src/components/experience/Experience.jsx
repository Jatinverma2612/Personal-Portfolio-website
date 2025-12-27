"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const timeline = [
  {
    year: "2024 – Present",
    title: "Frontend Development (Projects & Practice)",
    points: [
      "Building real-world projects using React and Next.js",
      "Creating responsive UI with Tailwind CSS",
      "Working with APIs, components, and state management",
    ],
  },
  {
    year: "2023 – 2024",
    title: "JavaScript & Web Fundamentals",
    points: [
      "Strong foundation in JavaScript (ES6+)",
      "DOM manipulation and browser concepts",
      "Mini projects for logic and UI practice",
    ],
  },
  {
    year: "2024 – 2025",
    title: "Programming Foundations",
    points: [
      "Learned C and C++ programming",
      "Basic problem-solving and DSA concepts",
      "Improved logical thinking through practice",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <Reveal>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center">
            Experience & <span className="text-orange-500">Learning</span>
          </h2>

          <p className="text-center text-zinc-400 mt-3 mb-20 max-w-xl mx-auto">
            A journey of continuous learning through hands-on projects,
            practice, and real-world problem solving.
          </p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`mb-20 flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="relative w-full md:w-[45%] bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition">
                    <span
                      className={`absolute top-6 w-4 h-4 rounded-full bg-orange-500 ${
                        isLeft ? "-right-[34px]" : "-left-[34px]"
                      }`}
                    />

                    <span className="text-sm text-orange-500">{item.year}</span>

                    <h3 className="text-xl font-semibold mt-2 mb-4">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-zinc-400 text-sm">
                      {item.points.map((point, i) => (
                        <li key={i}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
