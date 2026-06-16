import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

const FeaturedProjects = () => {
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                // Get the top 2 React/Next.js projects or specific ones
                const topProjects = data.slice(0, 2);
                setFeatured(topProjects);
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return null;

    return (
        <div className="max-w-7xl md:mx-auto md:px-20 px-4 mb-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    <p className="text-gray-400 mt-1">Some of my recent and best works</p>
                </div>
                <Link to="/projects" className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-2 transition-colors whitespace-nowrap sm:pb-1">
                    Explore All <span className="text-xl">→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map(project => (
                    <div key={project.id} className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-800 flex flex-col">
                        <div className="h-48 w-full overflow-hidden">
                            <img 
                                src={project.image || (project.images && project.images[0])} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies?.slice(0, 3).map((tech, idx) => (
                                    <span key={idx} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{tech}</span>
                                ))}
                                {project.technologies?.length > 3 && (
                                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                                )}
                            </div>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                                <div className="flex gap-3">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">Live Demo</a>
                                    )}
                                </div>
                                <Link to={`/projectDetails/${project.id}`} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProjects;
