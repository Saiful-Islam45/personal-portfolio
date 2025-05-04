'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { posts } from '../utils/constant';

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <article className="p-6">
                <span className="text-primary text-xs font-medium uppercase tracking-wider">{post.date}</span>
                <h3 className="text-xl font-semibold my-2 text-white group-hover:text-primary transition-colors duration-300 flex items-center">
                  {post.title}
                  <FiExternalLink className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-4 w-4" />
                </h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </article>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
