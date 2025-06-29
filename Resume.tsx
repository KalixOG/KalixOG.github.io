import React, { useEffect, useRef, useState } from 'react';
import { Download, Award, Briefcase, GraduationCap, Code, Palette, Camera, PenTool, Star, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = {
    '3D Animation': {
      items: ['Blender', 'Maya', '3ds Max', 'After Effects'],
      level: 85,
      icon: Camera,
      color: 'from-electric-blue to-electric-cyan'
    },
    'Development': {
      items: ['React', 'TypeScript', 'Node.js', 'Flutter', 'Python'],
      level: 90,
      icon: Code,
      color: 'from-violet-500 to-acid-green'
    },
    'Design': {
      items: ['Photoshop', 'Illustrator', 'Figma', 'UI/UX'],
      level: 80,
      icon: Palette,
      color: 'from-electric-cyan to-violet-500'
    },
    'Writing': {
      items: ['Creative Writing', 'Technical Writing', 'Scriptwriting'],
      level: 88,
      icon: PenTool,
      color: 'from-vivid-orange to-vivid-yellow'
    }
  };

  const achievements = [
    {
      title: 'Best Creative Portfolio',
      organization: 'Regional Design Competition',
      year: '2024',
      description: 'Awarded for innovative blend of 3D animation and web development'
    },
    {
      title: 'Young Developer Award',
      organization: 'Tech Innovation Summit',
      year: '2023',
      description: 'Recognized for outstanding contribution to youth development community'
    },
    {
      title: 'Creative Writing Excellence',
      organization: 'National Writing Contest',
      year: '2023',
      description: 'First place in digital storytelling category'
    }
  ];

  const projects = [
    {
      name: 'Interactive 3D Portfolio',
      role: 'Lead Developer & Designer',
      period: '2024',
      technologies: ['React', 'Three.js', 'Blender'],
      impact: '1000+ views, featured in design communities'
    },
    {
      name: 'Educational Animation Series',
      role: '3D Animator & Scriptwriter',
      period: '2023-2024',
      technologies: ['Blender', 'After Effects', 'Premiere Pro'],
      impact: '50K+ views across platforms'
    },
    {
      name: 'Mobile Learning App',
      role: 'Full-Stack Developer',
      period: '2023',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      impact: '500+ downloads, 4.8⭐ rating'
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
    <section id="resume" className="py-20 relative overflow-hidden section-gradient" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6 gradient-text neon-glow">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A comprehensive overview of my skills, achievements, and experience
          </p>
          
          {/* Download Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-vivid-orange to-vivid-yellow rounded-full text-gray-950 font-semibold button-glow cursor-pointer">
            <span className="flex items-center gap-2 relative z-10">
              <Download size={20} />
              Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-vivid-orange/80 to-vivid-yellow/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>

        {/* Skills Overview */}
        <div className="mb-16">
          <h3 className={`text-3xl font-bold text-center mb-12 text-gray-50 tech-glow ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skill], index) => (
              <div
                key={category}
                className={`glass-card p-6 hover-lift group cursor-pointer ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="text-gray-50" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-50 mb-3">{category}</h4>
                
                {/* Progress Circle */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="4"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${(skill.level / 100) * 175.929} 175.929`}
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1F8EFF" />
                        <stop offset="100%" stopColor="#00FFFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-50 font-bold text-sm">{skill.level}%</span>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-1">
                  {skill.items.map((item) => (
                    <span key={item} className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full mr-1 mb-1 border border-electric-blue/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Projects */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-8">
              <Briefcase className="text-electric-blue mr-3" size={28} />
              <h3 className="text-3xl font-bold text-gray-50 tech-glow">Key Projects</h3>
            </div>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={project.name} className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-50">{project.name}</h4>
                    <span className="text-electric-blue text-sm font-semibold">{project.period}</span>
                  </div>
                  <p className="text-violet-500 font-medium mb-3">{project.role}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-electric-blue/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Star className="text-vivid-yellow" size={16} />
                    {project.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="flex items-center mb-8">
              <Award className="text-violet-500 mr-3" size={28} />
              <h3 className="text-3xl font-bold text-gray-50 tech-glow">Achievements</h3>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="glass-card p-6 hover-lift">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-vivid-orange to-vivid-yellow rounded-full flex items-center justify-center mr-4">
                      <Award className="text-gray-950" size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-50">{achievement.title}</h4>
                      <p className="text-electric-blue text-sm">{achievement.organization} • {achievement.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <GraduationCap className="text-acid-green mr-3" size={32} />
              <h3 className="text-3xl font-bold text-gray-50 tech-glow">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-50">Class 12 - PCM Stream</h4>
                <p className="text-electric-blue font-medium">Currently Pursuing • 2024-2025</p>
                <p className="text-gray-400 mt-2">Preparing for JEE while developing creative and technical skills</p>
              </div>
              <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-electric-blue rounded-full"></div>
                  <span>Physics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                  <span>Chemistry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-acid-green rounded-full"></div>
                  <span>Mathematics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-50 mb-4 tech-glow">Let's Create Something Amazing Together</h3>
            <p className="text-gray-400 mb-6">
              I'm always excited to work on new projects and collaborate with creative minds. 
              Whether it's 3D animation, web development, or creative writing, let's bring ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full text-gray-50 font-semibold glow-effect cursor-pointer">
                <span className="flex items-center gap-2 relative z-10">
                  <ExternalLink size={18} />
                  View Portfolio
                </span>
              </button>
              <button className="group relative px-6 py-3 border-2 border-electric-blue rounded-full text-gray-50 font-semibold hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 cursor-pointer">
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;