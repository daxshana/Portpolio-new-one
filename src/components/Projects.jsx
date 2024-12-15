import React from "react";
import { motion } from "framer-motion";
import image2 from "../img/Screenshot from 2024-12-15 20-13-12.png";

const Projects = () => {
  const projects = [
    {
      title: "Food delivery Web App",
      description:
      "Bhakshanam is a food delivery app that connects homemakers with customers looking for fresh, homemade food.",
      image: image2, // Replace with your project image
      link: "https://bhakshanam-n5ahzdade-daxd0524-gmailcoms-projects.vercel.app", // Replace with your project link
    },
    
    // {
    //   title: "Admin Panel Dashboard",
    //   description:
    //     "Developed an admin panel with user management, product management, and subscription handling.",
    //   image: "https://via.placeholder.com/400x300", // Replace with your project image
    //   link: "#", // Replace with your project link
    // },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] text-white py-16 overflow-hidden"
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

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-32 md:pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-cyan-500 text-xl mb-2">My Projects</h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">What I've Built</h1>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center mt-8 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1C2A4A] rounded-xl shadow-lg overflow-hidden transform transition-transform hover:shadow-2xl hover:shadow-cyan-500/50 max-w-sm"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
    </section>
  );
};

export default Projects;
