"use client"

import { Navbar } from "@/components/Navbar"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  return (
    <header className="mx-auto w-full max-w-7xl lg:px-8 top-0 z-10 h-16 pt-6" >
      <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-[10vw]">
        <div></div>
        <Navbar />
        <ThemeToggle />
      </div>
    </header>
  )
}
