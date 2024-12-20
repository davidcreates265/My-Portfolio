'use client'

import { useState } from 'react'

type Skill = {
  name: string;
  description: string;
};

const skillsData: Skill[] = [
  { name: 'JavaScript', description: 'Proficient in modern JavaScript, including ES6+ features.' },
  { name: 'React', description: 'Experienced in building complex UIs with React and its ecosystem.' },
  { name: 'Node.js', description: 'Skilled in server-side JavaScript and building RESTful APIs.' },
  { name: 'Python', description: 'Proficient in Python for data analysis and backend development.' },
  { name: 'SQL', description: 'Experienced in writing complex queries and managing relational databases.' },
  { name: 'Data Visualization', description: 'Skilled in creating insightful visualizations using tools like D3.js and Tableau.' },
]

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillsData.map((skill) => (
            <button
              key={skill.name}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                selectedSkill === skill ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedSkill(selectedSkill && selectedSkill.name === skill.name ? null : skill)}
            >
              {skill.name}
            </button>
          ))}
        </div>
        {selectedSkill && (
          <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">{selectedSkill.name}</h3>
            <p>{selectedSkill.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills

