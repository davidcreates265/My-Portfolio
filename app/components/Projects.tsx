import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Sapitwa HPC Online Documentation",
      description: "MLW's Advanced Research Computing Platform",
      image: "/images/hpc.png",
      link: "https://sapitwa.mlw.mw/sapitwa-docs/index.html",
      github: "#",
      tech: ["HTML", "tailwindcss"],
    },
    {
      title: "Kutenga E-commerce Platform",
      description: "In 2022, I was tasked with developing an e-commerce platform for a local business known as Auroral Borealis.",
      image: "/images/kutenga.png",
      link: "https://kutenga.mw/",
      github: "#",
      tech: ["Next.js", "Redux", "Django"],
    },
    {
      title: "Letter of Intent",
      description: "In 2024, I was tasked with building a web application for a research institution to manage the Letter of Intent process.",
      image: "/images/coming.png",
      link: "#",
      github: "#",
      tech: ["Next.js", "Socket.io", "MongoDB", "tailwindcss"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-slate-300 hover:text-cyan-400 font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center text-slate-300 hover:text-purple-400 font-semibold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
