import React from "react";

const logos = [
  "/img/1.jpeg",
  "/img/2.jpeg",
  "/img/3.jpeg",
  "/img/4.jpeg",
  "/img/5.jpeg",
  "/img/6.jpeg",
  "/img/7.jpeg",
  "/img/8.jpeg",
  "/img/9.jpeg",
  "/img/10.jpeg",
];

export default function LogoLoop() {
  return (
    <div className="overflow-hidden w-full py-20 bg-black">
      <div className="flex w-max gap-24 animate-logoLoopFast">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt=""
            className="h-20 opacity-80 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}
