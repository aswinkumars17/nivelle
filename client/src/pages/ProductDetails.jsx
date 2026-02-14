import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus, Check } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductById } from '@/store/productSlice';
import { addToCart } from '@/store/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/store/wishlistSlice';
import { useToast } from '@/components/ui/Toast';
import ProductGallery from '@/components/product/ProductGallery';
import RatingStars from '@/components/product/RatingStars';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/product/ProductCard';
import { formatCurrency } from '@/utils/currency';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToast();
  
  const { currentProduct: product, loading, items: allProducts } = useSelector((state) => state.products);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = product ? wishlistItems.some(item => item.id === product.id) : false;
  
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    dispatch(loadProductById(id));
    window.scrollTo(0, 0);
  }, [id, dispatch]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    addToast(`${product.name} added to cart`, 'success');
  };

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate('/checkout');
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      addToast('Removed from wishlist', 'info');
    } else {
      dispatch(addToWishlist(product));
      addToast('Added to wishlist', 'success');
    }
  };

  const relatedProducts = allProducts
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const benefits = [
    { icon: Truck, text: 'Free white glove delivery' },
    { icon: Shield, text: '10-year warranty included' },
    { icon: RotateCcw, text: '30-day return policy' },
  ];

  if (loading || !product) {
    return (
      <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-subtle-gold border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-walnut mb-8"
        >
          <button onClick={() => navigate('/')} className="hover:text-subtle-gold">Home</button>
          <ChevronRight className="w-4 h-4" />
          <button onClick={() => navigate('/products')} className="hover:text-subtle-gold">Products</button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-deep-charcoal dark:text-soft-ivory">{product.name}</span>
        </motion.div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <p className="text-muted-walnut mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <RatingStars rating={product.rating} showValue reviewCount={product.reviews} />
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-deep-charcoal dark:text-soft-ivory">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-walnut line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                  Save {product.discount}%
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-medium">In Stock</span>
                  <span className="text-muted-walnut">({product.stock} available)</span>
                </>
              ) : (
                <span className="text-red-500 font-medium">Out of Stock</span>
              )}
            </div>

            <p className="text-deep-charcoal/80 dark:text-soft-ivory/80 leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-walnut">
                  <benefit.icon className="w-4 h-4 text-subtle-gold" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-3 bg-warm-beige/50 dark:bg-muted-walnut/20 rounded-full px-2 py-2">
                <motion.button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-full hover:bg-white dark:hover:bg-deep-charcoal transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </motion.button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <motion.button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-full hover:bg-white dark:hover:bg-deep-charcoal transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Add to Cart */}
              <Button 
                className="flex-1"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {/* Buy Now */}
              <Button 
                variant="secondary"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                Buy Now
              </Button>

              {/* Wishlist */}
              <motion.button
                onClick={handleToggleWishlist}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  isInWishlist 
                    ? 'border-red-500 bg-red-50 text-red-500' 
                    : 'border-warm-beige dark:border-muted-walnut hover:border-subtle-gold'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="border-t border-warm-beige dark:border-muted-walnut pt-12">
          <div className="flex gap-8 border-b border-warm-beige dark:border-muted-walnut mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium capitalize transition-colors relative ${
                  activeTab === tab 
                    ? 'text-subtle-gold' 
                    : 'text-muted-walnut hover:text-deep-charcoal dark:hover:text-soft-ivory'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-subtle-gold"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'description' && (
              <div className="max-w-3xl">
                <p className="text-deep-charcoal/80 dark:text-soft-ivory/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="max-w-2xl">
                <dl className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex py-3 border-b border-warm-beige dark:border-muted-walnut">
                      <dt className="w-1/3 text-muted-walnut capitalize">{key}</dt>
                      <dd className="w-2/3 text-deep-charcoal dark:text-soft-ivory">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <RatingStars rating={product.rating} size="lg" />
                <p className="mt-4 text-muted-walnut">
                  Based on {product.reviews} verified reviews
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-warm-beige dark:border-muted-walnut">
            <h2 className="text-2xl font-bold text-deep-charcoal dark:text-soft-ivory mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
