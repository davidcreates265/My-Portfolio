const WhatIDo = () => {
    return (
      <section id="what-i-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Full Stack Development</h3>
              <p>I create responsive and scalable web applications using modern technologies and best practices.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
              <p>I analyze complex datasets to extract valuable insights and drive data-informed decision-making.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Database Management</h3>
              <p>I design and optimize database structures to ensure efficient data storage and retrieval.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhatIDo
  
  