import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, title, children, position = 'right' }) => {
  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
  };

  const slideVariants = {
    left: { x: '-100%' },
    right: { x: '100%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={slideVariants[position]}
            animate={{ x: 0 }}
            exit={slideVariants[position]}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-0 ${positionClasses[position]} h-full w-full max-w-md bg-white dark:bg-deep-charcoal shadow-soft-lg z-50`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-warm-beige dark:border-muted-walnut">
              <h2 className="text-xl font-semibold text-deep-charcoal dark:text-soft-ivory">
                {title}
              </h2>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-warm-beige dark:hover:bg-muted-walnut transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-deep-charcoal dark:text-soft-ivory" />
              </motion.button>
            </div>
            
            {/* Content */}
            <div className="h-[calc(100%-80px)] overflow-y-auto p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;