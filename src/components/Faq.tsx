"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Layers?",
    answer:
      "Layers is a premium smartwatch and accessories brand offering high-quality designs."
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes, we provide free worldwide shipping on orders above $50."
  },
  {
    question: "Can I return my product?",
    answer:
      "Absolutely. You can return products within 30 days for a full refund."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 transform transition-transform duration-300 text-gray-600 dark:text-gray-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  {isActive ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {/* Answer Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 sm:p-5 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
