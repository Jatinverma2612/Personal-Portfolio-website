"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Get In <span className="text-orange-500">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-zinc-400 text-center mt-4 mb-16 max-w-xl mx-auto"
        >
          Have a project in mind? Let’s work together to create something amazing.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            {/* INFO BOXES */}
            <div className="space-y-6">
              <InfoBox
                icon={<Mail />}
                title="Email"
                value="jatinverma4554@gmail.com"
              />
              <InfoBox
                icon={<Phone />}
                title="Phone"
                value="+91 85120 58838"
              />
              <InfoBox
                icon={<MapPin />}
                title="Location"
                value="Delhi, India"
              />
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-10">
              <p className="text-sm text-zinc-400 mb-4">
                Connect with me
              </p>
              <div className="flex gap-4">
                <SocialIcon
                  href="https://www.linkedin.com/in/jatin-verma-26dec03/"
                  icon={<Linkedin />}
                />
                <SocialIcon
                  href="https://github.com/Jatinverma2612"
                  icon={<Github />}
                />
                <SocialIcon
                  href="mailto:jatinverma4554@gmail.com"
                  icon={<Mail />}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>

              <Input placeholder="Subject" />

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="contact-input resize-none"
              />

              <button
                type="button"
                className="
                  w-full py-3 rounded-full
                  bg-orange-500 text-white font-medium
                  transition
                  hover:bg-orange-400
                  hover:shadow-[0_0_35px_rgba(255,138,0,0.6)]
                "
              >
                Send Message
              </button>

              <p className="text-xs text-zinc-500 text-center mt-4">
                * Frontend demo only — backend not connected
              </p>
            </form>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-6 text-center text-sm text-zinc-500"
        >
          © {new Date().getFullYear()} Jatin Verma — Built with React, Next.Js & Tailwind CSS
        </motion.div>

      </div>
    </section>
  );
}

function InfoBox({ icon, title, value }) {
  return (
    <div className="glass-card flex items-center gap-5 p-6 hover:border-orange-500/60 transition">
      <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
        {icon}
      </div>
      <div>
        <p className="text-sm text-zinc-400">{title}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        w-11 h-11 rounded-full
        border border-white/20
        flex items-center justify-center
        text-white
        transition
        hover:border-orange-500
        hover:text-orange-500
        hover:shadow-[0_0_20px_rgba(255,138,0,0.5)]
        hover:-translate-y-1
      "
    >
      {icon}
    </a>
  );
}

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="contact-input"
    />
  );
}
