import { useState, useEffect } from "react";
import {
  Home,
  User,
  Code,
  Award,
  FolderKanban,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Activity,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "home", label: "Home", link: "#home", icon: Home },
    { name: "about", label: "About", link: "#about", icon: User },
    { name: "skills", label: "Skills", link: "#skills", icon: Code },
    { name: "health-demo", label: "Health Lab", link: "#health-demo", icon: Activity },
    { name: "projects", label: "Projects", link: "#projects", icon: FolderKanban },
    { name: "certifications", label: "Certificates", link: "#certifications", icon: Award },
    { name: "guestbook", label: "Guestbook", link: "#guestbook", icon: MessageSquare },
    { name: "contact", label: "Contact", link: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.link));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(navItems[index].name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (name) => {
    setActiveTab(name);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/80 dark:border-red-950/50 px-3 py-2 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 font-extrabold text-sm sm:text-base text-gray-900 dark:text-white tracking-tight pl-2"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-red-600 to-red-800 text-white flex items-center justify-center font-black text-xs shadow-md">
              YM
            </span>
            <span className="hidden sm:inline">
              Yechale <span className="text-red-600 dark:text-red-400">Mulu</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className={`relative flex items-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-red-600 dark:text-red-400 font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-red-500/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions: Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle theme mode"
              className="p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="lg:hidden mt-2 p-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-2xl flex flex-col gap-1"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-red-500/10 text-red-600 dark:text-red-400 font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
