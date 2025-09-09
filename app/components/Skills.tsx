"use client"

import { useState } from "react"

type Skill = {
  name: string
  description: string
}

const skillsData: Skill[] = [
  {
    name: "JavaScript",
    description: "Proficient in modern JavaScript, including ES6+ features.",
  },
  {
    name: "React",
    description: "Experienced in building complex UIs with React and its ecosystem.",
  },
  {
    name: "Node.js",
    description: "Skilled in server-side JavaScript and building RESTful APIs.",
  },
  {
    name: "Python",
    description: "Proficient in Python for data analysis and backend development.",
  },
  {
    name: "SQL",
    description: "Experienced in writing complex queries and managing relational databases.",
  },
  {
    name: "Data Visualization",
    description: "Skilled in creating insightful visualizations using tools like Power BI etc.",
  },
  {
    name: "NoSQL",
    description:
      "Experienced in designing flexible data models and managing NoSQL databases like MongoDB and Cassandra.",
  },
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-purple-400">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillsData.map((skill) => (
            <button
              key={skill.name}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedSkill === skill
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-600 hover:border-cyan-400/50"
              }`}
              onClick={() => setSelectedSkill(selectedSkill && selectedSkill.name === skill.name ? null : skill)}
            >
              {skill.name}
            </button>
          ))}
        </div>
        {selectedSkill && (
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-xl transition-all duration-300 ease-in-out max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {selectedSkill.name}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">{selectedSkill.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
