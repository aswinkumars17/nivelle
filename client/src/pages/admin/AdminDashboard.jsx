import { motion } from 'framer-motion';
import { Package, FolderTree, Users, ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const StatCard = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/5 dark:bg-[#151515] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-transparent dark:border-subtle-gold/10 hover:dark:border-subtle-gold/20 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-subtle-gold/20 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-subtle-gold" />
    </div>
    <p className="text-sm text-soft-ivory/70 mb-1">{label}</p>
    <p className="text-3xl font-bold text-soft-ivory">{value}</p>
  </motion.div>
);

const AdminDashboard = () => {
  const stats = [
    { icon: Package, label: 'Total Products', value: 0 },
    { icon: FolderTree, label: 'Categories', value: 6 },
    { icon: Users, label: 'Total Users', value: 0 },
    { icon: ShoppingCart, label: 'Total Orders', value: 0 },
  ];

  return (
    <div className="min-h-screen bg-deep-charcoal dark:bg-[#0a0a0a]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-soft-ivory mb-4">
              Admin Dashboard
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-subtle-gold mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-soft-ivory/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Manage your furniture catalog, categories, and inventory from one central location.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-warm-beige/30 dark:bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,167,94,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
              Quick Actions
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-subtle-gold mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-muted-walnut dark:text-soft-ivory/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Manage your store with these quick navigation options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto"
          >
            <Link to="/admin/categories">
              <Button 
                size="lg" 
                className="w-full group hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
              >
                <FolderTree className="w-5 h-5 mr-2" />
                Manage Categories
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/admin/products">
              <Button 
                size="lg" 
                className="w-full group hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
              >
                <Package className="w-5 h-5 mr-2" />
                Manage Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
