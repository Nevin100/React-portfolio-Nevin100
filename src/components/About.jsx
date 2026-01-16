/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  const headerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headerRef.current) return;

      const rect = headerRef.current.getBoundingClientRect();

      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Nevin Bali – Full Stack & GenAI Engineer</title>

        <meta
          name="description"
          content="Nevin Bali is a Full Stack Software Engineer specializing in Next.js, GenAI, FastAPI, Docker, and scalable production-grade web applications."
        />

        <meta
          name="keywords"
          content="Nevin Bali, Full Stack Developer, GenAI Engineer, Next.js, DevOps, SaaS, MERN Stack"
        />

        <meta name="author" content="Nevin Bali" />
      </Helmet>
      <section
        id="about"
        className="relative w-full py-20 md:py-28 px-4 bg-transparent"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-10 w-44 h-44 bg-purple-400/20 blur-3xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/20 blur-3xl rounded-full" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.article
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl border border-zinc-800/60
             bg-zinc-900/30 backdrop-blur-xl shadow-2xl
             p-6 sm:p-8 md:p-12"
            style={{
              background: `radial-gradient(
              circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(192,132,252,0.14),
              rgba(236,72,153,0.08),
              rgba(0,0,0,0)
            )`,
            }}
          >
            {/* Neon Frame */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400" />
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400" />
              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400" />
              <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400" />
            </div>

            {/* Heading */}
            <motion.header
              variants={fadeUp}
              className="text-center mb-10 md:mb-14"
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold
                           bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                           bg-clip-text text-transparent"
              >
                About Me
              </h2>

              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-md sm:text-base">
                Full Stack Engineer • GenAI • Cloud & DevOps • SaaS Builder
              </p>
            </motion.header>

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 max-w-4xl mx-auto text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              <p>
                I’m <strong className="text-white">Nevin Bali</strong>, a Full
                Stack Software Engineer with hands-on experience building
                scalable, secure, and production-grade web applications. I have
                worked end-to-end on real-world MVPs using{" "}
                <strong>Next.js, TypeScript, FastAPI</strong>, and modern cloud
                architectures, delivering systems used by real users in live
                environments.
              </p>

              <p>
                During my internships as an <strong>SDE Intern</strong>, I owned
                and developed complete production systems — from frontend
                interfaces to backend services, authentication, databases, and
                deployments. My work includes building admin dashboards, payment
                integrations, data-driven analytics platforms, and cloud-managed
                applications using
                <strong> PostgreSQL, MongoDB, Docker, Firebase, JWT</strong>,
                and CI/CD pipelines.
              </p>

              <p>
                I actively build and experiment in the
                <strong> GenAI and SaaS</strong> space, developing AI-powered
                products such as cold email generators, interview preparation
                platforms, and newsletter automation tools using{" "}
                <strong>Groq LLMs (Llama v3)</strong>. I focus on performance,
                clean architecture, and real-world usability while integrating
                AI, cloud infrastructure, and automation into scalable
                full-stack systems.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto"
            >
              <div className="rounded-xl bg-zinc-800/40 border border-zinc-700/60 p-5">
                <h4 className="text-white font-semibold">Education</h4>
                <p className="text-zinc-300 mt-1">B.Tech – Computer Science</p>
                <p className="text-zinc-400 text-sm">
                  Maharaja Surajmal Institute of Technology (2023–2027)
                </p>
              </div>

              <address className="not-italic rounded-xl bg-zinc-800/40 border border-zinc-700/60 p-5">
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-zinc-300 mt-1">New Delhi, India</p>
                <p className="text-zinc-400 text-sm">
                  Open to Full-time • Remote • Contract • Freelance
                </p>
              </address>
            </motion.div>

            {/* Resume CTA */}
            <div className="flex justify-center mt-14 pt-8 border-t border-zinc-700/50">
              <Link
                to="https://drive.google.com/file/d/1b6JlVv2VSWQwjyOtI8-EnSZTB7rQQ0yz/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2
                                 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                                 hover:from-purple-500 hover:via-pink-500 hover:to-sky-500
                                 text-white px-6 py-3 rounded-xl font-medium
                                 shadow-lg transition-transform hover:scale-105"
                >
                  View Resume
                  <ExternalLink className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
