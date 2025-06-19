/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [contentHeight, setContentHeight] = useState(0);
  const aboutContentRef = useRef(null);
  const headerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (aboutContentRef.current) {
      setContentHeight(aboutContentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-24 rounded-xl px-4 md:px-8 lg:px-2 bg-transparent min-h-[850px]">
      {/* Glow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Replace teal/cyan background glows with purple → pink → sky blue gradients */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-pink-400 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={headerRef}
          className="relative rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-lg shadow-2xl p-6 md:p-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(192,132,252,0.12), rgba(236,72,153,0.06), rgba(135,206,235,0))`,
          }}
        >
          {/* Neon Border with updated purple-pink-sky gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>

          {/* Title with updated gradient colors */}
          <h2
            className="text-6xl text-center md:text-6xl font-bold mb-10
                       bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                       bg-clip-text text-transparent drop-shadow-md"
          >
            About Me
          </h2>

          {/* Content */}
          <div
            ref={aboutContentRef}
            className="space-y-6 animate-in fade-in duration-300 mb-6"
          >
            <p className="text-zinc-300 leading-relaxed text-lg ">
              Hey there! I&apos;m Nevin Bali, a passionate Full Stack Developer
              and aspiring Data Scientist currently pursuing B.Tech at MSIT. I
              specialize in building robust web applications using the MERN
              stack, and love leveraging Next.js, TypeScript, and Prisma for
              full-fledged development.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Beyond development, I enjoy building responsive UI with Tailwind
              CSS and exploring Firebase, Power BI, and data analysis tools. As
              the Deputy Head of Development in GDGOC and Geek Room, I’ve led
              impactful projects, collaborated with teams, and contributed to
              major tech initiatives.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              I&apos;m always up for freelance work, open-source collabs, or
              hackathons. When I’m not coding, you’ll find me exploring deep
              learning or crafting innovative side projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              <div className="bg-zinc-700/30 p-4 rounded-lg border border-zinc-700/50">
                <h4 className="text-white font-semibold mb-4">Education</h4>
                <p className="text-zinc-300">B.Tech CSE</p>
                <p className="text-zinc-400 text-md">
                  Maharaja Surajmal Institute of Technology (2023–2027)
                </p>
              </div>
              <div className="bg-zinc-700/30 p-4 rounded-lg border border-zinc-700/50">
                <h4 className="text-white font-semibold mb-4">Location</h4>
                <p className="text-zinc-300">New Delhi, India</p>
                <p className="text-zinc-400 text-md">
                  Open to remote & freelance work
                </p>
              </div>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center mt-14 pt-6 border-t border-zinc-700/50">
              <Link to="https://drive.google.com/file/d/13rG8EzTr7nb_ZDNqiGaf462MoIDoGbUi/view?usp=sharing">
                <button className="flex mt-4 items-center bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 hover:from-purple-500 hover:via-pink-500 hover:to-sky-500 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-transform hover:scale-105">
                  My Resume
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
