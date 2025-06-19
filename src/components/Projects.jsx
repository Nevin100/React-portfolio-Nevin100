import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndexes, setExpandedIndexes] = useState(new Set());

  const filteredProjects = PROJECTS.filter((project) => {
    const search = searchTerm.toLowerCase();

    const matchTitle = project.title.toLowerCase().includes(search);
    const matchDescription = project.description.toLowerCase().includes(search);
    const matchTechnologies = project.technologies.some((tech) =>
      tech.toLowerCase().includes(search)
    );

    return matchTitle || matchTechnologies || matchDescription;
  });

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-24 px-4 sm:px-8 lg:px-16">
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md"
      >
        Featured Projects
      </motion.h2>

      {/* Search Input */}
      <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <h1 className="text-xl font-semibold text-white">🔍 Search</h1>
        <input
          type="text"
          placeholder="Search by tech (e.g. React, Node)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-72 rounded-lg bg-neutral-800 px-4 py-2 text-md text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
        />
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {filteredProjects.map((project, index) => {
          const isExpanded = expandedIndexes.has(index);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 rounded-xl shadow-lg cursor-pointer hover:shadow-purple-700/20 transition-all duration-300 overflow-hidden relative flex flex-col"
            >
              {/* GitHub Icon */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 text-purple-600 hover:text-purple-800 z-10"
              >
                <FiGithub size={22} />
              </a>

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Project Title with Gradient */}
                <h3 className="text-2xl font-bold mb-3 mt-1 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent drop-shadow-md">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-neutral-400 mb-3 leading-relaxed">
                  {isExpanded
                    ? project.description
                    : project.description.length > 120
                    ? project.description.slice(0, 120) + "..."
                    : project.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, ind) => (
                    <span
                      key={ind}
                      className="bg-purple-800/20 text-purple-300 text-sm mt-1 font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                {isExpanded && project.keyFeatures?.length > 0 && (
                  <div className="mb-3">
                    <p className="text-md font-semibold text-purple-400 mb-1">
                      Key Features:
                    </p>
                    <ul className="list-disc list-inside text-md text-neutral-400 space-y-1">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Learnings */}
                {isExpanded && project.learnings?.length > 0 && (
                  <div>
                    <p className="text-md font-semibold text-purple-400 mb-1">
                      What I Learned:
                    </p>
                    <ul className="list-disc list-inside text-md text-neutral-400 space-y-1">
                      {project.learnings.map((learning, idx) => (
                        <li key={idx}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Toggle Button */}
                {project.description.length > 120 && (
                  <button
                    className="mt-4 text-md font-medium text-purple-400 hover:text-purple-600 transition-colors self-start"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {isExpanded ? "Show Less ▲" : "Show More ▼"}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Fallback for no search results */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-neutral-500 col-span-full font-semibold">
            No projects match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default Projects;
