"use client";

import { motion } from "framer-motion";
import metadata from "@/data/metadata.json";

export function About() {
  const { personal } = metadata;
  
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {personal.about.map((paragraph, index) => (
            <p 
              key={index}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 