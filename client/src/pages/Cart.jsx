import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity, clearCart } from '@/store/cartSlice';
import { useToast } from '@/components/ui/Toast';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import Button from '@/components/ui/Button';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const cartItems = useSelector((state) => state.cart.items);

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateQuantity({ id: itemId, quantity }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    addToast('Item removed from cart', 'info');
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    addToast('Cart cleared', 'info');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-24 h-24 text-warm-beige dark:text-muted-walnut mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-walnut mb-8 max-w-md mx-auto">
            Looks like you haven't added any luxury furniture to your cart yet. Explore our collection to find the perfect pieces for your home.
          </p>
          <Button onClick={() => navigate('/products')}>
            Browse Collection
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
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deep-charcoal dark:text-soft-ivory mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-walnut">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
                Cart Items
              </h2>
              <button
                onClick={handleClearCart}
                className="text-sm text-muted-walnut hover:text-red-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CartItem
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                </motion.div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="pt-6">
              <Button variant="ghost" onClick={() => navigate('/products')}>
                Continue Shopping
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CartSummary items={cartItems} onCheckout={handleCheckout} />
          </div>
        </div>

        {/* Mobile Checkout Button */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-deep-charcoal border-t border-warm-beige dark:border-muted-walnut z-30">
          <Button className="w-full" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
