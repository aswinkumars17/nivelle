import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { useToast } from '@/components/ui/Toast';
import Button from '@/components/ui/Button';
import RatingStars from './RatingStars';
import { formatCurrency } from '@/utils/currency';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const dispatch = useDispatch();
  const { addToast } = useToast();
  
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ ...product, quantity: 1 }));
    addToast(`${product.name} added to cart`, 'success');
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      addToast('Removed from wishlist', 'info');
    } else {
      dispatch(addToWishlist(product));
      addToast('Added to wishlist', 'success');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-white dark:bg-deep-charcoal rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300"
      >
        <Link to={`/product/${product.id}`}>
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-warm-beige/50 dark:bg-muted-walnut/30">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Overlay Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3"
            >
              <motion.button
                onClick={handleAddToCart}
                className="p-3 bg-white rounded-full shadow-soft hover:bg-subtle-gold hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsQuickViewOpen(true); }}
                className="p-3 bg-white rounded-full shadow-soft hover:bg-subtle-gold hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Wishlist Button */}
            <motion.button
              onClick={handleToggleWishlist}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-deep-charcoal/90 shadow-soft"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-deep-charcoal dark:text-soft-ivory'}`} 
              />
            </motion.button>

            {/* Badge */}
            {product.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-subtle-gold text-white text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product.discount && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-muted-walnut mb-1">{product.category}</p>
            <h3 className="font-medium text-deep-charcoal dark:text-soft-ivory mb-2 line-clamp-1">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <RatingStars rating={product.rating} size="sm" />
              <span className="text-sm text-muted-walnut">({product.reviews})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-deep-charcoal dark:text-soft-ivory">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-walnut line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Quick View Modal - Simplified for brevity */}
      {isQuickViewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setIsQuickViewOpen(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-deep-charcoal rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <img src={product.image} alt={product.name} className="w-full h-64 md:h-full object-cover rounded-xl" />
              <div>
                <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-soft-ivory mb-2">{product.name}</h2>
                <p className="text-muted-walnut mb-4">{product.category}</p>
                <div className="flex items-center gap-2 mb-4">
                  <RatingStars rating={product.rating} />
                  <span className="text-muted-walnut">({product.reviews} reviews)</span>
                </div>
                <p className="text-2xl font-bold text-deep-charcoal dark:text-soft-ivory mb-6">
                  {formatCurrency(product.price)}
                </p>
                <div className="flex gap-3">
                  <Button className="flex-1" onClick={(e) => { handleAddToCart(e); setIsQuickViewOpen(false); }}>
                    Add to Cart
                  </Button>
                  <Button variant="outline" onClick={() => setIsQuickViewOpen(false)}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
