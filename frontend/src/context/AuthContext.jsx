import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));

  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  const verifyToken = async () => {
    try {
      const response = await axios.post(
        `${API}/admin/verify`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      if (response.data.valid) {
        setAdmin(response.data.admin);
      } else {
        logout();
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API}/admin/login`, {
        email,
        password
      });
      const { token: newToken, admin: adminData } = response.data;
      localStorage.setItem('adminToken', newToken);
      setToken(newToken);
      setAdmin(adminData);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || 'Login failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
