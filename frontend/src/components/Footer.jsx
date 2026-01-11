import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00FFD1] to-[#00D4AD] flex items-center justify-center">
                <span className="text-black font-bold text-xl">GB</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Gen<span className="text-[#00FFD1]">Bots</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Building future innovators through hands-on IoT, Robotics, and AI education.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1] flex items-center justify-center transition-all">
                <Facebook size={18} className="text-white/70 hover:text-[#00FFD1]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1] flex items-center justify-center transition-all">
                <Twitter size={18} className="text-white/70 hover:text-[#00FFD1]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1] flex items-center justify-center transition-all">
                <Linkedin size={18} className="text-white/70 hover:text-[#00FFD1]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1] flex items-center justify-center transition-all">
                <Instagram size={18} className="text-white/70 hover:text-[#00FFD1]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-[#00FFD1] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-[#00FFD1] transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-white/70 hover:text-[#00FFD1] transition-colors">Programs</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-[#00FFD1] transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-[#00FFD1] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Our Programs</h3>
            <ul className="space-y-3">
              <li><span className="text-white/70">IoT & Home Automation</span></li>
              <li><span className="text-white/70">Robotics & Drones</span></li>
              <li><span className="text-white/70">Python Programming</span></li>
              <li><span className="text-white/70">AI-powered IoT</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">contact@genbots.edu</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">Innovation Hub, Tech Park<br/>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © 2025 GenBots. All rights reserved. Building Future Innovators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;