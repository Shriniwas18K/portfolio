import './App.css';
import './index.css';
import { Header } from './components/Header';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { useState, useEffect } from 'react';

function App() {
    // Dark mode logic
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
