import { motion } from "framer-motion";
import { OpenSourceContributionsData } from "../constants/index.js";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function OpenSourceContributions() {
  return (
    <div className="border-b border-neutral-900 pb-24 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-24 text-center text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md"
      >
        Open Source Contributions
      </motion.h2>

      {/* Contributions List */}
      <div className="space-y-24">
        {OpenSourceContributionsData.map((contribution, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center gap-8 items-start"
          >
            {/* Image Container */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
              <Link to={contribution.link}>
                <motion.img
                  src={contribution.image}
                  alt={contribution.company}
                  className="rounded-xl border border-neutral-800 shadow-md max-w-full h-auto object-cover cursor-pointer"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ maxHeight: 320 }}
                />
              </Link>
            </div>

            {/* Details */}
            <div className="w-full max-w-4xl sm:w-3/4 lg:w-3/5 space-y-5">
              <motion.h6
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-white flex items-center gap-3"
              >
                {contribution.role}
                <span className="text-lg font-medium bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400 bg-clip-text text-transparent">
                  @ {contribution.company}
                </span>

                {/* GitHub Link */}
                {contribution.repo && (
                  <a
                    href={contribution.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                    title="View on GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                )}
              </motion.h6>

              {/* Description */}
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="text-lg text-neutral-400 leading-relaxed"
              >
                {contribution.description}
              </motion.p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {contribution.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpenSourceContributions;
