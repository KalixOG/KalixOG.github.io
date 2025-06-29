import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Camera, PenTool, BookOpen, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      icon: Camera,
      name: '3D Animation',
      description: 'Modeling, rigging, and rendering immersive 3D experiences',
      level: 85,
      color: 'from-electric-blue to-electric-cyan'
    },
    {
      icon: Code,
      name: 'Development',
      description: 'Full-stack development with React, Flutter, and modern frameworks',
      level: 90,
      color: 'from-violet-500 to-acid-green'
    },
    {
      icon: Palette,
      name: 'Graphic Design',
      description: 'UI/UX design and visual identity creation',
      level: 80,
      color: 'from-electric-cyan to-violet-500'
    },
    {
      icon: PenTool,
      name: 'Content Writing',
      description: 'Storytelling through compelling scripts and content',
      level: 88,
      color: 'from-vivid-orange to-vivid-yellow'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Started Coding Journey',
      description: 'Began with HTML/CSS and fell in love with creating digital experiences'
    },
    {
      year: '2022',
      title: 'Discovered 3D Animation',
      description: 'Dove into Blender and started creating immersive 3D worlds'
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description: 'Expanded into React, Node.js, and mobile app development'
    },
    {
      year: '2024',
      title: 'Creative Synthesis',
      description: 'Combining all skills to craft unique digital experiences'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden section-gradient" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6 gradient-text neon-glow">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-cyan mx-auto mb-8"></div>
        </div>

        {/* Bio Section */}
        <div className={`max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-8 hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full flex items-center justify-center mr-4">
                <Zap className="text-gray-50" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-50 tech-glow">Hi, I'm Kaavya!</h3>
                <p className="text-electric-blue">Creator • Developer • Storyteller</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a 15-year-old Class 12 PCM student preparing for the JEE, but that's just one part of my story. 
              I specialize in blending storytelling with 3D animation, writing, design, and development to build 
              digital experiences that feel alive. Whether I'm crafting immersive 3D worlds, developing responsive 
              web applications, or writing compelling content, I believe in the power of creativity to transform ideas into reality.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-center mb-12 text-gray-50 tech-glow ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card p-6 hover-lift group cursor-pointer ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-gray-50" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-50 mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                
                {/* Skill Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ${isVisible ? '' : 'w-0'}`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-50 tech-glow">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-electric-blue to-electric-cyan"></div>
            
            {timeline.map((item, index) => (
              <div key={item.year} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full border-4 border-gray-950"></div>
                
                {/* Content Card */}
                <div className={`glass-card p-6 ml-12 md:ml-0 max-w-sm hover-lift ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="text-electric-blue font-bold text-lg mb-2">{item.year}</div>
                  <h4 className="text-gray-50 font-semibold text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Info */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <BookOpen className="text-electric-cyan mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-50 mb-2 tech-glow">Current Education</h3>
            <p className="text-electric-blue font-semibold">Class 12 PCM | Preparing for JEE</p>
            <p className="text-gray-400 mt-4">
              Balancing academic excellence with creative pursuits, preparing for engineering while building digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;