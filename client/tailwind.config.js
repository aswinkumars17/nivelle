/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme Colors
        'light-bg': '#FAF9F7',
        'light-surface': '#FFFFFF',
        'light-elevated': '#F5F1EA',
        'light-text': '#2B2B2B',
        'light-text-secondary': '#5C5C5C',
        'light-text-muted': '#8B8680',
        'light-border': '#E5E2DE',
        'light-border-subtle': '#F0EDE8',
        
        // Dark Theme Colors (Primary)
        'dark-bg': '#0F0F0F',
        'dark-surface': '#1A1A1A',
        'dark-elevated': '#252525',
        'dark-overlay': '#2D2D2D',
        'dark-text': '#FAF9F7',
        'dark-text-secondary': '#B8B3AB',
        'dark-text-muted': '#7A756F',
        'dark-border': '#3D3D3D',
        'dark-border-subtle': '#2A2A2A',
        
        // Accent Colors
        'accent-gold': '#C6A75E',
        'accent-gold-hover': '#D4B76E',
        'accent-gold-light': 'rgba(198, 167, 94, 0.1)',
        'accent-brown': '#7A5C4D',
        'accent-brown-hover': '#8B6B5A',
        'accent-warm': '#A88B5C',
        
        // Semantic Colors (Dark Mode)
        'success': '#22C55E',
        'success-light': '#4ADE80',
        'warning': '#F59E0B',
        'warning-light': '#FBBF24',
        'error': '#EF4444',
        'error-light': '#F87171',
        'info': '#3B82F6',
        'info-light': '#60A5FA',
        
        // Legacy colors (for backward compatibility)
        'warm-beige': '#F5F1EA',
        'soft-ivory': '#FAF9F7',
        'deep-charcoal': '#2B2B2B',
        'muted-walnut': '#7A5C4D',
        'subtle-gold': '#C6A75E',
      },
      fontFamily: {
        'elegant': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'tight': '-0.02em',
        'tighter': '-0.04em',
      },
      transitionDuration: {
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      boxShadow: {
        // Light theme shadows
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        
        // Dark theme shadows
        'dark-sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'dark-xl': '0 16px 48px rgba(0, 0, 0, 0.6)',
        
        // Glow effects
        'glow': '0 0 20px rgba(198, 167, 94, 0.3)',
        'glow-lg': '0 0 40px rgba(198, 167, 94, 0.5)',
        'glow-success': '0 0 20px rgba(74, 222, 128, 0.3)',
        'glow-error': '0 0 20px rgba(248, 113, 113, 0.3)',
        
        // Card hover
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.5)',
        'card-hover-light': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'bounce-subtle': 'bounceSubtle 0.3s ease-in-out',
        'shimmer': 'shimmer 1.5s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(198, 167, 94, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(198, 167, 94, 0.4)' },
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [
    // Custom plugin for dark mode utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(135deg, #C6A75E 0%, #A88B5C 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-gradient-dark': {
          background: 'linear-gradient(180deg, #1A1A1A 0%, #141414 100%)',
        },
        '.glass-dark': {
          background: 'rgba(26, 26, 26, 0.8)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-elevated': {
          background: 'rgba(37, 37, 37, 0.9)',
          'backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.focus-ring': {
          outline: '2px solid #C6A75E',
          'outline-offset': '2px',
        },
        '.loading-shimmer': {
          background: 'linear-gradient(90deg, #1A1A1A 25%, #252525 50%, #1A1A1A 75%)',
          'background-size': '200% 100%',
          animation: 'shimmer 1.5s infinite',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}
