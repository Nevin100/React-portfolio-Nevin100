import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950">
      <div className="flex flex-col items-center gap-5">
        {/* Animated line */}
        <motion.div
          className="h-[2px] w-28 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "left" }}
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-xs sm:text-sm tracking-[0.35em] text-neutral-400 uppercase text-center"
        >
          Nevin Bali
        </motion.p>
      </div>
    </div>
  );
}

export default Loader;
