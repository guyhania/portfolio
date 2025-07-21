"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import metadata from "@/data/metadata.json";
import { CustomMap } from "./CustomMap";
import { ContactCard } from "./ContactCard";

const contactSchema = z.object({
  name: z.string().min(2, metadata.contact.form.fields.name.validation),
  email: z.email({ message: metadata.contact.form.fields.email.validation }),
  message: z.string().min(10, metadata.contact.form.fields.message.validation),
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
        alert(contact.form.messages.success);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(contact.form.messages.error);
    }
  };
  
  return (
    <section id="contact" className="flex items-center px-4 sm:px-6 lg:px-12 max-w-7xl mt-16 mb-16 relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold dark:text-zinc-100 text-zinc-800">
            {contact.title}
          </h2>
          <p className="text-zinc-400 max-w-xl">
            {contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <ContactCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder={contact.form.fields.name.placeholder}
                    className="block w-full bg-transparent border-0 border-b border-zinc-700 text-zinc-900 dark:text-zinc-400 placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 transition-colors"
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
                    placeholder={contact.form.fields.email.placeholder}
                    className="block w-full bg-transparent border-0 border-b border-zinc-700 text-zinc-900 dark:text-zinc-400 placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 transition-colors"
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
                  rows={5}
                  placeholder={contact.form.fields.message.placeholder}
                  className="block w-full bg-transparent border-0 border-b border-zinc-700 text-zinc-600 dark:text-zinc-400 placeholder-zinc-500 py-3 px-0 focus:border-blue-400 focus:outline-none focus:ring-0 resize-none transition-colors"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? contact.form.submitButton : contact.form.submitButton}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 