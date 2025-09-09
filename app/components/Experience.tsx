import { Calendar, Building } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Malawi Liverpool Wellcome Research Programme",
      period: "Aug 2024 - Present",
      description: "Currently working as a Software Developer, primarily developing applications with Next.js and Go, while also contributing as a Data Analyst and building solutions with Power Apps when needed.",
    },
    {
      title: "Full Stack Developer",
      company: "The Mile Ltd",
      period: "Oct 2022 - Dec 2023",
      description: "Worked as a Full Stack Developer, building and maintaining web applications with Next.js, handling both front-end and back-end tasks to deliver scalable features, optimized performance, and a smooth user experience.",
    },
    {
      title: "Software Developer",
      company: "Auroral Borealis",
      period: "Jan 2022 - Oct 2022",
      description: "Developed and optimized an e-commerce platform using Next.js, creating responsive, user-friendly interfaces to deliver a smooth shopping experience.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center text-cyan-400 font-semibold mb-2">
                    <Building size={16} className="mr-2" />
                    {exp.company}
                  </div>
                  <div className="flex items-center text-slate-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </div>
                <div className="hidden md:block w-1 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full ml-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
