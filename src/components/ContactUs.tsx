"use client";

import Link from "next/link";
import InfiniteTextScroll from "./TextSroll";

export default function ContactUs() {
  return (
    <section className="w-full py-20  bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900">
     
      <div
        className="max-w-5xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg 
                   rounded-2xl shadow-xl p-10 text-center border border-white/20 dark:border-gray-700/30"
      >
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-2">
          Let’s talk about your new release
        </p>

        {/* Tagline */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 tracking-wide">
          Music Distribution Company
        </p>

        {/* Button */}
        <Link href="/contact">
          <button
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 
                       text-white font-medium rounded-full shadow-lg 
                       hover:from-indigo-600 hover:to-purple-700
                       transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </Link>
      </div>
      <InfiniteTextScroll/>
    </section>
  );
}
