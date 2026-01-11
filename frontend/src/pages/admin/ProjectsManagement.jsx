import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Plus, Edit, Trash2, Loader2, Upload, X } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../../hooks/use-toast';
import { Toaster } from '../../components/ui/toaster';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ProjectsManagement = () => {
  const navigate = useNavigate();
  const { admin, token, loading: authLoading } = useAuth();
  const { toast } = useToast();
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'iot',
    description: '',
    technologies: '',
    features: '',
    students: '',
    duration: ''
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && !admin) {
      navigate('/admin/login');
    } else if (admin) {
      fetchProjects();
    }
  }, [admin, authLoading, navigate]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/projects`);
      setProjects(response.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const removeSelectedImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index) => {
    setExistingImages(existingImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('technologies', JSON.stringify(formData.technologies.split(',').map(t => t.trim())));
      formDataToSend.append('features', JSON.stringify(formData.features.split(',').map(f => f.trim())));
      formDataToSend.append('students', formData.students);
      formDataToSend.append('duration', formData.duration);
      
      selectedImages.forEach((image) => {
        formDataToSend.append('images', image);
      });

      if (editingProject) {
        formDataToSend.append('existing_images', JSON.stringify(existingImages));
        await axios.put(
          `${API}/admin/projects/${editingProject.id}`,
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        toast({
          title: "Success!",
          description: "Project updated successfully"
        });
      } else {
        await axios.post(
          `${API}/admin/projects`,
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        );
        toast({
          title: "Success!",
          description: "Project created successfully"
        });
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to save project",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      technologies: project.technologies.join(', '),
      features: project.features.join(', '),
      students: project.students,
      duration: project.duration
    });
    setExistingImages(project.images || []);
    setShowForm(true);
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      await axios.delete(`${API}/admin/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast({
        title: "Success!",
        description: "Project deleted successfully"
      });
      fetchProjects();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive"
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'iot',
      description: '',
      technologies: '',
      features: '',
      students: '',
      duration: ''
    });
    setSelectedImages([]);
    setExistingImages([]);
    setEditingProject(null);
    setShowForm(false);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={48} className="text-[#00FFD1] animate-spin" />
      </div>
    );
  }

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
              Projects <span className="text-[#00FFD1]">Management</span>
            </h1>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Project
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {showForm && (
          <div className="mb-12 bg-white/5 border border-white/10 p-8">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white/90">Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                    placeholder="Smart Home Automation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-white/90">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                  >
                    <option value="iot" className="bg-black">IoT & Automation</option>
                    <option value="robotics" className="bg-black">Robotics</option>
                    <option value="ai" className="bg-black">AI Projects</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/90">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors resize-none"
                  placeholder="Describe the project..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/90">Technologies (comma-separated) *</label>
                <input
                  type="text"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                  placeholder="ESP32, MQTT, Node-RED"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/90">Features (comma-separated) *</label>
                <textarea
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors resize-none"
                  placeholder="Voice control, Remote access, Energy monitoring"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white/90">Students Info *</label>
                  <input
                    type="text"
                    name="students"
                    value={formData.students}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                    placeholder="Built by Class 10 students"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3 text-white/90">Duration *</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-[#00FFD1] transition-colors"
                    placeholder="6 weeks"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3 text-white/90">Project Images</label>
                <div className="border-2 border-dashed border-white/20 p-8 text-center hover:border-[#00FFD1]/50 transition-colors">
                  <Upload size={48} className="text-white/50 mx-auto mb-4" />
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageSelect}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="btn-secondary cursor-pointer">
                    Choose Images
                  </label>
                  <p className="text-white/50 text-sm mt-4">Upload project photos (JPG, PNG)</p>
                </div>

                {/* Existing Images */}
                {existingImages.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-white/70 mb-3">Existing Images:</p>
                    <div className="grid grid-cols-4 gap-4">
                      {existingImages.map((img, index) => (
                        <div key={index} className="relative">
                          <img src={`${BACKEND_URL}${img}`} alt="Project" className="w-full h-32 object-cover border border-white/20" />
                          <button
                            type="button"
                            onClick={() => removeExistingImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 hover:bg-red-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* New Images */}
                {selectedImages.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-white/70 mb-3">New Images to Upload:</p>
                    <div className="grid grid-cols-4 gap-4">
                      {selectedImages.map((img, index) => (
                        <div key={index} className="relative">
                          <img src={URL.createObjectURL(img)} alt="Preview" className="w-full h-32 object-cover border border-white/20" />
                          <button
                            type="button"
                            onClick={() => removeSelectedImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 hover:bg-red-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Saving...' : (editingProject ? 'Update Project' : 'Create Project')}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/5 border border-white/10 hover:border-[#00FFD1]/50 transition-all">
              <div className="p-6">
                {project.images && project.images.length > 0 && (
                  <img
                    src={`${BACKEND_URL}${project.images[0]}`}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 border border-white/10"
                  />
                )}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs font-semibold">
                    {project.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 bg-white/5 border border-white/20 hover:border-[#00FFD1]/50 text-white py-2 px-4 transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="flex-1 bg-red-500/10 border border-red-500/30 hover:border-red-500 text-red-400 py-2 px-4 transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-xl">No projects yet. Click "Add New Project" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsManagement;