import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* NavBar */}
      <NavBar />

      {/* Logo */}
      <motion.div
        className="flex justify-center mt-28 md:mt-36"
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[250px] object-contain drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <motion.div
          className="max-w-lg w-full card-hover bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-10 text-center border border-pink-100"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-700 font-medium">
              Ready to order your perfect cake? Choose your preferred way to contact us!
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.a
              aria-label="Email us"
              href="mailto:yennirichelle@gmail.com"
              className="flex items-center justify-center space-x-4 bg-gradient-to-r from-pink-200 via-pink-100 to-white text-pink-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGmail className="text-3xl group-hover:animate-bounce" />
              <span className="text-lg">Email Us</span>
            </motion.a>

            <motion.a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/6287775028033?text=Halo%2C%20saya%20mau%20membuat%20pesanan%20kue..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiWhatsapp className="text-3xl group-hover:animate-bounce" />
              <span className="text-lg">WhatsApp</span>
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
