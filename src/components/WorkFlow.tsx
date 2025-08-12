"use client";

import { Music, UploadCloud, DollarSign } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Register",
    description:
      "Connect with us to start your process by logging into our portal.",
    icon: <Music className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
  {
    number: 2,
    title: "Submit Music",
    description:
      "Upload your music to our portal and wait for our team to respond.",
    icon: (
      <UploadCloud className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    ),
  },
  {
    number: 3,
    title: "Get Paid",
    description:
      "Get paid monthly after your music is distributed on every platform.",
    icon: <DollarSign className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 dark:text-gray-100 mb-12">
        How Can I Publish My Music?
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
          >
            {/* Step Icon */}
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 mb-4
              transition-transform duration-300 group-hover:rotate-6"
            >
              {step.icon}
            </div>

            {/* Step Number */}
            <div className="text-indigo-600 dark:text-indigo-400 text-lg font-bold mb-2">
              Step {step.number}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
