"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import metadata from "@/data/metadata.json";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { contact } = metadata;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch(contact.form.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: contact.form.subject,
          _redirect: false,
        }),
      });

      if (response.ok) {
        reset();
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold dark:text-zinc-100 text-zinc-800 mb-4">
            {contact.title}
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
         

            <div>
              <h3 className="text-zinc-500 dark:text-zinc-400 font-semibold text-sm tracking-wider uppercase mb-4">
                CONTACT INFO
              </h3>
              <div className="space-y-2">
                <p className="text-zinc-600 dark:text-zinc-400">{contact.details.phone}</p>
                <p className="text-zinc-600 dark:text-zinc-400">{contact.details.email}</p>
              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="block w-full bg-transparent border-0 border-b border-zinc-700 text-white placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="block w-full bg-transparent border-0 border-b border-zinc-700 text-white placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  placeholder="Message"
                  className="block w-full bg-transparent border-0 border-b border-zinc-700 text-white placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 resize-none transition-colors"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? "Message" : "Message"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 