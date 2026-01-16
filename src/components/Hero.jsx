import { HERO_CONTENT } from "../constants";
import profilePIC from "../assets/NevinProfile.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Hero() {
  return (
    <>
      <Helmet>
        <title>Nevin Bali | Full Stack Engineer • GenAI • Cloud & DevOps</title>

        <meta
          name="description"
          content="Nevin Bali is a Full Stack Software Engineer specializing in React, Next.js, TypeScript, GenAI, FastAPI, cloud-native systems, and scalable production-grade web applications."
        />

        <meta
          name="keywords"
          content="Nevin Bali, Full Stack Engineer, GenAI Developer, React Next.js Developer, Cloud DevOps Engineer, Software Engineer Portfolio"
        />

        <meta name="author" content="Nevin Bali" />

        {/* Optional but powerful */}
        <link rel="canonical" href="https://nevinbali.me/" />
      </Helmet>

      <section
        id="home"
        className="relative border-b border-neutral-900
                 px-4 sm:px-8 lg:px-16
                 md:pt-28 pt-5 md:my-4 my-2 pb-32 overflow-hidden"
      >
        {/* subtle glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-24 left-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-16 right-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* TEXT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold
                       tracking-tight text-white"
            >
              Nevin Bali
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold
                       bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400
                       bg-clip-text text-transparent"
            >
              Full Stack Engineer • GenAI • Cloud & DevOps
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-xl
                       text-sm sm:text-base lg:text-lg
                       leading-relaxed text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/projects"
                className="rounded-xl bg-gradient-to-r
                         from-purple-500 via-pink-500 to-sky-500
                         px-7 py-3 text-sm sm:text-base
                         font-semibold text-white
                         shadow-lg hover:opacity-90 transition flex-1 text-center"
              >
                View Projects
              </a>

              <a
                href="/experience"
                className="rounded-xl border border-neutral-700
                         px-7 py-3 text-sm sm:text-base
                         font-semibold text-neutral-200
                         hover:border-purple-400 hover:text-purple-400
                         transition flex-1 text-center"
              >
                Experience
              </a>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end mt-12 lg:mt-0 order-1 lg:order-2  "
          >
            <img
              src={profilePIC}
              alt="Nevin Bali – Full Stack & GenAI Engineer"
              className="
              w-72 sm:w-80 md:w-96 lg:w-[28rem] xl:w-[32rem]
              rounded-3xl object-cover
              border border-neutral-800
              shadow-2xl
            "
              loading="eager"
              width="512"
              height="640"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
