import { useState, useEffect } from "react";
import { MessageSquare, Send, CheckCircle2, User, Clock, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_ENTRIES = [
  {
    id: 1,
    name: "Dr. Aster Tadesse",
    role: "Health Informatics Instructor",
    message: "Yechale shows exceptional ability in bridging clinical healthcare requirements with modern software development.",
    date: "March 2025",
    likes: 14,
  },
  {
    id: 2,
    name: "Bereket Alemu",
    role: "Full-Stack Software Engineer",
    message: "Great frontend eye! Clean Tailwind layouts, well-structured React components, and always eager to master new backend tools.",
    date: "February 2025",
    likes: 9,
  },
  {
    id: 3,
    name: "Selamawit Bekele",
    role: "Project Collaborator",
    message: "Working with Yechale on the healthcare system was seamless. His dedication to user experience and clean code is top notch!",
    date: "January 2025",
    likes: 11,
  },
  {
    id: 4,
    name: "Kidus Yohannes",
    role: "Database Administrator",
    message: "Strong grasp of relational databases, schema normalization, and REST API integration. A versatile full-stack talent.",
    date: "December 2024",
    likes: 7,
  },
  {
    id: 5,
    name: "Hanna Girma",
    role: "UI/UX Designer",
    message: "Exceptional speed translating Figma prototypes into pixel-perfect, responsive React and Tailwind components.",
    date: "November 2024",
    likes: 15,
  },
];

const Guestbook = () => {
  const [entries, setEntries] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_guestbook");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return INITIAL_ENTRIES;
        }
      }
    }
    return INITIAL_ENTRIES;
  });

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolio_guestbook", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newEntry = {
        id: Date.now(),
        name: name.trim(),
        role: role.trim() || "Visitor / Recruiter",
        message: message.trim(),
        date: "Just now",
        likes: 1,
      };

      setEntries([newEntry, ...entries]);
      setName("");
      setRole("");
      setMessage("");
      setIsSubmitting(false);
      setSuccessMessage(true);

      setTimeout(() => {
        setSuccessMessage(false);
      }, 4000);
    }, 600);
  };

  const handleLike = (id) => {
    setEntries(
      entries.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  return (
    <section id="guestbook" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <MessageSquare className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Visitor Endorsements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Guestbook &amp; <span className="text-red-600 dark:text-red-400">Feedback</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Leave a note, feedback, or recommendation. All submissions are stored live in the interactive log!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Submission Form */}
          <div
            className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl"
            data-aos="fade-right"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Sign the Guestbook
            </h3>

            {successMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Thank you! Your endorsement was published.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dawit Tilahun"
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your Role / Organization
                </label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Recruiter @ TechCorp / Peer"
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave a word of encouragement, feedback, or project opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-gray-100 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 active:scale-98 transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Posting..." : "Submit Endorsement"}
              </button>
            </form>
          </div>

          {/* Feed List (Only 3-4 visible, others scrollable) */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                Endorsements ({entries.length})
              </span>
              <span className="text-[11px] text-red-600 dark:text-red-400 font-mono font-semibold flex items-center gap-1">
                ↕ Scroll to view all ({entries.length} total)
              </span>
            </div>

            {/* Scrollable Container with max height for 3-4 cards */}
            <div className="max-h-[440px] sm:max-h-[460px] overflow-y-auto pr-2 space-y-3.5 rounded-2xl scrollbar-thin scrollbar-thumb-red-500/30 scrollbar-track-transparent">
              <AnimatePresence>
                {entries.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md shadow-sm hover:border-red-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-bold text-xs">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400">
                            {item.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-gray-500 font-mono">
                        <Clock className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300 mt-2 pl-11">
                      "{item.message}"
                    </p>

                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => handleLike(item.id)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-500/10 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5 text-red-500" />
                        <span>{item.likes}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guestbook;
