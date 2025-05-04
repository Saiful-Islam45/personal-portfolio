'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="#"
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            title="Saiful Islam - Portfolio Home"
            onClick={() => isOpen && setIsOpen(false)} // Close menu if logo clicked while open
          >
            <Image
              className="block rounded-sm"
              src={"/logo.png"}
              alt='Saiful Islam Logo'
              width={150}
              height={150}
              priority
            />
          </motion.a>

          {/* Desktop Navigation & Actions */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">About</a>
            <a href="#projects" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors text-sm font-medium">Contact</a>

            <div className="h-5 w-px bg-white/20 mx-2"></div>

            <motion.a
              href="https://github.com/Saiful-Islam45"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              title="GitHub"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-saiful-islam-63s/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              title="LinkedIn"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://medium.com/@saiful.islam.ice.45"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              title="Medium"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaMedium className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/Resume-of-Saiful-Islam.pdf"
              download="Saiful_Islam_Resume.pdf"
              className="flex items-center bg-primary hover:bg-primary/80 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              title="Download Resume"
            >
              <FiDownload className="mr-1.5 h-4 w-4" />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 shadow-lg" // Added positioning and background
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</a>
                <a href="#projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Skills</a>
                <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Contact</a>
                <div className="pt-3 pb-2">
                  <a
                    href="/Saiful_Islam_Resume.pdf"
                    download="Saiful_Islam_Resume.pdf"
                    className="flex items-center justify-center w-full bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded text-base font-medium transition-colors"
                    title="Download Resume"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiDownload className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </div>
                <div className="flex justify-center space-x-6 pt-2">
                  <a href="https://github.com/Saiful-Islam45" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-primary transition-colors"><FaGithub className="w-6 h-6" /></a>
                  <a href="https://www.linkedin.com/in/md-saiful-islam-63s/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin className="w-6 h-6" /></a>
                  <a href="https://medium.com/@saiful.islam.ice.45" target="_blank" rel="noopener noreferrer" title="Medium" className="text-gray-400 hover:text-primary transition-colors"><FaMedium className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
