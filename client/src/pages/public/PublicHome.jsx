import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Sofa, Bed, Armchair, Lamp } from 'lucide-react';

const featuredCategories = [
  { id: '1', name: 'Sofas', icon: Sofa, image: 'https://placehold.co/600x400/8B5A2B/white?text=Sofas', count: 15 },
  { id: '2', name: 'Beds', icon: Bed, image: 'https://placehold.co/600x400/8B5A2B/white?text=Beds', count: 10 },
  { id: '3', name: 'Dining', icon: Armchair, image: 'https://placehold.co/600x400/8B5A2B/white?text=Dining', count: 12 },
  { id: '4', name: 'Lighting', icon: Lamp, image: 'https://placehold.co/600x400/8B5A2B/white?text=Lighting', count: 8 },
];

const featuredProducts = [
  { id: '1', name: 'Royal Velvet Sofa', price: 45000, image: 'https://placehold.co/400x400/8B5A2B/white?text=Sofa', rating: 4.8 },
  { id: '2', name: 'Teak Dining Table', price: 32000, image: 'https://placehold.co/400x400/8B5A2B/white?text=Table', rating: 4.6 },
  { id: '3', name: 'King Size Bed', price: 28000, image: 'https://placehold.co/400x400/8B5A2B/white?text=Bed', rating: 4.9 },
  { id: '4', name: 'Marble Coffee Table', price: 15000, image: 'https://placehold.co/400x400/8B5A2B/white?text=Coffee', rating: 4.5 },
];

const PublicHome = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 dark:text-primary-400 mb-6">
              Premium Indian Furniture
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover handcrafted furniture that brings elegance to your home. 
              Made with traditional Indian craftsmanship and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink
                to="/public/categories"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white dark:bg-deep-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-soft-ivory mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our collection across different furniture categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <NavLink
                key={category.id}
                to="/public/categories"
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-300">{category.count} products</p>
                </div>
              </NavLink>
            ))}
          </div>

          <div className="text-center mt-8">
            <NavLink
              to="/public/categories"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
            >
              View All Categories
              <ArrowRight className="w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-soft-ivory dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-soft-ivory mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our most popular furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-soft-ivory mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                    ₹{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-deep-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sofa className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-soft-ivory mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Handcrafted with the finest materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-soft-ivory mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                On orders above ₹10,000
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-soft-ivory mb-2">
                5-Year Warranty
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                On all furniture pieces
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Truck = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default PublicHome;
