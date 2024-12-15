import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';
import image3 from '../img/IMG-20241009-WA0003.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white flex items-center justify-center overflow-hidden px-8"
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-cyan-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Content */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side - Image */}
        <motion.div
          className="flex justify-center relative w-full h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="relative w-full h-full">
            {/* Background Shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transform -rotate-6 rounded-2xl"></div>

            {/* Main Image */}
            <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
              <img
                src={image3}
                alt="Daxshana working on coding projects"
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />

              {/* Border Overlay */}
              <div className="absolute inset-0 border-8 border-white/20 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Badge */}
            <motion.div
              className="absolute top-4 right-4 bg-cyan-500 rounded-full p-3 z-30"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle className="h-8 w-8 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <h3 className="text-xl md:text-3xl text-cyan-400 font-semibold mb-6">
            A Passionate Developer Who Loves to Code
          </h3>
          <p className="mb-8 text-lg leading-relaxed">
            Hi! I'm <strong>Daxshana Kirushnavelu</strong>, a passionate coder with a deep interest in full-stack development.
            I started my journey at UKi Coding School and now explore web technologies, crafting solutions
            with React, MongoDB, and Express. From Sri Lanka, I'm on a mission to create meaningful, user-friendly software.
          </p>

          {/* Information */}
          <div className="bg-gradient-to-br from-cyan-800/20 to-blue-900/10 border border-cyan-500/50 rounded-xl p-8 mb-8 shadow-xl w-full max-w-xl mx-auto text-left">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start md:items-center">
                <span className="font-bold w-32 text-cyan-400">Name:</span>
                <span className="text-lg">Daxshana Kirushnavelu</span>
              </li>
              <li className="flex items-start md:items-center">
                <span className="font-bold w-32 text-cyan-400">Address:</span>
                <span className="text-lg">Jaffna, Sri Lanka</span>
              </li>
              <li className="flex items-start md:items-center">
                <span className="font-bold w-32 text-cyan-400">Education:</span>
                <span className="text-lg">Full Stack Development</span>
              </li>
              <li className="flex items-start md:items-center">
                <span className="font-bold w-32 text-cyan-400">Freelance:</span>
                <span className="text-lg">Available</span>
              </li>
            </ul>
          </div>

          {/* Download CV Button */}
          <motion.a
            href="/cv/CV-Daxshana-Kirushnavelu.pdf"  // Update to a relative path from the public folder
            download
            className="flex items-center space-x-3 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-lg rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6" />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
