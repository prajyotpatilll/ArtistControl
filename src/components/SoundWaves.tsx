"use client";

import { useEffect, useRef } from "react";

interface Wave {
  baseAmplitude: number;
  wavelength: number;
  speed: number;
  colorStops: [string, string];
  lineWidth: number;
  direction: number;
}

const waves: Wave[] = [
  { baseAmplitude: 30, wavelength: 200, speed: 1, colorStops: ["#00ffff", "#00bcd4"], lineWidth: 1, direction: 1 },
//   { baseAmplitude: 20, wavelength: 180, speed: 1.5, colorStops: ["#8bc34a", "#4caf50"], lineWidth: 1.5, direction: -1 },
//   { baseAmplitude: 25, wavelength: 200, speed: 1.8, colorStops: ["#ff7043", "#ff5722"], lineWidth: 1.8, direction: 1 },
  { baseAmplitude: 30, wavelength: 200, speed: 1, colorStops: ["#ff4d4d", "#ff0000"], lineWidth: 1, direction: -1 }
];

export default function SoundWaves() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let offset = 0;
    let frame = 0;

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      ctx.translate(0.5, 0.5); // prevent blurry lines
      ctx.globalCompositeOperation = "lighter"; // for glow blending

      waves.forEach((wave) => {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, wave.colorStops[0]);
        gradient.addColorStop(1, wave.colorStops[1]);

        const amplitude =
          wave.baseAmplitude + Math.sin(frame * 0.05 + wave.speed) * 5; // pulse animation

        ctx.beginPath();
        ctx.lineWidth = wave.lineWidth;
        ctx.strokeStyle = gradient;
        ctx.shadowBlur = 8;
        ctx.shadowColor = wave.colorStops[1];

        for (let x = 0; x < canvas.width; x++) {
          const y =
            canvas.height / 2 +
            amplitude *
              Math.sin(
                ((x + offset * wave.speed * wave.direction) / wave.wavelength) * Math.PI * 2
              );

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      ctx.restore();
      offset += 2;
      frame += 1;
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full h-[200px] overflow-hidden dark:bg-gradient-to-b from-gray-800 to-black bg-white">
    <canvas ref={canvasRef} className="w-full h-full" />
  </div>

  );
}
