"use client";

import { motion } from "framer-motion";
import { Code2, Music, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-orange-500">Me</span>
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            I am a{" "}
            <span className="text-white font-medium">
              passionate Frontend Developer
            </span>{" "}
            with a strong focus on creating{" "}
            <span className="text-orange-500">
              clean, responsive, and visually engaging user interfaces
            </span>
            . I enjoy transforming ideas into real-world applications using
            modern frontend technologies like{" "}
            <span className="text-white font-medium">React</span> and
            Tailwind CSS.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Alongside frontend development, I am actively working towards
            becoming a{" "}
            <span className="text-white font-medium">
              Full Stack Developer
            </span>
            . I regularly practice{" "}
            <span className="text-orange-500">Data Structures & Algorithms</span>{" "}
            using <span className="text-white font-medium">C and C++</span> to
            strengthen my problem-solving mindset and logical thinking.
            I have solved{" "}
            <span className="text-white font-medium">
              100+ LeetCode problems
            </span>
            , which has helped me develop a structured and optimized approach to
            writing code.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            Beyond technology, I am deeply passionate about{" "}
            <span className="text-orange-500">music</span> and enjoy playing the
            guitar. Music plays an important role in my life — it helps me stay
            creative, disciplined, and focused, qualities that directly reflect
            in the way I approach development and continuous learning.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="
              inline-block
              px-7 py-3
              bg-orange-500 text-white text-sm
              rounded-3xl
              transition-all duration-300
              hover:bg-orange-400
              hover:shadow-[0_0_30px_rgba(255,138,0,0.45)]
            "
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* PROJECTS */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Code2 className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-3xl font-bold text-white">15+</h3>
            <p className="text-zinc-400 text-sm mt-1">Projects Built</p>
          </motion.div>

          {/* LEETCODE */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Terminal className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-3xl font-bold text-white">100+</h3>
            <p className="text-zinc-400 text-sm mt-1">
              LeetCode Problems Solved
            </p>
          </motion.div>

          {/* MUSIC */}
          <motion.div
            whileHover={{ y: -8 }}
            className="glass-card p-6 text-center transition"
          >
            <Music className="mx-auto mb-4 text-orange-500" size={26} />
            <h3 className="text-xl font-semibold text-white">
              Guitarist
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Passionate About Music
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
