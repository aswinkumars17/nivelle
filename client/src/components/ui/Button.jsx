import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-deep-charcoal text-white hover:bg-muted-walnut focus:ring-deep-charcoal dark:bg-soft-ivory dark:text-deep-charcoal dark:hover:bg-warm-beige',
    secondary: 'bg-warm-beige text-deep-charcoal hover:bg-subtle-gold hover:text-white focus:ring-muted-walnut dark:bg-muted-walnut dark:text-soft-ivory dark:hover:bg-subtle-gold',
    outline: 'border-2 border-deep-charcoal text-deep-charcoal hover:bg-deep-charcoal hover:text-white focus:ring-deep-charcoal dark:border-soft-ivory dark:text-soft-ivory dark:hover:bg-soft-ivory dark:hover:text-deep-charcoal',
    ghost: 'text-deep-charcoal hover:bg-warm-beige focus:ring-muted-walnut dark:text-soft-ivory dark:hover:bg-muted-walnut',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;