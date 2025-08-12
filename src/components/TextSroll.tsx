"use client";

import { motion } from "framer-motion";

export default function InfiniteTextScroll() {
  const text = "Proz X ";
  const speed = 100; // seconds for one loop

  return (
    <div className="relative w-full py-20 overflow-x-hidden">
      {/* Top row */}
      <div className="relative w-full overflow-hidden h-[2rem] sm:h-[3rem]">
        <motion.div
          className="absolute top-0 left-0 flex whitespace-nowrap text-lg sm:text-2xl md:text-4xl font-bold will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        >
          <span className="mr-4">{text.repeat(50)}</span>
          <span className="mr-4">{text.repeat(50)}</span>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="relative w-full overflow-hidden h-[2rem] sm:h-[3rem]">
        <motion.div
          className="absolute top-0 left-0 flex whitespace-nowrap text-lg sm:text-2xl md:text-4xl font-bold will-change-transform"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        >
          <span className="mr-4">{text.repeat(50)}</span>
          <span className="mr-4">{text.repeat(50)}</span>
        </motion.div>
      </div>
    </div>
  );
}
