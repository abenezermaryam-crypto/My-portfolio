import { DownloadIcon, Mail, Sparkles, ArrowRight } from "lucide-react";
import hero from "../assets/image.jpg";
import cv from "../assets/Yechale_Mulu_CV.pdf";
import { FaGithub, FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Hero = () => {
  const socialIcons = [
    { icon: FaGithub, alt: "GitHub", link: "https://github.com/abenezermaryam-crypto/My-portfolio" },
    { icon: FaTelegramPlane, alt: "Telegram", link: "https://t.me/yechalesew21" },
    { icon: FaTwitter, alt: "Twitter", link: "https://twitter.com/Wukaw258470" },
    { icon: FaYoutube, alt: "YouTube", link: "https://youtube.com/@maryamabenezer-k3e" },
  ];

  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center relative overflow-hidden pt-20 pb-16"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Avatar Profile Box */}
          <div
            className="flex flex-col lg:w-2/5 w-full justify-center items-center"
            data-aos="fade-right"
          >
            <div className="relative group mb-8 w-64 h-72 sm:w-80 sm:h-88">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-900 rounded-[35px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src={hero}
                alt="Yechale Mulu"
                className="relative z-10 w-full h-full object-cover rounded-[35px] border-2 border-red-500/30 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -inset-1 border border-red-500/20 rounded-[37px] pointer-events-none" />
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Available for Full-Stack &amp; Health Tech Projects
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center items-center">
              {socialIcons.map(({ icon: Icon, alt, link }) => (
                <a
                  key={alt}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="rounded-full border border-red-500/20 p-2.5 text-gray-700 dark:text-red-300 transition-all hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-110 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Intro Information */}
          <div
            className="lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-left"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-red-600 dark:text-red-400 tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Welcome to my portfolio
              </div>
              <a
                href="https://github.com/abenezermaryam-crypto/My-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-[10px] font-mono font-semibold text-red-600 dark:text-red-300 transition-colors"
                title="View GitHub Repository"
              >
                <FaGithub size={11} /> GitHub Repo &rarr;
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight dark:text-white text-gray-900 leading-tight">
              Hi, I'm <span className="text-red-600 dark:text-red-400">Yechale Mulu</span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-mono mt-3 mb-4 text-red-600 dark:text-red-300 font-semibold">
              &lt; Health Informatics &amp; Full-Stack Engineer /&gt;
            </h2>

            <p className="mb-8 leading-relaxed max-w-xl text-sm sm:text-base dark:text-gray-300 text-gray-700">
              Health Informatics student at Hawassa University and passionate software developer. 
              I specialize in bridging <strong className="text-red-600 dark:text-red-400 font-semibold">clinical health systems</strong> with 
              <strong className="dark:text-white text-gray-900 font-semibold"> responsive React interfaces and robust backend architectures (Node.js &amp; SQL)</strong> to build intuitive, life-impacting digital applications.
            </p>

            {/* Stats Counter Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 w-full max-w-md">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "16+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border border-red-500/15 backdrop-blur-md shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                    {stat.number}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={cv}
                download="Yechale_Mulu_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white text-sm font-bold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 rounded-2xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98"
              >
                <DownloadIcon size={18} /> Download CV
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-gray-800 dark:text-gray-200 border-2 border-red-500/30 hover:border-red-500 bg-white/50 dark:bg-zinc-900/40 hover:bg-red-500/10 rounded-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98"
              >
                <Mail size={18} /> Hire Me <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
