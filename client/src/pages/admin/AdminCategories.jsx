import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Sparkles, X, Loader2, LayoutDashboard, FolderTree, Package, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { simulateApiFailure } from '@/utils/simulateApi';
import { useToast } from '@/components/ui/Toast';

const AdminCategories = () => {
  const { addToast } = useToast();
  const location = useLocation();
  
  // Pre-loaded 6 categories from Collections page
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Living Room',
      description: 'Elegant sofas, coffee tables, and accent pieces for your living space.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    },
    {
      id: 2,
      name: 'Bedroom',
      description: 'Serene beds, nightstands, and wardrobes for restful retreats.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    },
    {
      id: 3,
      name: 'Dining',
      description: 'Stunning dining tables and chairs for memorable gatherings.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    },
    {
      id: 4,
      name: 'Office',
      description: 'Functional desks and ergonomic chairs for productive workspaces.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    },
    {
      id: 5,
      name: 'Outdoor',
      description: 'Durable and stylish furniture for your outdoor oasis.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    },
    {
      id: 6,
      name: 'Accessories',
      description: 'Curated decor pieces to complete your interior design.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      productCount: 0,
      comingSoon: true
    }
  ]);

  // Modal states
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Category name is required';
    }
    if (!formData.description.trim()) {
      errors.description = 'Description is required';
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
    setFormData({ name: '', description: '', image: null });
    setImagePreview(null);
    setValidationErrors({});
    setSelectedCategory(null);
  };

  // Edit Category - opens modal with pre-filled data
  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      image: null
    });
    setImagePreview(category.image);
    setValidationErrors({});
    setEditModalOpen(true);
  };

  // Edit Category - simulates error
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await simulateApiFailure();
      addToast('Category updated successfully', 'success');
      setEditModalOpen(false);
      resetForm();
    } catch (err) {
      addToast('Unable to update category. Backend connection failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Delete Category - opens confirmation
  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  };

  // Delete Category - simulates error
  const handleDeleteConfirm = async () => {
    setLoading(true);
    try {
      await simulateApiFailure();
      addToast('Category deleted successfully', 'success');
      setDeleteModalOpen(false);
      setSelectedCategory(null);
    } catch (err) {
      addToast('Unable to delete category. Backend connection failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const FormContent = ({ onSubmit, isEdit = false }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-soft-ivory mb-2">
          Category Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setValidationErrors({ ...validationErrors, name: '' });
          }}
          className={`w-full px-4 sm:px-6 py-3 bg-white dark:bg-[#1a1a1a] border rounded-full focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300 text-sm sm:text-base ${
            validationErrors.name ? 'border-red-500' : 'border-muted-walnut/30 dark:border-subtle-gold/20'
          }`}
          placeholder="Enter category name"
        />
        {validationErrors.name && (
          <p className="text-red-500 text-sm mt-2 ml-4">{validationErrors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-ivory mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
            setValidationErrors({ ...validationErrors, description: '' });
          }}
          className={`w-full px-4 sm:px-6 py-3 bg-white dark:bg-[#1a1a1a] border rounded-2xl focus:outline-none focus:ring-2 focus:ring-subtle-gold dark:focus:ring-subtle-gold/50 text-deep-charcoal dark:text-soft-ivory placeholder-muted-walnut dark:placeholder-soft-ivory/30 transition-all duration-300 text-sm sm:text-base min-h-[100px] ${
            validationErrors.description ? 'border-red-500' : 'border-muted-walnut/30 dark:border-subtle-gold/20'
          }`}
          placeholder="Enter category description"
        />
        {validationErrors.description && (
          <p className="text-red-500 text-sm mt-2 ml-4">{validationErrors.description}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-soft-ivory mb-2">
          Category Image
        </label>
        <div className={`border-2 border-dashed rounded-2xl p-4 text-center transition-colors ${
          validationErrors.image ? 'border-red-500' : 'border-muted-walnut/30 dark:border-subtle-gold/20'
        }`}>
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 mx-auto rounded-lg"
              />
          <button
            type="button"
            onClick={() => {
              setEditModalOpen(false);
              resetForm();
            }}
          >
            Cancel
          </button>
            </div>
          ) : (
            <label className="cursor-pointer block py-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-subtle-gold/10 flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-subtle-gold" />
              </div>
              <p className="text-sm text-soft-ivory/70">Click to upload image</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            isEdit ? setEditModalOpen(false) : setAddModalOpen(false);
            resetForm();
          }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            {loading ? 'Processing...' : 'Update Category'}
        </Button>
      </div>
    </form>
  );

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
                Categories
              </h1>
              <div className="w-16 h-1 bg-subtle-gold rounded-full" />
            </div>
            <Link to="/admin/categories/new">
              <Button className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                <Plus className="w-5 h-5 mr-2" />
                Add Category
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

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#151515] border border-subtle-gold/10 hover:border-subtle-gold/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  {/* Coming Soon Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-subtle-gold/20 border border-subtle-gold/30 text-subtle-gold text-xs font-medium rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Coming Soon
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-soft-ivory mb-1 drop-shadow-lg">
                    {category.name}
                  </h3>
                  <p className="text-soft-ivory/70 text-sm line-clamp-2 mb-3">
                    {category.productCount} products
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(category)}
                      className="p-2 bg-subtle-gold/20 text-subtle-gold rounded-lg hover:bg-subtle-gold/30 transition-colors"
                      title="Edit Category"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteClick(category)}
                      className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                      title="Delete Category"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-subtle-gold/10 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edit Category Modal */}
      <Modal
        isOpen={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          resetForm();
        }}
        title="Edit Category"
        size="md"
      >
        <FormContent onSubmit={handleEditSubmit} isEdit={true} />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedCategory(null);
        }}
        title="Delete Category"
        size="sm"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-4">
            <Trash2 className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-xl font-bold text-soft-ivory mb-2">
            Delete Category?
          </h3>
          <p className="text-soft-ivory/70 mb-6">
            Are you sure you want to delete <strong className="text-soft-ivory">{selectedCategory?.name}</strong>? This action cannot be undone.
          </p>
          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setDeleteModalOpen(false);
                setSelectedCategory(null);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeleteConfirm}
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default AdminCategories;
