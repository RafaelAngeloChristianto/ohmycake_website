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
    <div className="relative flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[550px] md:h-[650px] w-full">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          src={poster}
          alt="Poster"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="absolute top-0 left-0 w-full z-20">
          <NavBar />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide"
          >
            Welcome to Oh My Cake
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-lg sm:max-w-2xl text-gray-100 leading-relaxed"
          >
            Crafting{" "}
            <span className="text-[#FF00FF] font-semibold">
              delicious memories
            </span>{" "}
            with every slice ✨{" "}
          </motion.p>
        </div>
      </div>

      {/* Previous Cakes Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-[42px] text-center mb-10 sm:mb-14 font-Nunito font-bold text-[#FF00FF]"
        >
          Previous Cakes
        </motion.h2>

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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-[42px] text-center mb-10 sm:mb-14 font-Nunito font-bold text-[#FF00FF]"
        >
          Quick Videos
        </motion.h2>

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
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {[video1, video2, video3, video4, video5].map((vid, idx) => (
            <motion.video
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              src={vid}
              controls
              muted
              playsInline
              className="w-[70vw] sm:w-[300px] flex-shrink-0 rounded-2xl shadow-lg snap-center hover:scale-105 transition-transform duration-300"
            />
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.h1
        ref={faqRef}
        initial={{ opacity: 0, y: 30 }}
        animate={faqVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="font-nunito text-center mt-[60px] sm:mt-[80px] text-2xl sm:text-[38px] font-bold text-[#FF00FF]"
      >
        Frequently Asked Questions
      </motion.h1>

      <section className="px-4 sm:px-6 max-w-6xl mx-auto mt-8 sm:mt-10 mb-20 sm:mb-28 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={faqVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
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

      <Footer />
    </div>
  );
};

export default HomeScreen;
