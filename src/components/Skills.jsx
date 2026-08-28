
const Skills = () => {
    const skills=[
        {name:"JavaScript" , percentage:75, color:"#F7DF1E" },
        {name:"react js" , percentage:85 , color:"#61DAF8" },
        {name:"Tailwind Css" , percentage:95 , color:"#06B6D4" },
        {name:"Node Js" , percentage:80 , color:"#4FC08D" },
        
    ]
  return (
   <section id="skills" className=" min-h-screen flex items-center px-4 py-20 sm:px-6 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden ">
          <div className="-top-40 -right-40 w-80 h-80 absolute bg-red-500/5 rounded-full blur-3xl">
          </div>
          <div className="-bottom-40 -left-40 w-80 h-80 absolute bg-red-500/5 rounded-full blur-3xl">
          </div>
      </div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5  rounded-full bg-red-500/5 mb-5  ">
            <span className=" w-2 h-2 rounded-full bg-red-500 animate-pulse" ></span>
            <span className="text-gray-800 dark:text-red-300 font-bold">
              Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold dark:text-gray-100 text-gray-900">
            My <span className="text-red-500 mt-4 dark:text-red-300">Skills</span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            I am a Hawassa University Health Informatics student and frontend developer crafting responsive React applications. 
            Combining user-centric web design with health data principles, I bridge intuitive UI architecture with database integration. 
            Rapidly mastering backend tools, I bring strong technical leadership and data-driven execution to full-stack engineering.
          </p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skills,index) => {
            const radius = 60;
            const circumference = 2*Math.PI*radius ;
            const offset = circumference - (
              skills.percentage/100) * circumference;
              const size =150;
              return(
                <div key={index}
                    className="flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-delay={index*100}>
                      <div className=" relative "
                           style={{width:size,height:size}} > 
                           <svg className="transform -rotate-90"
                                width={size}
                                height={size}>
                                  <circle 
                                   cx={size / 2}
                                   cy={size / 2}
                                   r={radius}
                                   fill="none"
                                   stroke="#e5e7eb"
                                   strokeWidth='10'
                                   className="dark:stroke-gray-700">
                                   </circle>
                                   <circle 
                                   cx={size / 2}
                                   cy={size / 2}
                                   r={radius}
                                   fill="none"
                                   stroke={skills.color}
                                   strokeWidth='10'
                                   strokeDasharray={circumference}
                                   strokeDashoffset={offset}
                                   strokeLinecap="round"
                                   className="transition-all duration-1000 ease-out"
                                   style={{transition: 'stroke-dashoffset 1.5s ease-in-out'}}>
                                   </circle>
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <span className="text-3xl font-bold dark:text-white text-gray-900"> {skills.percentage}% </span>
                            </div>
                           </div>
                      </div>
                      <h3 className="mt-4 text-base font-medium dark:text-white text-gray-800">
                        {skills.name}
                      </h3>
                    </div>
              )
          })}
        </div>
      </div>
   </section>
  )
}

export default Skills