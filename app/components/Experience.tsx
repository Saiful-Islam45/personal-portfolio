'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../utils/constant';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-black/10 to-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="relative pl-8 border-l-2 border-primary/30 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white/5 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="absolute -left-[38px] top-7 w-4 h-4 bg-primary rounded-full border-2 border-black"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-1 sm:mt-0">{exp.period}</span>
              </div>
              {Array.isArray(exp.description) ? (
                <ul className="list-disc list-outside pl-5 text-gray-300 space-y-1 text-sm md:text-base">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-sm md:text-base">{exp.description}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
