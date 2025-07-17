import "./globals.css";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 ring-1 ring-zinc-100 text-foreground mx-auto dark:bg-zinc-900 dark:ring-zinc-300/20">
      <Header />
      <Hero />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
