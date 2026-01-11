import React from 'react';
import { Cpu, Bot, Code, Zap, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      icon: <Cpu size={48} />,
      title: 'IoT & Home Automation',
      duration: '12 weeks',
      level: 'Beginner to Advanced',
      students: '150+',
      description: 'Learn to build smart home systems, automate devices, and create IoT solutions that solve real-world problems.',
      topics: [
        'Sensor Integration & Data Collection',
        'Smart Home Automation Systems',
        'IoT Cloud Platforms (AWS, Azure)',
        'Network Protocols (MQTT, HTTP)',
        'Security Systems & Access Control',
        'Energy Management Solutions'
      ],
      projects: [
        'Smart Home Control System',
        'Automated Plant Watering',
        'Temperature Monitoring Dashboard',
        'Smart Door Lock System'
      ],
      kitIncludes: 'ESP32, Sensors (Temperature, Motion, Light), Relay Modules, Breadboard, Jumper Wires'
    },
    {
      icon: <Bot size={48} />,
      title: 'Robotics & Drones',
      duration: '16 weeks',
      level: 'Intermediate',
      students: '120+',
      description: 'Build autonomous robots and flying drones. Program them to navigate, sense environments, and complete missions.',
      topics: [
        'Robot Mechanics & Assembly',
        'Motor Control & Movement',
        'Sensor Fusion & Navigation',
        'Drone Flight Controllers',
        'Autonomous Navigation',
        'Computer Vision Integration'
      ],
      projects: [
        'Line Following Robot',
        'Obstacle Avoiding Bot',
        'Quadcopter Drone Build',
        'Autonomous Delivery Robot'
      ],
      kitIncludes: 'Robot Chassis, DC Motors, Ultrasonic Sensors, Drone Frame, Flight Controller, Camera Module'
    },
    {
      icon: <Code size={48} />,
      title: 'Python Programming',
      duration: '10 weeks',
      level: 'Beginner to Advanced',
      students: '200+',
      description: 'Master Python from basics to advanced concepts. Apply your skills in IoT, data analysis, and AI applications.',
      topics: [
        'Python Fundamentals & Syntax',
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'File Handling & APIs',
        'Data Analysis with Pandas',
        'IoT Programming with MicroPython'
      ],
      projects: [
        'Temperature Data Logger',
        'Automated Email System',
        'Smart Device Controller',
        'Data Visualization Dashboard'
      ],
      kitIncludes: 'Online IDE Access, Practice Modules, IoT Device for Programming, Project Templates'
    },
    {
      icon: <Zap size={48} />,
      title: 'AI-Powered IoT',
      duration: '14 weeks',
      level: 'Advanced',
      students: '80+',
      description: 'Combine artificial intelligence with IoT devices. Create smart systems that learn and adapt to user behavior.',
      topics: [
        'Introduction to Machine Learning',
        'Neural Networks Basics',
        'Edge AI & TinyML',
        'Voice Recognition Systems',
        'Image Classification on IoT',
        'Predictive Analytics'
      ],
      projects: [
        'Smart Security Camera with Face Recognition',
        'Voice-Controlled Home System',
        'Predictive Maintenance System',
        'AI-Powered Plant Monitor'
      ],
      kitIncludes: 'Raspberry Pi, Camera Module, Microphone, AI Accelerator, Advanced Sensor Kit'
    }
  ];

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-sm font-semibold tracking-wider mb-6">
            OUR PROGRAMS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Transform Students into <span className="text-[#00FFD1]">Tech Innovators</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive, hands-on programs that take students from beginners to confident creators. 
            Every program includes practical projects and industry-grade IoT kits.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 transition-all"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Left: Overview */}
                <div className="p-10 border-r border-white/10">
                  <div className="text-[#00FFD1] mb-6">
                    {program.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {program.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-[#00FFD1]" />
                      <span className="text-white/80">{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award size={20} className="text-[#00FFD1]" />
                      <span className="text-white/80">{program.level}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-[#00FFD1]" />
                      <span className="text-white/80">{program.students} enrolled</span>
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Enroll Now
                    <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Middle: Topics */}
                <div className="p-10 border-r border-white/10">
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    What You'll Learn
                  </h3>
                  <ul className="space-y-3">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00FFD1] mt-1">•</span>
                        <span className="text-white/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Projects & Kit */}
                <div className="p-10 bg-white/5">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      Hands-On Projects
                    </h3>
                    <ul className="space-y-3">
                      {program.projects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Zap size={16} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                          <span className="text-white/80">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#00FFD1]/10 border border-[#00FFD1]/30">
                    <h4 className="text-sm font-bold mb-3 text-[#00FFD1]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      IoT KIT INCLUDES
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {program.kitIncludes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Every Program <span className="text-[#00FFD1]">Includes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-[#00FFD1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Certificate</h3>
              <p className="text-white/70 leading-relaxed">
                Industry-recognized completion certificate for your portfolio
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-[#00FFD1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Mentorship</h3>
              <p className="text-white/70 leading-relaxed">
                Dedicated instructor support throughout your learning journey
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 text-center">
              <div className="w-16 h-16 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center mx-auto mb-6">
                <Cpu size={32} className="text-[#00FFD1]" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>IoT Kit</h3>
              <p className="text-white/70 leading-relaxed">
                Complete hardware kit delivered to build real projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Contact us to discuss which program is right for your students
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10">
            Get Started
            <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;