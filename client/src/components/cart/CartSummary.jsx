import { motion } from 'framer-motion';
import { Truck, Shield, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';
import { formatCurrency } from '@/utils/currency';

const CartSummary = ({ items, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 80000 ? 0 : 2500;
  const tax = subtotal * 0.18; // 18% GST for India
  const total = subtotal + shipping + tax;

  const benefits = [
    { icon: Truck, text: 'Free shipping on orders over ₹80,000' },
    { icon: Shield, text: '2-year warranty on all products' },
    { icon: RotateCcw, text: '30-day hassle-free returns' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-2xl p-6 space-y-6"
    >
      <h3 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
        Order Summary
      </h3>

      {/* Cost Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
          <span className="text-muted-walnut">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
          <span className="text-muted-walnut">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'Free' : formatCurrency(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-deep-charcoal dark:text-soft-ivory">
          <span className="text-muted-walnut">Tax (18% GST)</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        <div className="border-t border-muted-walnut/30 pt-3">
          <div className="flex justify-between text-lg font-semibold text-deep-charcoal dark:text-soft-ivory">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button 
        className="w-full"
        size="lg"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>

      {/* Benefits */}
      <div className="space-y-3 pt-4 border-t border-muted-walnut/30">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3 text-sm text-muted-walnut">
            <benefit.icon className="w-4 h-4 text-subtle-gold" />
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CartSummary;