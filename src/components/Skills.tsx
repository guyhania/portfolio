"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import metadata from "@/data/metadata.json";
import * as simpleIcons from 'simple-icons';

export function Skills() {
  const { skills } = metadata;
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = [...skills.map(category => category.category)];

  const getFilteredSkills = () => {
    const category = skills.find(cat => cat.category === activeCategory);
    return category ? category.items.map(item => ({ ...item, category: category.category })) : [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            Tech I <Heart className="w-8 h-8 text-red-500" />
          </h2>

          {/* Category Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                    ? "bg-zinc-600 text-white shadow-lg"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill: { name: string; icon: string; href?: string; category?: string }, index) => {
              const iconObj = (simpleIcons as any)[`si${skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)}`] || (simpleIcons as any)[skill.icon];
              
              // Local icon mapping for custom icons
              const getLocalIcon = (iconName: string, isDark: boolean = false) => {
                const localIconMap: { [key: string]: { light: string; dark?: string } } = {
                  'amazonaws': { 
                    light: '/assets/tech/aws.svg', 
                    dark: '/assets/tech/aws-dark.png' 
                  },
                  'microsoftsqlserver': { light: '/assets/tech/sql-server-logo.png' },
                  'csharp': { light: '/assets/tech/Csharp_logo.png' }
                };
                const iconConfig = localIconMap[iconName];
                if (!iconConfig) return null;
                return isDark && iconConfig.dark ? iconConfig.dark : iconConfig.light;
              };

              const lightIconPath = getLocalIcon(skill.icon, false);
              const darkIconPath = getLocalIcon(skill.icon, true);

              return (
                <motion.a
                  key={`${skill.name}-${activeCategory}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 group cursor-pointer"
                  href={skill.href || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lightIconPath ? (
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <img 
                        src={lightIconPath} 
                        alt={skill.name}
                        className="w-8 h-8 object-contain block dark:hidden"
                      />
                      {darkIconPath && (
                        <img 
                          src={darkIconPath} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain hidden dark:block"
                        />
                      )}
                    </div>
                  ) : iconObj && (
                    <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d={iconObj.path} fill={`#${iconObj.hex}`} />
                      </svg>
                    </div>
                  )}
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>                  
                </motion.a>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 