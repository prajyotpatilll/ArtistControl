"use client";

import { useState, useEffect } from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { Music } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

export default function MusicTrail() {
  const [mouse, setMouse] = useState<Position>({ x: 0, y: 0 });
  const [small, setSmall] = useState<Position>({ x: 0, y: 0 });
  const [medium, setMedium] = useState<Position>({ x: 0, y: 0 });
  const [large, setLarge] = useState<Position>({ x: 0, y: 0 });

  // Track mouse position (no scroll offset)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    const update = () => {
      setSmall((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.25,
        y: prev.y + (mouse.y - prev.y) * 0.25,
      }));
      setMedium((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.15,
        y: prev.y + (mouse.y - prev.y) * 0.15,
      }));
      setLarge((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.08,
        y: prev.y + (mouse.y - prev.y) * 0.08,
      }));
      requestAnimationFrame(update);
    };
    update();
  }, [mouse]);

  // Dancing motion animation
  const dancingAnimation = (delay: number): TargetAndTransition => ({
    rotate: [0, 10, -10, 0],
    scale: [1, 1.2, 1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <>
      {/* Small (fast, vibrant) */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[9999]"
        animate={{ x: small.x, y: small.y }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div animate={dancingAnimation(0)} style={{ opacity: 0.9 }}>
          <Music size={16} className="drop-shadow" color="#ff66cc" />
        </motion.div>
      </motion.div>

      {/* Medium */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[9998]"
        animate={{ x: medium.x, y: medium.y }}
        transition={{ type: "spring", stiffness: 250, damping: 28 }}
      >
        <motion.div animate={dancingAnimation(0.2)} style={{ opacity: 0.7 }}>
          <Music size={24} className="drop-shadow" color="#ffcc33" />
        </motion.div>
      </motion.div>

      {/* Large (slow, soft) */}
      <motion.div
        className="fixed left-0 top-0 pointer-events-none z-[9997]"
        animate={{ x: large.x, y: large.y }}
        transition={{ type: "spring", stiffness: 200, damping: 35 }}
      >
        <motion.div animate={dancingAnimation(0.4)} style={{ opacity: 0.5 }}>
          <Music size={32} className="drop-shadow" color="#33ccff" />
        </motion.div>
      </motion.div>
    </>
  );
}
