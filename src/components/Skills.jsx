import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-16 h-16" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 w-16 h-16" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 w-16 h-16" /> },
    {
      name: 'Tailwind',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="currentColor"
          className="w-16 h-16 text-teal-400"
        >
          <path d="M24 4c-8.838 0-14.492 4.68-16.784 10.654C4.924 21.29 6.876 24.472 10.68 24.472c4.386 0 6.075-2.397 7.924-4.388C20.932 17.324 23.512 16 25.84 16c2.84 0 4.52 1.44 6.164 3.032 1.716 1.68 3.32 3.472 6.84 3.472 4.14 0 6.036-2.832 7.512-5.324C46.364 10.748 40.66 4 24 4zm0 16c-8.838 0-14.492 4.68-16.784 10.654C4.924 33.29 6.876 36.472 10.68 36.472c4.386 0 6.075-2.397 7.924-4.388C20.932 29.324 23.512 28 25.84 28c2.84 0 4.52 1.44 6.164 3.032 1.716 1.68 3.32 3.472 6.84 3.472 4.14 0 6.036-2.832 7.512-5.324C46.364 26.748 40.66 20 24 20z" />
        </svg>
      ),
    },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 w-16 h-16" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-400 w-16 h-16" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-12 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      {/* Section Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-cyan-500 after:mt-2 after:mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.1,
            color: "#06b6d4",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-center space-y-3"
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {skill.icon}
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-cyan-500"
        animate={{
          rotate: [0, 360],
          transition: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <svg
          className="h-16 w-16 opacity-50"
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
    </section>
  );
};

export default Skills;
