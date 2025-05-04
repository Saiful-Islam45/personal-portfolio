'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
  },
  {
    category: "DevOps",
    technologies: ["Docker", "AWS", "CI/CD", "Git", "Linux"]
  },
  {
    category: "Tools",
    technologies: ["VS Code", "Figma", "Postman", "Jest", "Webpack"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-white/5 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}