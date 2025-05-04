'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Md Saiful Islam</h3>
            <p className="text-gray-400">Full Stack Developer passionate about creating innovative web solutions.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Saiful-Islam45" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/md-saiful-islam-63s/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://medium.com/@saiful.islam.ice.45" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <FaMedium className="w-6 h-6" />
              </a>
              <a href="mailto:saiful.islam.ice.45@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Md Saiful Islam. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}