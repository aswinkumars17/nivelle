import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Moon,
  Sun,
  ChevronRight,
  LogOut,
  Settings
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import Badge from '../ui/Badge';
import Drawer from '../ui/Drawer';
import Button from '../ui/Button';
import CartItem from '../cart/CartItem';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';
import { useToast } from '../ui/Toast';
import { formatCurrency } from '@/utils/currency';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const { isAuthenticated, isAdmin, logout } = useAuth();
   
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

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="flex items-center focus:outline-none"
              whileHover={{ scale: 1.02, opacity: 0.8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span 
                className="text-xl sm:text-2xl font-bold tracking-widest-xl text-transparent"
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
                    `px-3 xl:px-4 py-2 text-sm font-medium transition-all duration-300 relative group ${
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
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 sm:p-2.5 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors rounded-full hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </motion.button>

              {/* Wishlist - Hidden on smallest screens */}
              <motion.button
                onClick={() => navigate('/wishlist')}
                className="hidden sm:block relative p-2 sm:p-2.5 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors rounded-full hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistItems.length > 0 && (
                  <Badge className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs animate-bounce-subtle">
                    {wishlistItems.length}
                  </Badge>
                )}
              </motion.button>

              {/* Cart */}
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 text-deep-charcoal dark:text-soft-ivory hover:text-muted-walnut transition-colors rounded-full hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs animate-bounce-subtle">
                    {cartCount}
                  </Badge>
                )}
              </motion.button>

              {/* Profile/Auth - Hidden on mobile */}
              {isAuthenticated ? (
                <div className="hidden md:relative">
                  <motion.button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-deep-charcoal dark:bg-soft-ivory text-white dark:text-deep-charcoal rounded-full text-xs sm:text-sm font-medium hover:bg-muted-walnut dark:hover:bg-warm-beige transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Account</span>
                  </motion.button>
                  
                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-40"
                          onClick={() => setIsUserMenuOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl border border-warm-beige dark:border-muted-walnut/30 z-50 overflow-hidden"
                        >
                          <div className="py-2">
                            <button
                              onClick={() => {
                                setIsUserMenuOpen(false);
                                navigate('/orders');
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30 transition-colors"
                            >
                              My Orders
                            </button>
                            {isAdmin() && (
                              <button
                                onClick={() => {
                                  setIsUserMenuOpen(false);
                                  navigate('/admin');
                                }}
                                className="w-full px-4 py-2 text-left text-sm text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30 transition-colors"
                              >
                                Admin Dashboard
                              </button>
                            )}
                            <button
                              onClick={() => {
                                setIsUserMenuOpen(false);
                                navigate('/settings');
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30 transition-colors flex items-center gap-2"
                            >
                              <Settings className="w-4 h-4" />
                              Settings
                            </button>
                            <hr className="my-2 border-warm-beige dark:border-muted-walnut/30" />
                            <button
                              onClick={() => {
                                setIsUserMenuOpen(false);
                                logout();
                                addToast('Logged out successfully', 'success');
                              }}
                              className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
                            >
                              <LogOut className="w-4 h-4" />
                              Logout
                            </button>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <motion.button
                    onClick={() => navigate('/signin')}
                    className="px-3 sm:px-4 py-2 text-deep-charcoal dark:text-soft-ivory text-xs sm:text-sm font-medium hover:text-subtle-gold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/signup')}
                    className="px-3 sm:px-4 py-2 bg-deep-charcoal dark:bg-soft-ivory text-white dark:text-deep-charcoal rounded-full text-xs sm:text-sm font-medium hover:bg-muted-walnut dark:hover:bg-warm-beige transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign Up
                  </motion.button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 text-deep-charcoal dark:text-soft-ivory rounded-full hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Slide from right */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white dark:bg-[#0a0a0a] shadow-2xl lg:hidden z-50"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-warm-beige dark:border-muted-walnut/30">
                    <span className="text-lg font-bold text-deep-charcoal dark:text-soft-ivory">Menu</span>
                    <motion.button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 text-deep-charcoal dark:text-soft-ivory rounded-full hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30"
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 overflow-y-auto py-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3.5 text-base font-medium transition-colors ${
                              isActive
                                ? 'text-subtle-gold bg-subtle-gold/10'
                                : 'text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30'
                            }`
                          }
                        >
                          {link.name}
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="p-4 border-t border-warm-beige dark:border-muted-walnut/30 space-y-3">
                    {isAuthenticated ? (
                      <>
                        <Button 
                          variant="primary" 
                          className="w-full justify-center"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            navigate('/orders');
                          }}
                        >
                          <User className="w-4 h-4 mr-2" />
                          My Orders
                        </Button>
                        {isAdmin() && (
                          <Button 
                            variant="outline" 
                            className="w-full justify-center"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              navigate('/admin');
                            }}
                          >
                            Admin Dashboard
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          className="w-full justify-center text-red-600 dark:text-red-400"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            logout();
                            addToast('Logged out successfully', 'success');
                          }}
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button 
                        variant="primary" 
                        className="w-full justify-center"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          navigate('/signin');
                        }}
                      >
                        <User className="w-4 h-4 mr-2" />
                        Sign In / Sign Up
                      </Button>
                    )}
                    
                    {/* Mobile Wishlist Link */}
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate('/wishlist');
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm text-deep-charcoal dark:text-soft-ivory hover:bg-warm-beige/50 dark:hover:bg-muted-walnut/30 rounded-xl transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        Wishlist
                      </span>
                      {wishlistItems.length > 0 && (
                        <span className="bg-subtle-gold text-deep-charcoal text-xs px-2 py-0.5 rounded-full">
                          {wishlistItems.length}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Cart Drawer */}
      <Drawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} title="Your Cart">
        <div className="flex flex-col h-full">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 px-4">
              <ShoppingBag className="w-14 h-14 sm:w-16 sm:h-16 text-warm-beige dark:text-muted-walnut mb-4" />
              <p className="text-base sm:text-lg font-medium text-deep-charcoal dark:text-soft-ivory mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-walnut mb-6">Add some luxury furniture to get started</p>
              <Button onClick={() => { setIsCartOpen(false); navigate('/collections'); }}>
                Browse Collection
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 px-4 py-2">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveFromCart}
                  />
                ))}
              </div>
              
              <div className="border-t border-warm-beige dark:border-muted-walnut pt-4 mt-4 space-y-4 px-4 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-walnut text-sm sm:text-base">Subtotal</span>
                  <span className="text-lg sm:text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
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

    </>
  );
};

export default Navbar;
