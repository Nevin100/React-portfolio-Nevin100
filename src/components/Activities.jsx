import { motion } from "framer-motion";
import { OpenSourceContributionsData } from "../utils/index.js";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Activities() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Open Source & Community Contributions | Nevin Bali – Full Stack Engineer
        </title>
        <meta
          name="description"
          content="Explore open source and community contributions by Nevin Bali, including frontend development, hackathon platforms, React and Next.js projects, and leadership roles in large-scale developer communities."
        />
        <meta
          name="keywords"
          content="Nevin Bali open source, frontend developer contributions, React hackathon projects, open source portfolio, community projects"
        />
      </Helmet>

      <section
        id="open-source"
        className="border-b border-neutral-900 pb-24 px-4 sm:px-8 lg:px-16"
        aria-labelledby="open-source-heading"
      >
        {/* Heading */}
        <motion.h2
          id="open-source-heading"
          role="heading"
          aria-level="2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="my-24 text-center text-3xl sm:text-4xl lg:text-6xl
                     font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Open Source & Community Contributions
        </motion.h2>

        {/* Contributions List */}
        <div className="space-y-20 md:space-y-24 max-w-7xl mx-auto">
          {OpenSourceContributionsData.map((contribution, index) => (
            <article
              key={index}
              className="flex flex-col lg:flex-row gap-10 items-start"
              aria-label={`${contribution.role} at ${contribution.company}`}
            >
              {/* Image */}
              <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 mx-auto lg:mx-0">
                <Link to={contribution.link}>
                  <motion.img
                    src={contribution.image}
                    alt={`${contribution.company} project preview`}
                    className="rounded-xl border border-neutral-800
                               shadow-md w-full object-cover cursor-pointer"
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{ maxHeight: 320 }}
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/4 space-y-4">
                {/* Role & Company */}
                <header className="flex flex-wrap items-center gap-3">
                  <motion.h3
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl font-semibold text-white"
                  >
                    {contribution.role}
                    <span
                      className="ml-2 text-lg font-medium
                                 bg-gradient-to-r from-purple-300 via-pink-300 to-sky-400
                                 bg-clip-text text-transparent"
                    >
                      @ {contribution.company}
                    </span>
                  </motion.h3>

                  {/* GitHub */}
                  {contribution.repo && (
                    <a
                      href={contribution.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                      className="text-purple-400 hover:text-purple-300 transition"
                    >
                      <FaGithub className="text-xl sm:text-2xl" />
                    </a>
                  )}
                </header>

                {/* Description */}
                <motion.p
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-base sm:text-lg leading-relaxed text-neutral-400"
                >
                  {contribution.description}
                </motion.p>

                {/* Technologies */}
                <div
                  className="flex flex-wrap gap-2 pt-2"
                  role="list"
                  aria-label="Technologies used"
                >
                  {contribution.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      role="listitem"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="rounded-full bg-neutral-800/80
                                 px-3 py-1.5 text-xs sm:text-sm
                                 font-medium text-purple-300
                                 border border-neutral-700/60"
                      title={tech}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Activities;
