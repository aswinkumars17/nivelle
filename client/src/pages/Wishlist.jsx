import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '@/store/wishlistSlice';
import { addToCart } from '@/store/cartSlice';
import { useToast } from '@/components/ui/Toast';
import Button from '@/components/ui/Button';
import RatingStars from '@/components/product/RatingStars';
import { formatCurrency } from '@/utils/currency';

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemove = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    addToast('Removed from wishlist', 'info');
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    addToast(`${item.name} added to cart`, 'success');
  };

  const handleClearAll = () => {
    wishlistItems.forEach(item => dispatch(removeFromWishlist(item.id)));
    addToast('Wishlist cleared', 'info');
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Heart className="w-24 h-24 text-warm-beige dark:text-muted-walnut mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="text-muted-walnut mb-8 max-w-md mx-auto">
            Save your favorite pieces here and come back to them anytime. Start exploring our collection to find furniture you'll love.
          </p>
          <Button onClick={() => navigate('/products')}>
            Explore Collection
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2">
              Your Wishlist
            </h1>
            <p className="text-muted-walnut">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <Button variant="outline" onClick={handleClearAll}>
            Clear All
          </Button>
        </motion.div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-deep-charcoal rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Image */}
              <div 
                className="relative aspect-square overflow-hidden bg-warm-beige/50 dark:bg-muted-walnut/30 cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); handleRemove(item.id); }}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-deep-charcoal/90 rounded-full shadow-soft hover:bg-red-50 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-muted-walnut mb-1">{item.category}</p>
                <h3 
                  className="font-medium text-deep-charcoal dark:text-soft-ivory mb-2 cursor-pointer hover:text-subtle-gold transition-colors"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <RatingStars rating={item.rating} size="sm" />
                  <span className="text-sm text-muted-walnut">({item.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-deep-charcoal dark:text-soft-ivory">
                    {formatCurrency(item.price)}
                  </span>
                </div>
                <Button 
                  className="w-full mt-4"
                  size="sm"
                  onClick={() => handleAddToCart(item)}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;