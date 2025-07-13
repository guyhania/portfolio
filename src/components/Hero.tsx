"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import metadata from "@/data/metadata.json";

export function Hero() {
    const { personal } = metadata;

    return (
        <section className="flex items-center mb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mt-32 relative w-full">
            <div className="max-w-3xl mx-auto text-left ml-0 lg:px-12">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 mb-6">
                    {personal.title}
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base text-zinc-600 dark:text-zinc-400 mt-6 mb-8 max-w-3xl"            
                >
                    {personal.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-start space-x-4"
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