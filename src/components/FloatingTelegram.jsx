import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingTelegram = () => {
  return (
    <aside aria-label="Direct Telegram contact" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Hover Tooltip */}
      <div className="absolute right-full mr-3 hidden sm:group-hover:flex items-center pointer-events-none">
        <div className="bg-gray-900/90 dark:bg-zinc-800/95 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-white/10 backdrop-blur-md">
          Chat on Telegram <span className="text-red-400 font-mono">@yechalesew21</span>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.a
        href="https://t.me/yechalesew21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Telegram Chat with Yechale Mulu"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#0088cc] via-[#0099e6] to-[#229ED9] text-white shadow-2xl hover:shadow-[0_0_25px_rgba(0,136,204,0.6)] border-2 border-white/20 transition-all duration-300"
      >
        {/* Active Online Green Pulse Indicator */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-900"></span>
        </span>

        {/* Telegram Icon */}
        <FaTelegramPlane className="w-7 h-7 -translate-x-0.5 translate-y-0.5" />
      </motion.a>
    </aside>
  );
};

export default FloatingTelegram;
