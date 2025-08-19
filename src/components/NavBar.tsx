import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Cakes", path: "/cakes" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Desktop Links - centered */}
        <div className="hidden md:flex mx-auto space-x-8 bg-pink-600/80 backdrop-blur-md px-8 py-3 rounded-2xl shadow-lg">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="relative font-Inter text-white text-lg font-semibold px-3 py-1 rounded-md transition duration-300 hover:bg-white/20"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-600/95 backdrop-blur-md shadow-lg rounded-b-xl animate-slide-down">
          <div className="flex flex-col items-center space-y-6 py-6">
            {links.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                className="font-Inter text-white text-lg font-semibold px-3 py-2 rounded-md hover:bg-white/20 transition duration-300"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
