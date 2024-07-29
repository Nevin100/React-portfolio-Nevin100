import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="border b border-neutral-600 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <RiReactjsLine className="text-6xl text-cyan-300" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <SiMongodb className="text-6xl text-green-800" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <SiMongoose className="text-6xl text-red-600" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 4,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <FaNodeJs className="text-6xl text-green-600" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <TbBrandMysql className="text-6xl text-blue-300" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <SiExpress className="text-6xl text-green-900" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <DiPython className="text-6xl text-blue-400" />
        </motion.div>
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: [10, -10] }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "linear",
            repeat: Infinity,
          }}
          className="rounded-2xl border-4 border-neural-800 p-4"
        >
          <SiPowerbi className="text-6xl text-yellow-200" />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
