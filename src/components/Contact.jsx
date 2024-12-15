import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_feu4eic';
    const templateId = 'template_ibemgox';
    const publicKey = 'IVJKCR1xxKLEeg7m5';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log('Message Sent:', result.text);
          setMessageStatus('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error.text);
          setMessageStatus('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #1c2a4a, #0b1121, #2c3e50)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
    >
      {/* Animated background elements */}
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
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-cyan-500 text-xl mb-2">Contact</h2>
          <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl">I Want to Hear from You</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p className="text-gray-300">Jaffna, Sri Lanka</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-300">daxd0524@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-6">
              <div className="bg-cyan-500 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-300">+94 754389795</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-md bg-gray-700/50 border text-white placeholder-gray-400"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700/50 border text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700/50 border text-white placeholder-gray-400"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md"
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
            {messageStatus && (
              <p className="mt-4 text-center text-cyan-400">{messageStatus}</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
