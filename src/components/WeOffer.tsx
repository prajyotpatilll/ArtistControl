"use client";

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faGlobe, faWallet } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants, easeInOut, useInView, useAnimation } from "framer-motion";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Card = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    icon: faHeadset,
    title: "24/7 Artist Support",
    description: "Satisfied customers are our best ads. We always give people more than what they expect to get.",
  },
  {
    icon: faGlobe,
    title: "Worldwide Distribution",
    description: "Get your music published in every major digital store and streaming service across the globe.",
  },
  {
    icon: faWallet,
    title: "Monthly Payment",
    description: "Our monthly payment service helps artists to grow and plan their income consistently.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: easeInOut },
  },
};

export default function WeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="py-14 sm:pt-24 px-6 bg-gradient-to-b from-gray-100 to-white text-gray-900
                 dark:from-black dark:to-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl sm:text-2xl md:text-2xl font-extrabold mb-4 text-red-600 dark:text-red-500">
          WE OFFER SOMETHING DIFFERENT
        </h1>
        <p className="text-lg sm:text-4xl md:text-5xl max-w-3xl mx-auto font-semibold leading-tight">
          This is an industry-leading music distribution service.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {cards.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800 p-8 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-3 mb-6 rounded-full bg-red-500 text-white shadow-lg">
              <FontAwesomeIcon icon={icon} size="2x" />
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{title}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
