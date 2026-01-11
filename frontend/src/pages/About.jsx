import React from 'react';
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation First',
      description: 'We believe in learning by creating, not just consuming'
    },
    {
      icon: <Users size={32} />,
      title: 'Accessible Education',
      description: 'Quality tech education should be available to every student'
    },
    {
      icon: <Award size={32} />,
      title: 'Industry-Ready Skills',
      description: 'We prepare students for real-world tech careers'
    },
    {
      icon: <Globe size={32} />,
      title: 'Future-Focused',
      description: 'Teaching technologies that will shape tomorrow'
    }
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & IoT Expert', experience: '15+ years' },
    { name: 'Priya Sharma', role: 'Head of Curriculum', experience: '12+ years' },
    { name: 'Amit Patel', role: 'Robotics Lead', experience: '10+ years' },
    { name: 'Sneha Reddy', role: 'AI Integration Specialist', experience: '8+ years' }
  ];

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-sm font-semibold tracking-wider mb-6">
              ABOUT US
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Empowering the Next Generation of <span className="text-[#00FFD1]">Tech Innovators</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              GenBots is more than an education company - we're a movement to democratize technology education. 
              We partner with schools to bring cutting-edge IoT, Robotics, and AI learning directly to students, 
              making advanced technology accessible and affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-12 hover:border-[#00FFD1]/50 transition-all">
              <Target size={48} className="text-[#00FFD1] mb-6" />
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Our Mission
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                To transform how students learn technology by providing hands-on, practical education 
                in IoT, Robotics, and AI that prepares them for the future.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                We make advanced technology education accessible to every school and every student, 
                regardless of their background or location.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 hover:border-[#00FFD1]/50 transition-all">
              <Eye size={48} className="text-[#00FFD1] mb-6" />
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Our Vision
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                To become India's leading IoT and Robotics education platform, empowering 
                100,000+ students across 1,000+ schools by 2030.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                We envision a future where every student has the skills and confidence to 
                innovate and create technology solutions for real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our <span className="text-[#00FFD1]">Core Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:border-[#00FFD1]/50 hover:bg-white/10 transition-all text-center group"
              >
                <div className="text-[#00FFD1] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              What Makes Us <span className="text-[#00FFD1]">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border-l-4 border-l-[#00FFD1] p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Affordable Kits
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Industry-grade IoT kits at 40% lower cost than competitors. We believe cost 
                should never be a barrier to learning.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-l-[#00FFD1] p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                School Partnerships
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                We work directly with schools to integrate our curriculum into their existing 
                programs, making adoption seamless.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-l-[#00FFD1] p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Practical Focus
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Every lesson culminates in a working project. Students build real devices, 
                not just learn theory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Meet Our <span className="text-[#00FFD1]">Team</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experienced educators and technology experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#00FFD1]/20 to-[#00D4AD]/20 border-2 border-[#00FFD1] mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#00FFD1]">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#00FFD1] mb-2">{member.role}</p>
                <p className="text-white/60 text-sm">{member.experience} in industry</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Our <span className="text-[#00FFD1]">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>500+</div>
              <div className="text-lg text-white/70">Students Trained</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>50+</div>
              <div className="text-lg text-white/70">School Partners</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>100+</div>
              <div className="text-lg text-white/70">Projects Built</div>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10">
              <div className="text-5xl font-bold text-[#00FFD1] mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>95%</div>
              <div className="text-lg text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;