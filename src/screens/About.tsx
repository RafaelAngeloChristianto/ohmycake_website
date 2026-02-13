import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* NavBar */}
      <NavBar />

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl sm:text-6xl md:text-7xl font-Nunito font-bold gradient-text mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

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
              src="/logo.png"
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

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold gradient-text mb-4">Our Story</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 text-center"
          >
            <div className="text-4xl mb-4">🎂</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Fresh Ingredients
            </h4>
            <p className="text-gray-600">
              We use only the finest, freshest ingredients to ensure every cake
              tastes amazing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 text-center"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Custom Designs
            </h4>
            <p className="text-gray-600">
              Every cake is uniquely designed to match your special occasion and
              personal style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card-hover bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-100 text-center"
          >
            <div className="text-4xl mb-4">💝</div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">
              Made with Love
            </h4>
            <p className="text-gray-600">
              Each cake is crafted with passion and care to make your
              celebrations unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-hover bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-pink-100"
        >
          <h3 className="text-3xl font-bold gradient-text text-center mb-8">
            Why Choose Oh My Cake?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">✨</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Quality Guaranteed
                </h4>
                <p className="text-gray-600">
                  Premium ingredients and expert craftsmanship in every cake.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🚚</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Timely Delivery
                </h4>
                <p className="text-gray-600">
                  Your cake will be ready exactly when you need it.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💬</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Personal Service
                </h4>
                <p className="text-gray-600">
                  Direct communication to bring your vision to life.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎉</span>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Special Occasions
                </h4>
                <p className="text-gray-600">
                  Perfect for birthdays, weddings, and all celebrations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Website Managed By - Bottom Right */}
      <div className="flex justify-end pr-6 pb-4">
        <div className="text-right">
          <p className="text-xs text-gray-500">Website managed by</p>
          <a href="https://rafaelangelo.site/" target="_blank">
            <img
              src="/caligraphy.png"
              alt="Rafael Angelo"
              className="w-24 opacity-80"
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
