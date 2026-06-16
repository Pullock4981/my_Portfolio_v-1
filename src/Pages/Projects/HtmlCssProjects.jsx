import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

const HtmlCssProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('/projects.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                console.error("Failed to fetch project data:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    // Filter HTML/CSS projects
    const htmlCssProjects = projects.filter(p => 
        p.category === 'HTML/CSS' || p.category === 'HTML & CSS'
    );

    // Project Card Component
    const ProjectCard = ({ project }) => (
        <div className="flex flex-col-reverse bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition h-full">
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
                        {project.features?.slice(0, 5).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies?.map((tech, idx) => (
                            <span key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 mt-auto">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 px-2 sm:px-4 py-2 rounded text-sm text-center">
                            Live
                        </a>
                    )}
                    {project.githubC && (
                        <a href={project.githubC} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 px-2 sm:px-4 py-2 rounded text-sm text-center">
                            Client Code
                        </a>
                    )}
                    {project.githubS && (
                        <a href={project.githubS} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 px-2 sm:px-4 py-2 rounded text-sm text-center">
                            Server Code
                        </a>
                    )}
                    <Link to={`/projectDetails/${project.id}`} className="bg-green-600 hover:bg-green-700 px-2 sm:px-4 py-2 rounded text-sm text-center">
                        Details
                    </Link>
                </div>
            </div>
            <div className="h-64 w-full">
                <ImageCarousel 
                    images={project.images || project.image} 
                    title={project.title}
                    autoPlayInterval={3000}
                />
            </div>
        </div>
    );

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading projects...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center text-red-500">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen max-w-7xl md:mx-auto mt-4 md:px-20 px-4 py-8">
            <div className="mb-8">
                <Link to="/projects" className="text-orange-400 hover:text-orange-300 underline mb-4 inline-block">
                    ← Back to All Projects
                </Link>
                <h1 className="text-4xl font-bold text-center mb-2">HTML & CSS Projects</h1>
                <p className="text-gray-400 text-center">Static websites and HTML/CSS projects</p>
            </div>

            {htmlCssProjects.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {htmlCssProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-400 py-20">
                    <p>No HTML/CSS projects found.</p>
                </div>
            )}
        </div>
    );
};

export default HtmlCssProjects;

