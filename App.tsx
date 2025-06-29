import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={`min-h-screen bg-gray-950 text-gray-50 relative overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
      <CustomCursor />
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-400 border-t border-electric-blue/20 bg-gradient-to-r from-gray-950 via-gray-900/50 to-gray-950">
        <p>&copy; 2025 Kaavya Agrawal. Crafted with imagination and code.</p>
      </footer>
    </div>
  );
}

export default App;