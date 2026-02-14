import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Moon,
  Sun
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '../ui/Badge';
import Drawer from '../ui/Drawer';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import CartItem from '../cart/CartItem';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { useToast } from '../ui/Toast';
import { formatCurrency } from '@/utils/currency';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize from localStorage immediately
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToast();
   
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Collections', path: '/collections' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  // Apply theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    // Mark initial load complete after first render
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Save theme to localStorage when changed (skip on initial load)
  useEffect(() => {
    if (isInitialLoad) return;
    
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isInitialLoad]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    addToast('Item removed from cart', 'info');
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = () => {
    navigate('/');
    scrollToTop();
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-deep-charcoal/95 backdrop-blur-md shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="flex items-center focus:outline-none"
              whileHover={{ scale: 1.02, opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span 
                className="text-2xl font-bold tracking-widest-xl text-transparent"
                style={{ 
                  WebkitTextStroke: '1px #C6A75E',
                  textStroke: '1px #C6A75E'
                }}
              >
                NIVELLE
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
                      isActive
                        ? 'text-subtle-gold'
                        : 'text-deep-charcoal dark:text-soft-ivory hover:text-subtle-gold'
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-subtle-gold transition-all duration-300 group-hover:w-1/2" />
                </NavLink>
              ))}
            </div>

            {/* Right - Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Wishlist */}
              <motion.button
                onClick={() => navigate('/wishlist')}
                className="relative p-2 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 animate-bounce-subtle">
                    {wishlistItems.length}
                  </Badge>
                )}
              </motion.button>

              {/* Cart */}
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 animate-bounce-subtle">
                    {cartCount}
                  </Badge>
                )}
              </motion.button>

              {/* Profile */}
              <motion.button
                onClick={() => setIsLoginOpen(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-deep-charcoal dark:bg-soft-ivory text-white dark:text-deep-charcoal rounded-full text-sm font-medium hover:bg-muted-walnut dark:hover:bg-warm-beige transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-deep-charcoal dark:text-soft-ivory"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-deep-charcoal border-t border-warm-beige dark:border-muted-walnut"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-subtle-gold/10 text-subtle-gold'
                          : 'text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige dark:hover:bg-muted-walnut'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                {/* Mobile Profile */}
                <Button 
                  variant="primary" 
                  className="w-full mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Cart Drawer */}
      <Drawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} title="Your Cart">
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-16 h-16 text-warm-beige dark:text-muted-walnut mb-4" />
              <p className="text-lg font-medium text-deep-charcoal dark:text-soft-ivory mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-walnut mb-6">Add some luxury furniture to get started</p>
              <Button onClick={() => { setIsCartOpen(false); navigate('/collections'); }}>
                Browse Collection
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveFromCart}
                  />
                ))}
              </div>
              
              <div className="border-t border-warm-beige dark:border-muted-walnut pt-4 mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-walnut">Subtotal</span>
                  <span className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
                    {formatCurrency(cartTotal)}
                  </span>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}
                >
                  Checkout
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => { setIsCartOpen(false); navigate('/cart'); }}
                >
                  View Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </Drawer>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Welcome Back" size="md">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-warm-beige/50 dark:bg-muted-walnut/30 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-warm-beige/50 dark:bg-muted-walnut/30 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
          <p className="text-center text-sm text-muted-walnut">
            Don't have an account?{' '}
            <button type="button" className="text-subtle-gold hover:underline">
              Sign up
            </button>
          </p>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;