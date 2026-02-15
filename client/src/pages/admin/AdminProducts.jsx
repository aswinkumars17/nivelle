import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Plus, X, Loader2, LayoutDashboard, FolderTree, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { simulateApiFailure } from '@/utils/simulateApi';
import { useToast } from '@/components/ui/Toast';

const AdminProducts = () => {
  const { addToast } = useToast();
  const location = useLocation();
  
  // Empty products array
  const [products, setProducts] = useState([]);
  
  // Categories for dropdown
  const categories = [
    'Living Room',
    'Bedroom', 
    'Dining',
    'Office',
    'Outdoor',
    'Accessories'
  ];

  const [loading, setLoading] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Product name is required';
    }
    if (!formData.category) {
      errors.category = 'Category is required';
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      errors.price = 'Valid price is required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: file });
        setValidationErrors({ ...validationErrors, image: '' });
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', category: '', price: '', description: '', image: null });
    setImagePreview(null);
    setValidationErrors({});
  };

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
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-soft-ivory mb-4">
                Products
              </h1>
              <div className="w-16 h-1 bg-subtle-gold rounded-full" />
            </div>
            <Link to="/admin/products/new">
              <Button className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                <Plus className="w-5 h-5 mr-2" />
                Add Product
              </Button>
            </Link>
          </motion.div>

          {/* Admin Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 mb-10"
          >
            <Link
              to="/admin"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === '/admin'
                  ? 'bg-subtle-gold text-deep-charcoal'
                  : 'bg-white/5 dark:bg-[#151515] text-soft-ivory/70 hover:text-soft-ivory border border-subtle-gold/20'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <ChevronRight className="w-4 h-4 text-soft-ivory/30" />
            <Link
              to="/admin/categories"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === '/admin/categories'
                  ? 'bg-subtle-gold text-deep-charcoal'
                  : 'bg-white/5 dark:bg-[#151515] text-soft-ivory/70 hover:text-soft-ivory border border-subtle-gold/20'
              }`}
            >
              <FolderTree className="w-4 h-4" />
              Categories
            </Link>
            <ChevronRight className="w-4 h-4 text-soft-ivory/30" />
            <Link
              to="/admin/products"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === '/admin/products'
                  ? 'bg-subtle-gold text-deep-charcoal'
                  : 'bg-white/5 dark:bg-[#151515] text-soft-ivory/70 hover:text-soft-ivory border border-subtle-gold/20'
              }`}
            >
              <Package className="w-4 h-4" />
              Products
            </Link>
          </motion.div>

          {/* Empty State */}
          {products.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center py-20 sm:py-32"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-subtle-gold/10 flex items-center justify-center mb-6">
                <Package className="w-12 h-12 sm:w-16 sm:h-16 text-subtle-gold" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-soft-ivory mb-3 text-center">
                No Products Yet
              </h3>
              <p className="text-soft-ivory/70 text-center max-w-md mb-8 px-4 text-sm sm:text-base">
                Add your first product to get started with your inventory. Your products will appear here once added.
              </p>
              <Link to="/admin/products/new">
                <Button 
                  size="lg"
                  className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Product
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Products Table - Only shows if products exist */}
          {products.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 dark:bg-[#151515] backdrop-blur-sm rounded-2xl border border-transparent dark:border-subtle-gold/10 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5 dark:bg-[#1a1a1a]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-soft-ivory/70">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-soft-ivory/70">Category</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-soft-ivory/70">Price</th>
                      <th className="px-6 py-4 text-right text-sm font-medium text-soft-ivory/70">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-subtle-gold/10">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <span className="font-medium text-soft-ivory">{product.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-soft-ivory/70">{product.category}</td>
                        <td className="px-6 py-4 text-soft-ivory">₹{product.price.toLocaleString()}</td>
                        <td className="px-6 py-4 text-right">
                          {/* Edit/Delete buttons would go here */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminProducts;
