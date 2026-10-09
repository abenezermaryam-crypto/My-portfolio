import { useState } from "react";
import { FaGithub, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "../assets/image2.jpg";
import { 
  ChevronDown, 
  Code2, 
  Database, 
  Layout, 
  GraduationCap, 
  Activity, 
  BrainCircuit, 
  Users, 
  Zap, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const About = () => {
  const socialIcons = [
    { icon: FaGithub, label: "GitHub", link: "https://github.com/abenezermaryam-crypto/My-portfolio" },
    { icon: FaTelegramPlane, label: "Telegram", link: "https://t.me/yechalesew21" },
    { icon: FaTwitter, label: "Twitter", link: "https://twitter.com/Wukaw258470" },
    { icon: FaYoutube, label: "YouTube", link: "https://youtube.com/@maryamabenezer-k3e" },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 lg:items-start items-center gap-12 relative z-10">
        
        {/* Text Column */}
        <div
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 dark:text-white text-gray-900 leading-tight">
            Turning Ideas Into <span className="text-red-600 dark:text-red-400">Digital Reality</span>
          </h2>

          <p className="text-sm sm:text-base mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl">
            I am a dedicated <strong>Frontend Developer and Health Informatics student at Hawassa University</strong>, passionate about building responsive, user-centered web applications. 
            My foundation lies in crafting clean, high-performance interfaces using modern frontend tools like React and Tailwind CSS. 
            Driven by a fast-growing passion for end-to-end software development, I actively advance my backend capabilities in SQL, Node.js, and API architecture.
          </p>

          {/* Action Row */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-xs font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 rounded-xl shadow-lg transition-all transform hover:scale-102"
            >
              Let's Talk <ArrowRight size={16} />
            </a>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 hover:underline focus:outline-none"
            >
              <span>{isExpanded ? "Hide Skills Breakdown" : "Read More: Summary of Skills & Experience"}</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>

          {/* Expandable Skills Accordion */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden w-full text-left"
              >
                <div className="relative my-4 ml-2 pl-5 border-l-2 border-red-500 space-y-6">
                  
                  {/* Core Technical Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-bold font-mono text-xs uppercase tracking-wider">
                      <Code2 className="w-4 h-4" />
                      <span>Core Technical Stack</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15">
                        <div className="flex items-center gap-2 font-semibold text-xs text-gray-900 dark:text-white mb-1">
                          <Layout className="w-4 h-4 text-red-500" />
                          <span>Frontend</span>
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400">
                          React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5/CSS3
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15">
                        <div className="flex items-center gap-2 font-semibold text-xs text-gray-900 dark:text-white mb-1">
                          <Database className="w-4 h-4 text-red-500" />
                          <span>Backend &amp; DB</span>
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400">
                          Node.js, Express, MySQL / Relational Database Design, REST APIs
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15">
                        <div className="flex items-center gap-2 font-semibold text-xs text-gray-900 dark:text-white mb-1">
                          <Zap className="w-4 h-4 text-red-500" />
                          <span>UI/UX &amp; Engineering</span>
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400">
                          Responsive Design, Component Architecture, Git Version Control
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Domain Foundation */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-red-600 dark:text-red-400 font-bold font-mono text-xs uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4" />
                      <span>Domain &amp; Academic Foundation</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15">
                        <div className="flex items-center gap-2 font-semibold text-xs text-gray-900 dark:text-white mb-1">
                          <Activity className="w-4 h-4 text-red-500" />
                          <span>Health Informatics</span>
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400">
                          Hawassa University: Health Information Systems, EHR Data Architecture, ICD-10 Standards
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15">
                        <div className="flex items-center gap-2 font-semibold text-xs text-gray-900 dark:text-white mb-1">
                          <BrainCircuit className="w-4 h-4 text-red-500" />
                          <span>Analytical Skills</span>
                        </div>
                        <p className="text-[11px] text-gray-600 dark:text-gray-400">
                          Workflow Optimization, Requirements Gathering, Clinical Decision Logic
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Row */}
          <div className="flex gap-3 justify-center lg:justify-start items-center mt-4">
            {socialIcons.map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full border border-red-500/20 p-2 text-gray-700 dark:text-red-300 transition-colors hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

        </div>

        {/* Photo Box */}
        <div className="relative order-1 mb-10 lg:order-2 flex justify-center" data-aos="fade-left">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse" />
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105" />
            <img
              src={aboutImage}
              alt="About Yechale Mulu"
              className="relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-red-500/30 backdrop-blur-sm"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;