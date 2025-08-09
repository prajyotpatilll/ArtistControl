"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import mic1 from "../assets/mic1.jpg";
import banner2 from "../assets/mic2.jpg";
import banner3 from "../assets/mic3.jpg";

const slides = [
  {
    src: banner2,
    heading1: "ARTIST",
    heading2: "CONTROL",
    heading: "A Perfect Place For Artists To Control Their Rights",
  },
  {
    src: mic1,
    heading1: "CONTROL",
    heading2: "YOUR DIGITAL RIGHTS",
    heading: "Secure and monetize your digital rights from re-uploading on YouTube and Facebook",
  },
  {
    src: banner3,
    heading1: "WORLD WIDE",
    heading2: "MUSIC DISTRIBUTION",
    heading: "Get your music on Spotify, Apple Music, Instagram and many more streaming stores",
  },
];

export default function HomeBanner() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={slides[current].src}
            alt={`Banner ${current + 1}`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`heading1-${current}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center drop-shadow-lg"
          >
            {slides[current].heading1}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h1
            key={`heading2-${current}`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.1 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center drop-shadow-lg"
          >
            {slides[current].heading2}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`subheading-${current}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.2 }}
            className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center drop-shadow-lg mt-4 max-w-[90%] sm:max-w-2xl"
          >
            {slides[current].heading}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom Fade Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 to-transparent z-20"
      />

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
