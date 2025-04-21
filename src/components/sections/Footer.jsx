export const Footer = ({ darkMode, setDarkMode }) => {
    return (
        <footer className="w-full text-center py-4 border-t border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399FF] to-[#0077CC]">
                Shriniwas Kulkarni
            </span>
            . All rights reserved.
            {/* Dark Mode Toggle Button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-2 py-1 border hover:bg-[#3399FF]/30 rounded-full text-sm transition cursor-pointer">
                {darkMode ? '🌙' : '☀️'}
            </button>
        </footer>
    );
};
