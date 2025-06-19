import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiPrisma,
  SiBootstrap,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiFramer,
  SiPostman,
  SiGit,
  SiPowerbi,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";

const sections = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", color: "text-yellow-400", emoji: "🟨" },
      { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
      { name: "SQL", color: "text-indigo-400", emoji: "🗄️" },
      { Icon: FaPython, name: "Python", color: "text-blue-500" },
      { name: "C / C++", color: "text-gray-400", emoji: "💻" },
      { name: "HTML", color: "text-orange-500", emoji: "📄" },
      { name: "CSS", color: "text-blue-300", emoji: "🎨" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { Icon: RiReactjsLine, name: "React.js", color: "text-cyan-400" },
      { Icon: SiRedux, name: "Redux / RTK Query", color: "text-purple-600" },
      { name: "REST APIs", color: "text-green-400", emoji: "🔗" },
      { name: "JWT Auth", color: "text-yellow-400", emoji: "🔐" },
      { Icon: SiBootstrap, name: "Bootstrap", color: "text-purple-500" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-sky-400" },
      { name: "Spline", color: "text-pink-400", emoji: "✨" },
      { name: "AOS Animations", color: "text-purple-400", emoji: "🎞️" },
      { Icon: SiFramer, name: "Framer Motion", color: "text-pink-600" },
    ],
  },
  {
    title: "Backend",
    items: [
      { Icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { Icon: SiExpress, name: "Express.js", color: "text-green-900" },
      { Icon: SiMongoose, name: "Mongoose", color: "text-red-600" },
      { Icon: SiPrisma, name: "Prisma", color: "text-blue-400" },
      { name: "FastAPI", color: "text-teal-400", emoji: "🚀" },
    ],
  },
  {
    title: "Databases",
    items: [
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
      { name: "Appwrite", color: "text-red-600", emoji: "📦" },
      { Icon: TbBrandMysql, name: "MySQL", color: "text-blue-400" },
      { Icon: SiFirebase, name: "Firebase", color: "text-yellow-400" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
      { name: "Supabase", color: "text-blue-500", emoji: "🦸" },
      { name: "Neon", color: "text-pink-500", emoji: "🌌" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { Icon: SiPostman, name: "Postman", color: "text-orange-600" },
      { Icon: SiGit, name: "Git/GitHub", color: "text-red-500" },
      { Icon: SiPowerbi, name: "Power BI", color: "text-yellow-400" },
      { name: "MS Excel", color: "text-green-600", emoji: "📊" },
      { name: "Thunder Client", color: "text-purple-600", emoji: "⚡" },
      { Icon: SiDocker, name: "Docker", color: "text-blue-600" },
    ],
  },
  {
    title: "Learning",
    items: [
      { name: "FastAPI", color: "text-teal-400", emoji: "🚀" },
      { name: "AWS", color: "text-orange-400", emoji: "☁️" },
    ],
  },
];

export default function Technologies() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
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
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-2 bg-transparent min-h-[1000px]">
      {/* Glow Backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-400 blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-pink-400 blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={containerRef}
          className="relative rounded-3xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-lg shadow-2xl p-6 md:p-10"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(192,132,252,0.12), rgba(236,72,153,0.06), rgba(135,206,235,0))`,
          }}
        >
          {/* Neon Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>
          <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-sky-400 animate-pulse"></div>

          {/* Heading */}
          <h2 className="my-16 text-center text-4xl lg:text-6xl py-10 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md">
            Technologies & Skills
          </h2>

          {/* Skill Sections */}
          {sections.map(({ title, items }, idx) => (
            <section key={idx} className="mb-16">
              <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                {title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 px-2 sm:px-4 place-items-center">
                {items.map(({ Icon, name, color, emoji }, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -10 }}
                    animate={{ y: [10, -10] }}
                    transition={{
                      duration: 2 + (i % 3),
                      delay: i * 0.15,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="flex flex-col items-center space-y-2 rounded-2xl border-4 cursor-pointer border-neutral-800 p-4 sm:p-6 w-24 sm:w-28 hover:border-purple-500 transition-transform duration-300"
                    title={name}
                  >
                    {Icon ? (
                      <Icon className={`text-5xl sm:text-6xl ${color}`} />
                    ) : (
                      <span className={`text-5xl sm:text-6xl ${color}`}>
                        {emoji}
                      </span>
                    )}
                    <span className="text-xs sm:text-sm text-neutral-300 font-medium text-center">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
