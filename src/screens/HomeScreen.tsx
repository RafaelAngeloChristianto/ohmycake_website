import { useRef, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import poster from "../assets/poster.png";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import video_prev_cakes from "../assets/VID-20250819-WA0002.mp4";

import video1 from "../assets/prev_vid1.mp4";
import video2 from "../assets/prev_vid2.mp4";
import video3 from "../assets/prev_vid3.mp4";
import video4 from "../assets/prev_vid4.mp4";
import video5 from "../assets/prev_vid5.mp4";

export const HomeScreen = () => {
  const faqRef = useRef<HTMLHeadingElement>(null);
  const [faqVisible, setFaqVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) setFaqVisible(true);
      },
      { threshold: 0.2 }
    );

    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  const faqData = [
    {
      question: "How can you contact us?",
      answer:
        "Click the Contact Us button in the Footer or NavBar to quickly send us an email or WhatsApp message.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Sorry, we don’t allow returns or exchanges for any purchases.",
    },
  ];

  return (
    <div className="relative flex flex-col bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[550px] md:h-[700px] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-contain bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 brightness-90"
          src={poster}
          alt="Poster"
        />

        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/40 to-pink-500/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-8 h-8 bg-white/20 rounded-full blur-sm"
          />
          <motion.div 
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-20 w-6 h-6 bg-pink-300/30 rounded-full blur-sm"
          />
          <motion.div 
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-40 left-1/4 w-10 h-10 bg-purple-200/20 rounded-full blur-sm"
          />
        </div>

        {/* Smooth bottom gradient to white (mobile only) */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent via-pink-50/80 to-white pointer-events-none z-10 sm:hidden"></div>

        <div className="absolute top-0 left-0 w-full z-20">
          <NavBar />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-2xl tracking-wide bg-gradient-to-r from-white via-pink-100 to-purple-100 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(236,72,153,0.5)", 
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Welcome to Oh My Cake
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl max-w-lg sm:max-w-3xl text-white/95 leading-relaxed font-medium"
          >
            Crafting{" "}
            <motion.span 
              className="text-pink-300 font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              delicious memories
            </motion.span>{" "}
            with every slice ✨
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8"
          >
            <motion.button
              className="btn-primary text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('cakes-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Cakes 🎂
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Previous Cakes Section */}
      <section id="cakes-section" className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-Nunito font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Previous Cakes
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center text-center md:text-left"
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-Roboto text-gray-700">
              Here’s a look at cakes we’ve baked at{" "}
              <span className="font-semibold text-[#FF00FF]">Oh My Cake</span> —
              capturing the joy of every celebration with beautiful designs and
              unforgettable flavors.
            </p>

            <Link to="/cakes">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 sm:mt-8 bg-[#FF00FF] hover:bg-[#e000e0] text-white font-semibold px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl shadow-lg transition duration-300 mx-auto md:mx-0"
              >
                Browse Collection
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <video
              src={video_prev_cakes}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-xl object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Videos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-Nunito font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Quick Videos
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-3 sm:space-x-6 px-2 sm:px-0 pb-4"
        >
          {[video1, video2, video3, video4, video5].map((vid, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="flex-shrink-0 snap-center"
            >
              <motion.video
                src={vid}
                controls
                muted
                playsInline
                className="w-[85vw] sm:w-[280px] md:w-[320px] rounded-3xl shadow-2xl object-cover border-4 border-white/30"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 30 }}
          animate={faqVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-Nunito font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={faqVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"
          />
        </motion.div>

      <section className="px-4 sm:px-6 max-w-6xl mx-auto mt-8 sm:mt-10 mb-20 sm:mb-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={faqVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card-hover bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-pink-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-base sm:text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <motion.svg
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-4 sm:px-6 text-gray-600 text-sm sm:text-base ${
                  activeIndex === index ? "max-h-40 py-2 sm:py-3" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            className="w-[260px] sm:w-[320px] md:w-[400px] rounded-xl sm:rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            src={poster}
            alt="Cake example"
          />
        </motion.div>
      </section>
      </section>

      <Footer />
    </div>
  );
};

export default HomeScreen;
