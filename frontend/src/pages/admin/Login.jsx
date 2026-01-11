import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, LogIn } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-[#00FFD1] to-[#00D4AD] flex items-center justify-center">
              <span className="text-black font-bold text-2xl">GB</span>
            </div>
            <span className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Gen<span className="text-[#00FFD1]">Bots</span>
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Admin <span className="text-[#00FFD1]">Login</span>
          </h1>
          <p className="text-white/70 text-lg">Access your dashboard</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-3 text-white/90">
                Email Address
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#00FFD1] transition-colors"
                  placeholder="admin@genbots.edu"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-white/90">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-[#00FFD1] transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center text-lg py-5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
              <LogIn size={22} />
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-[#00FFD1] hover:text-[#00D4AD] transition-colors">
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;