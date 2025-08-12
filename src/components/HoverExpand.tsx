"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HoverExpandGallery() {
  const images = [
    "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=800&auto=format",
    "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=800",
    "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=800",
    "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=800",
    "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=800&auto=format",
    "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=800",
    "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=800&auto=format",
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="mx-auto w-screen max-w-6xl p-6 sm:pb-20">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Hover / Tap Images to Expand
        </h1>
      </div>

      {/* Desktop / Tablet - Horizontal */}
      <div className="hidden sm:flex mt-8 h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] w-full gap-3 overflow-hidden rounded-[30px]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            animate={{
              flex: hovered === i ? 3 : 1,
              borderRadius: hovered === i ? "20px" : "30px",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 26,
              mass: 0.8,
            }}
          >
            <motion.img
              src={src}
              alt={`Image ${i}`}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: hovered === i ? 1.05 : 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile - Vertical */}
      <div className="flex flex-col gap-3 sm:hidden mt-8 overflow-hidden rounded-[20px]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setHovered(hovered === i ? null : i)}
            animate={{
              height: hovered === i ? 200 : 50,
              borderRadius: hovered === i ? "20px" : "15px",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 26,
              mass: 0.8,
            }}
          >
            <motion.img
              src={src}
              alt={`Image ${i}`}
              className="h-full w-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: hovered === i ? 1.05 : 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
