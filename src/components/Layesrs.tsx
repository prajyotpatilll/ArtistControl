import Image from "next/image";
import React from "react";
import founder from "../assets/founders.png"; // Or move to public/

const Layesrs = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen relative">
      {/* Decorative Background Behind Entire Section */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-100" />

        {/* Large Blurred Circle */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      {/* Left Section */}
      <div className="relative flex-1 flex justify-center items-center bg-transparent overflow-hidden z-10">
        {/* Top Left Blue Block */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600" />
        {/* Bottom Right Blue Block */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-600" />

        {/* Image */}
        <div className="relative p-6">
          <Image
            src={founder}
            alt="Founders"
            className="object-cover rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex-1 flex flex-col justify-center bg-blue-600 text-white p-10 md:p-16 z-10">
        {/* Top Right White Block */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white" />
        {/* Bottom Left White Block */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white" />

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place.
          </h1>

          <p className="text-lg md:text-xl mb-6 leading-relaxed text-blue-100">
            Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness.
            <br />
            <br />
            Chaos unsettles those who can’t deal with it. We chase it.
          </p>

          <p className="font-semibold text-lg">
            Neel &amp; Shlok, Co-founders of Layers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Layesrs;
