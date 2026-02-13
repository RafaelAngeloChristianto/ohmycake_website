import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState, useEffect } from "react";

const modules = import.meta.glob(
  "../assets/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true },
);
const cakeImages = Object.values(modules).map((module: any) => module.default);

// Simplified image data with just URLs
const cakeData = cakeImages.map((img, index) => ({
  id: index,
  url: img,
}));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Cakes = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll event listener for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Navigation functions
  const goToNext = () => {
    if (selectedImg) {
      const currentIndex = cakeData.findIndex((c) => c.url === selectedImg);
      const nextIndex = (currentIndex + 1) % cakeData.length;
      setSelectedImg(cakeData[nextIndex].url);
    }
  };

  const goToPrevious = () => {
    if (selectedImg) {
      const currentIndex = cakeData.findIndex((c) => c.url === selectedImg);
      const prevIndex = (currentIndex - 1 + cakeData.length) % cakeData.length;
      setSelectedImg(cakeData[prevIndex].url);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImg) {
        if (e.key === "ArrowRight") {
          goToNext();
        } else if (e.key === "ArrowLeft") {
          goToPrevious();
        } else if (e.key === "Escape") {
          setSelectedImg(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg]);

  return (
    <>
      <NavBar />

      {/* Hero Section with Parallax Effect */}
      <motion.section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-purple-900/90 mix-blend-multiply" />
          <motion.div
            className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover bg-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 font-Inter"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our <span className="text-pink-200">Cakes</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-pink-100 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Each cake is a masterpiece, crafted with love and the finest
            ingredients
          </motion.p>
        </div>
      </motion.section>

      <main className="bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Simplified Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-pink-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2">🎂</div>
              <div className="text-2xl font-bold text-gray-800">100+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-pink-100"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2">✨</div>
              <div className="text-2xl font-bold text-gray-800">Custom</div>
              <div className="text-sm text-gray-600">Designs Available</div>
            </motion.div>

            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-pink-100 col-span-2 md:col-span-1"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gray-800">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Gallery Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Cake Grid with Enhanced Cards */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <motion.div
                className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <AnimatePresence>
                {cakeData.map((cake) => (
                  <motion.div
                    key={cake.id}
                    layout
                    variants={itemVariants}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => setSelectedImg(cake.url)}
                    onHoverStart={() => setHoveredId(cake.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    whileHover={{ y: -10 }}
                  >
                    {/* Image Container with Overlay */}
                    <div className="relative h-80 overflow-hidden">
                      <motion.img
                        src={cake.url}
                        alt={`Cake ${cake.id + 1}`}
                        className="w-full h-full object-cover"
                        animate={{ scale: hoveredId === cake.id ? 1.1 : 1 }}
                        transition={{ duration: 0.6 }}
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Quick View Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      >
                        <motion.button
                          className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-xl hover:bg-pink-50 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImg(cake.url);
                          }}
                        >
                          Quick View
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Simple Caption */}
                    <div className="p-4 bg-white text-center">
                      <p className="text-gray-600 text-sm">Click to enlarge</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl z-40 group"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg
              className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="sr-only">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Modal with Left and Right Navigation */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Left Navigation Arrow */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-3 md:p-4 shadow-xl hover:bg-white transition-colors z-10 group"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous image</span>
            </motion.button>

            {/* Right Navigation Arrow */}
            <motion.button
              className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-3 md:p-4 shadow-xl hover:bg-white transition-colors z-10 group"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next image</span>
            </motion.button>

            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.img
                src={selectedImg}
                alt="Selected Cake"
                className="max-h-[85vh] max-w-[85vw] rounded-3xl shadow-2xl border-4 border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Close Button */}
              <div className="absolute top-4 right-4">
                <motion.button
                  className="bg-white/90 backdrop-blur-sm text-gray-800 rounded-full p-3 shadow-xl hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImg(null);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {cakeData.findIndex((c) => c.url === selectedImg) + 1} /{" "}
                {cakeData.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Cakes;
