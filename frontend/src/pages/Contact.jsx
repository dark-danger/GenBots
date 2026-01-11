import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, School, User, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import axios from 'axios';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolName: '',
    message: '',
    inquiry: 'general'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "https://genbots-production.up.railway.app" ?? "https://genbots-production.up.railway.app";
      const API = `${BACKEND_URL}/api`;
      
      await axios.post(`${API}/contact`, formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        schoolName: '',
        message: '',
        inquiry: 'general'
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-black text-white pt-24">
      <Toaster />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-3 sm:px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Let's Build the <span className="text-[#00FFD1]">Future Together</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring cutting-edge IoT and Robotics education to your school? 
            We're here to answer your questions and help you get started.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Contact <span className="text-[#00FFD1]">Information</span>
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#00FFD1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Email Us</h3>
                    <p className="text-white/70">khannayash394@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#00FFD1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Call Us</h3>
                    <p className="text-white/70">+91 92110 67540</p>
                    <p className="text-white/70">Mon-Sat: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 border border-[#00FFD1]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#00FFD1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Visit Us</h3>
                    <p className="text-white/70">
                      TDI Espaniya Royal<br />
                      Murthal, Sonipat<br />
                      Haryana, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Partner Schools
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  We work with schools of all sizes. Whether you're a small private school or a large institution, 
                  we can customize our programs to fit your needs.
                </p>
                <div className="flex items-center gap-3 text-[#00FFD1]">
                  <School size={24} />
                  <span className="font-semibold">50+ Schools Already Partnered</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 border border-white/10 p-6 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Send Us a <span className="text-[#00FFD1]">Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/20 text-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                        School Name
                      </label>
                      <div className="relative">
                        <School size={18} className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                        <input
                          type="text"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/20 text-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors"
                          placeholder="Your School Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                      Type of Inquiry
                    </label>
                    <select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/20 text-white px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors"
                    >
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="partnership" className="bg-black">School Partnership</option>
                      <option value="programs" className="bg-black">Program Information</option>
                      <option value="demo" className="bg-black">Schedule a Demo</option>
                      <option value="support" className="bg-black">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 sm:mb-3 text-white/90">
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-3 sm:left-4 top-4 sm:top-6 text-white/50" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full bg-white/5 border border-white/20 text-white pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00FFD1] transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base sm:text-lg py-4 sm:py-5">
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-black to-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Find Us on the <span className="text-[#00FFD1]">Map</span>
            </h2>
          </div>
          
          <div className="bg-white/5 border border-white/10 h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <p className="text-white/50 text-sm sm:text-base md:text-lg px-4 text-center">
              [Map Integration - Google Maps or Similar]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;