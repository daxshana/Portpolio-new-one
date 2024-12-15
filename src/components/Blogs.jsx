import React from 'react';
import { motion } from 'framer-motion';
import { VideoIcon } from 'lucide-react';
import image7 from '../../src/components/assets/images/data-frames-in-python-banner_cgzjxy.jpeg';
import image8 from '../img/IMG-20241009-WA0003.jpg';
import image9 from '../components/assets/images/1_yDcqWU6UMaN5MV7XNwJpOQ.png';
import image10 from '../components/assets/images/1_meRlZCH8FCY_kuwzRZYtZg.webp';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Data Frames: A Quick Guide",
      image: image7,
      categories: ["Technology"],
      readTime: "2 mins read",
      author: {
        name: "Daxshana",
        avatar: image8,
        date: "12 Sep 2024",
      },
      hasVideo: true,
      link: "https://medium.com/@daxd0524/dataframe-489f6babc57d",
    },
    {
      id: 2,
      title: "Introduction to Data Visualization in Python",
      image: image9,
      categories: ["Technology"],
      readTime: "3 mins read",
      author: {
        name: "Daxshana",
        avatar: image8,
        date: "15 Sep 2024",
      },
      hasVideo: true,
      link: "https://medium.com/@daxd0524/data-visualization-b5b3c5581f6a",
    },
    {
      id: 3,
      title:
        "Revolutionizing Industries with Passive IoT: Key Insights from Dr. Sabesan Sithamparanathan",
      image: image10,
      categories: ["Tech", "Business"],
      readTime: "1 mins read",
      author: {
        name: "Daxshana",
        avatar: image8,
        date: "04 Sep 2024",
      },
      hasVideo: false,
      link: "https://medium.com/@daxd0524/an-experience-with-dr-sabesan-fef77dae9d3f",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0B1121] via-[#1C2A4A] to-[#2C3E50] py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-cyan-500 text-xl mb-2">Our Blog</h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Latest Articles
          </h1>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="bg-[#0B1121] rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={`Cover for ${blog.title}`}
                  className="w-full h-64 object-cover"
                />
                {blog.hasVideo && (
                  <motion.div
                    className="absolute top-4 right-4 bg-black/50 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <VideoIcon className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  {blog.categories.map((category, i) => (
                    <motion.span
                      key={`${category}-${i}`}
                      className="text-cyan-500 text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      #{category}
                    </motion.span>
                  ))}
                  <span className="text-gray-400 text-sm ml-auto">
                    {blog.readTime}
                  </span>
                </div>

                <a href={blog.link} className="block">
                  <h3 className="text-xl font-semibold text-white mb-4 hover:text-cyan-500 transition-colors">
                    {blog.title}
                  </h3>
                </a>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={blog.author.avatar}
                      alt={`Avatar of ${blog.author.name}`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {blog.author.name}
                      </p>
                      <p className="text-gray-400 text-sm">{blog.author.date}</p>
                    </div>
                  </div>
                  <a href={blog.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      Read more
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
