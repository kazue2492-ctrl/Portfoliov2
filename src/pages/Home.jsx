import React from "react";
import LightRays from "../effects/LightRays";

const SplitText = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fadeUp"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f] flex items-center justify-center overflow-hidden">

      {/* ✨ Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      {/* 🔥 Main Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <SplitText text="Hi, I'm Xionsqqq" />
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          <SplitText text="A passionate web developer crafting immersive digital experiences." />
        </p>

        <a
          href="#portfolio"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-medium
                     hover:bg-gray-900 transition duration-300"
        >
          View My Work
        </a>
      </div>

    </section>
  );
}
