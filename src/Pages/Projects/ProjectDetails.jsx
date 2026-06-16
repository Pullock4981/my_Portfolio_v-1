import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
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
                const found = data.find(p => p.id.toString() === id);
                if (!found) throw new Error('Project not found');
                setProject(found);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading project...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center text-red-500">
                    <p>Error: {error}</p>
                    <Link to="/projects" className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <div className="text-center text-gray-400">
                    <p>Project not found</p>
                    <Link to="/projects" className="text-blue-400 underline hover:text-blue-300 mt-4 inline-block">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen p-6 lg:p-10 max-w-6xl mx-auto space-y-8">
            {/* Back Button */}
            <div className="-mb-4">
                <Link to="/projects" className="text-sky-400 underline hover:text-sky-300 inline-block">
                    ← Back to Projects
                </Link>
            </div>

            <h1 className="text-4xl font-bold text-center">{project.title}</h1>

            <div className="w-full h-64 lg:h-96">
                <ImageCarousel 
                    images={project.images || project.image} 
                    title={project.title}
                    autoPlayInterval={3000}
                />
            </div>

            <div>
                <p className="text-gray-300 text-lg">{project.description}</p>
            </div>

            {/* Long Description */}
            {project.longDescription && (
                <div>
                    <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Project Overview</h2>
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
                </div>
            )}

            {/* Features */}
            <div>
                <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Key Features</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Features Description */}
            {project.featuresDescribe && (
                <div>
                    <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Feature Descriptions</h2>
                    <ul className="space-y-4">
                        {project.featuresDescribe.map((item, idx) => (
                            <li key={idx}>
                                <p className="text-lg font-semibold text-white">{item.title}</p>
                                <p className="text-gray-400 text-sm">{item.detail}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technology Stack */}
            <div>
                <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-700 text-xs px-3 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Error Handling Section */}
            {project.error && (
                <div>
                    <h2 className="text-2xl font-semibold mb-2 border-b border-gray-700 pb-1">Problems & Solutions</h2>
                    <ul className="space-y-4">
                        {project.error.map((item, idx) => (
                            <li key={idx}>
                                <p className="text-lg text-red-400 font-semibold">Problem: {item.problem}</p>
                                <p className="text-green-400 text-sm">Solution: {item.solution}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-6">
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded transition"
                >
                    Live
                </a>
                <a
                    href={project.githubC}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded transition"
                >
                    Client
                </a>
                <a
                    href={project.githubS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded transition"
                >
                    Server
                </a>
            </div>

        </div>
    );
};

export default ProjectDetails;
