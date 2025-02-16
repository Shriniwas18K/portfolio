import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <RevealOnScroll>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center relative">
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">
                        Hi, I am{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 ">
                            Sharqawy
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        This is the home section of my portfolio website and
                        description ... pla pla pla Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Inventore cumque quia
                        facilis provident quod impedit magnam ipsam dolore
                        ducimus atque consequuntur amet vero, sed earum
                        repellendus blanditiis voluptates illo repellat.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a>
                            <button
                                href="#projects"
                                className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden
                              hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f6]">
                                View Projects
                            </button>
                        </a>
                        <a>
                            <button
                                href="#contact"
                                className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 relative overflow-hidden 
                              hover:-translate-y-0.5 hover:shadow-[0_0_15px_#3b82f6] hover:bg-blue-500/10 hover:text-white">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
