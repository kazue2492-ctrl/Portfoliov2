export default function HeroCinema() {
  const title = "Is today a good time to start my portfolio?";

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grain / noise */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-10" />

      {/* Title */}
      <h1 className="relative z-10 text-center text-4xl md:text-6xl font-extrabold tracking-tight pt-32 flex flex-wrap justify-center gap-x-3 gap-y-2 px-4">
        {title.split(" ").map((word, i) => (
          <span
            key={i}
            className="inline-block opacity-0 translate-y-10 animate-word"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {word}
          </span>
        ))}
      </h1>

      {/* Infinite image strip */}
      <div className="relative z-10 mt-16 overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 px-10">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[180px] h-[260px] md:w-[220px] md:h-[320px] overflow-hidden rounded-sm
                         transition-transform duration-500 hover:scale-105"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 mt-16 text-center text-sm md:text-base max-w-xl mx-auto leading-relaxed text-white/70 px-6 uppercase tracking-widest">
        We are experts in producing films, tv series,
        and commercials. We create stories that
        captivate audiences around the world.
      </p>
    </section>
  );
}

const images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg"];