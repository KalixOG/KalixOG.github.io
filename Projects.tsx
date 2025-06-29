import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Filter, Code, Palette, Camera, PenTool, Eye, Zap, Star } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter, count: 6 },
    { id: '3d', name: '3D Animation', icon: Camera, count: 2 },
    { id: 'web', name: 'Web Dev', icon: Code, count: 2 },
    { id: 'design', name: 'Design', icon: Palette, count: 1 },
    { id: 'writing', name: 'Writing', icon: PenTool, count: 1 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Cyberpunk City Animation',
      tagline: 'Neon-lit future brought to life',
      description: 'A futuristic 3D city scene with dynamic lighting, atmospheric effects, and cinematic camera movements that showcase advanced modeling and animation techniques.',
      category: '3d',
      image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Blender', '3D Modeling', 'Animation', 'Lighting'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { views: '12K', likes: '850', duration: '2:30' }
    },
    {
      id: 2,
      title: 'Interactive Portfolio Dashboard',
      tagline: 'Data visualization meets creativity',
      description: 'A responsive React dashboard featuring real-time data visualization, smooth animations, and an intuitive user interface built with modern web technologies.',
      category: 'web',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { views: '8.5K', likes: '620', code: '15K lines' }
    },
    {
      id: 3,
      title: 'Quantum Brand Identity',
      tagline: 'Visual identity for the future',
      description: 'Complete brand system including logo design, color palette, typography, and marketing materials for a cutting-edge quantum computing startup.',
      category: 'design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Branding', 'Logo Design', 'Illustrator', 'UI/UX'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { views: '5.2K', likes: '340', assets: '50+' }
    },
    {
      id: 4,
      title: 'Mystic Guardian Character',
      tagline: 'Fantasy meets cutting-edge 3D',
      description: 'Detailed 3D character design featuring advanced rigging, realistic texturing, and dynamic poses for an upcoming indie game project.',
      category: '3d',
      image: 'https://images.pexels.com/photos/7860621/pexels-photo-7860621.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Character Design', 'Rigging', 'Texturing', 'Game Dev'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { views: '9.1K', likes: '720', polygons: '45K' }
    },
    {
      id: 5,
      title: 'NeoCommerce Platform',
      tagline: 'E-commerce reimagined',
      description: 'Full-stack e-commerce platform with AI-powered recommendations, seamless payment integration, and an intuitive admin dashboard.',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
      stats: { views: '15K', likes: '1.2K', users: '500+' }
    },
    {
      id: 6,
      title: 'Digital Dreamscapes',
      tagline: 'Stories that transcend reality',
      description: 'A collection of immersive short stories exploring the intersection of technology and human emotion, featuring interactive elements.',
      category: 'writing',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
      hoverImage: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Creative Writing', 'Interactive Fiction', 'Storytelling', 'Digital Art'],
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
      stats: { views: '6.8K', likes: '450', stories: '12' }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getProjectIcon = (category: string) => {
    switch (category) {
      case '3d': return Camera;
      case 'web': return Code;
      case 'design': return Palette;
      case 'writing': return PenTool;
      default: return Zap;
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/50 to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-cyan/5"></div>
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-electric-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-6xl font-bold mb-6 gradient-text neon-glow">Featured Projects</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-electric-blue via-electric-cyan to-acid-green mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Immersive experiences crafted through code, creativity, and cutting-edge technology
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-2 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-500 cursor-pointer ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-vivid-orange to-vivid-yellow text-gray-950 shadow-lg transform scale-105'
                      : 'text-gray-400 hover:text-electric-blue hover:bg-gray-800/50'
                  }`}
                >
                  <category.icon size={20} className={`transition-transform duration-300 ${activeFilter === category.id ? 'rotate-12' : 'group-hover:scale-110'}`} />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category.id 
                      ? 'bg-gray-950/20 text-gray-950' 
                      : 'bg-electric-blue/20 text-electric-blue'
                  }`}>
                    {category.count}
                  </span>
                  {activeFilter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-vivid-orange/20 to-vivid-yellow/20 rounded-xl blur-xl"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {filteredProjects.map((project, index) => {
            const ProjectIcon = getProjectIcon(project.category);
            const isHovered = hoveredProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group relative ${
                  project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                } ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ 
                  animationDelay: `${0.4 + index * 0.1}s`,
                  transform: isHovered ? 'translateY(-20px) rotateX(5deg)' : 'translateY(0) rotateX(0deg)',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r from-electric-blue/20 via-electric-cyan/20 to-acid-green/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Main Card */}
                <div className={`relative glass-card overflow-hidden cursor-pointer transition-all duration-500 ${
                  project.featured ? 'min-h-[500px]' : 'min-h-[400px]'
                } ${isHovered ? 'border-electric-blue/50 shadow-2xl shadow-electric-blue/20' : ''}`}>
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={isHovered ? project.hoverImage : project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 transform"
                      style={{
                        transform: isHovered ? 'scale(1.1) rotate(1deg)' : 'scale(1) rotate(0deg)',
                        filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)'
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-60'
                    }`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                        isHovered 
                          ? 'bg-electric-blue/30 border border-electric-blue/50' 
                          : 'bg-black/50 border border-gray-600/30'
                      }`}>
                        <ProjectIcon size={16} className="text-electric-cyan" />
                        <span className="text-xs font-semibold text-gray-50 uppercase tracking-wider">
                          {categories.find(cat => cat.id === project.category)?.name.replace(' ', '')}
                        </span>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-vivid-orange to-vivid-yellow rounded-full">
                          <Star size={14} className="text-gray-950" />
                          <span className="text-xs font-bold text-gray-950">FEATURED</span>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}>
                      <div className="flex gap-4">
                        <a
                          href={project.demoUrl}
                          className="p-4 bg-electric-blue/90 backdrop-blur-sm rounded-full text-gray-50 hover:bg-electric-cyan transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                          <Play size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demoUrl}
                          className="p-4 bg-violet-500/90 backdrop-blur-sm rounded-full text-gray-50 hover:bg-violet-600 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isHovered ? 'text-electric-blue' : 'text-gray-50'
                      }`}>
                        {project.title}
                      </h3>
                      <p className="text-electric-cyan font-medium text-sm mt-1">{project.tagline}</p>
                    </div>

                    <p className={`text-gray-400 leading-relaxed transition-all duration-300 ${
                      isHovered ? 'text-gray-300' : ''
                    }`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 ${
                            isHovered
                              ? 'bg-electric-blue/20 border-electric-blue/40 text-electric-cyan'
                              : 'bg-gray-800 border-gray-700 text-gray-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          {project.stats.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          {project.stats.likes}
                        </div>
                      </div>
                      <div className={`text-xs font-semibold transition-colors duration-300 ${
                        isHovered ? 'text-electric-blue' : 'text-gray-500'
                      }`}>
                        {Object.values(project.stats)[2]}
                      </div>
                    </div>
                  </div>

                  {/* Hover Spotlight Effect */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-electric-cyan/5"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-50 mb-4 tech-glow">Explore More Projects</h3>
            <p className="text-gray-400 mb-6">
              Discover the full collection of my creative work across different platforms and repositories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-full text-gray-50 font-semibold glow-effect cursor-pointer">
                <span className="flex items-center gap-2 relative z-10">
                  <Github size={20} />
                  GitHub Portfolio
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/80 to-electric-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </button>
              <button className="group relative px-8 py-4 border-2 border-electric-blue rounded-full text-gray-50 font-semibold hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 cursor-pointer">
                <span className="flex items-center gap-2">
                  <Eye size={20} />
                  Live Demos
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;