import { motion } from 'framer-motion';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-subtle-gold text-white',
    secondary: 'bg-warm-beige text-deep-charcoal dark:bg-muted-walnut dark:text-soft-ivory',
    outline: 'border-2 border-deep-charcoal text-deep-charcoal dark:border-soft-ivory dark:text-soft-ivory',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-medium rounded-full ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default Badge;