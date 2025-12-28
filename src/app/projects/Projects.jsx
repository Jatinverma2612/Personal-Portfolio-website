"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "A production-ready weather dashboard providing real-time weather data, 5-day forecasts, charts, and theme/unit toggles.",
    image: "/projects/weather.png",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "OpenWeather API",
      "Recharts",
    ],
    liveUrl: "https://weatherapp-psi-plum.vercel.app/",
    codeUrl: "https://github.com/Jatinverma2612/Weather-App.git",
  },
  {
    id: 2,
    title: "Calendar Management App",
    description:
      "A feature-rich calendar application to create, edit, and manage events with persistent storage and clean UI.",
    image: "/projects/calendar-app.png",
    tech: ["React", "TypeScript", "Tailwind", "date-fns"],
    liveUrl: "https://calendar-rho-blue.vercel.app/",
    codeUrl: "https://github.com/Jatinverma2612/Calendar-project.git",
  },
  {
    id: 3,
    title: "Noted – Note Saver Web Application",
    description:
      "A responsive note-taking app with CRUD functionality, Redux state management, theme support, and persistent storage.",
    image: "/projects/noted-app.png",
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router",
      "LocalStorage",
    ],
    liveUrl: "https://notes-saver-fawn.vercel.app/",
    codeUrl: "https://github.com/Jatinverma2612/Note-Saver-App.git",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 360;
  const MAX_INDEX = Math.max(projects.length - 3, 0);

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
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center mt-4 mb-16"
        >
          A showcase of my selected work
        </motion.p>

        {/* SLIDER */}
        <div className="relative">
          {/* LEFT ARROW */}
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
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[340px] glass-card overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="h-[190px] overflow-hidden bg-black/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-5 text-sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 flex items-center gap-1 hover:underline"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-300 flex items-center gap-1 hover:text-orange-500"
                      >
                        <Github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, MAX_INDEX))}
            disabled={index === MAX_INDEX}
            className="slider-btn right-[-22px]"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
