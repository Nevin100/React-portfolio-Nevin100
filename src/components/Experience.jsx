import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div className="px-4">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Duration */}
            <div className="w-full lg:w-1/4">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-2  font-medium text-lg text-neutral-400"
              >
                {experience.Duration}
              </motion.p>
            </div>

            {/* Role & Company */}
            <div className="w-full mt-2 mb-3 max-w-4xl lg:w-3/4">
              <motion.h6
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-1 text-xl font-semibold text-white"
              >
                {experience.role}{" "}
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="ml-2 text-lg font-medium bg-gradient-to-r from-purple-300 via-pink-300 to-blue-400 bg-clip-text text-transparent"
                >
                  @ {experience.company}
                </motion.span>
              </motion.h6>

              {/* Description */}
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="mb-4 mt-1 text-lg text-neutral-400"
              >
                {experience.description}
              </motion.p>

              {/* Technologies */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="mr-2 mb-2 mt-1 rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
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

export default Experience;
