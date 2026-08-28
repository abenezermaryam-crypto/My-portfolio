import { FaGithub, FaHeart, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socialIcon = [
  { icon: FaInstagram, alt: "Instagram", link: "/" },
  { icon: FaTiktok, alt: "TikTok", link: "/" },
  { icon: FaGithub, alt: "GitHub", link: "/" },
  { icon: FaYoutube, alt: "YouTube", link: "/" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t bg-linear-to-br border-0  flex min-h-50 from-red-950 to-red-200 dark:bg-linear-to-br dark:from-red-950 dark:to-black
      px-4 py-8 text-gray-70">
      <div className="container mx-auto px-6 sm:flex-row mb-14   w-full  flex-col gap-5 ">
        <div className=" w-full flex flex-col justify-center items-center">
          <h3 className="text-3xl text-red-600 font-bold  dark:text-red-400 ">
            Portfolio
          </h3>
          <p className="text-lg text-gray-950 dark:text-red-300">Frontend Developer</p>
        </div>
      <div className="justify-center  flex  flex-col text-gray-900 dark:text-gray-300 items-center w-full">
        <div className="flex items-center gap-3 ">
          {socialIcon.map(({ icon: Icon, alt, link }) => (
            <a
              key={alt}
              href={link}
              aria-label={alt}
              className="rounded-full border border-red-500/30 p-2 text-gray-700 transition-colors hover:bg-red-600 hover:text-white dark:text-red-300"
            >
              <Icon size={18} />
            </a>
            
          ))}
        </div>
        <p className="text-lg m-10">
          &copy; {new Date().getFullYear()} Yechale Mulu. All rights reserved.
        </p>
        <p className="text-xs flex items-center gap-1">
          {currentYear} Made with <FaHeart className="text-red-500 "/>by 
          <span className="">
            Yechale mulu
          </span>
        </p>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
