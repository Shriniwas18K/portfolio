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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399FF] to-[#0077CC]">
                            Sharqawy
                        </span>
                    </h1>
                    <p className="text-[#999999] text-lg mb-8 max-w-lg mx-auto">
                        this is Sharawy and i am a full stack developer and i am
                        working in this field for 5 years and i am very happy to
                        work in this field and i am very happy to work in this
                        filed , these knid words are written by Eng . Nagy Ahmed
                        who is CEO of Innovation start-up for SW soluations .
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a>
                            <button
                                href="#projects"
                                className="bg-[#0077CC] text-[#EEEEEE] px-6 py-3 rounded-full font-medium transition relative overflow-hidden
                              hover:-translate-y-0.2 hover:shadow-[0_0_15px_#0077CC]">
                                View Projects
                            </button>
                        </a>
                        <a>
                            <button
                                href="#contact"
                                className="border border-[#0077CC]/50 text-[#0077CC] px-6 py-3 rounded-full font-medium transition-all duration-200 relative overflow-hidden 
                              hover:-translate-y-0.2 hover:shadow-[0_0_15px_#0077CC] hover:bg-[0_0_15px_#0077CC]">
                                Contact Me
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
};
