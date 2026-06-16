import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';

const Projects = () => {
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

    // Categorize projects
    const reactProjects = projects.filter(p => 
        p.category === 'React.js' || 
        p.technologies?.some(tech => tech.toLowerCase().includes('react'))
    );
    
    const nextjsProjects = projects.filter(p => 
        p.category === 'Next.js' || 
        p.technologies?.some(tech => tech.toLowerCase().includes('next'))
    );
    
    const htmlCssProjects = projects.filter(p => 
        p.category === 'HTML/CSS' || 
        (!p.technologies?.some(tech => 
            tech.toLowerCase().includes('react') || 
            tech.toLowerCase().includes('next')
        ))
    );

    // Project Card Component
    const ProjectCard = ({ project }) => (
        <div className="flex flex-col-reverse lg:flex-row-reverse bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="lg:w-1/2 p-6 flex flex-col justify-between">
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
                <div className="flex gap-3 mt-auto flex-wrap">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded text-sm">
                            Live
                        </a>
                    )}
                    {project.githubC && (
                        <a href={project.githubC} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">
                            Client Code
                        </a>
                    )}
                    {project.githubS && (
                        <a href={project.githubS} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm">
                            Server Code
                        </a>
                    )}
                    <Link to={`/projectDetails/${project.id}`} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-sm">
                        Details
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 p-6">
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
            <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
            <p className="text-gray-400 text-center mb-12">Browse projects by category</p>

            {/* Category Navigation Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* React & Next.js Projects Card */}
                <Link 
                    to="/projects/react" 
                    className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-sky-400"
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">⚛️</div>
                        <h2 className="text-2xl font-bold mb-2 text-sky-400">React & Next.js</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            {reactProjects.length + nextjsProjects.length} {reactProjects.length + nextjsProjects.length === 1 ? 'Project' : 'Projects'}
                        </p>
                        <p className="text-gray-500 text-xs">Modern React applications</p>
                    </div>
                </Link>

                {/* HTML/CSS Projects Card */}
                <Link 
                    to="/projects/html-css" 
                    className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-orange-400"
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">🎨</div>
                        <h2 className="text-2xl font-bold mb-2 text-orange-400">HTML & CSS</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            {htmlCssProjects.length} {htmlCssProjects.length === 1 ? 'Project' : 'Projects'}
                        </p>
                        <p className="text-gray-500 text-xs">Static websites</p>
                    </div>
                </Link>

                {/* JavaScript Projects Card */}
                <Link 
                    to="/projects/javascript" 
                    className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-8 rounded-3xl hover:scale-105 transition-transform cursor-pointer border-2 border-transparent hover:border-yellow-400"
                >
                    <div className="text-center">
                        <div className="text-5xl mb-4">📜</div>
                        <h2 className="text-2xl font-bold mb-2 text-yellow-400">JavaScript</h2>
                        <p className="text-gray-400 text-sm mb-4">
                            {projects.filter(p => 
                                p.category === 'JavaScript' || 
                                (p.technologies?.some(tech => tech.toLowerCase().includes('javascript')) && 
                                 !p.technologies?.some(tech => tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')))
                            ).length} {projects.filter(p => 
                                p.category === 'JavaScript' || 
                                (p.technologies?.some(tech => tech.toLowerCase().includes('javascript')) && 
                                 !p.technologies?.some(tech => tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')))
                            ).length === 1 ? 'Project' : 'Projects'}
                        </p>
                        <p className="text-gray-500 text-xs">Vanilla JS projects</p>
                    </div>
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Total Projects: {projects.length}</h3>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <span>React/Next.js: {reactProjects.length + nextjsProjects.length}</span>
                    <span>HTML/CSS: {htmlCssProjects.length}</span>
                    <span>JavaScript: {projects.filter(p => 
                        p.category === 'JavaScript' || 
                        (p.technologies?.some(tech => tech.toLowerCase().includes('javascript')) && 
                         !p.technologies?.some(tech => tech.toLowerCase().includes('react') || tech.toLowerCase().includes('next')))
                    ).length}</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;
