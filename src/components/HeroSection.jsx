


import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../img/IMG-20241009-WA0003.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-4 sm:px-6 md:px-8">
            <motion.p
              className="text-cyan-500 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello Everyone!
            </motion.p>

            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm <span className="text-cyan-500">Daxshana Kirushnavelu </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-sm sm:text-base md:text-lg max-w-full md:max-w-[600px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A passionate full stack developer dedicated to creating seamless web applications and enhancing user experiences. Let's build something amazing together!
            </motion.p>

              
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center items-center">
            <motion.img
              src={image1}
              alt="Hero"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] rounded-lg shadow-2xl relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Animated decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              className="absolute top-0 right-10 lg:right-20 text-cyan-500"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-0 left-10 lg:left-20"
            >
              <div className="h-4 w-4 rounded-full bg-cyan-500" />
            </motion.div>
          </div>
        </div>
      </div>

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
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
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
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
