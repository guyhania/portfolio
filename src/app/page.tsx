import "./globals.css";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-foreground w-8/9 mx-auto">
      <Header />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
    </main >
  );
}
