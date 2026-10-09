import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import contactImg from "../assets/image2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "", // Anti-spam honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If honeypot is filled, silently ignore spam bot
    if (formData._honey) {
      setIsSent(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send directly to yechalemulu61@gmail.com via FormSubmit with spam filter
      const response = await fetch("https://formsubmit.co/ajax/yechalemulu61@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Client Message: ${formData.subject || formData.name}`,
          _captcha: "false",
          _template: "table",
          _honey: formData._honey,
        }),
      });

      // Also mirror to local backend API if active
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 6000);
      } else {
        // Fallback open mailto directly if network blocked
        window.location.href = `mailto:yechalemulu61@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
        setIsSent(true);
      }
    } catch (err) {
      // Fallback
      window.location.href = `mailto:yechalemulu61@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setIsSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Mail className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-300">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's Build Something <span className="text-red-600 dark:text-red-400">Extraordinary</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Whether you have a health tech project, full-stack web application, or employment opportunity, feel free to send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form */}
          <div
            className="lg:col-span-7 bg-white/70 dark:bg-zinc-900/60 p-8 sm:p-10 rounded-3xl border border-red-500/20 backdrop-blur-xl shadow-xl"
            data-aos="fade-right"
          >
            {isSent && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! Your message has been received. I will reply to you promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Invisible Bot Spam Trap */}
              <input
                type="text"
                name="_honey"
                value={formData._honey}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Samuel Kassahun"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 dark:text-white text-xs text-gray-900 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. samuel@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 dark:text-white text-xs text-gray-900 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Web Development Opportunity"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 dark:text-white text-xs text-gray-900 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project goals, timeline, and requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/80 dark:text-white text-xs text-gray-900 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl text-white font-bold text-xs bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 active:scale-95 transition-all cursor-pointer shadow-lg disabled:opacity-50 mt-2"
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Quick Contact Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-zinc-900/60 border border-red-500/20 backdrop-blur-xl shadow-md space-y-6">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="mailto:yechalemulu61@gmail.com"
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors font-medium"
                  >
                    yechalemulu61@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Hawassa University, Sidama, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">Direct &amp; Telegram</h4>
                  <a
                    href="https://t.me/yechalesew21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors font-medium block"
                  >
                    @yechalesew21 (Telegram)
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Consultation Notice */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-600/15 via-red-800/10 to-transparent border border-red-500/20 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="font-bold text-red-600 dark:text-red-400 block mb-1">
                ⚡ Rapid Response Guarantee
              </span>
              I typically reply within 24 hours to all project inquiries and interview scheduling requests.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;