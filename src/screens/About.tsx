import React from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mt-[50px]">
      {/* NavBar */}
      <NavBar />

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[40px] text-center mb-12 font-Nunito font-bold text-[#FF00FF]"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={logo} // replace with your portrait photo if you have one
              alt="Baker"
              className="w-[350px] h-[350px] object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hi, I’m Yenni 👩‍🍳
            </h3>
            <p className="text-lg leading-relaxed font-Roboto text-gray-700">
              Baking has always been more than just a hobby for me — it’s a way
              to bring joy to people’s lives. What started as small cakes for
              family and friends quickly grew into{" "}
              <span className="font-semibold text-[#FF00FF]">Oh My Cake</span>,
              where I get to share my passion with everyone.
            </p>
            <p className="mt-4 text-lg font-Roboto text-gray-600">
              Every cake I make is crafted with love, care, and attention to
              detail — because I believe sweet memories deserve to be as
              beautiful as they are delicious. 💕
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
