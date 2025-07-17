"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import metadata from "@/data/metadata.json";

export function Footer() {
  const { personal, navigation } = metadata;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand/Name Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
              {personal.name}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-md">
              {personal.title}
            </p>
            <div className="flex space-x-4">
              <Link
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:guy@example.com"
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={personal.cv}
                  target="_blank"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 text-sm"
                >
                  Download CV
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 text-sm"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 text-sm"
                >
                  View Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 sm:mb-0">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors duration-200 text-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}