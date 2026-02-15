import { useState } from 'react';
import { Plus, Image, Loader2 } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import { simulateApiFailure } from '../../utils/simulateApi';

const mockCategories = [
  { id: '1', name: 'Sofas', image: 'https://placehold.co/400x300/8B5A2B/white?text=Sofas', productCount: 15 },
  { id: '2', name: 'Dining Tables', image: 'https://placehold.co/400x300/8B5A2B/white?text=Dining', productCount: 12 },
  { id: '3', name: 'Beds', image: 'https://placehold.co/400x300/8B5A2B/white?text=Beds', productCount: 10 },
  { id: '4', name: 'Wardrobes', image: 'https://placehold.co/400x300/8B5A2B/white?text=Wardrobes', productCount: 8 },
  { id: '5', name: 'Coffee Tables', image: 'https://placehold.co/400x300/8B5A2B/white?text=Coffee', productCount: 14 },
  { id: '6', name: 'Book Shelves', image: 'https://placehold.co/400x300/8B5A2B/white?text=Shelves', productCount: 9 },
  { id: '7', name: 'Pooja Units', image: 'https://placehold.co/400x300/8B5A2B/white?text=Pooja', productCount: 7 },
  { id: '8', name: 'Office Furniture', image: 'https://placehold.co/400x300/8B5A2B/white?text=Office', productCount: 11 },
  { id: '9', name: 'Outdoor', image: 'https://placehold.co/400x300/8B5A2B/white?text=Outdoor', productCount: 6 },
];

const AdminCategories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    image: null
  });
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Category name is required';
    }
    if (!formData.image) {
      errors.image = 'Image is required';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      await simulateApiFailure();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ name: '', image: null });
    setImagePreview(null);
    setError('');
    setValidationErrors({});
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-soft overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.productCount} products
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title="Add New Category"
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              Category creation failed.
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setValidationErrors({ ...validationErrors, name: '' });
              }}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                validationErrors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter category name"
            />
            {validationErrors.name && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Image
            </label>
            <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
              validationErrors.image ? 'border-red-500' : 'border-gray-300'
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
                      setImagePreview(null);
                      setFormData({ ...formData, image: null });
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <Image className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload image</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
            {validationErrors.image && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.image}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Adding...' : 'Add Category'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AdminCategories;
