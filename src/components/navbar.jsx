export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
      <div className="
        flex items-center gap-16
        px-10 py-4
        border border-white/20
        rounded-full
        bg-black/30 backdrop-blur-md
        text-gray-300
      ">
        <img src="/src/assets/xio.jpg" alt="Xionsqqq logo" className="h-6 w-auto" />
        <ul className="flex gap-12 text-sm">
          <li className="hover:text-white cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-white cursor-pointer transition">
            About Me
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Portfolio
          </li>
          <li className="hover:text-white cursor-pointer transition">
            Contact Me
          </li>
        </ul>
      </div>
    </nav>
  );
}
