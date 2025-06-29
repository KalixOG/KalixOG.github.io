import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('Crafting immersive stories through code, motion, and meaning.');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 section-gradient">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-lg opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-violet-500 to-acid-green rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-12 h-12 border-2 border-electric-cyan rotate-45 opacity-40 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 3D Avatar Placeholder */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto bg-gradient-to-br from-electric-blue via-violet-500 to-electric-cyan rounded-full flex items-center justify-center text-6xl font-bold relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/80 to-electric-cyan/80 group-hover:opacity-60 transition-opacity duration-300"></div>
            <span className="relative z-10 text-gray-50 tech-glow">K</span>
            <div className="absolute inset-0 rounded-full animate-pulse-glow bg-gradient-to-r from-electric-blue/50 to-electric-cyan/50"></div>
          </div>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-electric-blue via-violet-500 to-electric-cyan bg-clip-text text-transparent animate-gradient-shift neon-glow">
          Kaavya Agrawal
        </h1>

        {/* Glitch Effect Tagline */}
        <div className="mb-12 relative">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed glitch-text">
            {glitchText}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-vivid-orange to-vivid-yellow rounded-full text-gray-950 font-semibold button-glow cursor-pointer"
          >
            <span className="flex items-center gap-2 relative z-10">
              <Eye size={20} />
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-vivid-orange/80 to-vivid-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-electric-blue rounded-full text-gray-50 font-semibold hover:border-electric-cyan hover:text-electric-cyan hover:shadow-lg hover:shadow-electric-cyan/30 transition-all duration-300 cursor-pointer">
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-electric-blue" />
        </div>
      </div>
    </section>
  );
};

export default Hero;