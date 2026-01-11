import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Bot, Laptop, Zap, Users, Award, DollarSign, Code } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Cpu size={32} />,
      title: 'IoT & Automation',
      description: 'Master smart home systems and IoT device integration'
    },
    {
      icon: <Bot size={32} />,
      title: 'Robotics & Drones',
      description: 'Build and program autonomous robots and flying machines'
    },
    {
      icon: <Code size={32} />,
      title: 'Python Programming',
      description: 'Learn coding from basics to advanced AI applications'
    },
    {
      icon: <Zap size={32} />,
      title: 'AI Integration',
      description: 'Combine artificial intelligence with IoT projects'
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'School Partners' },
    { number: '100+', label: 'Projects Built' },
    { number: '95%', label: 'Success Rate' }
  ];

  const whyChoose = [
    {
      icon: <DollarSign size={28} />,
      title: 'Affordable IoT Kits',
      description: 'Industry-grade equipment at student-friendly prices'
    },
    {
      icon: <Users size={28} />,
      title: 'Hands-On Learning',
      description: 'Practical projects that build real-world skills'
    },
    {
      icon: <Award size={28} />,
      title: 'Industry-Focused',
      description: 'Curriculum aligned with current tech industry needs'
    },
    {
      icon: <Laptop size={28} />,
      title: 'AI-Powered Teaching',
      description: 'Modern pedagogy with AI-assisted learning tools'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-3 sm:px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6">
              INNOVATE • LEARN • CREATE
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Building Future <br />
            <span className="text-[#00FFD1] glow-text">Innovators</span> with <br />
            IoT, Robotics & AI
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Empowering students with hands-on education in cutting-edge technology. 
            From smart homes to autonomous drones, we make innovation accessible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link to="/programs" className="btn-primary w-full sm:w-auto justify-center">
              Explore Programs
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto justify-center">
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="hidden md:block absolute top-20 left-10 w-20 h-20 border border-[#00FFD1]/30 float-animation" style={{ animationDelay: '0s' }}></div>
        <div className="hidden md:block absolute bottom-40 right-20 w-16 h-16 border border-[#00FFD1]/30 float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="hidden md:block absolute top-1/2 right-10 w-12 h-12 bg-[#00FFD1]/10 float-animation" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              What We <span className="text-[#00FFD1]">Teach</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive programs designed to transform students into tech innovators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:border-[#00FFD1]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-[#00FFD1] mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-lg text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Why Choose <span className="text-[#00FFD1]">GenBots</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We combine affordability, quality education, and real-world application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 bg-white/5 border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all"
              >
                <div className="text-[#00FFD1] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#00FFD1]/10 to-[#00D4AD]/10 border-y border-[#00FFD1]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Join 50+ schools already building the next generation of tech innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-10">
              Schedule a Demo
              <ArrowRight size={22} />
            </Link>
            <Link to="/programs" className="btn-secondary text-lg px-10">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;