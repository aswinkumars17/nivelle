import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { 
  loginWithEmail, 
  registerWithEmail, 
  logoutUser,
  subscribeToAuthChanges,
  getUserRole
} from '../services/firebaseAuth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Clear legacy JWT data from localStorage on mount
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }, []);

  // Listen to Firebase auth state changes with timeout
  useEffect(() => {
    let timeoutId;
    
    const unsubscribe = subscribeToAuthChanges((firebaseUser, role) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL
        });
        setUserRole(role);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setUserRole(null);
        setIsAuthenticated(false);
      }
      setIsLoading(false);
      clearTimeout(timeoutId);
    });

    // Timeout fallback: if auth takes longer than 3 seconds, stop loading
    timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
      clearTimeout(timeoutId);
    };
  }, []);

  /**
   * Login user with email and password
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{success: boolean, role?: string, error?: string}>}
   */
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const result = await loginWithEmail(email, password);
      
      setUser(result.user);
      setUserRole(result.role);
      setIsAuthenticated(true);
      
      return { 
        success: true, 
        role: result.role 
      };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed. Please try again.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register new user
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{success: boolean, role?: string, error?: string}>}
   */
  const register = async (name, email, password) => {
    try {
      setIsLoading(true);
      const result = await registerWithEmail(email, password, name);
      
      setUser(result.user);
      setUserRole('user');
      setIsAuthenticated(true);
      
      return { 
        success: true, 
        role: 'user' 
      };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Registration failed. Please try again.' 
      };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout current user
   * @returns {Promise<void>}
   */
  const logout = async () => {
    try {
      setIsLoading(true);
      await logoutUser();
      
      setUser(null);
      setUserRole(null);
      setIsAuthenticated(false);
      
      // Redirect to home page
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Check if current user is admin
   * @returns {boolean}
   */
  const isAdmin = () => {
    return userRole === 'admin' || userRole === 'ADMIN';
  };

  /**
   * Refresh user role from Firebase
   * Call this after admin claim is set
   * @returns {Promise<string|null>}
   */
  const refreshUserRole = async () => {
    if (!auth.currentUser) return null;
    
    try {
      const role = await getUserRole(auth.currentUser);
      setUserRole(role);
      return role;
    } catch (error) {
      console.error('Refresh user role error:', error);
      return null;
    }
  };

  const value = {
    user,
    userRole,
    isAuthenticated,
    isLoading,
    isAdmin,
    login,
    register,
    logout,
    refreshUserRole,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
