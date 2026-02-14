import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown, Grid3X3, List } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, setFilter, clearFilters } from '@/store/productSlice';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';

const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredItems: products, loading, filters } = useSelector((state) => state.products);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortOpen, setSortOpen] = useState(false);

  const categories = ['All', 'Sofa', 'Bed', 'Chair', 'Table', 'Storage'];
  const priceRanges = [
    { label: 'All Prices', value: null },
    { label: 'Under ₹80,000', value: [0, 80000] },
    { label: '₹80,000 - ₹2,00,000', value: [80000, 200000] },
    { label: '₹2,00,000 - ₹4,00,000', value: [200000, 400000] },
    { label: 'Above ₹4,00,000', value: [400000, null] },
  ];
  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Highest Rated', value: 'rating' },
  ];

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      dispatch(setFilter({ key: 'category', value: categoryParam }));
    }
  }, [searchParams, dispatch]);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      dispatch(setFilter({ key: 'category', value: null }));
      searchParams.delete('category');
    } else {
      dispatch(setFilter({ key: 'category', value: category.toLowerCase() }));
      searchParams.set('category', category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  const handlePriceChange = (range) => {
    dispatch(setFilter({ key: 'priceRange', value: range }));
  };

  const handleSortChange = (sortValue) => {
    dispatch(setFilter({ key: 'sortBy', value: sortValue }));
    setSortOpen(false);
  };

  const clearAllFilters = () => {
    dispatch(clearFilters());
    setSearchParams({});
  };

  const activeFiltersCount = [
    filters.category,
    filters.priceRange,
    filters.sortBy !== 'featured' ? filters.sortBy : null
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2">
            All Products
          </h1>
          <p className="text-muted-walnut">
            {products.length} luxurious pieces for refined living
          </p>
        </motion.div>

        {/* Filters & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Category Pills - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  (category === 'All' && !filters.category) || 
                  (category !== 'All' && filters.category === category.toLowerCase())
                    ? 'bg-deep-charcoal text-white dark:bg-soft-ivory dark:text-deep-charcoal'
                    : 'bg-warm-beige text-deep-charcoal dark:bg-muted-walnut dark:text-soft-ivory hover:bg-muted-walnut hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-warm-beige dark:bg-muted-walnut rounded-full text-deep-charcoal dark:text-soft-ivory"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-subtle-gold text-white text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-warm-beige dark:bg-muted-walnut rounded-full text-deep-charcoal dark:text-soft-ivory"
              >
                Sort by
                <ChevronDown className={`w-4 h-4 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-deep-charcoal rounded-2xl shadow-soft-lg overflow-hidden z-10"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSortChange(option.value)}
                        className={`w-full px-4 py-3 text-left text-sm hover:bg-warm-beige dark:hover:bg-muted-walnut transition-colors ${
                          filters.sortBy === option.value ? 'text-subtle-gold font-medium' : 'text-deep-charcoal dark:text-soft-ivory'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* View Toggle */}
            <div className="hidden md:flex items-center bg-warm-beige dark:bg-muted-walnut rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-white dark:bg-deep-charcoal shadow-sm' : ''
                }`}
              >
                <Grid3X3 className="w-4 h-4 text-deep-charcoal dark:text-soft-ivory" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-white dark:bg-deep-charcoal shadow-sm' : ''
                }`}
              >
                <List className="w-4 h-4 text-deep-charcoal dark:text-soft-ivory" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden mb-6"
            >
              <div className="bg-warm-beige/50 dark:bg-muted-walnut/20 rounded-2xl p-6 space-y-6">
                {/* Mobile Categories */}
                <div>
                  <h3 className="font-medium text-deep-charcoal dark:text-soft-ivory mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          (category === 'All' && !filters.category) || 
                          (category !== 'All' && filters.category === category.toLowerCase())
                            ? 'bg-deep-charcoal text-white dark:bg-soft-ivory dark:text-deep-charcoal'
                            : 'bg-white dark:bg-deep-charcoal'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Price Range */}
                <div>
                  <h3 className="font-medium text-deep-charcoal dark:text-soft-ivory mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => handlePriceChange(range.value)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          JSON.stringify(filters.priceRange) === JSON.stringify(range.value)
                            ? 'bg-subtle-gold text-white'
                            : 'hover:bg-white dark:hover:bg-deep-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="outline" onClick={clearAllFilters} className="w-full">
                  Clear All Filters
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <span className="text-sm text-muted-walnut">Active filters:</span>
            {filters.category && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-subtle-gold/10 text-subtle-gold text-sm rounded-full">
                {filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}
                <button onClick={() => handleCategoryChange('All')}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.priceRange && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-subtle-gold/10 text-subtle-gold text-sm rounded-full">
                {priceRanges.find(r => JSON.stringify(r.value) === JSON.stringify(filters.priceRange))?.label}
                <button onClick={() => handlePriceChange(null)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button onClick={clearAllFilters} className="text-sm text-muted-walnut hover:text-subtle-gold underline">
              Clear all
            </button>
          </motion.div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-warm-beige/50 dark:bg-muted-walnut/30 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-walnut mb-4">No products found</p>
            <Button onClick={clearAllFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
