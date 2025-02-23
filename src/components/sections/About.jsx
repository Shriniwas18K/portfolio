import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    // All data is now in a flexible structure
    const aboutMe = {
        description:
            'I am a software engineer with a passion for web development and design. I am a self-taught programmer who enjoys learning new technologies and creating beautiful and functional websites.',
        skills: [
            {
                category: 'Frontend',
                technologies: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'React',
                    'Tailwind CSS',
                ],
            },
            {
                category: 'Backend',
                technologies: [
                    'Node.js',
                    'Express',
                    'MongoDB',
                    'Firebase',
                    'AWS',
                ],
            },
            {
                category: 'DevOps',
                technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
            },
            {
                category: 'AI/ML',
                technologies: [
                    'Python',
                    'TensorFlow',
                    'PyTorch',
                    'Scikit-learn',
                ],
            },
        ],
        education: {
            degree: 'BSc in Computer Engineering',
            university: 'Ain Shams University',
            years: '2023-2027',
        },
        workExperience: [
            {
                position: 'Software Engineer',
                company: 'EGY Tech',
                description:
                    'Worked on developing and maintaining full-stack web applications, focusing on backend optimization and scalable architectures.',
            },
            {
                position: 'Intern',
                company: 'XYZ Solutions',
                description:
                    'Gained experience in building cloud-based applications and working with microservices.',
            },
        ],
    };

    return (
        <RevealOnScroll>
            <section
                id="about"
                className="min-h-screen flex justify-center items-center py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0077CC] to-[#3399FF] text-center">
                        About Me
                    </h2>

                    {/* About Me Description */}
                    <div className="rounded-xl p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-400 mb-6">
                            {aboutMe.description}
                        </p>

                        {/* Skills (Fully Dynamic) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {aboutMe.skills.map((skillCategory, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">
                                        {skillCategory.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategory.technologies.map(
                                            (tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-blue-500/10 text-[#3399FF] rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {/* Education */}
                        <div className="p-6 rounded-xl border border-[#999999]/50 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>
                            <ul className="text-gray-400">
                                <li className="text-gray-400 mb-2">
                                    <strong>{aboutMe.education.degree}</strong>
                                </li>
                                <li className="text-gray-400">
                                    {aboutMe.education.university} (
                                    {aboutMe.education.years})
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience */}
                        <div className="p-6 rounded-xl border border-[#999999]/50 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-400">
                                {aboutMe.workExperience.map((job, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold">
                                            {job.position} @ {job.company}
                                        </h4>
                                        <p>{job.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
