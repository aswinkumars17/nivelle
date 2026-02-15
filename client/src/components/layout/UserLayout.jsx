import { NavLink, Outlet } from 'react-router-dom';
import { User } from 'lucide-react';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal">
      {/* Simple Header */}
      <header className="bg-white/80 dark:bg-deep-charcoal/80 backdrop-blur-md shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink to="/public" className="flex items-center gap-2">
              <User className="w-6 h-6 text-primary-600" />
              <span className="text-xl font-bold text-primary-800 dark:text-primary-400">
                NIVELLE
              </span>
            </NavLink>
            <NavLink
              to="/public"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600"
            >
              Back to Store
            </NavLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
