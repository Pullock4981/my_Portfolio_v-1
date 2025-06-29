// import React from 'react';

// const Projects = () => {
//     return (
//         <div>
//             <h1>
//                 this is projects section
//             </h1>
//         </div>
//     );
// };

// export default Projects;

import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Failed to fetch project data:", err));
  }, []);

  return (
    <div className="bg-black text-white max-w-7xl md:mx-auto mt-4 md:px-20 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col-reverse lg:flex-row-reverse bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            {/* Left: Info */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
                  {project.features.slice(0, 5).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={project.live} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Live</a>
                <a href={project.githubC} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Client Code</a>
                <a href={project.githubS} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Server Code</a>
                <button
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:w-1/2 p-6">
              <img src={project.image} alt={project.title} className="w-full h-40 lg:h-full rounded-3xl object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1f1f1f] rounded-xl max-w-3xl w-full p-8 relative text-white">
            <button
              className="absolute top-4 right-4 text-xl hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside mb-4 text-sm text-gray-300 space-y-1">
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded">{tech}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={selectedProject.live} target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">Live</a>
                <a href={selectedProject.githubC} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Client Code</a>
                <a href={selectedProject.githubS} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Server Code</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
