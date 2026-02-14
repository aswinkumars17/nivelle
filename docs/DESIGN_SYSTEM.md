# Design System

> **NIVELLE UI/UX Design System**  
> **Version:** v2.0.0  
> **Last Updated:** February 13, 2026

---

## 1. Design Principles

### Core Philosophy

- **Elegant & Premium** - Reflects high-quality furniture
- **Clean & Minimal** - Easy to navigate
- **Indian Context** - Cultural resonance
- **Responsive** - Works on all devices
- **Dark Mode First** - Sophisticated dark theme as primary experience

---

## 2. Color Palette

### Light Theme Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#FAF9F7` | Page background |
| Surface | `#FFFFFF` | Cards, modals |
| Surface Elevated | `#F5F1EA` | Hover states |
| Text Primary | `#2B2B2B` | Headings, primary text |
| Text Secondary | `#5C5C5C` | Body text |
| Text Muted | `#8B8680` | Captions, hints |
| Border | `#E5E2DE` | Dividers, borders |
| Primary Brown | `#8B5A2B` | Buttons, accents, links |
| Secondary Tan | `#D4A574` | Highlights, hover states |
| Accent Gold | `#C6A75E` | Premium accents, selection |
| Accent Green | `#2C5F2D` | Success, eco-friendly |

### Dark Theme Colors (Primary)

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0F0F0F` | Page background |
| Surface | `#1A1A1A` | Cards, containers |
| Surface Elevated | `#252525` | Modals, dropdowns, hover |
| Surface Overlay | `#2D2D2D` | Tooltips, popovers |
| Text Primary | `#FAF9F7` | Headings, primary text |
| Text Secondary | `#B8B3AB` | Body text |
| Text Muted | `#7A756F` | Captions, hints |
| Border | `#3D3D3D` | Dividers, borders |
| Border Subtle | `#2A2A2A` | Subtle separators |
| Primary | `#C6A75E` | Primary buttons, active states |
| Primary Hover | `#D4B76E` | Hover state |
| Secondary | `#7A5C4D` | Secondary elements |
| Accent | `#A88B5C` | Premium highlights |
| Success | `#4ADE80` | Success messages |
| Warning | `#FBBF24` | Warnings, discounts |
| Error | `#F87171` | Errors, out of stock |
| Info | `#60A5FA` | Information |

### Semantic Colors (Dark Mode)

| State | Color | Hex | Usage |
|-------|-------|-----|-------|
| Success | Green | `#22C55E` | Positive actions, in stock |
| Success Light | `#4ADE80` | Success backgrounds |
| Warning | Amber | `#F59E0B` | Discounts, caution |
| Warning Light | `#FBBF24` | Warning backgrounds |
| Error | Red | `#EF4444` | Errors, out of stock |
| Error Light | `#F87171` | Error backgrounds |
| Info | Blue | `#3B82F6` | Information |
| Info Light | `#60A5FA` | Info backgrounds |

### Gradient Definitions

```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #C6A75E 0%, #A88B5C 100%);

/* Dark Surface Gradient */
--gradient-surface: linear-gradient(180deg, #1A1A1A 0%, #141414 100%);

/* Overlay Gradient */
--gradient-overlay: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%);

/* Glow Effect */
--gradient-glow: radial-gradient(circle, rgba(198, 167, 94, 0.15) 0%, transparent 70%);
```

---

## 3. Typography

### Font Stack

```css
/* Primary Font */
font-family: 'Inter', system-ui, -apple-system, sans-serif;

/* Heading Font */
font-family: 'Playfair Display', Georgia, serif;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 | 48px | 700 | 1.1 | -0.02em |
| H2 | 36px | 600 | 1.2 | -0.01em |
| H3 | 24px | 600 | 1.3 | 0 |
| H4 | 20px | 500 | 1.4 | 0 |
| Body Large | 18px | 400 | 1.6 | 0 |
| Body | 16px | 400 | 1.6 | 0 |
| Small | 14px | 400 | 1.5 | 0 |
| Caption | 12px | 400 | 1.4 | 0.02em |
| Label | 11px | 600 | 1.4 | 0.05em |

### Typography Dark Mode

```css
/* Primary Text */
.text-primary-dark {
  color: #FAF9F7;
  font-weight: 400;
}

/* Secondary Text */
.text-secondary-dark {
  color: #B8B3AB;
  font-weight: 400;
}

/* Muted Text */
.text-muted-dark {
  color: #7A756F;
  font-weight: 400;
}
```

---

## 4. Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0px | No spacing |
| 1 | 4px | Micro spacing |
| 2 | 8px | Tight spacing |
| 3 | 12px | Small gaps |
| 4 | 16px | Standard spacing |
| 5 | 20px | Medium gaps |
| 6 | 24px | Large spacing |
| 8 | 32px | Section spacing |
| 10 | 40px | Major sections |
| 12 | 48px | Page sections |
| 16 | 64px | Large sections |
| 20 | 80px | Hero spacing |
| 24 | 96px | Extra large |

### Usage Examples

```jsx
// ✅ Good
<div className="p-4 md:p-6 lg:p-8">
<div className="gap-4 md:gap-6">
<div className="my-8 md:my-12">

// ❌ Bad
<div style={{ padding: '17px' }}>
<div className="p-[13px]">
```

---

## 5. Components

### Buttons

#### Button Variants

```jsx
// Primary Button (Gold)
<Button variant="primary" size="md">
  Add to Cart
</Button>

// Secondary Button (Outlined)
<Button variant="secondary" size="lg">
  View Details
</Button>

// Ghost Button (Text only)
<Button variant="ghost" size="sm">
  Learn More
</Button>

// Accent Button (Brown)
<Button variant="accent" size="md">
  Buy Now
</Button>
```

#### Button Styles (Dark Mode)

| Variant | Background | Text | Border | Hover Background | Hover Text |
|---------|-----------|------|--------|------------------|------------|
| Primary | `#C6A75E` | `#0F0F0F` | None | `#D4B76E` | `#0F0F0F` |
| Secondary | Transparent | `#C6A75E` | 1px solid `#C6A75E` | `rgba(198, 167, 94, 0.1)` | `#D4B76E` |
| Ghost | Transparent | `#B8B3AB` | None | `rgba(184, 179, 171, 0.1)` | `#FAF9F7` |
| Accent | `#7A5C4D` | `#FAF9F7` | None | `#8B6B5A` | `#FAF9F7` |
| Destructive | `#EF4444` | `#FFFFFF` | None | `#F87171` | `#FFFFFF` |
| Disabled | `#2D2D2D` | `#5C5C5C` | None | `#2D2D2D` | `#5C5C5C` |

#### Button Sizes

| Size | Padding | Font Size | Height |
|------|---------|-----------|--------|
| xs | 6px 12px | 12px | 28px |
| sm | 8px 16px | 14px | 32px |
| md | 12px 24px | 16px | 40px |
| lg | 16px 32px | 18px | 48px |
| xl | 20px 40px | 20px | 56px |
| icon | 8px | 16px | 36px |

#### Button States (Dark)

```css
/* Default */
.btn-primary {
  background: #C6A75E;
  color: #0F0F0F;
  transition: all 0.2s ease-in-out;
}

/* Hover */
.btn-primary:hover {
  background: #D4B76E;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(198, 167, 94, 0.3);
}

/* Active */
.btn-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(198, 167, 94, 0.2);
}

/* Focus */
.btn-primary:focus-visible {
  outline: 2px solid #C6A75E;
  outline-offset: 2px;
}

/* Disabled */
.btn-primary:disabled {
  background: #2D2D2D;
  color: #5C5C5C;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
```

---

### Cards

#### Product Card (Dark Mode)

```jsx
<ProductCard
  image={product.image}
  title={product.name}
  price={product.price}
  rating={product.rating}
  badge={product.badge}
/>
```

#### Card Styles (Dark)

| Property | Value |
|----------|-------|
| Background | `#1A1A1A` |
| Border Radius | 12px |
| Border | 1px solid `#2A2A2A` |
| Shadow | `0 4px 6px rgba(0, 0, 0, 0.3)` |
| Hover Shadow | `0 8px 24px rgba(0, 0, 0, 0.5)` |
| Hover Border | 1px solid `#3D3D3D` |
| Hover Transform | `translateY(-4px)` |
| Transition | `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` |

#### Card Components

```css
/* Card Container */
.card {
  background: #1A1A1A;
  border: 1px solid #2A2A2A;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Card Image Container */
.card-image-wrapper {
  position: relative;
  overflow: hidden;
  background: #141414;
}

/* Card Content */
.card-content {
  padding: 20px;
  background: #1A1A1A;
}

/* Card Hover State */
.card:hover {
  border-color: #3D3D3D;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}
```

---

### Forms

#### Input Field (Dark Mode)

```jsx
<Input
  type="text"
  placeholder="Enter your name"
  label="Full Name"
  required
/>
```

#### Input Styles (Dark)

| State | Background | Border | Text | Placeholder |
|-------|-----------|--------|------|-------------|
| Default | `#1A1A1A` | 1px solid `#3D3D3D` | `#FAF9F7` | `#7A756F` |
| Hover | `#1A1A1A` | 1px solid `#4D4D4D` | `#FAF9F7` | `#7A756F` |
| Focus | `#1A1A1A` | 1px solid `#C6A75E` | `#FAF9F7` | `#7A756F` |
| Error | `#1A1A1A` | 1px solid `#EF4444` | `#FAF9F7` | `#7A756F` |
| Disabled | `#141414` | 1px solid `#2A2A2A` | `#5C5C5C` | `#5C5C5C` |

```css
/* Input Base */
.input {
  background: #1A1A1A;
  border: 1px solid #3D3D3D;
  border-radius: 8px;
  padding: 12px 16px;
  color: #FAF9F7;
  font-size: 16px;
  transition: all 0.2s ease;
}

/* Input Placeholder */
.input::placeholder {
  color: #7A756F;
}

/* Input Hover */
.input:hover {
  border-color: #4D4D4D;
}

/* Input Focus */
.input:focus {
  border-color: #C6A75E;
  box-shadow: 0 0 0 3px rgba(198, 167, 94, 0.15);
  outline: none;
}

/* Input Error */
.input-error {
  border-color: #EF4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

/* Input Disabled */
.input:disabled {
  background: #141414;
  border-color: #2A2A2A;
  color: #5C5C5C;
  cursor: not-allowed;
}
```

#### Form Labels (Dark)

```css
.label {
  color: #B8B3AB;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.label-required::after {
  content: '*';
  color: #EF4444;
  margin-left: 4px;
}
```

---

## 6. Layout

### Container

```jsx
// Max-width container with padding
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Narrow container for forms
<div className="max-w-2xl mx-auto px-4 sm:px-6">

// Full-width container
<div className="w-full px-4 sm:px-6 lg:px-8">
```

### Grid System

```jsx
// Product grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// Feature grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Split layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
```

### Spacing Scale Usage

```css
/* Section Spacing */
.section {
  padding-top: 96px;
  padding-bottom: 96px;
}

/* Component Spacing */
.component {
  padding: 24px;
  gap: 16px;
}

/* Element Spacing */
.element {
  margin-bottom: 8px;
  padding: 12px;
}
```

---

## 7. Animations

### Timing Functions

| Name | Value | Usage |
|------|-------|-------|
| Default | `ease-in-out` | General transitions |
| Bounce | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful elements |
| Smooth | `cubic-bezier(0.4, 0, 0.2, 1)` | Elegant transitions |
| Spring | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Buttons, cards |

### Durations

| Duration | Usage |
|----------|-------|
| 100ms | Micro-interactions, tooltips |
| 150ms | Quick feedback |
| 200ms | Button states |
| 300ms | Standard transitions |
| 500ms | Complex animations |
| 700ms | Page transitions |

### Standard Transitions

```css
/* Hover effect */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scale in */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Glow pulse */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(198, 167, 94, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(198, 167, 94, 0.4);
  }
}

/* Shimmer loading */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.loading-shimmer {
  background: linear-gradient(
    90deg,
    #1A1A1A 25%,
    #252525 50%,
    #1A1A1A 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

### Animation Classes

```css
/* Fade In */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* Slide Up */
.animate-slide-up {
  animation: slideUp 0.5s ease-in-out;
}

/* Scale In */
.animate-scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Bounce Subtle */
@keyframes bounceSubtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-bounce-subtle {
  animation: bounceSubtle 0.3s ease-in-out;
}

/* Stagger Children */
.stagger-children > * {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 50ms; }
.stagger-children > *:nth-child(3) { animation-delay: 100ms; }
.stagger-children > *:nth-child(4) { animation-delay: 150ms; }
.stagger-children > *:nth-child(5) { animation-delay: 200ms; }
```

---

## 8. Icons

### Icon Library

- **Primary:** Lucide React
- **Sizes:** 16px (xs), 20px (sm), 24px (md), 32px (lg), 40px (xl)
- **Color:** Inherit from parent
- **Stroke Width:** 1.5px (default), 2px (emphasis)

### Icon Usage

```jsx
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Search, 
  Menu, 
  X,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// Standard sizes
<ShoppingCart className="w-6 h-6" />  {/* 24px */}
<Heart className="w-5 h-5" />        {/* 20px */}
<Star className="w-4 h-4" />         {/* 16px */}

// With colors
<Heart className="w-5 h-5 text-[#C6A75E]" />
<Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
```

### Icon Buttons (Dark)

```css
.icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: transparent;
  color: #B8B3AB;
  transition: all 0.2s ease;
}

.icon-button:hover {
  background: rgba(184, 179, 171, 0.1);
  color: #FAF9F7;
}

.icon-button:active {
  background: rgba(184, 179, 171, 0.15);
}
```

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablets |
| lg | 1024px | Laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Responsive Patterns

```jsx
// Grid responsive
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

// Typography responsive
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Spacing responsive
<div className="p-4 md:p-6 lg:p-8">

// Visibility responsive
<div className="hidden md:block">

// Flex responsive
<div className="flex flex-col md:flex-row">
```

---

## 10. Accessibility

### Requirements

- **Color contrast:** 4.5:1 minimum (AAA: 7:1)
- **Focus states:** Visible outline on all interactive elements
- **Alt text:** All images must have descriptive alt text
- **ARIA labels:** Use where appropriate
- **Keyboard navigation:** All features accessible via keyboard
- **Reduced motion:** Respect prefers-reduced-motion

### Dark Mode Contrast Ratios

| Text Color | Background | Ratio | WCAG |
|------------|-----------|-------|------|
| `#FAF9F7` | `#0F0F0F` | 17.8:1 | AAA |
| `#FAF9F7` | `#1A1A1A` | 15.2:1 | AAA |
| `#B8B3AB` | `#0F0F0F` | 9.5:1 | AAA |
| `#B8B3AB` | `#1A1A1A` | 8.1:1 | AAA |
| `#C6A75E` | `#0F0F0F` | 7.8:1 | AAA |
| `#C6A75E` | `#1A1A1A` | 6.7:1 | AA |

### Focus Styles

```css
/* Default Focus */
:focus-visible {
  outline: 2px solid #C6A75E;
  outline-offset: 2px;
  border-radius: 4px;
}

/* High Contrast Focus */
@media (prefers-contrast: high) {
  :focus-visible {
    outline: 3px solid #C6A75E;
    outline-offset: 3px;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Screen Reader Support

```jsx
// Visually hidden text
<span className="sr-only">Add to cart</span>

// ARIA labels
<button aria-label="Close dialog">
  <X className="w-5 h-5" />
</button>

// Live regions
<div aria-live="polite" aria-atomic="true">
  {notificationMessage}
</div>

// Hidden decorative elements
<div aria-hidden="true">
  <DecorativeIcon />
</div>
```

---

## 11. Dark Mode Implementation

### CSS Variables Approach

```css
:root {
  /* Light theme (default) */
  --bg-primary: #FAF9F7;
  --bg-surface: #FFFFFF;
  --bg-elevated: #F5F1EA;
  
  --text-primary: #2B2B2B;
  --text-secondary: #5C5C5C;
  --text-muted: #8B8680;
  
  --border-default: #E5E2DE;
  --border-subtle: #F0EDE8;
  
  --accent-primary: #8B5A2B;
  --accent-gold: #C6A75E;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.dark {
  /* Dark theme */
  --bg-primary: #0F0F0F;
  --bg-surface: #1A1A1A;
  --bg-elevated: #252525;
  
  --text-primary: #FAF9F7;
  --text-secondary: #B8B3AB;
  --text-muted: #7A756F;
  
  --border-default: #3D3D3D;
  --border-subtle: #2A2A2A;
  
  --accent-primary: #C6A75E;
  --accent-gold: #C6A75E;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.6);
}
```

### Tailwind Dark Mode Classes

```jsx
// Background
<div className="bg-[#0F0F0F] dark:bg-[#0F0F0F]">

// Surface
<div className="bg-[#1A1A1A] dark:bg-[#1A1A1A]">

// Text
<h1 className="text-[#2B2B2B] dark:text-[#FAF9F7]">

// Border
<div className="border border-[#E5E2DE] dark:border-[#3D3D3D]">

// Combined
<div className="
  bg-white dark:bg-[#1A1A1A]
  text-gray-900 dark:text-[#FAF9F7]
  border border-gray-200 dark:border-[#3D3D3D]
  hover:bg-gray-50 dark:hover:bg-[#252525]
">
```

### Theme Toggle Implementation

```jsx
// ThemeToggle.jsx
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-[#1A1A1A] text-[#B8B3AB] 
                 hover:bg-[#252525] hover:text-[#C6A75E]
                 transition-all duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
```

### Dark Mode Component Examples

#### Navigation Bar (Dark)

```jsx
<nav className="bg-[#0F0F0F] border-b border-[#2A2A2A]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <span className="text-[#C6A75E] text-xl font-bold">
        NIVELLE
      </span>
      
      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-[#B8B3AB] hover:text-[#FAF9F7] 
                              transition-colors duration-200">
          Shop
        </a>
        <a href="#" className="text-[#B8B3AB] hover:text-[#FAF9F7] 
                              transition-colors duration-200">
          Categories
        </a>
      </div>
      
      {/* Actions */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button className="text-[#B8B3AB] hover:text-[#C6A75E]">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</nav>
```

#### Product Card (Dark)

```jsx
<div className="
  bg-[#1A1A1A] 
  border border-[#2A2A2A] 
  rounded-xl 
  overflow-hidden
  transition-all duration-300
  hover:border-[#3D3D3D]
  hover:transform hover:-translate-y-1
  hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]
">
  {/* Image */}
  <div className="relative aspect-[4/3] bg-[#141414] overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-full object-cover transition-transform 
                 duration-500 hover:scale-105"
    />
    {product.badge && (
      <span className="absolute top-3 left-3 bg-[#C6A75E] text-[#0F0F0F] 
                      text-xs font-semibold px-3 py-1 rounded-full">
        {product.badge}
      </span>
    )}
  </div>
  
  {/* Content */}
  <div className="p-5">
    <h3 className="text-[#FAF9F7] font-medium text-lg mb-1">
      {product.name}
    </h3>
    <p className="text-[#7A756F] text-sm mb-3">
      {product.material}
    </p>
    <div className="flex items-center justify-between">
      <span className="text-[#C6A75E] text-xl font-bold">
        ₹{product.price.toLocaleString('en-IN')}
      </span>
      <div className="flex items-center text-[#F59E0B]">
        <Star className="w-4 h-4 fill-current" />
        <span className="text-[#B8B3AB] ml-1 text-sm">
          {product.rating}
        </span>
      </div>
    </div>
  </div>
</div>
```

#### Button Variants (Dark)

```jsx
// Primary (Gold)
<button className="
  bg-[#C6A75E] text-[#0F0F0F]
  px-6 py-3 rounded-lg font-medium
  transition-all duration-200
  hover:bg-[#D4B76E]
  hover:transform hover:-translate-y-0.5
  hover:shadow-[0_4px_12px_rgba(198,167,94,0.3)]
  active:transform active:translate-y-0
  focus:outline-none focus:ring-2 focus:ring-[#C6A75E] 
        focus:ring-offset-2 focus:ring-offset-[#0F0F0F]
">
  Add to Cart
</button>

// Secondary (Outline)
<button className="
  bg-transparent text-[#C6A75E] border border-[#C6A75E]
  px-6 py-3 rounded-lg font-medium
  transition-all duration-200
  hover:bg-[rgba(198,167,94,0.1)]
  hover:border-[#D4B76E]
">
  View Details
</button>

// Ghost
<button className="
  bg-transparent text-[#B8B3AB]
  px-4 py-2 rounded-lg
  transition-all duration-200
  hover:bg-[rgba(184,179,171,0.1)]
  hover:text-[#FAF9F7]
">
  Learn More
</button>
```

---

## 12. Shadows & Effects

### Shadow Scale (Dark Mode)

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | `0 1px 2px rgba(0, 0, 0, 0.5)` | Subtle elevation |
| shadow-md | `0 4px 6px rgba(0, 0, 0, 0.5)` | Cards, buttons |
| shadow-lg | `0 8px 24px rgba(0, 0, 0, 0.5)` | Modals, dropdowns |
| shadow-xl | `0 16px 48px rgba(0, 0, 0, 0.6)` | Overlays |
| shadow-glow | `0 0 20px rgba(198, 167, 94, 0.3)` | Focus states |

### Glow Effects

```css
/* Gold Glow */
.glow-gold {
  box-shadow: 0 0 20px rgba(198, 167, 94, 0.3);
}

.glow-gold-intense {
  box-shadow: 0 0 40px rgba(198, 167, 94, 0.5);
}

/* Success Glow */
.glow-success {
  box-shadow: 0 0 20px rgba(74, 222, 128, 0.3);
}

/* Error Glow */
.glow-error {
  box-shadow: 0 0 20px rgba(248, 113, 113, 0.3);
}
```

### Glassmorphism (Dark)

```css
.glass-dark {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-elevated {
  background: rgba(37, 37, 37, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
```

---

## 13. Best Practices

### Do's ✅

- Use `#0F0F0F` as the primary background
- Use `#C6A75E` (gold) for primary actions and accents
- Maintain 4.5:1 contrast ratio minimum
- Use smooth transitions (0.2s-0.3s) for all interactive elements
- Use `#1A1A1A` for cards and surfaces
- Apply hover states with subtle lift and shadow
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for elegant transitions
- Test on actual devices, not just browser resizing

### Don'ts ❌

- Don't use pure black `#000000` as background
- Don't use pure white text (`#FFFFFF`) - use `#FAF9F7` instead
- Don't make shadows too strong (avoid 100% opacity)
- Don't use abrupt transitions (avoid 0s duration)
- Don't forget focus states for keyboard navigation
- Don't use light borders in dark mode (use `#3D3D3D` instead)
- Don't ignore reduced motion preferences
- Don't use more than 3 accent colors

### Component Checklist

Before marking a component as complete:

- [ ] Works in both light and dark modes
- [ ] Has visible focus states
- [ ] Meets WCAG AA contrast requirements
- [ ] Has smooth hover transitions
- [ ] Respects prefers-reduced-motion
- [ ] Works with keyboard navigation
- [ ] Has appropriate ARIA labels
- [ ] Tested on mobile devices

---

*For implementation details, see component files in /client/src/components*

*For architecture details, see ARCHITECTURE.md*

*Last Updated: February 13, 2026*  
*Version: 2.0.0 - Dark Theme First Update*
