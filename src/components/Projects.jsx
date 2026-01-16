import { PROJECTS } from "../utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiSearch } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndexes, setExpandedIndexes] = useState(new Set());

  const filteredProjects = PROJECTS.filter((project) => {
    const search = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search)
      )
    );
  });

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <>
      <Helmet>
        <title>Projects | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta
          name="description"
          content="Explore real-world full stack, GenAI, and SaaS projects built by Nevin Bali using Next.js, React, FastAPI, Docker, cloud platforms, and modern system architectures."
        />
        <meta
          name="keywords"
          content="Nevin Bali projects, full stack projects, GenAI projects, SaaS portfolio, React Next.js projects"
        />
      </Helmet>

      <section
        id="projects"
        className="border-b border-neutral-900 pb-28 px-4 sm:px-8 lg:px-16"
        aria-labelledby="projects-heading"
      >
        {/* Heading */}
        <motion.h2
          id="projects-heading"
          role="heading"
          aria-level="2"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="my-24 text-center text-4xl sm:text-5xl lg:text-6xl pb-3
                     font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                     bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {/* Search */}
        <div className="mb-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2 text-white font-semibold">
            <FiSearch />
            Search Projects
          </div>
          <input
            type="text"
            placeholder="Search by tech, title, or feature…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-80 rounded-xl bg-neutral-900
                       border border-neutral-700 px-4 py-2
                       text-sm sm:text-base text-white
                       placeholder:text-neutral-500
                       focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedIndexes.has(index);

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative flex flex-col rounded-2xl
                           bg-neutral-900/60 backdrop-blur-md
                           border border-neutral-800 shadow-lg
                           hover:shadow-purple-600/20 transition-all overflow-hidden"
                aria-label={project.title}
              >
                {/* Accent */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400" />

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  className="absolute top-4 right-4 z-10
                             bg-neutral-900/70 p-2 rounded-full
                             text-purple-400 hover:text-purple-300"
                >
                  <FiGithub size={22} />
                </a>

                {/* Image */}
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="aspect-video w-full object-cover"
                  loading="lazy"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold
                                 bg-gradient-to-r from-purple-300 via-pink-300 to-sky-400
                                 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {isExpanded
                      ? project.description
                      : project.description.length > 140
                      ? project.description.slice(0, 140) + "…"
                      : project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-purple-800/20
                                   px-3 py-1 text-xs sm:text-sm
                                   font-medium text-purple-300"
                        title={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 space-y-3">
                      {project.keyFeatures?.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-purple-400">
                            Key Features
                          </p>
                          <ul className="list-disc list-inside text-sm text-neutral-400">
                            {project.keyFeatures.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.learnings?.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold text-purple-400">
                            Learnings
                          </p>
                          <ul className="list-disc list-inside text-sm text-neutral-400">
                            {project.learnings.map((l, i) => (
                              <li key={i}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Toggle */}
                  {project.description.length > 140 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 text-sm font-medium text-purple-400
                                 hover:text-purple-300 self-start"
                    >
                      {isExpanded ? "Show less ▲" : "Show more ▼"}
                    </button>
                  )}
                </div>
              </motion.article>
            );
          })}

          {/* Empty */}
          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-neutral-500 font-medium">
              No projects found. Try a different keyword.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
