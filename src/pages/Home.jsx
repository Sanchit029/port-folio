// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// src/pages/Home.jsx
function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 py-16 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Hi, I'm
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {" Sanchit Bishnoi"}
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Computer Science student at IIIT Manipur, specializing in frontend
          development and machine learning applications.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
