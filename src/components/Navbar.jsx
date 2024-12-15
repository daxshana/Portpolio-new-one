import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-cyan-500"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-bold text-white">Daxshana</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-white hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white hover:text-cyan-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1121]">
          <a
            href="#home"
            className="block text-white hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-white hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-white hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-cyan-500 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
