"use client";

export default function CDLoader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="relative w-40 h-40 rounded-full shadow-xl animate-spin-slow"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              #d4d4d4 0%,
              #ffffff 10%,
              #ffb6c1 20%,
              #87cefa 30%,
              #98fb98 40%,
              #d4d4d4 50%,
              #ffb6c1 60%,
              #87cefa 70%,
              #98fb98 80%,
              #d4d4d4 100%
            )
          `,
          border: "6px solid #ccc",
        }}
      >
        {/* CD inner ring */}
        <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-4 border-gray-400 dark:border-gray-500 -translate-x-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-800 shadow-inner" />

        {/* CD center hole */}
        <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-black dark:bg-gray-100 -translate-x-1/2 -translate-y-1/2 shadow-inner" />
      </div>
    </div>
  );
}
