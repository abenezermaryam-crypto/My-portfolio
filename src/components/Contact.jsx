import { Send } from "lucide-react"
import contactImg from "../assets/image2.jpg"
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen items-center relative overflow-hidden py-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
             <div className="text-center mb-6"
                  data-aos = 'fade-up'>
                  <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                        <span className=" w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-sm font-medium dark:text-red-200 text-gray-700">
                               Contact
                        </span>
                   </div>
                    <h2 className="text-2xl mb-6 sm:text-4xl lg:text-5xl font-bold dark:text-gray-100 text-gray-900">
                            Contact <span className="text-red-500 mt-4 dark:text-red-300">Me</span>
                   </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <form  onSubmit={(e) => e.preventDefault()}
                          className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 
                          border-gray-800 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1 "
                          data-aos = 'fade-right'
                          >
                            <input type="text"
                                    placeholder="Name"
                                    className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 
                                    dark:bg-zinc-900/60 border-gray-200 bg-white dark:text-white
                                    focus:border-red-500 dark:focus:border-red-400 " required/>
                            <input type="email"
                                    placeholder="email"
                                    className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 
                                    dark:bg-zinc-900/60  border-gray-200 bg-white dark:text-white
                                    focus:border-red-500 dark:focus:border-red-400 "
                                    required 
                                    data-aos = 'fade-up'
                                    data-aos-delay = '200' />
                             <textarea rows='5'
                                    placeholder="message"
                                    className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800
                                     dark:bg-zinc-900/50  border-gray-200 bg-white dark:text-white
                                    focus:border-red-500 dark:focus:border-red-400 "
                                    required 
                                    data-aos = 'fade-up'
                                    data-aos-delay = '300' />
                                    <button type="submit"
                                             className="inline-flex items-center justify-center gap-2 py-4 rounded-xl text-white font-medium
                                             text-base bg-red-500 hover:bg-red-700 acrive:scale-98 transition-all cursor-pointer w-full sm:fit"
                                             data-aos = 'fade-up'
                                             data-aos-delay='300' >
                                      <Send size={22} /> Send Message
                                    </button>
                      </form>
                      <div className="flex justify-center w-full relative order-1 lg:order-2"
                          data-aos='fade-left' >
                            <div className="absolute inset-0 flex  items-center justify-center pointer-events-none">
                              <div className="w-75 h-90 rounded-full bg-red-400/65 dark:bg-red-500/40 blur-3xl scale-110" />
                              </div>
                              <img src={contactImg} alt="contact" className="w-96 h-110 object-cover rounded-3xl relative z-10"/>
                            </div>
                          </div>
          </div>
    </section>
  )
}

export default Contact