import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, FolderOpen, MessageSquare, LogOut, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { admin, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !admin) {
      navigate('/admin/login');
    }
  }, [admin, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={48} className="text-[#00FFD1] animate-spin" />
      </div>
    );
  }

  if (!admin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00FFD1] to-[#00D4AD] flex items-center justify-center">
              <span className="text-black font-bold text-xl">GB</span>
            </div>
            <div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Gen<span className="text-[#00FFD1]">Bots</span>
              </span>
              <span className="ml-4 text-white/50 text-sm">Admin Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm text-white/70">Logged in as</p>
              <p className="font-semibold">{admin.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Welcome Back, <span className="text-[#00FFD1]">{admin.name}</span>
          </h1>
          <p className="text-xl text-white/70">
            Manage your projects and view contact submissions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Projects Management */}
          <Link
            to="/admin/projects"
            className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 p-10 transition-all group"
          >
            <FolderOpen size={48} className="text-[#00FFD1] mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Projects Management
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Add, edit, and delete student projects. Upload images and manage project details.
            </p>
            <div className="flex items-center gap-2 text-[#00FFD1] font-semibold">
              Manage Projects →
            </div>
          </Link>

          {/* Contact Submissions */}
          <Link
            to="/admin/contacts"
            className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 p-10 transition-all group"
          >
            <MessageSquare size={48} className="text-[#00FFD1] mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Contact Submissions
            </h2>
            <p className="text-white/70 text-lg mb-6">
              View all contact form submissions. Track inquiries and mark them as contacted.
            </p>
            <div className="flex items-center gap-2 text-[#00FFD1] font-semibold">
              View Contacts →
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <LayoutDashboard size={32} className="text-[#00FFD1] mx-auto mb-4" />
            <p className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Dashboard</p>
            <p className="text-white/60 text-sm mt-2">Centralized Control</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <FolderOpen size={32} className="text-[#00FFD1] mx-auto mb-4" />
            <p className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Projects</p>
            <p className="text-white/60 text-sm mt-2">Showcase Student Work</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <MessageSquare size={32} className="text-[#00FFD1] mx-auto mb-4" />
            <p className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contacts</p>
            <p className="text-white/60 text-sm mt-2">Track Inquiries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;