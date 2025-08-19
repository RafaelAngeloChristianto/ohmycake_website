import React, { useRef, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import poster from "../assets/poster.png";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import video1 from "../assets/VID-20250819-WA0001.mp4";
import video2 from "../assets/VID-20250819-WA0002.mp4";
import video3 from "../assets/VID-20250819-WA0003.mp4";
import video4 from "../assets/VID-20250819-WA0004.mp4";
import video5 from "../assets/VID-20250819-WA0005.mp4";

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
        if (entry.isIntersecting) {
          setFaqVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

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
      question: "Do you offer delivery services?",
      answer:
        "Yes! We deliver across selected locations. You can check availability during checkout or contact our support team.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Sorry, we don’t allow returns or exchanges for any purchases.",
    },
  ];

  return (
    <div className="relative flex flex-col bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <img
          className="w-full h-[650px] object-cover object-center brightness-75"
          src={poster}
          alt="Poster"
        />
        <div className="absolute top-0 left-0 w-full">
          <NavBar />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg tracking-wide"
          >
            Welcome to Oh My Cake
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl max-w-2xl text-gray-100 leading-relaxed"
          >
            Crafting{" "}
            <span className="text-[#FF00FF] font-semibold">
              delicious memories
            </span>{" "}
            with every slice ✨
          </motion.p>
        </div>
      </div>

      {/* Previous Cakes Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[42px] text-center mb-14 font-Nunito font-bold text-[#FF00FF]"
        >
          Previous Cakes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl leading-relaxed font-Roboto text-gray-700">
              Here’s a look at cakes we’ve baked at{" "}
              <span className="font-semibold text-[#FF00FF]">Oh My Cake</span> —
              capturing the joy of every celebration with beautiful designs and
              unforgettable flavors.
            </p>

            <Link to="/cakes">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-[#FF00FF] hover:bg-[#e000e0] text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg transition duration-300"
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
              src={video2}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-lg rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Videos */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[42px] text-center mb-14 font-Nunito font-bold text-[#FF00FF]"
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
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {[video1, video3, video4, video5].map((vid, idx) => (
            <motion.video
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              src={vid}
              controls
              className="w-[300px] flex-shrink-0 rounded-2xl shadow-lg snap-center hover:scale-105 transition-transform duration-300"
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
        className="font-nunito text-center mt-[80px] text-[38px] font-bold text-[#FF00FF]"
      >
        Frequently Asked Questions
      </motion.h1>

      <section className="px-6 max-w-6xl mx-auto mt-10 mb-28 flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
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
                className="w-full px-6 py-4 flex justify-between items-center text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <motion.svg
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-6 text-gray-600 ${
                  activeIndex === index ? "max-h-40 py-3" : "max-h-0"
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
          className="flex-1 flex justify-center items-start"
        >
          <img
            className="w-[400px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
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
