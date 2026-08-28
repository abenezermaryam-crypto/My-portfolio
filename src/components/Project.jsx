import { useRef } from "react"
import project1 from "../assets/foodDelivery.jpg"
import project2 from "../assets/medical.jpg"
import project3 from "../assets/onlineShopping.jpg"
import project4 from "../assets/RealEstate.jpg"
import { ChevronLeft, ChevronRight,  ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const Project = () => {
    const scrollRef = useRef(null)

    const projectsData = [
        {
            id:1,
            image: project1,
            title: 'Food Delivery System',
            desc: 'this is the food delivery system app. Any client can order your favorite food',
            tags: ['react js' , 'tailwind css' , 'framer Motion']
        },
        {
            id:2,
            image: project2,
            title: 'Food Delivery System',
            desc: 'this is the food delivery system app. Any client can order your favorite food',
            tags: ['react js' , 'tailwind css' , 'framer Motion']
        },
        {
            id:3,
            image: project3,
            title: 'Food Delivery System',
            desc: 'this is the food delivery system app. Any client can order your favorite food',
            tags: ['react js' , 'tailwind css' , 'framer Motion']
        },
        {
            id:4,
            image: project4,
            title: 'Food Delivery System',
            desc: 'this is the food delivery system app. Any client can order your favorite food',
            tags: ['react js' , 'tailwind css' , 'framer Motion']
        },
    ]
    const infiniteProjects = [...projectsData,...projectsData,...projectsData]

    const handleScroll = (direction)=>{
        if(scrollRef.current){
            const {scrollLeft , clientWidth} = scrollRef.current
            const scrollAmount = clientWidth
            const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount
            scrollRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            })
            setTimeout(()=>{
                if(scrollRef.current){
                    const maxScroll = scrollRef.current.scrollWidth/3 
                    if(scrollRef.current,scrollLeft >= maxScroll * 2){
                        scrollRef.current.scrollLeft = maxScroll
                    }
                    else if (scrollRef.current,scrollLeft <= 0){
                        scrollRef.current.scrollLeft = maxScroll
                    }
                }
            },400)
        }

    } 
  return (
    <section id="projects" className=" py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 lg:px-14 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-14">
                <div className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5  rounded-full bg-red-500/5 mb-5  ">
                        <span className=" w-2 h-2 rounded-full bg-red-500 animate-pulse" ></span>
                        <span className="text-gray-800 dark:text-red-300 font-bold">
                        Projects
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-gray-100 text-gray-900">
                        My <span className="text-red-500 mt-4 dark:text-red-300">Projects</span>
                    </h2>
                </div>
                <div className="flex gap-4">
                    <button onClick={()=> handleScroll('left')}
                        className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800
                        dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10"
                        >
                            <ChevronLeft size={22} />
                    </button>
                    <button onClick={()=> handleScroll('right')}
                        className="p-3 rounded-full border-2 transition-all duration-300 dark:border-zinc-200 border-gray-800
                        dark:text-white text-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500/10"
                        >
                            <ChevronRight size={22} />
                    </button>
                </div>
            </div>
            <div ref={scrollRef}
                className=" flex gap-6  scrollbar-none snap-mandatory overflow-hidden w-full px-4">
                    {infiniteProjects.map((project , index) => (
                        <div key={`${project.id}-${index}`} 
                             className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start group
                             rounded-3xl overflow-hidden border-2 transition-all duration-500 dark:border-zinc-800/60 border-gray-100
                             dark:bg-zinc-900/40 bg-white  hover:border-red-500/50 dark:hover:border-red-500/50 
                             flex flex-col hover:shadow-[0_20px_40px_rgba(220,38,1,0.15)]
                                ">

                                    <div className="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-900">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500
                                        group-hover:scale-105"  />
                                       
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0" />
                                         </div>
                                         <div className="p-6 flex flex-col justify-between grow min-h-50">
                                            <div className="">
                                                <h3 className="text-lg font-bold mb-3 dark:text-white text-gray-900 group-hover:text-red-500 
                                                dark:group-hover:text-red-300 transition-colors duration-300">
                                                    {project.title}
                                                </h3>
                                                <p className="text-xs leading-relaxed mb-4 dark:text-gray-400 text-gray-700 line-clamp-2">
                                                    {project.desc}
                                                </p>
                                            </div>
                                            <div className="">
                                                <div className="flex flex-wrap gap-1.5 mb-4">
                                                    {project.tags.map((tag ,i) => (
                                                        <span key={i}
                                                        className="text-[10px] font-medium px-3 py-3 rounded-full font-mono hover:bg-red-400/30
                                                        dark:bg-red-500/10 bg-red-500/5 dark:text-red-300 text-red-600">
                                                            {tag}
                                                        </span>
                                                    ) )}
                                                </div>
                                                <div className="flex items-center gap-4 dark:border-gray-800/80 border-gray-100">
                                                    <a href="/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300
                                                    text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black"
                                                    >
                                                        <FaGithub size={22} /> Code
                                                    </a>
                                                    <a href="/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300
                                                    text-gray-600 dark:hover:text-white dark:text-gray-400 hover:text-black"
                                                    >
                                                        <ExternalLink size={22} /> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                    ) )}

            </div>
        </div>
    
    </section>
  )
}

export default Project