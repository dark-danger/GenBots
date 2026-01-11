import React, { useState, useEffect } from 'react';
import { Home, Shield, Thermometer, Lightbulb, Car, Camera, Droplet, Wind, Loader2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "https://genbots-production.up.railway.app";
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'iot', label: 'IoT & Automation' },
    { id: 'robotics', label: 'Robotics' },
    { id: 'ai', label: 'AI Projects' }
  ];

  const getIconForCategory = (category) => {
    switch(category) {
      case 'iot': return <Home size={40} />;
      case 'robotics': return <Car size={40} />;
      case 'ai': return <Camera size={40} />;
      default: return <Lightbulb size={40} />;
    }
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-24">
        <Loader2 size={48} className="text-[#00FFD1] animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-sm font-semibold tracking-wider mb-6">
            STUDENT PROJECTS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Real Projects Built by <span className="text-[#00FFD1]">Real Students</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our students don't just learn theory - they build working prototypes that solve real-world problems. 
            Here are some of the amazing projects created by students across our programs.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#00FFD1] text-black'
                    : 'bg-white/5 border border-white/20 text-white hover:border-[#00FFD1]/50'
                }`}
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id || index}
                className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 transition-all group"
              >
                <div className="p-8">
                  {project.images && project.images.length > 0 ? (
                    <img 
                      src={`${BACKEND_URL}${project.images[0]}`}
                      alt={project.title}
                      className="w-full h-48 object-cover mb-6 border border-white/10"
                    />
                  ) : (
                    <div className="text-[#00FFD1] mb-6 group-hover:scale-110 transition-transform">
                      {getIconForCategory(project.category)}
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold mb-3 text-[#00FFD1]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      KEY FEATURES
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-[#00FFD1] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{project.students}</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Project <span className="text-[#00FFD1]">Statistics</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>100+</div>
              <div className="text-lg text-white/70">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>500+</div>
              <div className="text-lg text-white/70">Student Participants</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>25+</div>
              <div className="text-lg text-white/70">Technologies Used</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>10+</div>
              <div className="text-lg text-white/70">Competition Wins</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;