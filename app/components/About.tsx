'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/profile.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
            <p className="text-gray-300 space-y-4">
              Hi, I’m Md. Saiful Islam, a Full Stack Software Developer passionate about crafting scalable, efficient, and secure web applications. With experience in both frontend and backend development, I build solutions that are fast, reliable, and user-friendly.
              <br />
              What I Do Best:
              <br />
            </p>
            <ul className="space-y-4">
                <li className="space-y-4">🔹<strong className="text-primary"> Backend Development –</strong> Expertise in Node.js, Express.js, Koa.js, and Microservices, ensuring scalable and performant APIs.</li>
                <li className="space-y-4">🔹<strong className="text-primary"> Frontend Excellence –</strong> Building modern, responsive interfaces with React.js, Next.js, Material-UI, Tailwind CSS, and Bootstrap.</li>
                <li className="space-y-4">🔹<strong className="text-primary"> Database Management –</strong> Skilled in MongoDB, DynamoDB, PostgreSQL, and MySQL, ensuring data integrity & performance.</li>
                <li className="space-y-4">🔹<strong className="text-primary"> Cloud & DevOps –</strong> Experience with AWS (Lambda, S3, SQS) for scalable cloud solutions.</li>
                <li className="space-y-4">🔹<strong className="text-primary"> Security-First Development –</strong> Implementing authentication & authorization using JWT, AWS Cognito, Firebase Auth, and NextAuth.</li>
                <li className="space-y-4">🔹<strong className="text-primary"> Project & Team Collaboration –</strong> Strong Git version control skills and experience with Jira & Trello for efficient project management.</li>
              </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}