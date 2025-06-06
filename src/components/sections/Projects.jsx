import { RevealOnScroll } from '../RevealOnScroll';
import { projectsData } from '../../data/projectsData';

export const Projects = () => {
    // Project Data
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#3399FF] to-[#0077CC] text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projectsData.map((project, index) => (
                            <div
                                key={index}
                                className="glass p-6 rounded-xl border border-[#999999]/50 
                                           hover:-translate-y-1 hover:border-blue-500/30
                                           hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                                           transition-all">
                                <h3 className="text-xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-[#999999] mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-500/10 text-[#3399FF] rounded-full text-sm 
                                                       hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] 
                                                       transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#3399FF] hover:text-blue-500 transition-colors my-4">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
