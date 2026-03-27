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
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiDaisyui,
  SiEjs,
  SiJsonwebtokens,
  SiNodemon,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#5A0EF8" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "EJS", icon: SiEjs, color: "#B4CA65" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#ffffff" },
  { name: "Nodemon", icon: SiNodemon, color: "#76D04B" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 overflow-hidden relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
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
        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 justify-items-center mt-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.5, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="
                  group relative
                  w-[115px] h-[115px]
                  rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-sm
                  flex flex-col items-center justify-center gap-3
                  overflow-hidden cursor-pointer
                  transition-all duration-300
                  hover:border-white/20 hover:bg-white/10
                  hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]
                "
              >
                {/* Dynamically colored background glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl z-0"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Top cinematic shine */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Center Icon Ring */}
                <div className="relative z-10 w-[52px] h-[52px] rounded-xl bg-black/40 border border-white/5 flex items-center justify-center group-hover:bg-black/60 group-hover:border-white/10 transition-colors duration-300 shadow-inner">
                  <Icon 
                    size={28} 
                    className="drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: skill.color }} 
                  />
                </div>
                
                {/* Text */}
                <p className="relative z-10 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {skill.name}
                </p>

                {/* Animated Bottom Progress Line */}
                <div 
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ backgroundColor: skill.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
