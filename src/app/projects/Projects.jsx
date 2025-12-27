"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather application using API.",
    image: "/projects/calender.png",
    tech: ["React", "API"],
  },
  {
    title: "Movie Search",
    desc: "Search movies using OMDb API.",
    image: "/projects/calender.png",
    tech: ["React", "API"],
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated personal portfolio.",
    image: "/projects/calender.png",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Task Manager",
    desc: "Task management frontend app.",
    image: "/projects/calender.png",
    tech: ["React"],
  },
  {
    title: "GitHub Finder",
    desc: "Search GitHub profiles using API.",
    image: "/projects/calender.png",
    tech: ["React", "API"],
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 360;
  const MAX_INDEX = projects.length - 3;

  return (
    <section id="projects" className="py-28 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Featured <span className="text-orange-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center mt-4 mb-16"
        >
          A showcase of my selected work
        </motion.p>

        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* LEFT */}
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="slider-btn left-[-22px]"
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: -index * CARD_WIDTH }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
              }}
            >
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="min-w-[340px] glass-card overflow-hidden group"
                >
                  <div className="h-[190px] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{p.title}</h3>

                    <p className="text-zinc-400 text-sm mb-5">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-5 text-sm">
                      <span className="text-orange-500 flex items-center gap-1 hover:underline cursor-pointer">
                        <ExternalLink size={16} /> Live
                      </span>
                      <span className="text-zinc-300 flex items-center gap-1 hover:text-orange-500 cursor-pointer">
                        <Github size={16} /> Code
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, MAX_INDEX))}
            disabled={index === MAX_INDEX}
            className="slider-btn right-[-22px]"
          >
            <ChevronRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
