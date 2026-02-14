import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/public/products');
      setProducts(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductsByCategory = useCallback(async (categoryId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/public/products/category/${categoryId}`);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch products');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (productData) => {
    try {
      const response = await api.post('/admin/products', productData);
      setProducts(prev => [...prev, response.data]);
      return { success: true, data: response.data };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to create product' 
      };
    }
  }, []);

  const updateProduct = useCallback(async (id, productData) => {
    try {
      const response = await api.put(`/admin/products/${id}`, productData);
      setProducts(prev => 
        prev.map(prod => prod.id === id ? response.data : prod)
      );
      return { success: true, data: response.data };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to update product' 
      };
    }
  }, []);

  const deleteProduct = useCallback(async (id) => {
    try {
      await api.delete(`/admin/products/${id}`);
      setProducts(prev => prev.filter(prod => prod.id !== id));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err.response?.data?.message || 'Failed to delete product' 
      };
    }
  }, []);

  const getProductById = useCallback((id) => {
    return products.find(prod => prod.id === parseInt(id));
  }, [products]);

  const getProductsByCategoryId = useCallback((categoryId) => {
    return products.filter(prod => prod.categoryId === parseInt(categoryId));
  }, [products]);

  const value = {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategoryId,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
