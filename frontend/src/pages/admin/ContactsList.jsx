import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Mail, Phone, School, MessageSquare, Check, Clock, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../hooks/use-toast';
import { Toaster } from '../../components/ui/toaster';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "http://genbots-production.up.railway.app";
const API = `${BACKEND_URL}/api`;

const ContactsList = () => {
  const navigate = useNavigate();
  const { admin, token, loading: authLoading } = useAuth();
  const { toast } = useToast();
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!authLoading && !admin) {
      navigate('/admin/login');
    } else if (admin) {
      fetchContacts();
    }
  }, [admin, authLoading, navigate]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API}/admin/contacts`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setContacts(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contacts",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (contactId, status) => {
    try {
      await axios.put(
        `${API}/admin/contacts/${contactId}/status`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      toast({
        title: "Success!",
        description: `Contact marked as ${status}`
      });
      fetchContacts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive"
      });
    }
  };

  const filteredContacts = filter === 'all' 
    ? contacts 
    : contacts.filter(c => c.status === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={48} className="text-[#00FFD1] animate-spin" />
      </div>
    );
  }

  const pendingCount = contacts.filter(c => c.status === 'pending').length;
  const contactedCount = contacts.filter(c => c.status === 'contacted').length;

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster />
      
      {/* Header */}
      <header className="bg-black border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/admin/dashboard" className="text-white/70 hover:text-[#00FFD1] transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Contact <span className="text-[#00FFD1]">Submissions</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-4 py-2 bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-[#00FFD1]">{pendingCount}</p>
              <p className="text-xs text-white/60">Pending</p>
            </div>
            <div className="text-center px-4 py-2 bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-green-400">{contactedCount}</p>
              <p className="text-xs text-white/60">Contacted</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-white/10">
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 font-semibold transition-all ${
              filter === 'all'
                ? 'bg-[#00FFD1] text-black'
                : 'bg-white/5 border border-white/20 text-white hover:border-[#00FFD1]/50'
            }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            All ({contacts.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-6 py-3 font-semibold transition-all ${
              filter === 'pending'
                ? 'bg-[#00FFD1] text-black'
                : 'bg-white/5 border border-white/20 text-white hover:border-[#00FFD1]/50'
            }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Pending ({pendingCount})
          </button>
          <button
            onClick={() => setFilter('contacted')}
            className={`px-6 py-3 font-semibold transition-all ${
              filter === 'contacted'
                ? 'bg-[#00FFD1] text-black'
                : 'bg-white/5 border border-white/20 text-white hover:border-[#00FFD1]/50'
            }`}
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Contacted ({contactedCount})
          </button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredContacts.length === 0 ? (
          <div className="text-center py-20">
            <MessageSquare size={64} className="text-white/20 mx-auto mb-4" />
            <p className="text-white/50 text-xl">No contacts found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {contact.name}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-semibold ${
                          contact.status === 'pending'
                            ? 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400'
                            : 'bg-green-500/10 border border-green-500/30 text-green-400'
                        }`}>
                          {contact.status === 'pending' ? (
                            <><Clock size={12} className="inline mr-1" /> Pending</>
                          ) : (
                            <><Check size={12} className="inline mr-1" /> Contacted</>
                          )}
                        </span>
                        <span className="px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs font-semibold">
                          {contact.inquiry.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm mb-4">
                        Submitted on {formatDate(contact.created_at)}
                      </p>
                    </div>
                    {contact.status === 'pending' && (
                      <button
                        onClick={() => updateStatus(contact.id, 'contacted')}
                        className="btn-primary flex items-center gap-2"
                      >
                        <Check size={18} />
                        Mark as Contacted
                      </button>
                    )}
                    {contact.status === 'contacted' && (
                      <button
                        onClick={() => updateStatus(contact.id, 'pending')}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Clock size={18} />
                        Mark as Pending
                      </button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="flex items-start gap-3">
                      <Mail size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/50 text-xs mb-1">Email</p>
                        <a href={`mailto:${contact.email}`} className="text-white hover:text-[#00FFD1] transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/50 text-xs mb-1">Phone</p>
                        <a href={`tel:${contact.phone}`} className="text-white hover:text-[#00FFD1] transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    {contact.schoolName && (
                      <div className="flex items-start gap-3">
                        <School size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white/50 text-xs mb-1">School</p>
                          <p className="text-white">{contact.schoolName}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <MessageSquare size={20} className="text-[#00FFD1] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white/50 text-xs mb-1">Inquiry Type</p>
                        <p className="text-white capitalize">{contact.inquiry.replace('_', ' ')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white/50 text-sm mb-3">Message:</p>
                    <p className="text-white leading-relaxed">{contact.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsList;
