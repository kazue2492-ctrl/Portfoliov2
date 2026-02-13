import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between text-white">

        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide">
          ETHEREAL
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-14 text-sm uppercase tracking-widest text-white/80">
          <li className="hover:text-red-500 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-500 transition">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-red-500 transition">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-red-500 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:flex items-center gap-3 text-sm uppercase tracking-widest hover:text-red-500 transition">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <a href="#contact">Get in touch</a>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white px-6 py-6 space-y-6 uppercase tracking-widest text-sm">
          <a href="#home" className="block">Home</a>
          <a href="#portfolio" className="block">Portfolio</a>
          <a href="#about" className="block">About</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
