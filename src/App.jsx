import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Project from "./components/Project";
import Contact from "./components/Contact";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.toggle("dark");
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, [isDark]);
  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={`${isDark ? "bg-linear-to-br min-h-screen from-gray-900 via-[#2e0d10] to-red-900" : "bg-linear-to-r min-h-screen from-gray-100 to-red-100"}`}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
