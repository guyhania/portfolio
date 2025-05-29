"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import metadata from "@/data/metadata.json"

export function Navbar() {
  return (
    <nav className="flex rounded-full bg-white/90 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-0.5">

          {/* Navigation Menu */}
          <Menubar className="hidden md:flex">
            {metadata.navigation.map((item, index) => (
              <MenubarMenu key={item.name}>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenubarTrigger className="cursor-pointer relative group px-3 py-2">
                    <Link href={item.href}>
                      {item.name}
                    </Link>
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </MenubarTrigger>
                </motion.div>
              </MenubarMenu>
            ))}
          </Menubar>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </nav>
  )
}