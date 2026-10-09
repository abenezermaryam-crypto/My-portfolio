import certificateImg from "../assets/congra (2).jpg";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const certificatesList = [
  {
    id: 1,
    title: "Meta Certified Frontend Developer",
    issuer: "Meta / Coursera",
    date: "2024",
    credentialUrl: "https://coursera.org/verify/professional-cert",
    skills: "React, Advanced JavaScript, Version Control, Responsive UI",
  },
  {
    id: 2,
    title: "Health Information Systems & EHR Specialist",
    issuer: "Hawassa University",
    date: "2024",
    credentialUrl: "https://hu.edu.et",
    skills: "Clinical Data Architecture, ICD-10 Coding, Health Analytics",
  },
  {
    id: 3,
    title: "IBM Full-Stack Backend Development",
    issuer: "IBM",
    date: "2024",
    credentialUrl: "https://coursera.org/verify/ibm",
    skills: "Node.js, Express, SQL, Database Normalization, REST APIs",
  },
  {
    id: 4,
    title: "Data Analytics & SQL Foundations",
    issuer: "ALX Africa",
    date: "2024",
    credentialUrl: "https://alxafrica.com",
    skills: "SQL Querying, Relational Data Modeling, Python Analytics",
  },
  {
    id: 5,
    title: "Google UI/UX Design Professional",
    issuer: "Google",
    date: "2023",
    credentialUrl: "https://coursera.org/verify/google",
    skills: "Figma, User Research, Wireframing, Usability Testing",
  },
];

const Certificates = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Certificate Image Frame */}
          <div className="lg:w-2/5 w-full flex justify-center" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-900 rounded-[35px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-64 h-80 sm:w-80 sm:h-96">
                <img
                  src={certificateImg}
                  alt="Yechale Mulu Certification"
                  className="h-full w-full object-cover rounded-[35px] border-2 border-red-500/30 shadow-2xl group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Certificates Listing */}
          <div className="lg:w-3/5 w-full" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <ShieldCheck className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
                Credentials &amp; Honors
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 dark:text-white text-gray-900">
              My <span className="text-red-600 dark:text-red-400">Certificates</span>
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="divide-y divide-gray-200/70 dark:divide-zinc-800 border-y border-gray-200/70 dark:border-zinc-800 w-full"
            >
              {certificatesList.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="py-4 group hover:bg-red-500/5 px-3 rounded-xl transition-colors duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          {cert.issuer} • <span className="font-mono">{cert.skills}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0 pl-11 sm:pl-0">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400">
                        <Calendar size={14} />
                        <span>{cert.date}</span>
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                      >
                        Verify <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;