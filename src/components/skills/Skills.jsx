"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          Skills & <span className="text-orange-500">Technologies</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-400 mt-4 mb-16 max-w-xl mx-auto"
        >
          Technologies I use to build modern, responsive, and scalable
          web applications.
        </motion.p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  glass-card
                  w-28 h-28
                  flex flex-col items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:shadow-[0_0_30px_rgba(255,138,0,0.4)]
                "
              >
                <Icon size={36} style={{ color: skill.color }} />
                <p className="mt-3 text-sm text-white tracking-wide">
                  {skill.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
