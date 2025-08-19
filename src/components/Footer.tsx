import React from "react";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-900 via-pink-800 to-pink-900 py-12 flex flex-col items-center">
      {/* Logo / Tagline */}
      <div className="flex flex-col items-center mb-10 text-center">
        <h3 className="text-white text-3xl font-Inter font-extrabold tracking-wide">
          Oh My Cake
        </h3>
        <p className="text-white/80 font-light mt-2 text-lg">
          Where Every Slice is a Celebration 🎂
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start md:items-center mb-10 px-6 gap-16">
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xl font-Roboto font-bold mb-4">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-3">
            {["Home", "Cakes", "About", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-white/90 hover:text-pink-300 transition-colors duration-300 relative group"
              >
                {link}
                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white text-xl font-Roboto font-bold mb-4">
            Contacts
          </h3>
          <div className="flex flex-col space-y-3">
            <a
              href="mailto:yennirichelle@gmail.com"
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-100 to-white text-pink-900 px-5 py-2 rounded-full shadow hover:shadow-lg transition duration-300"
            >
              <SiGmail className="text-xl" />
              <span>Email Us</span>
            </a>
            <a
              href="https://wa.me/6287775028033?text=Halo%2C%20saya%20mau%20membuat%20pesanan%20kue..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:shadow-lg transition duration-300"
            >
              <SiWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-t-2 border-dashed border-pink-400/50 mb-6" />

      {/* Bottom */}
      <p className="text-center text-white/80 text-sm">
        &copy; {new Date().getFullYear()} Oh My Cake. All rights reserved. 💕🎂
      </p>
    </footer>
  );
};
