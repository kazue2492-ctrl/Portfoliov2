export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between text-white">
        
        <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
          <span className="px-2 py-1">ETHEREAL</span>
        </div>

        <ul className="flex gap-14 text-sm uppercase tracking-widest text-white/80">
          <li className="cursor-pointer hover:text-red-500 transition-all">
            <a href="#home">Home</a>
          </li>
          {/* Portfolio холбоос */}
          <li className="cursor-pointer hover:text-red-500 transition-all">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="cursor-pointer hover:text-red-500 transition-all">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-red-500 transition-all">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="flex items-center gap-3 text-sm uppercase tracking-widest cursor-pointer hover:text-red-500 transition-all">
          <span className="w-2 h-2 bg-red-500 rounded-full" />
          <a href="#contact">Get in touch</a>
        </button>

      </div>
    </nav>
  );
}