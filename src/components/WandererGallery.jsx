import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryData = [
  { id: 1, src: "/img/manga.jpg", title: "Manga", desc: "my all-time favorite is AOT." },
  { id: 2, src: "/img/uzeh.jpg", title: "Books", desc: "I'm a big fan of Ulziitugs's books—I've read four of them so far." },
  { id: 3, src: "/img/p.png", title: "Songs", desc: "one of my favorites is “Хүн” by MXRNNGSTAR ft. Celine Dessberg.." },
  { id: 4, src: "/img/manga.jpg", title: "Manga", desc: "my all-time favorite is AOT." },
  { id: 5, src: "/img/uzeh.jpg", title: "Books", desc: "I'm a big fan of Ulziitugs's books—I've read four of them so far." },
  { id: 6, src: "/img/p.png", title: "Songs", desc: "one of my favorites is “Хүн” by MXRNNGSTAR ft. Celine Dessberg.." },
  { id: 7, src: "/img/manga.jpg", title: "Manga", desc: "my all-time favorite is AOT." },
  { id: 8, src: "/img/uzeh.jpg", title: "Books", desc: "I'm a big fan of Ulziitugs's books—I've read four of them so far." },
  { id: 9, src: "/img/p.png", title: "Songs", desc: "one of my favorites is “Хүн” by MXRNNGSTAR ft. Celine Dessberg." },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
  }),
  center: {
    zIndex: 20,
    x: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 80, damping: 20 },
      opacity: { duration: 0.4 }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    filter: "blur(10px)",
    transition: { duration: 0.4 }
  }),
};

export default function VirtualArchedGallery() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const imageIndex = (index % galleryData.length + galleryData.length) % galleryData.length;

  const paginate = (newDirection) => {
    setIndex([index + newDirection, newDirection]);
  };

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center overflow-hidden">
      
      <div className="relative w-full h-[600px] flex items-center justify-center">
        
        {/* --- ТОГТМОЛ АР ТАЛ (Static Background Cards) --- */}
        
        {/* Зүүн талын карт */}
        <div className="absolute transform -translate-x-[350px] translate-y-[40px] rotate-[-15deg] scale-75 z-0 transition-all duration-700 ease-in-out">
          <div className="relative w-[300px] h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Хар overlay нэмсэн */}
            <div className="absolute inset-0 bg-black/60 z-10" /> 
            <img 
              src={galleryData[(imageIndex - 1 + galleryData.length) % galleryData.length].src} 
              className="w-full h-full object-cover grayscale-[40%] brightness-50" 
            />
          </div>
        </div>

        {/* Баруун талын карт */}
        <div className="absolute transform translate-x-[350px] translate-y-[40px] rotate-[15deg] scale-75 z-0 transition-all duration-700 ease-in-out">
          <div className="relative w-[300px] h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Хар overlay нэмсэн */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
              src={galleryData[(imageIndex + 1) % galleryData.length].src} 
              className="w-full h-full object-cover grayscale-[40%] brightness-50" 
            />
          </div>
        </div>

        {/* --- ХӨДӨЛГӨӨНТ ТӨВ ХЭСЭГ --- */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (Math.abs(offset.x) > 50) paginate(offset.x > 0 ? -1 : 1);
          }}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute flex flex-col items-center"
            >
              {/* Төв Зураг */}
              <div className="w-[320px] h-[420px] shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-[3rem] overflow-hidden border border-white/10 bg-gray-900">
                <img src={galleryData[imageIndex].src} className="w-full h-full object-cover" />
              </div>

              {/* Текст */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 text-center"
              >
                <h2 className="text-white text-4xl font-bold tracking-tighter italic uppercase drop-shadow-md">
                  {galleryData[imageIndex].title}
                </h2>
                <p className="text-gray-400 text-sm mt-3 max-w-[280px] leading-relaxed">
                  {galleryData[imageIndex].desc}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex gap-2">
        {galleryData.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === imageIndex ? "w-10 bg-white" : "w-2 bg-white/10"}`} />
        ))}
      </div>
    </div>
  );
}