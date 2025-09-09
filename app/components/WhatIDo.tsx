import { Code, Server, BarChart3 } from "lucide-react"

const WhatIDo = () => {
  const services = [
    {
      title: "Front-end Development",
      description:
        "As a front-end developer, I craft visually appealing, user-friendly systems that not only look great but also function seamlessly across all devices. I specialize in turning your ideas into interactive, responsive designs using the latest web technologies and frameworks. My goal is to deliver a polished, fast, and intuitive experience that keeps users engaged and enhances your brand's online presence.",
      ending: "Let's create something amazing together!",
      icon: Code,
    },
    {
      title: "Back-end Development",
      description:
        "As a back-end developer, I build robust, secure, and scalable server-side solutions that power the functionality behind your application. From database management to API integration, I ensure smooth data flow, optimized performance, and seamless interaction between the user interface and your business logic. With a focus on reliability and security, I create the backbone that allows your platform to grow and thrive.",
      ending: "Let's make your vision a reality with a solid back-end foundation!",
      icon: Server,
    },
    {
      title: "Data Analysis",
      description:
        "As a data analyst, I help you turn raw data into actionable insights that drive informed decisions. Using advanced analytical tools and techniques, I uncover trends, patterns, and key metrics that provide clarity and guide your business strategy. Whether you're looking to optimize operations, improve customer experiences, or identify new opportunities, I transform complex data into clear, impactful reports that support your goals.",
      ending: "Let's unlock the power of your data together!",
      icon: BarChart3,
    },
  ]

  return (
    <section id="what-i-do" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          What I <span className="text-cyan-400">Do</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg mr-4 group-hover:shadow-lg transition-shadow">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
              <p className="text-cyan-400 font-medium">{service.ending}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
