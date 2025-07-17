"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import metadata from "@/data/metadata.json";

export function Contact() {
  const { contact } = metadata;
  
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white ml-2">
              {contact.title}
            </h2>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {contact.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <form action="https://formspree.io/f/xanbwezq" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm/6 font-semibold text-zinc-900 dark:text-white">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-base text-zinc-900 dark:text-white outline-1 -outline-offset-1 outline-zinc-300 dark:outline-zinc-700 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-semibold text-zinc-900 dark:text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-base text-zinc-900 dark:text-white outline-1 -outline-offset-1 outline-zinc-300 dark:outline-zinc-700 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm/6 font-semibold text-zinc-900 dark:text-white">
                  Subject
                </label>
                <div className="mt-2.5">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="block w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-base text-zinc-900 dark:text-white outline-1 -outline-offset-1 outline-zinc-300 dark:outline-zinc-700 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-zinc-900 dark:text-white">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-base text-zinc-900 dark:text-white outline-1 -outline-offset-1 outline-zinc-300 dark:outline-zinc-700 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-600"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="block w-full rounded-md bg-zinc-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 