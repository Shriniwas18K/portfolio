import './App.css';
import './index.css';
import { Header } from './components/Header';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { useState, useEffect } from 'react';

/**
 * 
 * nagy was playing in this area 
 * i am writing some thing about the perfomance of mac book i like this so much 
 * the most favouruetthing that i know abdo aja from louxr he is a very iomporatant man in my schholarship 
 * int good boy ya sg

Light Mode: 
	•	Background: #F5F5F5 (Soft Light Gray – Almost White)
	•	Text: #333333 (Dark Gray – High Contrast)
	•	Primary Accent (Main UI Elements & Buttons): #FF8800 (Bright Orange – Stands Out)
	•	Secondary Accent (Subtle UI Elements & Secondary Buttons): #666666 (Medium Gray)
	•	Hook Color (For Your Name / Special Text): #0077CC (Vibrant Blue – Attention-Grabbing)

Dark Mode:
	•	Background: #181818 (Dark Gray – Almost Black)
	•	Text: #EEEEEE (Soft Light Gray – Easy on the Eyes)
	•	Primary Accent: #FFAA33 (Warm Orange – Softer in Dark Mode)
	•	Secondary Accent: #999999 (Gray – Less Important Text)
	•	Hook Color: #3399FF (Lighter Vibrant Blue – Stands Out on Dark)

 */
function App() {
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
        <div className="min-h-screen">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
