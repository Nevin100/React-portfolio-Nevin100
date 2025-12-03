/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiPostman,
  SiGithub,
  SiPowerbi,
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes,
  SiGit,
  SiBootstrap,
  SiNestjs,
  SiAppwrite,
  SiApachekafka,
} from "react-icons/si";
import { FaJava, FaFileCode } from "react-icons/fa";

export default function Technologies({ sections }) {
  const defaultSections = sections || [
    {
      title: "Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Bootstrap",
        "Material-UI",
        "Zustand",
        "Chakra UI",
        "Redux Toolkit",
        "Tailwind CSS",
        "Framer Motion",
        "AOS",
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "MongoDB (Mongoose)",
        "PostgreSQL",
        "Prisma",
        "Mongoose ODM",
        "NestJS (Learning)",
        "Appwrite",
        "Supabase Services",
      ],
    },
    {
      title: "Databases",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Neon",
        "Supabase",
        "Firebase",
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "Developer Tools & Extras",
      items: [
        "Git/GitHub",
        "Docker",
        "Postman",
        "Thunder Client",
        "Power BI",
      ],
    },
    {
      title: "Learning & Working On",
      items: [
        "DevOps",
        "Cloud (GCP, AWS)",
        "CI/CD",
        "Scalable Architectures",
        "Microservices",
        "Kafka",
        "MonoRepo Patterns",
      ],
    },
  ];

  const data = sections || defaultSections;

  const iconMap = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    python: SiPython,
    java: FaJava,
    "c++": SiCplusplus,
    c: SiCplusplus,
    html: SiHtml5,
    css: SiCss3,
    react: SiReact,
    next: SiNextdotjs,
    redux: SiRedux,
    tailwind: SiTailwindcss,
    framer: SiFramer,
    node: SiNodedotjs,
    express: SiExpress,
    fastapi: SiFastapi,
    mongodb: SiMongodb,
    mongoose: SiMongodb,
    postgresql: SiPostgresql,
    prisma: SiPrisma,
    mysql: SiMysql,
    neon: SiPostgresql,
    supabase: SiSupabase,
    firebase: SiFirebase,
    docker: SiDocker,
    postman: SiPostman,
    "thunder client": SiPostman,
    github: SiGithub,
    git: SiGit,
    "power bi": SiPowerbi,
    aws: SiAmazonaws,
    gcp: SiGooglecloud,
    googlecloud: SiGooglecloud,
    kubernetes: SiKubernetes,
    bootstrap: SiBootstrap,
    nest: SiNestjs,
    nestjs: SiNestjs,
    appwrite: SiAppwrite,
    kafka: SiApachekafka,
    "ci/cd": SiGit,
  };

  // getIcon: try exact then substring matching then fallback to null
  const getIcon = (techName) => {
    const key = techName.toLowerCase().trim();
    if (iconMap[key]) return iconMap[key];
    const found = Object.keys(iconMap).find((k) => key.includes(k));
    if (found) return iconMap[found];
    // no brand icon available — return null so we can use file fallback
    return null;
  };

  // build initials for potential use (optional)
  const initials = (name) => {
    const parts = name
      .replace(/\(.*\)/, "") // remove parenthesis like (Mongoose)
      .split(/[\s\-_/]+/)
      .filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + (parts[1][0] || "")).toUpperCase();
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative">
      {/* soft glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-8 left-16 w-56 h-56 bg-purple-500/16 blur-[90px] rounded-full"></div>
        <div className="absolute bottom-8 right-16 w-64 h-64 bg-sky-400/14 blur-[110px] rounded-full"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold mb-16 leading-tight
                   bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent"
      >
        Technologies & Skills
      </motion.h2>

      {/* Grid: responsive -> 1 / 2 / 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60
                       shadow-[0_10px_30px_rgba(2,6,23,0.6)] backdrop-blur-md
                       hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]
                       transition-transform duration-300"
          >
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4
                           bg-gradient-to-r from-purple-300 to-sky-300 bg-clip-text text-transparent">
              {section.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {section.items.map((tech, idx) => {
                const Icon = getIcon(tech);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl min-w-[10rem]
                               bg-gradient-to-br from-neutral-900/80 via-neutral-800/70 to-neutral-900/80
                               border border-neutral-700/50 text-neutral-100
                               hover:border-purple-400/70 hover:shadow-[0_10px_30px_rgba(139,92,246,0.12)]
                               transition-all duration-300"
                    title={tech}
                  >
                    <span
                      className="flex items-center justify-center rounded-full p-2
                                 w-10 h-10 shrink-0 bg-gradient-to-br from-purple-700/12 to-sky-400/8"
                      aria-hidden="true"
                    >
                      {/* If we found a brand icon, render it; otherwise show a file icon */}
                      {Icon ? (
                        <Icon className="w-6 h-6 text-purple-300" />
                      ) : (
                        <FaFileCode className="w-6 h-6 text-purple-300" />
                      )}
                    </span>

                    <span className="text-base md:text-lg lg:text-xl font-medium leading-tight">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* footer note */}
      <p className="text-center text-neutral-400 text-sm md:text-base mt-12">
        Continuously evolving — exploring Cloud, DevOps, CI/CD, and scalable system design.
      </p>
    </section>
  );
}
