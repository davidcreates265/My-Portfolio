const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2020 - Present',
      description: 'Lead development of complex web applications using React, Node.js, and PostgreSQL.',
    },
    {
      title: 'Data Analyst',
      company: 'Data Insights Co.',
      period: 'Jun 2018 - Dec 2019',
      description: 'Conducted in-depth data analysis and created visualizations to drive business decisions.',
    },
    {
      title: 'Junior Web Developer',
      company: 'Web Creations LLC',
      period: 'Sep 2016 - May 2018',
      description: 'Developed and maintained client websites using HTML, CSS, and JavaScript.',
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0">
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

