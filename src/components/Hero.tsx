"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import metadata from "@/data/metadata.json";

export function Hero() {
    const { personal } = metadata;

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl tracking-tight md:text-6xl font-bold text-black dark:text-white mb-6">
                    {personal.title}
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-zinc-600  mb-8 max-w-3xl mx-auto"
                //dark:text-zinc-400
                >
                    {personal.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center space-x-4"
                >
                    <a
                        href={personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href={personal.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
} 