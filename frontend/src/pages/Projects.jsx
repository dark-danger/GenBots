import React, { useState, useEffect } from 'react';
import { Home, Shield, Thermometer, Lightbulb, Car, Camera, Droplet, Wind, Loader2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
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

  const projects = [
    {
      category: 'iot',
      title: 'Smart Home Automation',
      icon: <Home size={40} />,
      description: 'Complete home automation system with voice control, mobile app, and automated scheduling.',
      technologies: ['ESP32', 'MQTT', 'Node-RED', 'Alexa Integration'],
      features: [
        'Voice-activated light control',
        'Temperature-based AC automation',
        'Mobile app remote control',
        'Energy consumption monitoring'
      ],
      students: 'Built by Class 10 students',
      duration: '6 weeks'
    },
    {
      category: 'iot',
      title: 'IoT Security System',
      icon: <Shield size={40} />,
      description: 'Advanced security system with motion detection, door sensors, and real-time alerts.',
      technologies: ['Raspberry Pi', 'PIR Sensors', 'Camera Module', 'Telegram Bot'],
      features: [
        'Motion detection alerts',
        'Live camera streaming',
        'Door/window open detection',
        'Instant mobile notifications'
      ],
      students: 'Built by Class 11 students',
      duration: '5 weeks'
    },
    {
      category: 'iot',
      title: 'Smart Plant Monitoring',
      icon: <Droplet size={40} />,
      description: 'Automated plant care system that monitors soil moisture, light, and temperature.',
      technologies: ['Arduino', 'Soil Sensors', 'Water Pump', 'Cloud Dashboard'],
      features: [
        'Automatic watering system',
        'Soil moisture tracking',
        'Light level optimization',
        'Growth data analytics'
      ],
      students: 'Built by Class 9 students',
      duration: '4 weeks'
    },
    {
      category: 'iot',
      title: 'Weather Station',
      icon: <Wind size={40} />,
      description: 'Professional weather monitoring station with cloud data logging and predictions.',
      technologies: ['ESP8266', 'DHT22', 'BMP180', 'ThingSpeak API'],
      features: [
        'Temperature & humidity tracking',
        'Barometric pressure monitoring',
        'Rain detection',
        'Historical data analysis'
      ],
      students: 'Built by Class 12 students',
      duration: '5 weeks'
    },
    {
      category: 'robotics',
      title: 'Line Following Robot',
      icon: <Car size={40} />,
      description: 'Autonomous robot that follows black lines using infrared sensors and PID control.',
      technologies: ['Arduino', 'IR Sensors', 'Motor Driver', 'PID Algorithm'],
      features: [
        'Precise line tracking',
        'Speed optimization',
        'Obstacle detection',
        'Competition-ready design'
      ],
      students: 'Built by Class 8 students',
      duration: '4 weeks'
    },
    {
      category: 'robotics',
      title: 'Obstacle Avoiding Bot',
      icon: <Car size={40} />,
      description: 'Smart robot that navigates environments while avoiding obstacles autonomously.',
      technologies: ['ESP32', 'Ultrasonic Sensors', 'L298N Driver', 'Path Planning'],
      features: [
        'Real-time obstacle detection',
        'Autonomous navigation',
        'Multi-sensor fusion',
        'Smart path selection'
      ],
      students: 'Built by Class 9 students',
      duration: '5 weeks'
    },
    {
      category: 'ai',
      title: 'Face Recognition Security',
      icon: <Camera size={40} />,
      description: 'AI-powered security system with face recognition for access control.',
      technologies: ['Raspberry Pi', 'OpenCV', 'Face Recognition', 'Python'],
      features: [
        'Real-time face detection',
        'Multi-user recognition',
        'Access logging',
        'Alert system'
      ],
      students: 'Built by Class 11 students',
      duration: '7 weeks'
    },
    {
      category: 'ai',
      title: 'Voice-Controlled Room',
      icon: <Lightbulb size={40} />,
      description: 'Smart room automation using voice commands and natural language processing.',
      technologies: ['Raspberry Pi', 'Speech Recognition', 'NLP', 'Home Assistant'],
      features: [
        'Natural voice commands',
        'Multi-language support',
        'Device control',
        'Custom routines'
      ],
      students: 'Built by Class 12 students',
      duration: '6 weeks'
    },
    {
      category: 'iot',
      title: 'Smart Temperature Control',
      icon: <Thermometer size={40} />,
      description: 'Automated temperature management system for homes and greenhouses.',
      technologies: ['ESP32', 'DS18B20', 'Relay Module', 'Web Dashboard'],
      features: [
        'Multi-zone monitoring',
        'Automated fan control',
        'Temperature logging',
        'Alert notifications'
      ],
      students: 'Built by Class 10 students',
      duration: '4 weeks'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
                key={index}
                className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 transition-all group"
              >
                <div className="p-8">
                  <div className="text-[#00FFD1] mb-6 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  
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