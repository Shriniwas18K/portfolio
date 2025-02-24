import { useState, useEffect } from 'react';

export const Header = () => {
    const headerItems = ['Home', 'About', 'Projects', 'Contact'];
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 120); // Show glass effect after 50px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`z-50 fixed top-4 left-1/2 -translate-x-1/2 px-5 py-3 md:px-7 md:py-4
                        rounded-full flex items-center gap-3 md:gap-8 text-text-light dark:text-text-dark text-sm md:text-md
                        transition-all duration-300
                        ${isScrolled ? 'bg-white/10 dark:bg-black/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            {headerItems.map((item) => (
                <a
                    href={`#${item.toLowerCase()}`}
                    key={item}
                    className="hover:text-[#0077CC] transition">
                    {item}
                </a>
            ))}
        </div>
    );
};
