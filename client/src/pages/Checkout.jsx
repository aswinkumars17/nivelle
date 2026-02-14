import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, Truck, Check, ChevronRight, Shield, Lock } from 'lucide-react';
import { clearCart } from '@/store/cartSlice';
import { useToast } from '@/components/ui/Toast';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/utils/currency';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const cartItems = useSelector((state) => state.cart.items);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 80000 ? 0 : 2500;
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + shipping + tax;

  const onSubmit = async (data) => {
    setIsProcessing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderPlaced(true);
    dispatch(clearCart());
    addToast('Order placed successfully!', 'success');
    
    // Redirect to orders page after 3 seconds
    setTimeout(() => {
      navigate('/orders');
    }, 3000);
  };

  if (cartItems.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal pt-24 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-deep-charcoal dark:text-soft-ivory mb-4">
            Order Confirmed!
          </h1>
          <p className="text-muted-walnut mb-6">
            Thank you for your purchase. Your order has been received and is being processed. You will receive a confirmation email shortly.
          </p>
          <Button onClick={() => navigate('/orders')}>
            View Orders
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
            Checkout
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-walnut">
            <span>Cart</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-deep-charcoal dark:text-soft-ivory font-medium">Checkout</span>
            <ChevronRight className="w-4 h-4" />
            <span>Confirmation</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-deep-charcoal rounded-2xl p-6 shadow-soft"
              >
                <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory mb-6">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-transparent'
                      } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-transparent'
                      } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-deep-charcoal rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="w-6 h-6 text-subtle-gold" />
                  <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
                    Shipping Address
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                        First Name *
                      </label>
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        type="text"
                        className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                          errors.firstName ? 'border-red-500' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        type="text"
                        className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                          errors.lastName ? 'border-red-500' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                      Address *
                    </label>
                    <input
                      {...register('address', { required: 'Address is required' })}
                      type="text"
                      className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                        errors.address ? 'border-red-500' : 'border-transparent'
                      } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      placeholder="Street address"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                        City *
                      </label>
                      <input
                        {...register('city', { required: 'City is required' })}
                        type="text"
                        className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                          errors.city ? 'border-red-500' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                        State *
                      </label>
                      <input
                        {...register('state', { required: 'State is required' })}
                        type="text"
                        className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                          errors.state ? 'border-red-500' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      />
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-500">{errors.state.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                        ZIP Code *
                      </label>
                      <input
                        {...register('zipCode', { required: 'ZIP code is required' })}
                        type="text"
                        className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                          errors.zipCode ? 'border-red-500' : 'border-transparent'
                        } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-500">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-deep-charcoal rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-subtle-gold" />
                  <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
                    Payment Method
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-subtle-gold bg-subtle-gold/5'
                          : 'border-warm-beige dark:border-muted-walnut'
                      }`}
                    >
                      <CreditCard className="w-6 h-6 mb-2 text-deep-charcoal dark:text-soft-ivory" />
                      <p className="font-medium text-deep-charcoal dark:text-soft-ivory">Credit Card</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-subtle-gold bg-subtle-gold/5'
                          : 'border-warm-beige dark:border-muted-walnut'
                      }`}
                    >
                      <div className="w-6 h-6 mb-2 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        P
                      </div>
                      <p className="font-medium text-deep-charcoal dark:text-soft-ivory">PayPal</p>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                          Card Number *
                        </label>
                        <input
                          {...register('cardNumber', { required: 'Card number is required' })}
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                            errors.cardNumber ? 'border-red-500' : 'border-transparent'
                          } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                            Expiry Date *
                          </label>
                          <input
                            {...register('expiry', { required: 'Expiry date is required' })}
                            type="text"
                            placeholder="MM/YY"
                            className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                              errors.expiry ? 'border-red-500' : 'border-transparent'
                            } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-deep-charcoal dark:text-soft-ivory mb-2">
                            CVC *
                          </label>
                          <input
                            {...register('cvc', { required: 'CVC is required' })}
                            type="text"
                            placeholder="123"
                            className={`w-full px-4 py-3 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-xl border ${
                              errors.cvc ? 'border-red-500' : 'border-transparent'
                            } focus:outline-none focus:ring-2 focus:ring-subtle-gold text-deep-charcoal dark:text-soft-ivory`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Place Order - {formatCurrency(total)}
                  </span>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-walnut">
                <Shield className="w-4 h-4" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-deep-charcoal rounded-2xl p-6 shadow-soft"
            >
              <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory mb-6">
                Order Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-warm-beige/50 dark:bg-muted-walnut/30 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-deep-charcoal dark:text-soft-ivory text-sm truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-walnut">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium text-deep-charcoal dark:text-soft-ivory">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 pt-6 border-t border-warm-beige dark:border-muted-walnut">
                <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
                  <span className="text-muted-walnut">Subtotal</span>
                  <span className="font-medium">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
                  <span className="text-muted-walnut">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
                  <span className="text-muted-walnut">GST (18%)</span>
                  <span className="font-medium">{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-deep-charcoal dark:text-soft-ivory pt-3 border-t border-warm-beige dark:border-muted-walnut">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
