import { useRef, useState } from "react";
import project1 from "../assets/foodDelivery.jpg";
import project2 from "../assets/medical.jpg";
import project3 from "../assets/onlineShopping.jpg";
import project4 from "../assets/RealEstate.jpg";
import { ChevronLeft, ChevronRight, ExternalLink, FolderKanban, X, Layers, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    image: project2,
    title: "Healthcare EHR & Clinical Portal",
    category: "Health Tech",
    desc: "A comprehensive clinical informatics application managing patient electronic health records, diagnosis history, and medical triage scheduling.",
    features: [
      "ICD-10 clinical condition mapping",
      "Patient vitals anomaly tracking & alerts",
      "Role-based doctor, nurse & admin access control",
    ],
    tags: ["React.js", "Node.js", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
    liveUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
  },
  {
    id: 2,
    image: project1,
    title: "FastFood Delivery System",
    category: "Full-Stack",
    desc: "Full-stack food ordering platform with real-time menu management, dynamic shopping cart, and automated order receipt generation.",
    features: [
      "Live order status tracker",
      "Interactive category filtering & search",
      "Cart persistence & checkout simulation",
    ],
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
    githubUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
    liveUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
  },
  {
    id: 3,
    image: project3,
    title: "Modern E-Commerce Store",
    category: "Frontend",
    desc: "High-performance online shopping interface featuring responsive product catalogs, instant search, and smooth checkout animations.",
    features: [
      "Dynamic filtering by price & rating",
      "Light/Dark theme support with instant hydration",
      "Optimized lazy-loaded media gallery",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Context API"],
    githubUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
    liveUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
  },
  {
    id: 4,
    image: project4,
    title: "Real Estate & Property Management",
    category: "Full-Stack",
    desc: "Interactive property listing and booking portal allowing clients to explore residential properties with detailed floor plans and price calculations.",
    features: [
      "Property search by location & budget",
      "Interactive image carousel for property previews",
      "Contact agent inquiry form with email integration",
    ],
    tags: ["React.js", "Tailwind CSS", "SQL", "Node.js"],
    githubUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
    liveUrl: "https://github.com/abenezermaryam-crypto/My-portfolio",
  },
];

const Project = () => {
  const scrollRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Health Tech", "Full-Stack", "Frontend"];

  const filteredProjects = selectedFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <FolderKanban className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
              Featured <span className="text-red-600 dark:text-red-400">Projects</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === cat
                    ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                    : "bg-white/60 dark:bg-zinc-900/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-800 hover:border-red-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Horizontal Grid / Scroller */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl hover:border-red-500/50 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div>
                  <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-zinc-900 cursor-pointer"
                       onClick={() => setActiveModalProject(project)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-base font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium font-mono px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800 text-xs">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-red-600 dark:text-red-400 font-bold hover:underline"
                    >
                      Quick Case Study &rarr;
                    </button>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                        title="GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-red-500/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {activeModalProject.category}
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {activeModalProject.desc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                    Key Features &amp; Architecture:
                  </h4>
                  <ul className="space-y-1.5">
                    {activeModalProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-red-500/10 text-red-600 dark:text-red-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-zinc-700 hover:border-red-500 transition-colors"
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Project;