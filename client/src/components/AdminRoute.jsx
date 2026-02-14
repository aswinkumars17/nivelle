import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-ivory dark:bg-[#0a0a0a]">
        <div className="w-8 h-8 border-4 border-subtle-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin()) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-ivory dark:bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
            Access Denied
          </h1>
          <p className="text-muted-walnut dark:text-soft-ivory/70">
            You do not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
