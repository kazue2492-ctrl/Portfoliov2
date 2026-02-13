export default function VisualsSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden px-6 md:px-10 py-20 flex flex-col justify-center"
    >
      {/* grain background */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/noise.png')] opacity-15" />

      {/* Title */}
      <h1 className="relative z-10 text-[10vw] md:text-[7vw] leading-[0.95] tracking-tight uppercase glow-text animate-fade-in-up">
        About me?
      </h1>

      {/* Content Grid */}
      <div className="relative z-10 mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Image */}
        <div
          className="col-span-1 lg:col-span-7 relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative overflow-hidden group">
            <img
              src="/img/ll.jpg"
              alt="About Me"
              className="w-full h-[300px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />

            {/* Reflection strips */}
            <div className="absolute top-0 right-[-20px] h-full w-[10px] bg-white/10 blur-sm" />
            <div className="absolute top-0 right-[-40px] h-full w-[5px] bg-white/5 blur-sm" />
          </div>
        </div>

        {/* Right Side: Text Items */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-10 md:gap-16">
          
          {/* Item 01 */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="text-red-500 font-mono text-lg">01</span>
            <div className="h-[1px] w-10 bg-red-500 my-2" />
            <p className="max-w-xs leading-relaxed text-zinc-300 text-sm md:text-base uppercase tracking-widest">
              Hi there, my name is{" "}
              <span className="text-red-500 font-bold">Naransuld</span>. I am 18 years old.
            </p>
          </div>

          {/* Item 02 */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="text-red-500 font-mono text-lg">02</span>
            <div className="h-[1px] w-10 bg-red-500 my-2" />
            <p className="max-w-xs leading-relaxed text-zinc-300 text-sm md:text-base uppercase tracking-widest">
              I am a frontend developer passionate about creating visually stunning and interactive web experiences.
            </p>
          </div>

          {/* Item 03 */}
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <span className="text-red-500 font-mono text-lg">03</span>
            <div className="h-[1px] w-10 bg-red-500 my-2" />
            <p className="max-w-xs leading-relaxed text-zinc-300 text-sm md:text-base uppercase tracking-widest">
              I specialize in React and Tailwind CSS, always eager to learn new technologies and continuously improve my skills.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
