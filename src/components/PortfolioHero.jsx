import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const images = [
    '/img/q.png',
    '/img/w.png',
    '/img/e.png',
    '/img/r.png'
];

const PortfolioHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="portfolio" className="relative min-h-screen bg-black text-white overflow-hidden font-sans flex items-center pt-20">
            
            {/* Арын фонны гэрэлтэлт */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-zinc-900/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[5%] right-[-5%] w-[30rem] h-[30rem] bg-zinc-800/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* ЗҮҮН ТАЛ: Текстүүд буцаж ирлээ */}
                    <div className="lg:col-span-5 space-y-8 animate-fade-in-up">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                            My <br />
                            <span className="text-zinc-500">Portfolio</span>
                        </h1>
                        <p className="max-w-sm text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                            Frontend developer creating modern, interactive, and visually powerful web experiences with React and Tailwind CSS.
                        </p>
                        <div className="inline-block">
                            <button className="flex items-center gap-4 px-8 py-4 border border-zinc-800 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white group">
                                ( Visit Site <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" /> )
                            </button>
                        </div>
                    </div>

                    {/* БАРУУН ТАЛ: Зураг солигдох хэсэг */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full max-w-2xl aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                            
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                                        index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                                    style={{ backgroundImage: `url(${img})` }}
                                />
                            ))}

                            {/* Зураг дээрх эффектүүд */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-6 left-8 z-20">
                                <h3 className="text-xl md:text-2xl font-serif italic text-white/90">
                                    Project <span className="font-sans not-italic font-bold tracking-tighter ml-1 text-lg uppercase">Visuals</span>
                                </h3>
                            </div>

                            {/* Индикатор (Цэгүүд) */}
                            <div className="absolute top-6 right-8 flex gap-2 z-20">
                                {images.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-1 transition-all duration-500 rounded-full ${
                                            index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;