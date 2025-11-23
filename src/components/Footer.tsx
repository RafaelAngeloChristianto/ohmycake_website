import React from "react";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-pink-900 via-pink-800 to-purple-900 py-16 flex flex-col items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-200 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Logo / Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12 text-center relative z-10"
      >
        <motion.h3 
          className="text-white text-4xl font-Inter font-extrabold tracking-wide mb-2 gradient-text"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Oh My Cake
        </motion.h3>
        <motion.p 
          className="text-white/90 font-light text-xl animate-shimmer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Where Every Slice is a Celebration 🎂
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start md:items-center mb-12 px-6 gap-20 relative z-10">
        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-white text-2xl font-Roboto font-bold mb-6 relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </h3>
          <nav className="flex flex-col space-y-4">
            {["Home", "Cakes", "About", "Contact"].map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/${link.toLowerCase()}`}
                  className="text-white/90 hover:text-pink-300 transition-all duration-300 relative group text-lg font-medium"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Contact */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="text-white text-2xl font-Roboto font-bold mb-6 relative">
            Get In Touch
            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </h3>
          <div className="flex flex-col space-y-4">
            <motion.a
              href="mailto:yennirichelle@gmail.com"
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-100 to-white text-pink-900 px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGmail className="text-2xl group-hover:animate-bounce" />
              <span className="font-semibold">Email Us</span>
            </motion.a>
            <motion.a
              href="https://wa.me/6287775028033?text=Halo%2C%20saya%20mau%20membuat%20pesanan%20kue..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiWhatsapp className="text-2xl group-hover:animate-bounce" />
              <span className="font-semibold">WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.hr 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl border-t-2 border-dashed border-pink-400/50 mb-8 relative z-10" 
      />

      {/* Bottom */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-white/90 text-lg font-medium relative z-10"
      >
        &copy; {new Date().getFullYear()} Oh My Cake. All rights reserved. 💕🎂
      </motion.p>
    </footer>
  );
};
