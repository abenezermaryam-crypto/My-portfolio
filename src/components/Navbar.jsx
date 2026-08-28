import { useState } from "react"
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
} from "lucide-react"
import { motion } from "framer-motion"

const Navbar = ({ isDark, toggleDarkMode }) => {
    const [activeTab, setActiveTab] = useState("home")
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { name: "home", label: "Home", link: "#home", icon: Home },
        { name: "about", label: "About", link: "#about", icon: User },
        { name: "skills", label: "Skills", link: "#skills", icon: Code },
        { name: "certifications", label: "Certifications", link: "#certifications", icon: Award },
        { name: "projects", label: "Projects", link: "#projects", icon: FolderKanban },
        { name: "contact", label: "Contact", link: "#contact", icon: Mail },
    ]

    const handleNavClick = (name) => {
        setActiveTab(name)
        setMenuOpen(false)
    }

    return (
        <div className="fixed bottom-1 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-[95%] max-w-5xl mx-auto flex items-center"
            >
                {/* dark mode switcher */}
                <div className="relative w-full bg-linear-to-r from-gray-800/20 to-red-900/20 nav:from-gray-800 nav:to-red-900 backdrop-blur-xl nav:backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 px-2 py-1 nav:px-2 nav:py-1.5 lg:px-3 lg:py-2">
                    <div className="absolute -top-5 right-2 nav:top-2.5 lg:-top-6">
                        <motion.button
                            type="button"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 p-2 rounded-full dark:bg-amber-50  bg-blue-950 transition-colors duration-300 text-white cursor-pointer backdrop-blur-sm"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun className="w-7 h-7  text-blue-900" />
                            ) : (
                                <Moon className="w-7 h-7 text-gray-100" />
                            )}
                        </motion.button>
                    </div>

                    {/* Below 680px: menu toggle. From 680px up: full navbar with tighter padding */}
                    <div className="flex items-center nav:hidden">
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className={`relative flex flex-col items-center gap-0.5 py-1.5 px-2 rounded-xl text-xs font-bold text-amber-50 ${
                                menuOpen ? "text-amber-50" : "text-amber-50/90"
                            }`}
                        >
                            {menuOpen ? (
                                <X className="relative z-10 h-5 w-5" />
                            ) : (
                                <Menu className="relative z-10 h-5 w-5" />
                            )}
                            <span className="relative z-10">{menuOpen ? "Close" : "Menu"}</span>
                        </motion.button>
                    </div>

                    <div
                        className={`${
                            menuOpen ? "flex" : "hidden"
                        } mt-1 flex-col gap-1 nav:mt-0 nav:flex nav:flex-row nav:justify-around nav:items-center nav:gap-0`}
                    >
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeTab === item.name
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => handleNavClick(item.name)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.96 }}
                                    className={`relative flex w-full flex-row items-center gap-3 py-2 px-3 rounded-xl text-xs transition-colors duration-300 nav:flex-1 nav:w-auto nav:flex-col nav:gap-0 nav:py-1 nav:px-0.5 lg:gap-0.5 lg:px-2 lg:py-2 ${
                                        isActive ? "text-amber-50" : "text-amber-50/70"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active"
                                            className="absolute inset-1 bg-white/15 rounded-xl"
                                        />
                                    )}
                                    <Icon className="relative z-10 h-5 w-5 shrink-0 nav:h-4 nav:w-4 lg:h-5 lg:w-5" />
                                    <span className="relative z-10">{item.label}</span>
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar
