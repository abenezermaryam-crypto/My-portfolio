//
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import aboutImage from "../assets/image2.jpg";;
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
  ArrowRight
} from 'lucide-react';

const About = () => {
   const socialIcon = [
  { icon: FaInstagram,
    label:'Instagram',
    alt: "Instagram", 
    link: "/" 
  },
  { icon: FaGithub,
    label:'Github',
    alt: "Github", 
    link: "/" 
  },
  { icon: FaTiktok,
    label:'Tiktok',
    alt: "Tiktok", 
    link: "/" 
  },
  { icon: FaYoutube,
    label:'Youtube',
    alt: "Youtube", 
    link: "/" 
  },
  { icon: FaLinkedin,
    label:'Linkedin',
    alt: "Linkedin", 
    link: "/" 
  },
  { icon: FaTwitter,
    label:'Twitter',
    alt: "Twitter", 
    link: "/" 
  }
   ]
   const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 lg:items-start  items-center relative z-10">
            <div className=" order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                 data-aos='fade-right'   >
                <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                     <span className=" w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-sm font-medium dark:text-red-200 text-gray-700">
                              About me
                     </span>
                 </div>
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight"> Turning Ideas Into
                    <span className="text-red-600 dark:text-red-400">Digital Reality</span>
                 </h2>
                 <p className="text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-800 max-w-xl">
                 I am a dedicated Frontend Developer and Health Informatics student at Hawassa University, passionate about building responsive, 
                 user-centered web applications. My foundation lies in crafting clean, high-performance interfaces using modern frontend tools like React and Tailwind CSS.
                  Driven by a fast-growing interest in end-to-end software development, I am rapidly advancing my backend engineering capabilities to deliver seamless, scalable full-stack applications.
                    <br />
                 </p>

                 {/* read-more container */}
                 <div className="pl-1 w-full pr-5 flex flex-col sm:flex-row justify-between gap-4"> 
                 <a href='/'  className="w-full sm:w-auto" data-aos="fade-up">
                            <button
                             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-white font-extrabold
                                        bg-linear-to-r from-red-600 to-red-950 shadow-2xl hover:shadow-[0_0_40px_rgba(220,38,38,0.7) ]
                                        transition-all duration-300 transform hover:scale-105 rounded-4xl ">
                                             Let's Talk <ArrowRight size={20}/>
                             </button>
                        </a>
                 <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    data-aos="fade-up"
                    className="group inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-300 transition-colors focus:outline-none mb-4"
                >
                    <span>{isExpanded ? 'Hide Skills Breakdown' : 'Read More: Summary of Skills & Experience'}</span>
                    
                    <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </motion.div>
                 </button>
                 
                     </div>   
                    {/* Expandable Content Container */}
                    <AnimatePresence>
                        {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            {/* 
                            Vertical Line Container:
                            */}
                            <div className="relative my-2 ml-3 pl-5 sm:pl-7 border-l-2 border-red-500 shadow-md">
                            
                            {/* Top Decorative Node Point on the Vertical Line */}
                            <div className="absolute -left-[6px] z-10 top-0 w-3 h-3 rounded-full bg-red-400 ring-4 ring-red-950 shadow-[0_0_12px_#22d3ee]" />

                            <div className="space-y-8">
                                {/* Main Heading for Expanded Section */}
                                <div>
                                <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-gray-700 tracking-tight">
                                    Summary of Skills & Experience
                                </h3>
                                </div>

                                {/* 1. Core Technical Stack */}
                                <div>
                                <div className="flex items-center gap-2 mb-4 text-red-500 font-bold font-mono text-xs uppercase tracking-wider">
                                    <Code2 className="w-4 h-4" />
                                    <span>Core Technical Stack</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    
                                    {/* Frontend */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex  items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                            <Layout className="w-6 h-6 font-extrabold  text-blue-400" />
                                            <span>Frontend Development</span>
                                        </div>
                                        <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                            HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
                                        </p>
                                    </div>

                                    {/* Backend & DB */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                    <div className=" flex  items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                     <Database size={20} className=" font-extrabold text-blue-400" />
                                            <span>Backend & Databases</span>
                                        </div>
                                        <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                            MySQL, Relational Database Design, RESTful API Integration
                                        </p>
                                    </div>

                                    {/* UI/UX */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <Code2 size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                            <span>UI/UX & Engineering</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Responsive Web Design, Component Architecture, Cross-Browser Compatibility
                                    </p>
                                    </div>

                                </div>
                                </div>

                                {/* 2. Domain & Academic Foundation */}
                                <div>
                                <div className="flex items-center gap-2 mb-4 text-red-500 font-bold font-mono text-xs uppercase tracking-wider">
                                     <GraduationCap className="w-4 h-4" />
                                        <div className="absolute -left-[7px]  w-3 h-3 rounded-full bg-red-400 ring-4 ring-red-950 shadow-[0_0_12px_#22d3ee]" />
                                    <span>Domain & Academic Foundation</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    
                                    {/* Institution */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <GraduationCap size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                        <span>Institutional Background</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Health Informatics Student at Hawassa University
                                    </p>
                                    </div>

                                    {/* Domain Focus */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <Activity size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                        <span>Domain Focus</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Health Information Systems, Data Architecture, Health Data Standards
                                    </p>
                                    </div>

                                    {/* Analytical Skills */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <BrainCircuit size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                        <span>Analytical Skills</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Workflow Optimisation, System Evaluation, Requirements Gathering
                                    </p>
                                    </div>

                                </div>
                                </div>

                                {/* 3. Leadership & Soft Skills */}
                                <div>
                                 <div className="flex items-center gap-2 mb-4 text-red-500 font-bold font-mono text-xs uppercase tracking-wider">
                                    <Code2 className="w-4 h-4" />
                                    <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-red-400 ring-4 ring-red-950 shadow-[0_0_12px_#22d3ee]" />
                                    <span>Leadership & Soft Skills</span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    
                                    {/* Collaboration */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <Users size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                        <span>Collaboration</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Academic Leadership, Student Governance & Representation
                                    </p>
                                    </div>

                                    {/* Project Execution */}
                                    <div className="p-4 rounded-xl dark:bg-red-950 border bg-red-100 border-red-800/30 hover:border-red-700 transition-colors duration-300">
                                        <div className="flex items-center gap-2 dark:text-white text-gray-800  font-medium mb-2">
                                        <Zap size={18} className="w-6 h-6 font-extrabold text-blue-400" />
                                        <span>Project Execution</span>
                                    </div>
                                    <p className="text-xs text-gray-900 dark:text-gray-300 leading-relaxed">
                                        Problem Solving, Rapid Skill Acquisition, Initiative Management
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                 <div className="flex  gap-3 w-full justify-center items-center " data-aos="fade-down">
                        {socialIcon.map(({ icon: Icon, alt, link  }) => (
                         <a
                        key={alt}
                        href={link}
                        aria-label={alt}
                        className="rounded-full border border-red-500/30 p-2 text-red-600 transition-colors
                            hover:bg-red-600 hover:text-white dark:text-red-300 "
                        >
                    <Icon size={18} />
                    </a> 
                ))}
                </div>
             </div>
             <div className="relative order-1 mb-10 lg:order-2 flex justify-center"
                   data-aos="fade-left">
                    <div className="relative w-full max-w-sm sm:max-w-md">
                        <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%]
                                         filter blur-xl opacity-40 animate-pulse " />

                        <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%]
                                        transform rotate-3 scale-105 " />
                                        <img src={aboutImage} alt="About" className=" relative z-10 rounded-[40%_60%_60%/40%_60%_70%]
                                        shadow-2xl w-full  h-auto object-cover border-2 border-red-500/30 backdrop-blur-sm " />
                    </div>
              </div>
            </div>
        
    </section>
  )
}

export default About