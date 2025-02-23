import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    const frontendSkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Tailwind CSS',
    ];

    const backendSkills = ['Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS'];

    return (
        <RevealOnScroll>
            <section
                id="about"
                className="min-h-screen flex justify-center items-center py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold  mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0077CC] to-[#3399FF]   text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-[#999999]/50 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-4 00 mb-6">
                            I am a software engineer with a passion for web
                            development and design. I am a self-taught
                            programmer who enjoys learning new technologies and
                            creating beautiful and functional websites.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-500/10 text-[#3399FF] rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-500/10 text-[#3399FF] rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-[#999999]/50 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                🏫 Education
                            </h3>

                            <ul className="text-gray-400">
                                <li className="text-gray-400 mb-2">
                                    <strong>BSc in Computer Engineering</strong>
                                </li>
                                <li className="text-gray-400">
                                    Ain Shams University (2023-2027)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-[#999999]/50 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-400">
                                <div>
                                    <h4>SWE in EGY (rjiejriweijr)</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Ut neque modi
                                        voluptates, consectetur, excepturi odit
                                        nam enim
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
