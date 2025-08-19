import React from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* NavBar */}
      <NavBar />

      {/* Logo */}
      <motion.div
        className="flex justify-center mt-24 md:mt-32"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="w-[200px] object-contain"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-2 text-pink-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Here are 2 ways to contact us for orders and inquiries
          </motion.h2>

          <motion.p
            className="text-pink-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Please choose one of the options below
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.a
              aria-label="Email us"
              href="mailto:yennirichelle@gmail.com"
              className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-200 via-pink-100 to-white text-pink-900 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGmail className="text-2xl" />
              <span>Email Us</span>
            </motion.a>

            <motion.a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/6287775028033?text=Halo%2C%20saya%20mau%20membuat%20pesanan%20kue..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-green-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiWhatsapp className="text-2xl" />
              <span>WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
