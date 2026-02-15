import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Plus, ArrowLeft, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { simulateApiFailure } from '@/utils/simulateApi';
import { useToast } from '@/components/ui/Toast';

const AddProductPage = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });
  const [validationErrors, setValidationErrors] = useState({});

  const categories = [
    'Living Room',
    'Bedroom', 
    'Dining',
    'Office',
    'Outdoor',
    'Accessories'
  ];

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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

  const handleClose = () => {
    navigate('/admin/products');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await simulateApiFailure();
      addToast('Product added successfully', 'success');
      handleClose();
    } catch (err) {
      addToast('Unable to add product. Backend connection failed.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Window Container */}
        <div className="absolute inset-0 flex items-start justify-center pt-20 sm:pt-24 pb-8 px-4 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.4 
            }}
            className="relative w-full max-w-2xl bg-[#151515] border border-subtle-gold/20 
              rounded-2xl shadow-2xl overflow-hidden pointer-events-auto
              max-h-[calc(100vh-120px)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-subtle-gold/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                  title="Back to Products"
                >
                  <ArrowLeft className="w-5 h-5 text-soft-ivory" />
                </button>
                <div>
                  <h2 className="text-xl font-semibold text-soft-ivory">
                    Add New Product
                  </h2>
                  <p className="text-sm text-soft-ivory/50">
                    Add a new item to your inventory
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/5 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5 text-soft-ivory/70 hover:text-soft-ivory" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-soft-ivory mb-2">
                    Product Name <span className="text-subtle-gold">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setValidationErrors({ ...validationErrors, name: '' });
                    }}
                    className={`w-full px-5 py-3.5 bg-[#1a1a1a] border rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold/50 text-soft-ivory placeholder-soft-ivory/30 transition-all duration-300 ${
                      validationErrors.name ? 'border-red-500' : 'border-subtle-gold/20 hover:border-subtle-gold/40'
                    }`}
                    placeholder="e.g., Royal Sheesham Sofa"
                    autoFocus
                  />
                  {validationErrors.name && (
                    <p className="text-red-400 text-sm mt-2">{validationErrors.name}</p>
                  )}
                </motion.div>

                {/* Category & Price Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-soft-ivory mb-2">
                      Category <span className="text-subtle-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.category}
                        onChange={(e) => {
                          setFormData({ ...formData, category: e.target.value });
                          setValidationErrors({ ...validationErrors, category: '' });
                        }}
                        className={`w-full px-5 py-3.5 bg-[#1a1a1a] border rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold/50 text-soft-ivory transition-all duration-300 appearance-none cursor-pointer ${
                          validationErrors.category ? 'border-red-500' : 'border-subtle-gold/20 hover:border-subtle-gold/40'
                        }`}
                      >
                        <option value="" className="bg-[#1a1a1a]">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat} className="bg-[#1a1a1a]">{cat}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-soft-ivory/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {validationErrors.category && (
                      <p className="text-red-400 text-sm mt-2">{validationErrors.category}</p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-soft-ivory mb-2">
                      Price (₹) <span className="text-subtle-gold">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-soft-ivory/50">₹</span>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => {
                          setFormData({ ...formData, price: e.target.value });
                          setValidationErrors({ ...validationErrors, price: '' });
                        }}
                        className={`w-full pl-10 pr-5 py-3.5 bg-[#1a1a1a] border rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold/50 text-soft-ivory placeholder-soft-ivory/30 transition-all duration-300 ${
                          validationErrors.price ? 'border-red-500' : 'border-subtle-gold/20 hover:border-subtle-gold/40'
                        }`}
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    {validationErrors.price && (
                      <p className="text-red-400 text-sm mt-2">{validationErrors.price}</p>
                    )}
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-medium text-soft-ivory mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-subtle-gold/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-subtle-gold/50 text-soft-ivory placeholder-soft-ivory/30 transition-all duration-300 min-h-[100px] resize-none hover:border-subtle-gold/40"
                    placeholder="Describe the product features, materials, dimensions..."
                  />
                </motion.div>

                {/* Image Upload */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-soft-ivory mb-2">
                    Product Image
                  </label>
                  <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                    validationErrors.image ? 'border-red-500' : 'border-subtle-gold/20 hover:border-subtle-gold/40'
                  }`}>
                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-48 rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData({ ...formData, image: null });
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block py-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-subtle-gold/10 flex items-center justify-center mb-4 hover:bg-subtle-gold/20 transition-colors">
                          <Plus className="w-8 h-8 text-subtle-gold" />
                        </div>
                        <p className="text-soft-ivory/70 mb-1">Click to upload product image</p>
                        <p className="text-soft-ivory/40 text-sm">JPG, PNG up to 5MB</p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </motion.div>

                {/* Info Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="bg-subtle-gold/5 border border-subtle-gold/20 rounded-xl p-4"
                >
                  <p className="text-sm text-soft-ivory/70">
                    <span className="text-subtle-gold">Note:</span> This feature requires backend connection. 
                    Your product will not be saved until the backend is implemented.
                  </p>
                </motion.div>
              </form>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-subtle-gold/10 bg-[#111111]/50 flex-shrink-0">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="border-subtle-gold/30 text-soft-ivory hover:bg-white/5"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="hover:shadow-[0_0_20px_rgba(198,167,94,0.3)]"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                {loading ? 'Adding...' : 'Add Product'}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AddProductPage;
