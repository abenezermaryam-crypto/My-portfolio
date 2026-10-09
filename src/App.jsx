import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import HealthDemo from "./components/HealthDemo";
import Project from "./components/Project";
import Certificates from "./components/Certificates";
import Guestbook from "./components/Guestbook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingTelegram from "./components/FloatingTelegram";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("portfolio_theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
    AOS.refresh();
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-red-500 selection:text-white ${
        isDark
          ? "bg-gradient-to-br from-gray-950 via-[#1a0608] to-stone-950 text-gray-100"
          : "bg-gradient-to-br from-slate-50 via-red-50/40 to-stone-100 text-gray-900"
      }`}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="relative pb-20">
        <Hero />
        <About />
        <Skills />
        <HealthDemo />
        <Project />
        <Certificates />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
      <FloatingTelegram />
    </div>
  );
};

export default App;
