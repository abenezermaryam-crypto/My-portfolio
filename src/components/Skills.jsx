import { useState } from "react";
import { Code, Database, Layout, Activity, GitBranch, Terminal } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Engineering",
    icon: Layout,
    skills: [
      { name: "React.js", percentage: 90, color: "#61DAFB" },
      { name: "JavaScript (ES6+)", percentage: 85, color: "#F7DF1E" },
      { name: "Tailwind CSS", percentage: 95, color: "#06B6D4" },
      { name: "HTML5 / CSS3", percentage: 95, color: "#E34F26" },
    ],
  },
  {
    category: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js & Express", percentage: 80, color: "#68A063" },
      { name: "MySQL / Relational DB", percentage: 82, color: "#00758F" },
      { name: "RESTful API Design", percentage: 85, color: "#EF4444" },
      { name: "Data Architecture", percentage: 78, color: "#A855F7" },
    ],
  },
  {
    category: "Health Informatics & Tools",
    icon: Activity,
    skills: [
      { name: "Health Information Systems", percentage: 92, color: "#10B981" },
      { name: "ICD-10 & Medical Data", percentage: 88, color: "#EC4899" },
      { name: "Git & Version Control", percentage: 85, color: "#F05032" },
      { name: "UI/UX & Figma Design", percentage: 80, color: "#F24E1E" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Code className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Skills &amp; <span className="text-red-600 dark:text-red-400">Competencies</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            A comprehensive overview of my technical stack across full-stack engineering, database systems, and specialized clinical health informatics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-102"
                    : "bg-white/70 dark:bg-zinc-900/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-800 hover:border-red-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Skills Circular Progress Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {skillCategories[activeTab].skills.map((skill, index) => {
            const radius = 52;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.percentage / 100) * circumference;
            const size = 136;

            return (
              <div
                key={skill.name}
                className="flex flex-col items-center p-6 rounded-3xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/15 backdrop-blur-xl shadow-md hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="relative" style={{ width: size, height: size }}>
                  <svg className="transform -rotate-90" width={size} height={size}>
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-gray-200 dark:text-zinc-800"
                    />
                    <circle
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-extrabold font-mono dark:text-white text-gray-900">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-xs sm:text-sm font-bold text-center dark:text-white text-gray-800">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;