import { EXPERIENCES } from "../utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta
          name="description"
          content="Professional experience of Nevin Bali, Full Stack Software Engineer, including SDE internships, production MVP ownership, cloud-native systems, and real-world engineering impact."
        />
        <meta
          name="keywords"
          content="Nevin Bali experience, SDE Intern, Full Stack Engineer experience, GenAI projects, Next.js FastAPI Docker"
        />
      </Helmet>

      <section
        id="experience"
        className="border-b border-neutral-900 pb-16"
        aria-labelledby="experience-heading"
      >
        {/* Heading */}
        <motion.h2
          id="experience-heading"
          role="heading"
          aria-level="2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="my-20 text-center text-5xl md:text-6xl font-extrabold
                     bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                     bg-clip-text text-transparent drop-shadow-md"
        >
          Professional Experience
        </motion.h2>

        {/* Experience Timeline */}
        <div className="px-4 max-w-6xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <article
              key={index}
              className="mb-14 flex flex-col lg:flex-row lg:gap-12"
              aria-label={`${experience.role} at ${experience.company}`}
            >
              {/* Duration */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/4"
              >
                <time className="text-base md:text-lg font-medium text-neutral-400">
                  {experience.Duration}
                </time>
              </motion.div>

              {/* Content */}
              <div className="mt-3 lg:mt-0 lg:w-3/4 max-w-4xl">
                {/* Role + Company */}
                <header>
                  <motion.h3
                    initial={{ x: -40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold text-white"
                  >
                    {experience.role}
                    <span
                      className="ml-2 text-lg md:text-xl font-medium
                                 bg-gradient-to-r from-purple-300 via-pink-300 to-sky-400
                                 bg-clip-text text-transparent"
                    >
                      @ {experience.company}
                    </span>
                  </motion.h3>
                </header>

                {/* Description */}
                <motion.p
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mt-3 mb-5 text-base md:text-lg leading-relaxed
                             text-neutral-400"
                >
                  {experience.description}
                </motion.p>

                {/* Tech Stack */}
                <div
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label="Technologies used"
                >
                  {experience.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      role="listitem"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="rounded-full bg-neutral-800/80
                                 px-4 py-1.5 text-sm font-medium
                                 text-purple-300 border border-neutral-700/60"
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

export default Experience;
