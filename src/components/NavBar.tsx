import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Check if current page has light background
  const isLightBg = ['/cakes', '/about', '/contact'].includes(location.pathname);

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
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`hidden md:flex mx-auto space-x-2 px-8 py-3 rounded-2xl shadow-2xl ${
            isLightBg 
              ? 'bg-gray-900 border border-gray-700' 
              : 'glass bg-gradient-to-r from-pink-500/90 via-pink-600/90 to-pink-700/90 border border-white/20'
          }`}
        >
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`relative font-Inter text-white text-lg font-semibold px-4 py-2 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? 'bg-white/30 shadow-lg' 
                    : 'hover:bg-white/20 hover:shadow-md'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{name}</span>
              </Link>
            );
          })}
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="md:hidden ml-auto"
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-white text-2xl p-3 rounded-xl shadow-lg ${
              isLightBg 
                ? 'bg-gray-900 border border-gray-700' 
                : 'glass bg-pink-600/80 border border-white/20'
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? "✖" : "☰"}
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden shadow-2xl rounded-b-2xl mx-4 ${
              isLightBg 
                ? 'bg-gray-900 border border-gray-700' 
                : 'glass bg-gradient-to-b from-pink-600/95 to-pink-700/95 backdrop-blur-md border border-white/20'
            }`}
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {links.map(({ name, path }, index) => {
                const isActive = location.pathname === path;
                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`font-Inter text-white text-lg font-semibold px-6 py-3 rounded-xl transition-all duration-300 block ${
                        isActive 
                          ? 'bg-white/30 shadow-lg' 
                          : 'hover:bg-white/20 hover:shadow-md'
                      }`}
                    >
                      {name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
