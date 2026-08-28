import certificateImg from "../assets/congra (2).jpg"
import {motion} from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
const containerVariants = {
    hidden: {opacity:0},
    visible: {
        opacity:1,
        transition:{
            staggerChildren: 0.1
        }
    }
}
const itemVariants = {
    hidden: {opacity: 0 , y:20},
    visible:{
        opacity:1,
        y:0,
        transition: {
            duration: 0.5
        }
    }
}

const Certificates = () => {
 const Certificates = [
    {
        id:1,
        title: 'Frontend Developer',
        issuer: "Meta",
        credentialUrl: "/"
    },
    {
        id:2,
        title: 'Frontend Developer',
        issuer: "Meta",
        data:'2015',
        credentialUrl: "/"
    },
    {
        id:3,
        title: 'Backend  Developer',
        issuer: "IBM",
        data: '2018',
        credentialUrl: "/"
    },
    {
        id:4,
        title: 'Data Analysis',
        issuer: "ALX Ethiopia",
        data: '2012',
        credentialUrl: "/"
    },
    {
        id:5,
        title: 'UL/UX Developer',
        issuer: "Google",
        data: '2020',
        credentialUrl: "/"
    },
 ]
  return (
    <section id="certifications" className="min-h-screen items-center relative overflow-hidden py-20">
        <div className="container mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="lg:w-2/5 w-full flex justify-center" 
                      data-aos="fade-right"  >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl
                            opacity-30 group-hover:opacity-50 transition-opacity duration-500 ">  </div>
                            <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-80 lg:h-96">
                                <img src={certificateImg} alt=" certificates" className="h-full w-full relative object-cover rounded-[40%_40%_40%_40%]  transform group-hover:scale-105" />
                                <div className="absolute inset-0 border-2 border-red-500/30 rounded-[40%_40%_40%_40%] scale-110 bg-linear-to-br  group-hover:scale-115 transition-transform duration-300" />
                                <div className="absolute inset-0 border-2 border-red-500/30 rounded-[40%_40%_40%_40%]   scale-110  group-hover:scale-125 transition-transform duration-300" />
                             </div>
                        </div>
                      </div>
                      <div className=" lg:w-3/5 w-full " data-aos="fade-left">
                    <div className="inline-flex items-center  gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                            <span className=" w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-sm font-medium dark:text-red-200 text-gray-700">
                                    Certificates
                            </span>
                        </div>
                        <h2 className="text-2xl mb-6 sm:text-4xl lg:text-5xl font-bold dark:text-gray-100 text-gray-900">
                            My <span className="text-red-500 mt-4 dark:text-red-300">Certificates</span>
                        </h2>
                        <motion.div 
                             variants={containerVariants}
                              initial='hidden'
                              whileInView="visible"
                              viewport={{once:true , margin:'-100px'}}
                               className="grid grid-cols-1 border-t border-b border-gray-200/50 dark:border-zinc-800/50 w-full" 
                             >
                                 {Certificates.map((cert,index)=>(
                                    <motion.div
                                      key={cert.id}
                                      variants={itemVariants}
                                      className={` p-3 sm:p-4 flex flex-col justify-between group relative transition-colors
                                        duration-300 hover:bg-red-500/5 dark:hover:bg-red-500/10 ${index <Certificates.length -1 ? `border-b` : ``}
                                        border-gray-200/50 dark:border-gray-800/50`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="flex items-start gap-3 ">
                                                <div className=" p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 group-hover:scale-110
                                                transition-transform duration-300 shrink-0">
                                                    <Award size={20} />
                                                </div>
                                            </div>
                                            <h3 className="font-bold text-base text-gray-900 dark:text-gray-200 group-hover:text-red-600
                                            dark:group-hover:text-red-400 transition-colors">
                                                {cert.title}
                                            </h3>
                                            <span className="text-sm font-medium text-gray-600 dark:text-zinc-300 block mt-0.5">
                                                {cert.issuer}
                                            </span>
                                        
                                        <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1.5 shrink-0
                                        max-sm:border-t max-sm:border-gray-100/50 max-sm:dark:border-zinc-700/30 ">
                                            <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400">
                                                <Calendar size={20} />
                                                <span>{cert.data }</span> 
                                            </div>
                                            <a href={cert.credentialUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer" 
                                                  className="inline-flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 hover:underline"
                                                   >
                                                    Verify<ExternalLink size={18} />
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
  )
}

export default Certificates