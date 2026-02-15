import { Package } from 'lucide-react';

const categories = [
  { id: '1', name: 'Sofas', image: 'https://placehold.co/400x300/8B5A2B/white?text=Sofas', productCount: 15 },
  { id: '2', name: 'Dining Tables', image: 'https://placehold.co/400x300/8B5A2B/white?text=Dining', productCount: 12 },
  { id: '3', name: 'Beds', image: 'https://placehold.co/400x300/8B5A2B/white?text=Beds', productCount: 10 },
  { id: '4', name: 'Wardrobes', image: 'https://placehold.co/400x300/8B5A2B/white?text=Wardrobes', productCount: 8 },
  { id: '5', name: 'Coffee Tables', image: 'https://placehold.co/400x300/8B5A2B/white?text=Coffee', productCount: 14 },
  { id: '6', name: 'Book Shelves', image: 'https://placehold.co/400x300/8B5A2B/white?text=Shelves', productCount: 9 },
  { id: '7', name: 'Pooja Units', image: 'https://placehold.co/400x300/8B5A2B/white?text=Pooja', productCount: 7 },
  { id: '8', name: 'Office Furniture', image: 'https://placehold.co/400x300/8B5A2B/white?text=Office', productCount: 0 },
  { id: '9', name: 'Outdoor', image: 'https://placehold.co/400x300/8B5A2B/white?text=Outdoor', productCount: 0 },
];

const PublicCategories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-soft-ivory mb-4">
          Browse Categories
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our wide range of premium Indian furniture across different categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {category.productCount === 0 && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Package className="w-4 h-4" />
                  Coming Soon
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-soft-ivory mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {category.productCount > 0 
                  ? `${category.productCount} products available` 
                  : 'Coming Soon'
                }
              </p>
              {category.productCount > 0 && (
                <button className="mt-3 text-primary-600 dark:text-primary-400 font-medium group-hover:underline">
                  View Products →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicCategories;
