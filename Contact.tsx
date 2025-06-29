import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kaavyaagrawal',
      color: 'hover:text-gray-300',
      description: 'View my code'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/kaavyaagrawal',
      color: 'hover:text-electric-blue',
      description: 'Professional network'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:kaavya@example.com',
      color: 'hover:text-violet-500',
      description: 'Direct contact'
    },
    {
      name: 'Behance',
      icon: ExternalLink,
      url: 'https://behance.net/kaavyaagrawal',
      color: 'hover:text-acid-green',
      description: 'Design portfolio'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaavya@example.com',
      color: 'text-electric-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'text-acid-green'
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'text-violet-500'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden section-gradient" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6 gradient-text neon-glow">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-electric-cyan mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-50 mb-6 tech-glow">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-electric-blue/30 rounded-lg text-gray-50 placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-electric-blue/30 rounded-lg text-gray-50 placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-electric-blue/30 rounded-lg text-gray-50 placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-electric-blue/30 rounded-lg text-gray-50 placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-electric-cyan rounded-lg text-gray-50 font-semibold glow-effect disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-50 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/80 to-electric-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-50 mb-6 tech-glow">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className={`p-3 bg-gray-800 rounded-lg ${info.color}`}>
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-gray-50 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-gray-50 mb-6 tech-glow">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover-lift cursor-pointer ${social.color}`}
                  >
                    <social.icon size={32} className="mb-3" />
                    <span className="font-semibold text-gray-50 group-hover:text-current transition-colors duration-300">
                      {social.name}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">{social.description}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="glass-card p-6 border-l-4 border-electric-blue">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-electric-blue rounded-lg">
                  <MessageCircle className="text-gray-50" size={20} />
                </div>
                <div>
                  <h4 className="text-gray-50 font-semibold mb-2">Quick Response Guarantee</h4>
                  <p className="text-gray-400 text-sm">
                    I typically respond within 24 hours. For urgent inquiries, 
                    feel free to reach out directly via email or LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-50 mb-4 tech-glow">Ready to start your next project?</h3>
            <p className="text-gray-400 mb-6">
              Whether you need 3D animation, web development, design work, or creative writing, 
              I'm here to help bring your vision to life with creativity and technical excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-acid-green to-electric-cyan rounded-full text-gray-950 font-semibold button-glow cursor-pointer">
                Start a Project
              </button>
              <button className="px-6 py-3 border-2 border-electric-blue rounded-full text-gray-50 font-semibold hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 cursor-pointer">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;