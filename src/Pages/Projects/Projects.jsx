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
import { Link } from 'react-router';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    // const [selectedProject, setSelectedProject] = useState(null);

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
                                <a href={project.live} target="_blank" rel="noreferrer" className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded text-sm">Live</a>
                                <a href={project.githubC} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Client Code</a>
                                <a href={project.githubS} target="_blank" rel="noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">Server Code</a>
                                
                                <Link to={`/projectDetails/${project.id}`} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm">
                                    Details
                                </Link>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="lg:w-1/2 p-6">
                            <img src={project.image} alt={project.title} className="w-full h-40 lg:h-full rounded-3xl object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
