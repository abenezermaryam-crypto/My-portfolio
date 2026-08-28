import { DownloadIcon, Contact2Icon } from "lucide-react";
import hero from "../assets/image.jpg";
import cv from "../assets/Yechale_Mulu_CV.pdf";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";


const Hero = () => {
    const socialIcon = [
  { icon: FaLinkedin, alt: "Linkedin", link: "/" },
  { icon: FaTwitter, alt: "Twitter", link: "/" },
  { icon: FaGithub, alt: "GitHub", link: "/" },
  { icon: FaYoutube, alt: "YouTube", link: "@maryamabenezer-k3e" },
];

  return (
    <div
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:-mt-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div
            className=" flex flex-col lg:w-2/5 w-full justify-center items-center"
            data-aos="fade-right"
          >
            {/* This box must stay in normal flow so it has real width/height. */}
            <div className="relative group mb-14 w-72 h-80 sm:w-80 sm:h-80 lg:w-80 lg:h-80">
              {/* Glow is a sibling BEHIND the photo, not a parent of the photo. */}
              <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-700 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <img
                src={hero}
                alt="hero image"
                className="relative z-10 w-full h-full object-cover rounded-[50%_5px_50%_5%] transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-[50%_5px_50%_5%] scale-110 bg-linear-to-br  group-hover:scale-115 transition-transform duration-300" />
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-[50%_5px_50%_5%] scale-110  group-hover:scale-125 transition-transform duration-300" />
            </div>

            <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
              <span className=" w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium dark:text-red-200 text-gray-700">
                Available for work
              </span>
            </div>
            <div className="flex  gap-3 w-full justify-center items-center ">
              {socialIcon.map(({ icon: Icon, alt, link }) => (
                <a
                  key={alt}
                  href={link}
                  aria-label={alt}
                  className="rounded-full border border-red-500/30 p-2 text-red-600 transition-colors hover:bg-red-600 hover:text-white dark:text-red-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div
            className=" lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            data-aos="fade-left"
          >
            <h1 className="text-4xl sm:text-5xl font-mono dark:text-white text-gray-900 ">
              Hi, I'm <span className=" text-red-400">Yechale Mulu</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-mono mt-3 mb-4 text-red-600 dark:text-red-300 ">
              <span className="text-gray-400 dark:text-gray-500"> &lt;</span>
              Frontend Developer && Emerging Full-Stack Engineer
              <span className="text-gray-400 dark:text-gray-500">&gt;</span>
            </h2>
            <p className="mb-6 leading-relaxed max-w-md lg:max-w-lg dark:text-gray-300 text-gray-700">
              <span className=" dark:text-amber-400 font-extrabold text-gray-800 ">
                {" "}
                I am Yechale Mulu,
              </span>{" "}
              a Health Informatics student at Hawassa University and a
              passionate frontend developer specializing in React, JavaScript,
              and Tailwind CSS. As I rapidly expand my backend architecture
              skills with SQL and modern server-side tools, I combine
              data-driven health informatics insights with clean code to build
              fast, scalable, and intuitive full-stack web applications.
            </p>

            <div className="flex gap-4 mb-7">
              {[
                { number: "1+", label: "Experience Years" },
                { number: "16+", label: "Project done" },
                { number: "12+", label: "happy clients" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900 bg-red-100 border-2 border-red-400/10 p-2 rounded-md"
                >
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.number}
                  </div>
                  <div className=" dark:text-gray-400 text-gray-800 font-bold text-x">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href={cv} download className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-white font-extrabold
                                bg-linear-to-r from-red-600 to-red-950 shadow-2xl hover:shadow-[0_0_40px_rgba(220,38,38,0.7) ]
                                transition-all duration-300 transform hover:scale-105 rounded-4xl "
                >
                  <DownloadIcon size={20} /> Download CV
                </button>
              </a>
              <a className="w-full sm:w-auto">
                <a href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 hover:text-white font-extrabold
                                hover:bg-linear-to-r from-red-950 to-red-600 border-2 border-red-700 dark:text-gray-300  shadow-2xl hover:shadow-[0_0_40px_rgba(220,38,38,0.7) ]
                                transition-all duration-300 transform hover:scale-105 rounded-4xl "
                >
                  <Contact2Icon size={20} /> Here Me
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
