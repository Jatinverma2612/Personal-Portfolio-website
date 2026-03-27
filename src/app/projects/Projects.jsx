"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Meetify – Real-Time Social & Language Exchange Platform",
    description:
      "A full-stack real-time social networking application that enables users to connect, send friend requests, and communicate through instant chat and video calls. Built with a scalable architecture, secure authentication, and optimized state management.",
    image: "/projects/meetify.png",
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "React Query",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Stream Chat API",
      "Stream Video SDK",
    ],
    liveUrl: "https://meetify-app.onrender.com/login",
    codeUrl: "https://github.com/Jatinverma2612/Meetify-app.git",
  },
  {
    id: 2,
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
    id: 3,
    title: "Calendar Management App",
    description:
      "A feature-rich calendar application to create, edit, and manage events with persistent storage and clean UI.",
    image: "/projects/calendar-app.png",
    tech: ["React", "TypeScript", "Tailwind", "date-fns"],
    liveUrl: "https://calendar-rho-blue.vercel.app/",
    codeUrl: "https://github.com/Jatinverma2612/Calendar-project.git",
  },
  {
    id: 4,
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
  const [mobileIndex, setMobileIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // 🔥 RESPONSIVE LOGIC
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // desktop
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const CARD_WIDTH = 360;
  const MAX_INDEX = Math.max(projects.length - cardsPerView, 0);

  return (
    <section id="projects" className="py-28 overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        {/* DESKTOP SLIDER */}
        <div className="hidden md:block relative">
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
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[340px] max-w-[340px] bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl overflow-hidden group hover:border-orange-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,138,0,0.15)] transition-all duration-500 flex flex-col"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative h-[210px] overflow-hidden bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Live Badge Top Right */}
                    <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-[10px] font-bold tracking-widest text-white uppercase">Live</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 flex-1 flex flex-col relative z-20 -mt-10">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-md">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300/80 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 text-sm font-semibold mt-auto pt-4 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 text-white flex items-center justify-center gap-2 hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,138,0,0.4)] transition-all duration-300"
                      >
                        <ExternalLink size={16} /> Visit App
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-2 hover:bg-white/10 hover:text-orange-400 transition-all duration-300"
                      >
                        <Github size={16} /> Source
                      </a>
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
        </div>

        {/* MOBILE ONE-AT-A-TIME SLIDER */}
        <div className="block md:hidden mt-8">
          {/* Card */}
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl overflow-hidden flex flex-col hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(255,138,0,0.15)] transition-all duration-500 group"
          >
            {/* IMAGE */}
            <div className="relative h-[210px] overflow-hidden bg-black/40">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <img
                src={projects[mobileIndex].image}
                alt={projects[mobileIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-white uppercase">Live</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 drop-shadow-md">
                {projects[mobileIndex].title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
                {projects[mobileIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[mobileIndex].tech.map((t) => (
                  <span key={t} className="text-[11px] px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300/80 font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-white/5 text-sm font-semibold">
                <a
                  href={projects[mobileIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-orange-500 text-white flex items-center justify-center gap-2 hover:bg-orange-400 transition-all duration-300"
                >
                  <ExternalLink size={15} /> Visit App
                </a>
                <a
                  href={projects[mobileIndex].codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center gap-2 hover:text-orange-400 transition-all duration-300"
                >
                  <Github size={15} /> Source
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons + Dots */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Prev Button */}
            <button
              onClick={() => setMobileIndex((i) => Math.max(i - 1, 0))}
              disabled={mobileIndex === 0}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,138,0,0.5)] transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === mobileIndex
                      ? "w-6 h-3 bg-orange-500 shadow-[0_0_8px_rgba(255,138,0,0.8)]"
                      : "w-3 h-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setMobileIndex((i) => Math.min(i + 1, projects.length - 1))}
              disabled={mobileIndex === projects.length - 1}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 hover:bg-orange-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(255,138,0,0.5)] transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
