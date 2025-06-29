import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, Code2, Zap } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Creative Coding: Blending Logic with Imagination',
      excerpt: 'Exploring how programming can be a canvas for artistic expression and storytelling...',
      category: 'Creative Experiments',
      readTime: '5 min read',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      icon: Lightbulb
    },
    {
      id: 2,
      title: 'Building Immersive 3D Worlds: My Blender Journey',
      excerpt: 'From basic modeling to complex animations - lessons learned in 3D creation...',
      category: 'What I\'m Learning',
      readTime: '7 min read',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/7862593/pexels-photo-7862593.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      icon: Zap
    },
    {
      id: 3,
      title: 'React Patterns That Changed My Development Game',
      excerpt: 'Advanced React techniques and patterns that make code more maintainable and elegant...',
      category: 'Build Logs',
      readTime: '6 min read',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      icon: Code2
    },
    {
      id: 4,
      title: 'Storytelling in Digital Design: Creating Emotional Connections',
      excerpt: 'How narrative techniques can enhance user experience and create memorable interactions...',
      category: 'Creative Experiments',
      readTime: '4 min read',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      icon: BookOpen
    }
  ];

  const categories = [
    { name: 'What I\'m Learning', color: 'from-electric-blue to-electric-cyan', count: 8 },
    { name: 'Creative Experiments', color: 'from-violet-500 to-acid-green', count: 12 },
    { name: 'Build Logs', color: 'from-vivid-orange to-vivid-yellow', count: 6 }
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden section-gradient" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6 gradient-text neon-glow">Creative Chronicles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, experiments, and learnings from my creative coding journey
          </p>
        </div>

        {/* Categories Overview */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <div key={category.name} className="glass-card p-6 hover-lift cursor-pointer group">
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <BookOpen className="text-gray-50" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-50 mb-2">{category.name}</h3>
              <p className="text-gray-400 mb-4">Exploring ideas and sharing discoveries</p>
              <div className="flex items-center justify-between">
                <span className="text-electric-blue font-semibold">{category.count} posts</span>
                <ArrowRight className="text-gray-500 group-hover:text-electric-blue transition-colors duration-300" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Featured Post */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="glass-card overflow-hidden hover-lift cursor-pointer group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-vivid-orange to-vivid-yellow text-gray-950 px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                    <span className="text-electric-blue font-semibold">{post.category}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-50 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-electric-blue hover:text-electric-cyan transition-colors duration-300 cursor-pointer">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <div
              key={post.id}
              className={`glass-card overflow-hidden hover-lift cursor-pointer group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg">
                    <post.icon className="text-electric-blue" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-electric-blue text-sm font-semibold mb-2">{post.category}</div>
                <h3 className="text-lg font-bold text-gray-50 mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-gray-500 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className={`text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-500 to-acid-green rounded-full text-gray-50 font-semibold glow-effect cursor-pointer">
            <span className="flex items-center gap-2 relative z-10">
              <BookOpen size={20} />
              Explore All Posts
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-acid-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;