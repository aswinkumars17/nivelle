import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
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
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full ${sizes[size]} z-50 px-4`}
          >
            <div className="bg-white/90 dark:bg-deep-charcoal/90 backdrop-blur-md rounded-2xl shadow-soft-lg overflow-hidden max-h-[85vh] flex flex-col">
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between px-6 py-4 border-b border-warm-beige dark:border-muted-walnut flex-shrink-0">
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
              )}
              
              {/* Content */}
              <div className="p-6 overflow-y-auto">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;