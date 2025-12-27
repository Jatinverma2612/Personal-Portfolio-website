"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="
    scroll-mt-28
    relative
    min-h-[92vh] md:min-h-screen
    flex items-start md:items-center
    pt-28 md:pt-0
    px-6 md:px-10
    overflow-hidden
  "
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-xs tracking-[0.35em] text-orange-500 mb-4">
            FRONTEND DEVELOPER
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            Jatin <span className="text-orange-500">Verma</span>
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Building modern & scalable{" "}
            <span className="text-orange-500">web interfaces</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            I craft clean, responsive, and performance-focused user interfaces.
            Currently sharpening my skills in frontend development while
            progressing towards full-stack expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="
                inline-flex justify-center items-center
                px-6 py-3 rounded-full
                bg-orange-500 text-white text-sm font-medium
                hover:bg-orange-400 transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                inline-flex justify-center items-center
                px-6 py-3 rounded-full
                border border-white/30 text-white text-sm font-medium
                hover:border-orange-500 hover:text-orange-500 transition
              "
            >
              Contact Me
            </a>
          </div>

          {/* MOBILE VISUAL FILL */}
          <div className="block md:hidden mt-14">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent mb-6" />
            <p className="text-xs text-gray-500 tracking-widest text-center">
              SCROLL TO EXPLORE
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <div className="hidden lg:flex justify-end">
          <img
            src="/hero/zenitsu.png"
            alt="Hero illustration"
            className="max-w-[520px] object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  );
}
