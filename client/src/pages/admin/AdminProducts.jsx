import { useState } from 'react';
import { Plus, Edit2, Trash2, Image, Loader2 } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import { simulateApiFailure } from '../../utils/simulateApi';

const mockProducts = [
  { id: '1', name: 'Royal Velvet Sofa', category: 'Sofas', price: 45000, image: 'https://placehold.co/300x300/8B5A2B/white?text=Sofa' },
  { id: '2', name: 'Teak Dining Table', category: 'Dining Tables', price: 32000, image: 'https://placehold.co/300x300/8B5A2B/white?text=Table' },
  { id: '3', name: 'King Size Bed', category: 'Beds', price: 28000, image: 'https://placehold.co/300x300/8B5A2B/white?text=Bed' },
  { id: '4', name: 'Sliding Wardrobe', category: 'Wardrobes', price: 35000, image: 'https://placehold.co/300x300/8B5A2B/white?text=Wardrobe' },
  { id: '5', name: 'Marble Coffee Table', category: 'Coffee Tables', price: 15000, image: 'https://placehold.co/300x300/8B5A2B/white?text=Coffee' },
  { id: '6', name: '5-Tier Book Shelf', category: 'Book Shelves', price: 8500, image: 'https://placehold.co/300x300/8B5A2B/white?text=Shelf' },
];

const categories = ['Sofas', 'Dining Tables', 'Beds', 'Wardrobes', 'Coffee Tables', 'Book Shelves', 'Pooja Units', 'Office Furniture', 'Outdoor'];

const AdminProducts = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = (data = formData) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = 'Product name is required';
    }
    if (!data.category) {
      errors.category = 'Category is required';
    }
    if (!data.price || parseFloat(data.price) <= 0) {
      errors.price = 'Price must be a positive number';
    }
    if (!data.image && !imagePreview) {
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

  const handleAddSubmit = async (e) => {
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

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      description: '',
      image: null
    });
    setImagePreview(product.image);
    setValidationErrors({});
    setError('');
    setEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
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

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setError('');
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setLoading(true);
    try {
      await simulateApiFailure();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
    setFormData({ name: '', category: '', price: '', description: '', image: null });
    setImagePreview(null);
    setError('');
    setValidationErrors({});
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
    setSelectedProduct(null);
    setFormData({ name: '', category: '', price: '', description: '', image: null });
    setImagePreview(null);
    setError('');
    setValidationErrors({});
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedProduct(null);
    setError('');
  };

  const ProductForm = ({ onSubmit, isEdit = false }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {isEdit ? 'Update failed.' : 'Adding product failed.'}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setValidationErrors({ ...validationErrors, name: '' });
          }}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
            validationErrors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter product name"
        />
        {validationErrors.name && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) => {
            setFormData({ ...formData, category: e.target.value });
            setValidationErrors({ ...validationErrors, category: '' });
          }}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
            validationErrors.category ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {validationErrors.category && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.category}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price (₹)
        </label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => {
            setFormData({ ...formData, price: e.target.value });
            setValidationErrors({ ...validationErrors, price: '' });
          }}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 ${
            validationErrors.price ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter price"
          min="0"
        />
        {validationErrors.price && (
          <p className="text-red-500 text-sm mt-1">{validationErrors.price}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description (Optional)
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          rows={3}
          placeholder="Enter description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Product Image
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
          onClick={isEdit ? closeEditModal : closeAddModal}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {loading ? 'Processing...' : (isEdit ? 'Update Product' : 'Add Product')}
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <button
          onClick={() => setAddModalOpen(true)}
          className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">₹{product.price.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEditClick(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal
        isOpen={addModalOpen}
        onClose={closeAddModal}
        title="Add New Product"
        size="lg"
      >
        <ProductForm onSubmit={handleAddSubmit} />
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        isOpen={editModalOpen}
        onClose={closeEditModal}
        title="Edit Product"
        size="lg"
      >
        <ProductForm onSubmit={handleEditSubmit} isEdit={true} />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={closeDeleteModal}
        title="Delete Product"
        size="sm"
      >
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
            Delete failed.
          </div>
        )}
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete <strong>{selectedProduct?.name}</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={closeDeleteModal}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConfirm}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminProducts;
