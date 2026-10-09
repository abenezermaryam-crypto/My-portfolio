import { useState, useEffect } from "react";
import { FaGithub, FaHeart, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowUp, Mail, CheckCircle2, Send, MessageCircle, Repeat, AlertCircle } from "lucide-react";
import hero from "../assets/image.jpg";

const socialIcons = [
  { icon: FaGithub, alt: "GitHub", link: "https://github.com/abenezermaryam-crypto/My-portfolio" },
  { icon: FaTelegramPlane, alt: "Telegram", link: "https://t.me/yechalesew21" },
  { icon: FaTwitter, alt: "Twitter", link: "https://twitter.com/Wukaw258470" },
  { icon: FaYoutube, alt: "YouTube", link: "https://youtube.com/@maryamabenezer-k3e" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);

  // Claps State matching the 👏 5 toolbar
  const [claps, setClaps] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_claps");
      return saved ? parseInt(saved, 10) : 5;
    }
    return 5;
  });
  const [hasClapped, setHasClapped] = useState(false);
  const [shareNotice, setShareNotice] = useState(false);

  // Subscribers List - Starts at 0
  const [subscribers, setSubscribers] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio_subscribers_stack");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          return [];
        }
      }
    }
    return [];
  });

  const followersCount = subscribers.length;
  const followingCount = 0; // Starts at 0

  useEffect(() => {
    localStorage.setItem("portfolio_subscribers_stack", JSON.stringify(subscribers));
  }, [subscribers]);

  const handleClap = () => {
    const next = claps + 1;
    setClaps(next);
    localStorage.setItem("portfolio_claps", next.toString());
    setHasClapped(true);
    setTimeout(() => setHasClapped(false), 600);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareNotice(true);
      setTimeout(() => setShareNotice(false), 3000);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const cleanEmail = subscriberEmail.trim().toLowerCase();
    if (!cleanEmail) return;

    // 1. Check if this account has ALREADY subscribed (Only one-time subscription per account)
    const exists = subscribers.some(
      (sub) => sub.email.toLowerCase() === cleanEmail
    );

    if (exists) {
      setAlreadySubscribed(true);
      setTimeout(() => setAlreadySubscribed(false), 5000);
      return;
    }

    setIsSubscribing(true);

    // 2. Resolve personal email profile image via Unavatar (Gravatar/Google/GitHub/domain avatar)
    // with automatic fallback to Dicebear initial avatar
    const avatarUrl = `https://unavatar.io/${encodeURIComponent(cleanEmail)}?fallback=https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanEmail)}`;

    const newSub = {
      id: Date.now(),
      email: cleanEmail,
      avatarUrl: avatarUrl,
      subscribedAt: new Date().toLocaleDateString(),
    };

    try {
      // Send directly to yechalemulu61@gmail.com
      await fetch("https://formsubmit.co/ajax/yechalemulu61@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          subscriber_email: cleanEmail,
          _subject: `New Portfolio Subscriber: ${cleanEmail}`,
          message: `New verified subscriber joined your portfolio community: ${cleanEmail}`,
          _captcha: "false",
        }),
      });

      // Increment followers and add personal avatar to the overlap stack
      setSubscribers([newSub, ...subscribers]);
      setSubscribed(true);
      setSubscriberEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err) {
      setSubscribers([newSub, ...subscribers]);
      setSubscribed(true);
      setSubscriberEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/70 backdrop-blur-xl pt-16 pb-12 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Newsletter & Follower Box */}
        <div
          className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 shadow-xl max-w-3xl mx-auto flex flex-col gap-6"
          data-aos="fade-up"
        >
          {/* 1. Engagement Toolbar (👏 Claps, 💬 Comments, 🔁 Share) */}
          <div className="flex items-center gap-6 pb-4 border-b border-gray-200/70 dark:border-zinc-800 text-gray-700 dark:text-gray-300">
            {/* Claps */}
            <button
              onClick={handleClap}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer group"
              title="Clap / Applaud"
            >
              <span className={`text-2xl transform transition-transform ${hasClapped ? "scale-135" : "group-hover:scale-115"}`}>
                👏
              </span>
              <span className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                {claps}
              </span>
            </button>

            {/* Comment / Feedback */}
            <a
              href="#guestbook"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer group"
              title="View Feedback & Guestbook"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-600 dark:text-gray-400" />
              <span className="text-xs">Feedback</span>
            </a>

            {/* Share / Repost */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer group"
              title="Share / Copy Link"
            >
              <Repeat className="w-5 h-5 group-hover:scale-110 transition-transform text-gray-600 dark:text-gray-400" />
              <span className="text-xs">{shareNotice ? "Copied Link!" : "Share"}</span>
            </button>
          </div>

          {/* 2. Author Profile - Starts at 0 followers & 0 following */}
          <div className="flex items-center gap-4 pt-1">
            <img
              src={hero}
              alt="Yechale Mulu"
              className="w-16 h-16 rounded-full object-cover border border-gray-200 dark:border-zinc-700 shadow-md shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                Written by Yechale Mulu
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {followersCount} {followersCount === 1 ? "follower" : "followers"}
                </span>{" "}
                &middot; {followingCount} following
              </p>
            </div>
          </div>

          {/* 3. Subscription Input Form */}
          <div className="pt-2">
            {alreadySubscribed && (
              <div className="mb-3 p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>You have already subscribed with this account ({subscriberEmail})!</span>
              </div>
            )}

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing! Your profile image was added below.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email to subscribe..."
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/90 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-red-500 flex-1"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 active:scale-95 transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>

          {/* 4. Overlapping Avatar Mode for Subscriber Profiles with Personal Profile Images */}
          {subscribers.length > 0 && (
            <div className="pt-4 border-t border-gray-200/70 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Overlapping Avatars Stack with Real Email Profile Photos */}
                <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                  {subscribers.slice(0, 12).map((sub, idx) => {
                    return (
                      <div
                        key={sub.id || idx}
                        className="relative group inline-block"
                      >
                        <div className="w-9 h-9 rounded-full ring-2 ring-white dark:ring-zinc-900 overflow-hidden bg-gradient-to-tr from-red-600 to-red-800 shadow-xs hover:z-20 hover:scale-120 transition-transform duration-200 cursor-pointer">
                          <img
                            src={
                              sub.avatarUrl ||
                              `https://unavatar.io/${encodeURIComponent(sub.email)}?fallback=https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(sub.email)}`
                            }
                            alt={sub.email}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(sub.email)}`;
                            }}
                          />
                        </div>

                        {/* Hover Tooltip with Subscriber Email */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none">
                          <span className="bg-zinc-900 text-white text-[11px] font-mono px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap">
                            {sub.email}
                          </span>
                          <span className="w-1.5 h-1.5 bg-zinc-900 rotate-45 -mt-0.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {followersCount} {followersCount === 1 ? "subscriber" : "subscribers"} joined
                </span>
              </div>

              {subscribers.length > 12 && (
                <span className="text-[11px] font-mono text-red-600 dark:text-red-400">
                  +{subscribers.length - 12} more
                </span>
              )}
            </div>
          )}

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200/60 dark:border-zinc-800/60">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-extrabold text-lg text-gray-900 dark:text-white">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-red-600 to-red-800 text-white flex items-center justify-center font-black text-xs">
                YM
              </span>
              <span>Yechale Mulu</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Health Informatics Specialist &amp; Full-Stack Software Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, alt, link }) => (
              <a
                key={alt}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="rounded-full border border-red-500/20 p-2.5 text-gray-600 dark:text-gray-300 transition-all hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105 shadow-sm"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <p className="flex items-center gap-1">
              &copy; {currentYear} Made with <FaHeart className="text-red-500 w-3 h-3" /> by Yechale Mulu
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
