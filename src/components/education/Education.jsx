"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Education & <span className="text-orange-500">Learning</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center mt-4 mb-20 max-w-xl mx-auto"
        >
          My academic background and the learning paths I’ve followed to build a
          strong foundation in software development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass-card p-8 hover:border-orange-500/60 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-semibold">
                Bachelor of Computer Applications (BCA)
              </h3>
            </div>

            <p className="text-orange-400 text-sm mb-4">
              Indira Gandhi National Open University (IGNOU)
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Currently pursuing BCA with a focus on computer science
              fundamentals, programming concepts, and application development.
              Alongside academics, I actively build projects and practice DSA.
            </p>

            <p className="text-zinc-500 text-xs mt-4">
              College: Khalsa College, Delhi
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass-card p-8 hover:border-orange-500/60 transition"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500">
                <BookOpen size={22} />
              </div>
              <h3 className="text-2xl font-semibold">
                Courses & Self Learning
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-zinc-400">
              <li>
                • <span className="text-white font-medium">C++ with DSA</span> — Love Babbar (CodeHelp)
              </li>
              <li>
                • <span className="text-white font-medium">Basic Computer Fundamentals</span> — OS, MS Office, Internet
              </li>
              <li>
                • <span className="text-white font-medium">Problem Solving Practice</span> — Regular LeetCode & DSA practice (100+ Qns Solved)
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
