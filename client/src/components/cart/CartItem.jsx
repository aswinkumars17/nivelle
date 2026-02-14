import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '@/utils/currency';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 p-4 bg-warm-beige/30 dark:bg-muted-walnut/20 rounded-2xl"
    >
      {/* Image */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-soft-ivory dark:bg-deep-charcoal flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-deep-charcoal dark:text-soft-ivory truncate">
          {item.name}
        </h4>
        <p className="text-sm text-muted-walnut mb-2">{item.category}</p>
        <p className="font-semibold text-deep-charcoal dark:text-soft-ivory">
          {formatCurrency(item.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <motion.button
          onClick={() => onRemove(item.id)}
          className="p-1.5 text-muted-walnut hover:text-red-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Trash2 className="w-4 h-4" />
        </motion.button>
        
        <div className="flex items-center gap-2 bg-white dark:bg-deep-charcoal rounded-full px-2 py-1">
          <motion.button
            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="p-1 rounded-full hover:bg-warm-beige dark:hover:bg-muted-walnut transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={item.quantity <= 1}
          >
            <Minus className="w-3 h-3" />
          </motion.button>
          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
          <motion.button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-1 rounded-full hover:bg-warm-beige dark:hover:bg-muted-walnut transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;