import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

const CategoryContext = createContext();

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/public/categories');
      setCategories(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  }, []);

  const createCategory = useCallback(async (categoryData) => {
    try {
      const response = await api.post('/admin/categories', categoryData);
      setCategories(prev => [...prev, response.data]);
      return { success: true, data: response.data };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to create category' 
      };
    }
  }, []);

  const updateCategory = useCallback(async (id, categoryData) => {
    try {
      const response = await api.put(`/admin/categories/${id}`, categoryData);
      setCategories(prev => 
        prev.map(cat => cat.id === id ? response.data : cat)
      );
      return { success: true, data: response.data };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to update category' 
      };
    }
  }, []);

  const deleteCategory = useCallback(async (id) => {
    try {
      await api.delete(`/admin/categories/${id}`);
      setCategories(prev => prev.filter(cat => cat.id !== id));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to delete category' 
      };
    }
  }, []);

  const getCategoryById = useCallback((id) => {
    return categories.find(cat => cat.id === parseInt(id));
  }, [categories]);

  const value = {
    categories,
    loading,
    error,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
