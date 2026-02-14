# Nivelle - Project Documentation

> **Version:** 1.1.0  
> **Last Updated:** February 2026  
> **Status:** Active Development  
> **Maintainer:** Development Team

## Recent Changes (v2.0.0) - Major Update

### ✅ Completed - 13 Feb 2026
- **Complete Indian Market Transformation** - Full catalog converted to Indian furniture
- **Massive Product Expansion** - Increased from 40 to 120 products (3x growth)
- **New Product Categories Added** - Pooja Units, Home Decor, Outdoor Furniture
- **Authentic Indian Pricing** - Realistic INR prices (₹1,500 - ₹3,00,000)
- **Indian Materials Focus** - Sheesham wood, Teak, Mango wood, Rosewood
- **Traditional Styles** - Rajasthani carvings, South Indian designs, Colonial fusion
- **Fixed Product Filter Logic** - Multiple criteria filters working perfectly
- **Currency Change** - All prices in Indian Rupees (INR) with ₹ symbol
- **Added Currency Utility** - `@/utils/currency.js` for proper INR formatting
- **Updated Tax** - 18% Indian GST applied to all purchases
- **Free Shipping Threshold** - ₹80,000 for Indian market
- **Error Log Created** - Comprehensive ERROR_LOG.md documenting all changes

### 📊 New Product Breakdown
- **Sofas**: 15 products (₹15,000 - ₹3,00,000)
- **Beds**: 20 products (₹8,500 - ₹2,50,000)
- **Chairs**: 25 products (₹1,500 - ₹45,000)
- **Tables**: 20 products (₹2,500 - ₹1,80,000)
- **Storage**: 20 products (₹2,500 - ₹1,50,000)
- **Pooja Units**: 10 products (₹3,500 - ₹75,000)
- **Decor**: 5 products (₹4,500 - ₹25,000)
- **Outdoor**: 5 products (₹4,500 - ₹35,000)

**Total: 120 unique products across 9 categories**

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Vision and Goals](#2-vision-and-goals)
3. [Tech Stack](#3-tech-stack)
4. [Folder Structure](#4-folder-structure)
5. [State Management Architecture](#5-state-management-architecture)
6. [Image Assets & Data Management](#6-image-assets--data-management)
7. [Routing Architecture](#7-routing-architecture)
8. [UI/UX Design Principles](#8-uiux-design-principles)
9. [Component Naming Conventions](#9-component-naming-conventions)
10. [Global Styling Strategy](#10-global-styling-strategy)
11. [Toast / Notification System](#11-toast--notification-system)
12. [Cart System Logic](#12-cart-system-logic)
13. [Wishlist System Logic](#13-wishlist-system-logic)
14. [Current Status: Built vs Pending](#14-current-status-built-vs-pending)
15. [Future Roadmap](#15-future-roadmap)
16. [Code Standards](#16-code-standards)
17. [Git Branch Strategy](#17-git-branch-strategy)
18. [Performance Optimization](#18-performance-optimization-strategy)
19. [Security Considerations](#19-security-considerations)
20. [Deployment Plan](#20-deployment-plan)
21. [Safe Extension Guidelines](#21-safe-extension-guidelines)

---

## 1. Project Overview

**Nivelle** is a modern, premium e-commerce frontend application built with React and Vite. It specializes in furniture and home décor sales, offering an elegant shopping experience with sophisticated UI/UX design.

### Core Features
- Product catalog with advanced filtering and search
- Shopping cart with persistent state
- Wishlist functionality
- Checkout flow with form validation
- Order history tracking
- Responsive design with dark mode support
- Toast notification system
- Smooth animations and transitions

### Target Audience
- Homeowners seeking premium furniture
- Interior designers
- Modern lifestyle enthusiasts

---

## 2. Vision and Goals

### Vision Statement
"To create the most intuitive and visually stunning furniture shopping experience on the web, combining minimalist design with powerful functionality."

### Strategic Goals

#### Short-term (0-3 months)
- [x] Complete core shopping functionality
- [x] Implement responsive design
- [x] Set up Redux state management
- [ ] Integrate real payment gateway
- [ ] Add user authentication
- [ ] Implement product reviews

#### Medium-term (3-6 months)
- [ ] Add AR product visualization
- [ ] Implement AI-powered recommendations
- [ ] Create admin dashboard
- [ ] Add inventory management
- [ ] Multi-language support

#### Long-term (6-12 months)
- [ ] Mobile app development (React Native)
- [ ] Advanced analytics dashboard
- [ ] B2B wholesale portal
- [ ] International shipping
- [ ] Loyalty program integration

### Success Metrics
- Page load time < 2 seconds
- Lighthouse score > 90
- Mobile responsiveness score > 95
- Cart abandonment rate < 60%

---

## 3. Tech Stack

### Core Framework

#### React 19.2.0
**Why:** Latest React version with improved performance, concurrent features, and better TypeScript support. Enables use of modern hooks and patterns.

#### Vite 7.3.1
**Why:** 
- 10x faster development server than webpack
- Instant Hot Module Replacement (HMR)
- Optimized production builds
- Native ES modules support
- Excellent plugin ecosystem

### State Management

#### Redux Toolkit 2.11.2 + React Redux 9.2.0
**Why:**
- Predictable state management across components
- Excellent debugging with Redux DevTools
- Built-in immutability with Immer
- Simplified boilerplate with createSlice
- Middleware support for async actions

**Alternative considered:** Zustand (lighter weight, but Redux offers better dev tools and team familiarity)

### Routing

#### React Router DOM 7.13.0
**Why:**
- Industry standard for React routing
- Declarative routing with JSX
- Nested routes support
- Lazy loading capabilities
- URL parameter handling

### Styling

#### Tailwind CSS 3.4.19
**Why:**
- Utility-first approach speeds up development
- Consistent design system
- Small production bundle (purges unused styles)
- Easy dark mode implementation
- Custom theme configuration
- Excellent IntelliSense support

#### PostCSS 8.5.6 + Autoprefixer 10.4.24
**Why:** Modern CSS processing, automatic vendor prefixing for browser compatibility.

### Animation

#### Framer Motion 12.34.0
**Why:**
- Declarative animations in React
- Gesture support (drag, hover, tap)
- AnimatePresence for exit animations
- Layout animations
- Performance optimized

### Forms

#### React Hook Form 7.71.1
**Why:**
- Minimal re-renders
- Easy validation integration
- Tiny bundle size (~9KB gzipped)
- Excellent TypeScript support
- Works with controlled and uncontrolled components

### Icons

#### Lucide React 0.563.0
**Why:**
- Modern, consistent icon set
- Tree-shakeable (only imports used icons)
- SVG-based, scalable
- Active maintenance

### HTTP Client

#### Axios 1.13.5
**Why:**
- Promise-based API
- Request/response interceptors
- Automatic JSON transformation
- Client-side XSRF protection
- Request timeout handling

### Development Tools

#### ESLint 9.39.1
**Why:** Code quality enforcement, catches common errors, enforces team coding standards.

#### @vitejs/plugin-react 5.1.1
**Why:** Official Vite plugin for React with Fast Refresh support.

---

## 4. Folder Structure

```
nivelle/
├── public/                          # Static assets
│   ├── images/                      # Product images, banners
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── assets/                      # Project assets (fonts, icons)
│   │   ├── fonts/
│   │   └── images/
│   │
│   ├── components/                  # Reusable components
│   │   ├── cart/                    # Cart-specific components
│   │   │   ├── CartItem.jsx
│   │   │   └── CartSummary.jsx
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── product/                 # Product display components
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGallery.jsx
│   │   │   └── RatingStars.jsx
│   │   │
│   │   └── ui/                      # Generic UI components
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Drawer.jsx
│   │       ├── Modal.jsx
│   │       └── Toast.jsx
│   │
│   ├── pages/                       # Page components (route-level)
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Wishlist.jsx
│   │   └── Orders.jsx
│   │
│   ├── routes/                      # Routing configuration
│   │   └── AppRoutes.jsx
│   │
│   ├── services/                    # API and external services
│   │   ├── api.js                   # Axios configuration
│   │   └── mockData.js              # Mock data for development
│   │
│   ├── store/                       # Redux store configuration
│   │   ├── store.js                 # Store setup
│   │   ├── cartSlice.js             # Cart state management
│   │   ├── productSlice.js          # Products state management
│   │   └── wishlistSlice.js         # Wishlist state management
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── useLocalStorage.js
│   │
  │   ├── utils/                       # Utility functions
  │   │   ├── currency.js              # INR currency formatting
  │   │   ├── formatDate.js
  │   │   └── validators.js
│   │
│   ├── constants/                   # Application constants
│   │   └── routes.js
│   │
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
│
├── .env                             # Environment variables
├── .env.example                     # Environment template
├── .eslintrc.js                     # ESLint configuration
├── .gitignore
├── index.html                       # HTML entry point
├── jsconfig.json                    # JavaScript/IDE configuration
├── package.json
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
├── PROJECT_DOCUMENTATION.md         # This file
└── README.md
```

### Directory Purpose

| Directory | Purpose | Contents |
|-----------|---------|----------|
| `components/` | Reusable React components | Organized by feature/domain |
| `pages/` | Route-level components | One file per route |
| `store/` | Redux state management | Slices, store configuration |
| `services/` | External integrations | API clients, third-party services |
| `hooks/` | Custom React hooks | Shared logic across components |
| `utils/` | Helper functions | Pure utility functions |
| `constants/` | App-wide constants | Routes, config values |

---

## 5. State Management Architecture

### Redux Store Structure

```javascript
{
  cart: {
    items: [
      {
        id: string,
        name: string,
        price: number,
        quantity: number,
        image: string,
        category: string
      }
    ],
    totalAmount: number,
    itemCount: number
  },
  wishlist: {
    items: [
      {
        id: string,
        name: string,
        price: number,
        image: string,
        category: string,
        rating: number,
        reviews: number
      }
    ]
  },
  products: {
    items: [],           // All products
    filteredItems: [],   // Filtered/search results
    categories: [],      // Available categories
    loading: boolean,
    error: string | null,
    selectedProduct: null // Current product detail
  }
}
```

### Slice Pattern

Each feature has its own slice following this structure:

```javascript
// Example: cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      // Recalculate totals
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity, 
        0
      );
      state.itemCount = state.items.reduce(
        (sum, item) => sum + item.quantity, 
        0
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      // Recalculate totals...
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      // Recalculate totals...
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

### Store Configuration

```javascript
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
```

### Product Filter Logic

**Implementation:** Filters are applied from the original items array to ensure multiple filters work correctly together.

```javascript
// store/productSlice.js - Filter Implementation
const applyFilters = (items, filters) => {
  let result = [...items];
  
  // Apply category filter
  if (filters.category) {
    result = result.filter(product => 
      product.category.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Apply price range filter (INR)
  if (filters.priceRange && filters.priceRange.length === 2) {
    const [min, max] = filters.priceRange;
    result = result.filter(product => {
      if (min !== null && product.price < min) return false;
      if (max !== null && product.price > max) return false;
      return true;
    });
  }
  
  // Apply sorting
  if (filters.sortBy === 'price-low') {
    result.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price-high') {
    result.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'rating') {
    result.sort((a, b) => b.rating - a.rating);
  }
  // 'featured' keeps original order
  
  return result;
};
```

**Filter Options:**
- **Categories:** All, Sofa, Bed, Chair, Table, Storage
- **Price Ranges (INR):**
  - Under ₹80,000
  - ₹80,000 - ₹2,00,000
  - ₹2,00,000 - ₹4,00,000
  - Above ₹4,00,000
- **Sort Options:** Featured, Price: Low to High, Price: High to Low, Highest Rated

### State Persistence Strategy

**Current:** State is in-memory only (lost on page refresh)  
**Planned:** Redux Persist integration for:
- Cart contents
- Wishlist
- User preferences (dark mode)

**Implementation approach:**
```javascript
// Future: With redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'wishlist'], // Only persist these
};
```

---

## 6. Image Assets & Data Management

### Product Image Strategy

**Current Implementation (v2.0.0 - Updated):**
- **120 unique products** across 9 categories (expanded from 40 products)
- **Each product has 3 unique images**: Main image + 2 additional gallery images
- **Total: 360 high-quality images** from Unsplash
- All images are **hotlinked from Unsplash CDN** for development/demo purposes
- **Currency**: Indian Rupees (INR) with authentic Indian market pricing
- **New Categories Added**: Pooja Units, Home Decor, Outdoor Furniture

**Product Distribution:**
| Category | Products | Price Range | Materials Featured |
|----------|----------|-------------|-------------------|
| Sofas | 15 | ₹15,000 - ₹3,00,000 | Sheesham, Teak, Leather, Velvet |
| Beds | 20 | ₹8,500 - ₹2,50,000 | Sheesham, Storage, Modern, Traditional |
| Chairs | 25 | ₹1,500 - ₹45,000 | Sheesham, Teak, Office, Traditional |
| Tables | 20 | ₹2,500 - ₹1,80,000 | Dining, Coffee, Study, Outdoor |
| Storage | 20 | ₹2,500 - ₹1,50,000 | Wardrobes, TV Units, Bookshelves |
| Pooja Units | 10 | ₹3,500 - ₹75,000 | Mandir, Wall-mounted, Traditional |
| Decor | 5 | ₹4,500 - ₹25,000 | Brass, Mirrors, Room Dividers |
| Outdoor | 5 | ₹4,500 - ₹35,000 | Bamboo, Swing, Patio Sets |

**Image Specifications:**
| Attribute | Value |
|-----------|-------|
| Source | Unsplash |
| Resolution | 800x800 pixels |
| Format | JPEG |
| Quality | High (fit=crop parameter) |
| Total Products | 120 |
| Images per Product | 3 |
| Total Images | 360 |
| Currency | INR (₹) |

### Product Data Structure

```javascript
// Example product object from mockData.js (Indian Furniture)
{
  id: 1,
  name: "Sheesham Wood Royal Sofa",
  category: "Sofa",
  price: 125000,              // INR price (authentic Indian market rate)
  originalPrice: 145000,      // For sale items
  rating: 4.9,
  reviews: 328,
  image: "https://images.unsplash.com/photo-...?w=800&h=800&fit=crop",
  images: [                   // Gallery images
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-...",
    "https://images.unsplash.com/photo-..."
  ],
  description: "Handcrafted from premium Sheesham wood with intricate Rajasthani carvings...",
  specifications: {
    dimensions: "84\" W x 36\" D x 34\" H",
    material: "Solid Sheesham Wood, Velvet Upholstery, Brass Accents",
    weight: "85 kg",
    warranty: "10 years",
    assembly: "Professional assembly included"
  },
  stock: 8,                   // Inventory count
  isNew: true,                // New arrival badge
  discount: 14                // Percentage discount
}
```

### Currency Configuration

**Format:** Indian Rupees (INR) with ₹ symbol
**Pricing Strategy:** Authentic Indian market rates (not currency conversion)
**Price Ranges:**
- Budget: ₹1,500 - ₹5,000 (Plastic chairs, mudda, small tables)
- Mid-Range: ₹5,000 - ₹25,000 (Dining chairs, study tables, sideboards)
- Premium: ₹25,000 - ₹75,000 (Sofas, beds, wardrobes)
- Luxury: ₹75,000 - ₹3,00,000 (Designer furniture, premium woods)

**Tax:** 18% GST (Goods and Services Tax)
**Free Shipping:** Orders above ₹80,000

**Currency Utility:**
```javascript
// utils/currency.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Usage: formatCurrency(290417) → "₹2,90,417"
```

### Image Categories

**Sofas (8 products):**
- Eames Lounge Sofa (Brown leather) - ₹2,90,417
- Velvet Chesterfield (Blue velvet) - ₹2,40,617
- Minimalist Sectional (Gray fabric) - ₹3,56,817
- Linen Loveseat (Beige linen) - ₹1,57,617
- Mid-Century Modern Sofa (Tan fabric) - ₹2,07,500
- Reclining Leather Sofa (Black leather) - ₹3,15,833
- Convertible Sofa Bed (Gray fabric) - ₹1,24,000
- Outdoor Patio Sofa (Wicker) - ₹1,66,167

**Beds (8 products):**
- Platform Bed Frame (Walnut wood) - ₹2,07,417
- Upholstered Wingback Bed (Gray velvet) - ₹2,73,817
- Canopy Bed (White/Brass) - ₹3,81,717
- Storage Bed (Modern gray) - ₹1,82,517
- Bunk Bed (White wood) - ₹1,16,167
- Daybed with Trundle (White) - ₹1,32,833
- Adjustable Bed Base (Black) - ₹2,49,000
- Sleigh Bed (Cherry wood) - ₹2,32,167

**Chairs (8 products):**
- Lounge Accent Chair (Leather/Walnut) - ₹1,07,817
- Velvet Dining Chair (Green velvet) - ₹49,717
- Swivel Office Chair (Black leather) - ₹74,617
- Woven Armchair (Natural rattan) - ₹62,167
- Rocking Chair (Maple wood) - ₹45,667
- Bar Stool (Metal/Black) - ₹20,750
- Bean Bag Chair (Gray) - ₹12,400
- Recliner Chair (Brown leather) - ₹99,667

**Tables (8 products):**
- Oak Dining Table (Live edge) - ₹2,32,317
- Marble Coffee Table (Carrara marble) - ₹1,57,617
- Nesting Side Tables (Steel/Walnut) - ₹49,717
- Console Table (Blackened steel) - ₹1,07,817
- Standing Desk (Bamboo) - ₹82,833
- Outdoor Dining Table (Teak wood) - ₹1,32,833
- Round Pedestal Table (White) - ₹70,383
- Gaming Desk (Carbon fiber) - ₹58,017

**Storage (8 products):**
- Media Console (Walnut) - ₹1,82,517
- Bookshelf System (Oak/Steel) - ₹1,32,717
- Wardrobe Cabinet (Oak) - ₹2,40,617
- Storage Ottoman (Gray fabric) - ₹41,417
- Shoe Cabinet (White/Mirror) - ₹62,200
- Chest of Drawers (Wood) - ₹99,667
- Bathroom Cabinet (White) - ₹45,667
- Wine Rack (Bamboo) - ₹29,083

### Future Image Strategy

**Phase 1: Asset Optimization**
- [ ] Download and self-host images for production
- [ ] Implement responsive images with srcset
- [ ] Add WebP format with JPEG fallback
- [ ] Implement lazy loading for below-fold images
- [ ] Add blur-up placeholder technique

**Phase 2: CMS Integration**
- [ ] Integrate headless CMS (Sanity/Contentful)
- [ ] Admin dashboard for image uploads
- [ ] Automatic image optimization pipeline
- [ ] CDN integration (Cloudinary/Imgix)

**Phase 3: Advanced Features**
- [ ] 360° product views
- [ ] Zoom functionality on product details
- [ ] AR visualization support
- [ ] User-generated review photos

### Image Performance Checklist

**Before Production:**
- [ ] All images < 200KB each
- [ ] Implement lazy loading
- [ ] Add loading="lazy" attribute
- [ ] Use responsive images (srcset)
- [ ] Optimize for Core Web Vitals
- [ ] Test on slow 3G connections
- [ ] Implement error fallbacks
- [ ] Add alt text for accessibility

---

## 7. Routing Architecture

### Route Configuration

```javascript
// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Eager load critical routes
import Home from '@/pages/Home';

// Lazy load non-critical routes
const Products = lazy(() => import('@/pages/Products'));
const ProductDetails = lazy(() => import('@/pages/ProductDetails'));
const Cart = lazy(() => import('@/pages/Cart'));
const Checkout = lazy(() => import('@/pages/Checkout'));
const Wishlist = lazy(() => import('@/pages/Wishlist'));
const Orders = lazy(() => import('@/pages/Orders'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-subtle-gold"></div>
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/orders" element={<Orders />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
```

### Route Constants

```javascript
// constants/routes.js
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCT_DETAILS: '/product/:id',
  CART: '/cart',
  CHECKOUT: '/checkout',
  WISHLIST: '/wishlist',
  ORDERS: '/orders',
};

export const ROUTE_NAMES = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.PRODUCTS]: 'Products',
  [ROUTES.CART]: 'Shopping Cart',
  [ROUTES.CHECKOUT]: 'Checkout',
  [ROUTES.WISHLIST]: 'Wishlist',
  [ROUTES.ORDERS]: 'Order History',
};
```

### Navigation Patterns

**Programmatic Navigation:**
```javascript
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/products');
    // Or with state
    navigate('/checkout', { state: { fromCart: true } });
  };
};
```

**Declarative Navigation:**
```javascript
import { Link, NavLink } from 'react-router-dom';

// Simple link
<Link to="/products">View Products</Link>

// Active state styling
<NavLink 
  to="/products"
  className={({ isActive }) => isActive ? 'text-subtle-gold' : 'text-gray-600'}
>
  Products
</NavLink>
```

### Route Protection Strategy (Future)

```javascript
// Future: Protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Usage
<Route 
  path="/checkout" 
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  } 
/>
```

---

## 8. UI/UX Design Principles

### Design Philosophy

Nivelle follows a **"Quiet Luxury"** design philosophy:
- Minimalist aesthetics
- Generous whitespace
- Typography-driven hierarchy
- Subtle animations
- Premium feel through restraint

### Color Palette

#### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Warm Beige | `#F5F1EA` | Primary background, cards |
| Soft Ivory | `#FAF9F7` | Page background (light mode) |
| Deep Charcoal | `#2B2B2B` | Text primary, dark mode bg |
| Muted Walnut | `#7A5C4D` | Secondary text, accents |
| Subtle Gold | `#C6A75E` | CTAs, highlights, links |

#### Usage Guidelines
- **Backgrounds:** Use Soft Ivory for page, Warm Beige for cards/sections
- **Text:** Deep Charcoal for primary, Muted Walnut for secondary
- **Interactive:** Subtle Gold for buttons, links, active states
- **Dark Mode:** Invert Soft Ivory ↔ Deep Charcoal

### Typography

**Font Family:** Inter (system-ui fallback)

**Scale:**
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48px / 3rem | 700 | 1.1 |
| H2 | 36px / 2.25rem | 600 | 1.2 |
| H3 | 24px / 1.5rem | 600 | 1.3 |
| Body | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 400 | 1.4 |

### Spacing System

**Base unit:** 4px (0.25rem)

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, icons |
| sm | 8px | Component internal |
| md | 16px | Standard padding |
| lg | 24px | Section padding |
| xl | 32px | Large gaps |
| 2xl | 48px | Section breaks |
| 3xl | 64px | Major sections |

### Animation Principles

**Timing Functions:**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out)
- Enter: `cubic-bezier(0, 0, 0.2, 1)` (ease-out)
- Exit: `cubic-bezier(0.4, 0, 1, 1)` (ease-in)

**Durations:**
- Instant: 100ms (hover states)
- Fast: 200ms (micro-interactions)
- Normal: 300ms (standard transitions)
- Slow: 500ms (emphasis animations)

**Patterns:**
```javascript
// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
>

// Stagger children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>

// Hover scale
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

### Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

**Mobile-first approach:**
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
</div>
```

---

## 9. Component Naming Conventions

### File Naming

**Components:** PascalCase
```
ProductCard.jsx
CartSummary.jsx
RatingStars.jsx
```

**Utilities:** camelCase
```
formatCurrency.js
useLocalStorage.js
```

**Styles:** kebab-case (if separate files)
```
product-card.module.css
```

### Component Structure

**Single Responsibility:** Each component does one thing well.

**Naming Pattern:**
- Container components: `[Feature][Action]` (e.g., `ProductList`)
- UI components: `[Element][Variant]` (e.g., `ButtonPrimary`)
- Page components: `[PageName]` (e.g., `Checkout`)

**Export Pattern:**
```javascript
// Default export for main component
const ProductCard = ({ product }) => { ... };
export default ProductCard;

// Named exports for helpers
export const formatProductPrice = (price) => { ... };
export const getProductBadge = (status) => { ... };
```

### Prop Naming

**Boolean props:** Use `is`, `has`, `should` prefix
```javascript
<ProductCard isNew hasDiscount shouldAnimate />
```

**Event handlers:** Use `on` prefix + verb
```javascript
<Button onClick={handleClick} onHover={handleHover} />
```

**Callback props:** Use `on` prefix
```javascript
<ProductCard onAddToCart={addToCart} onViewDetails={viewDetails} />
```

### Component Organization

**Within a component file:**
```javascript
// 1. Imports (external → internal)
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/utils/formatCurrency';

// 2. PropTypes or JSDoc (if not using TypeScript)
/**
 * @param {Object} props
 * @param {Object} props.product
 * @param {string} props.product.id
 * @param {string} props.product.name
 * @param {number} props.product.price
 * @param {Function} props.onAddToCart
 */

// 3. Component definition
const ProductCard = ({ product, onAddToCart }) => {
  // Hooks
  const [isHovered, setIsHovered] = useState(false);
  
  // Handlers
  const handleAddToCart = () => {
    onAddToCart(product);
  };
  
  // Render
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* JSX */}
    </motion.div>
  );
};

// 4. Export
export default ProductCard;
```

---

## 10. Global Styling Strategy

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5F1EA',
        'soft-ivory': '#FAF9F7',
        'deep-charcoal': '#2B2B2B',
        'muted-walnut': '#7A5C4D',
        'subtle-gold': '#C6A75E',
      },
      fontFamily: {
        elegant: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 20px rgba(198, 167, 94, 0.3)',
      },
    },
  },
  plugins: [],
}
```

### Global CSS

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-elegant antialiased;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-warm-beige;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-muted-walnut rounded-full;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-deep-charcoal;
  }
}

@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section-padding {
    @apply py-12 md:py-16 lg:py-20;
  }
  
  .card-hover {
    @apply transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Dark Mode Implementation

**Toggle Strategy:**
```javascript
// components/layout/Navbar.jsx
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);
```

**Usage in components:**
```jsx
<div className="bg-soft-ivory dark:bg-deep-charcoal text-deep-charcoal dark:text-soft-ivory">
  Content automatically adapts
</div>
```

### Component Styling Patterns

**Consistent spacing:**
```jsx
// Use standard spacing scale
<div className="p-4 md:p-6 lg:p-8">
<div className="gap-4 md:gap-6">
<div className="mb-4 md:mb-6">
```

**Color transitions:**
```jsx
<button className="
  bg-subtle-gold text-white
  hover:bg-muted-walnut
  transition-colors duration-300
">
```

**Focus states:**
```jsx
<input className="
  focus:outline-none 
  focus:ring-2 
  focus:ring-subtle-gold 
  focus:ring-offset-2
">
```

---

## 11. Toast / Notification System

### Architecture

**Context-based provider pattern:**
```javascript
// components/ui/Toast.jsx
import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  
  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type, duration }]);
    
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);
  
  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);
  
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast key={toast.id} {...toast} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

const Toast = ({ id, message, type, onClose }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.9 }}
      className="flex items-center gap-3 bg-white dark:bg-deep-charcoal 
                 shadow-soft-lg rounded-lg p-4 min-w-[300px]"
    >
      {icons[type]}
      <p className="flex-1 text-sm text-deep-charcoal dark:text-soft-ivory">
        {message}
      </p>
      <button 
        onClick={() => onClose(id)}
        className="text-muted-walnut hover:text-deep-charcoal transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
```

### Usage Pattern

```javascript
// In any component
import { useToast } from '@/components/ui/Toast';

const MyComponent = () => {
  const { addToast } = useToast();
  
  const handleAction = () => {
    // Success notification
    addToast('Item added to cart', 'success');
    
    // Error notification
    addToast('Failed to save changes', 'error');
    
    // Info notification
    addToast('New products available', 'info', 5000); // Custom duration
  };
};
```

### Toast Types

| Type | Icon | Use Case |
|------|------|----------|
| success | CheckCircle | Action completed successfully |
| error | AlertCircle | Operation failed |
| info | Info | General information |

### Best Practices

- Keep messages concise (under 60 characters)
- Use appropriate type for user feedback
- Default duration: 3 seconds
- Allow manual dismissal (X button)
- Position: bottom-right (non-intrusive)
- Maximum 5 toasts visible at once

---

## 12. Cart System Logic

### State Structure

```javascript
{
  cart: {
    items: [
      {
        id: "prod_123",
        name: "Modern Lounge Chair",
        price: 899.00,
        quantity: 2,
        image: "/images/chair.jpg",
        category: "Living Room",
        maxStock: 10  // For inventory validation
      }
    ],
    totalAmount: 1798.00,  // Pre-calculated for performance
    itemCount: 2,          // Total items (not unique products)
    lastUpdated: timestamp // For optimistic updates
  }
}
```

### Cart Operations

**Add to Cart:**
```javascript
const addToCart = (product, quantity = 1) => {
  dispatch({
    type: 'cart/addToCart',
    payload: {
      ...product,
      quantity,
      addedAt: Date.now()
    }
  });
};
```

**Remove from Cart:**
```javascript
const removeFromCart = (productId) => {
  dispatch({
    type: 'cart/removeFromCart',
    payload: productId
  });
};
```

**Update Quantity:**
```javascript
const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) {
    removeFromCart(productId);
    return;
  }
  
  dispatch({
    type: 'cart/updateQuantity',
    payload: { id: productId, quantity: newQuantity }
  });
};
```

### Cart Calculations

**Automatic Recalculation:**
```javascript
// In cartSlice.js
const recalculateTotals = (items) => {
  const totalAmount = items.reduce(
    (sum, item) => sum + (item.price * item.quantity), 
    0
  );
  const itemCount = items.reduce(
    (sum, item) => sum + item.quantity, 
    0
  );
  
  return { totalAmount, itemCount };
};
```

### Cart Persistence (Future)

**Local Storage Integration:**
```javascript
// Middleware to persist cart
const cartPersistenceMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  if (action.type.startsWith('cart/')) {
    const cartState = store.getState().cart;
    localStorage.setItem('nivelle-cart', JSON.stringify(cartState));
  }
  
  return result;
};

// Load on app initialization
const loadCartFromStorage = () => {
  const saved = localStorage.getItem('nivelle-cart');
  return saved ? JSON.parse(saved) : initialState;
};
```

### Cart UI Components

**CartItem Component:**
```jsx
const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex gap-4 p-4 bg-white rounded-lg shadow-soft">
    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
    
    <div className="flex-1">
      <h3 className="font-medium text-deep-charcoal">{item.name}</h3>
      <p className="text-muted-walnut text-sm">{item.category}</p>
      <p className="text-lg font-semibold mt-1">
        ${item.price.toLocaleString()}
      </p>
    </div>
    
    <div className="flex items-center gap-2">
      <button 
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="w-8 h-8 rounded-full bg-warm-beige hover:bg-subtle-gold transition-colors"
      >
        -
      </button>
      <span className="w-8 text-center">{item.quantity}</span>
      <button 
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="w-8 h-8 rounded-full bg-warm-beige hover:bg-subtle-gold transition-colors"
      >
        +
      </button>
    </div>
    
    <button 
      onClick={() => onRemove(item.id)}
      className="text-red-500 hover:text-red-700"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);
```

### Edge Cases Handled

- Adding duplicate items (increment quantity)
- Quantity limits (min: 1, max: stock available)
- Empty cart state
- Price formatting with locales
- Image loading failures (fallback)

---

## 13. Wishlist System Logic

### State Structure

```javascript
{
  wishlist: {
    items: [
      {
        id: "prod_123",
        name: "Modern Lounge Chair",
        price: 899.00,
        image: "/images/chair.jpg",
        category: "Living Room",
        rating: 4.5,
        reviews: 128,
        addedAt: timestamp
      }
    ],
    totalItems: 1
  }
}
```

### Wishlist Operations

**Add to Wishlist:**
```javascript
const addToWishlist = (product) => {
  // Check if already in wishlist
  const exists = wishlistItems.some(item => item.id === product.id);
  
  if (exists) {
    addToast('Item already in wishlist', 'info');
    return;
  }
  
  dispatch({
    type: 'wishlist/addToWishlist',
    payload: {
      ...product,
      addedAt: Date.now()
    }
  });
  
  addToast('Added to wishlist', 'success');
};
```

**Remove from Wishlist:**
```javascript
const removeFromWishlist = (productId) => {
  dispatch({
    type: 'wishlist/removeFromWishlist',
    payload: productId
  });
  
  addToast('Removed from wishlist', 'info');
};
```

**Toggle Wishlist (Heart Button):**
```javascript
const toggleWishlist = (product) => {
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  
  if (isInWishlist) {
    removeFromWishlist(product.id);
  } else {
    addToWishlist(product);
  }
};
```

### Move to Cart Feature

```javascript
const moveToCart = (product) => {
  // Add to cart
  dispatch(addToCart({ ...product, quantity: 1 }));
  
  // Remove from wishlist
  dispatch(removeFromWishlist(product.id));
  
  addToast(`${product.name} moved to cart`, 'success');
};
```

### Wishlist Slice

```javascript
// store/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
```

### Wishlist UI Components

**Wishlist Button in Product Card:**
```jsx
const WishlistButton = ({ product, isInWishlist, onToggle }) => (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onToggle(product);
    }}
    className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
  >
    <Heart 
      className={`w-5 h-5 transition-colors ${
        isInWishlist 
          ? 'fill-red-500 text-red-500' 
          : 'text-deep-charcoal hover:text-red-500'
      }`} 
    />
  </button>
);
```

### Key Differences from Cart

| Feature | Cart | Wishlist |
|---------|------|----------|
| Quantity | Multiple allowed | Single (boolean) |
| Stock check | Yes (at checkout) | No |
| Price updates | Reflect immediately | May notify on change |
| Persistence | Critical | Nice-to-have |
| Limit | Inventory-based | None (or high limit) |

---

## 14. Current Status: Built vs Pending

### ✅ Already Built

#### Core Infrastructure
- [x] Vite + React 19 project setup
- [x] Redux Toolkit store configuration
- [x] React Router DOM integration
- [x] Tailwind CSS with custom theme
- [x] ESLint configuration
- [x] Vite alias configuration (@/)

#### UI Components
- [x] Button (multiple variants)
- [x] Badge
- [x] Modal
- [x] Drawer
- [x] Toast notification system
- [x] RatingStars

#### Layout Components
- [x] Navbar with navigation
- [x] Footer

#### Product Components
- [x] ProductCard
- [x] ProductGallery
- [x] CartItem
- [x] CartSummary

#### Pages
- [x] Home page
- [x] Products listing page
- [x] Product details page
- [x] Cart page
- [x] Checkout page (UI)
- [x] Wishlist page
- [x] Orders page

#### State Management
- [x] Cart slice with full CRUD
- [x] Wishlist slice
- [x] Product slice (basic)

#### Features
- [x] Add/remove from cart
- [x] Update cart quantities
- [x] Add/remove from wishlist
- [x] Move wishlist to cart
- [x] Dark mode support
- [x] Responsive design
- [x] Framer Motion animations
- [x] **Product filtering by category and price range (INR)**
- [x] **Product sorting (Price: Low/High, Rating)**
- [x] **Currency formatting utility for INR**

#### Product Data & Images
- [x] **120 unique products** across 9 categories (expanded from 40)
- [x] **360 high-quality images** (3 per product) from Unsplash
- [x] **Authentic Indian furniture names** (Sheesham, Teak, Mango wood, etc.)
- [x] **Realistic INR pricing** for Indian market (₹1,500 - ₹3,00,000)
- [x] **Indian materials and styles** in descriptions
- [x] **9 product categories** including new Pooja Units, Decor, and Outdoor
- [x] **Comprehensive ERROR_LOG.md** documenting all changes
- [x] **120 unique high-quality images** (3 per product)
- [x] Each product has unique Unsplash imagery
- [x] **INR Pricing** - All prices in Indian Rupees (₹)
- [x] Product specifications and details
- [x] Stock/inventory tracking
- [x] Rating and review counts
- [x] New arrival and discount badges

### ⏳ Pending / In Progress

#### Features
- [ ] User authentication
- [ ] Real API integration (currently using mock data)
- [ ] Payment gateway integration (Razorpay/Stripe India)
- [ ] Product reviews and ratings
- [ ] Search functionality
- [ ] Pagination
- [ ] Order placement and tracking

#### State Management
- [ ] Redux Persist for cart/wishlist persistence
- [ ] User slice (auth state)
- [ ] Order slice
- [ ] Loading states across all async operations

#### Technical
- [ ] Error boundaries
- [ ] Unit tests
- [ ] E2E tests
- [ ] SEO optimization
- [ ] Image optimization/lazy loading
- [ ] Service Worker for PWA
- [ ] Analytics integration

### 🚫 Should NOT Be Modified

These are foundational and stable:

1. **Store Configuration** (`store/store.js`)
   - Core Redux setup
   - Middleware configuration

2. **Tailwind Theme Colors**
   - Brand colors define the visual identity
   - Changes affect entire app

3. **Toast System Architecture**
   - Context pattern is working well
   - Only add new types, don't refactor

4. **Folder Structure**
   - Established pattern is intuitive
   - Maintain consistency for new features

5. **Vite Configuration**
   - Build optimization settings
   - Plugin order

### 🔧 Safe Extension Points

1. **New Pages:** Add to `src/pages/`
2. **New Components:** Add to appropriate `src/components/` subfolder
3. **New Slices:** Add to `src/store/`, register in `store.js`
4. **New Routes:** Add to `routes/AppRoutes.jsx`
5. **New Utilities:** Add to `src/utils/`
6. **New Hooks:** Add to `src/hooks/`
7. **API Endpoints:** Extend `services/api.js`
8. **Tailwind Extensions:** Add to `tailwind.config.js` theme.extend

---

## 15. Future Roadmap

### Phase 1: Foundation (Current - Month 1)
- [x] Core shopping experience
- [x] Responsive design
- [ ] User authentication system
- [ ] Real backend API integration
- [ ] Cart persistence

**Deliverable:** Functional MVP for internal testing

### Phase 2: Enhancement (Month 2-3)
- [ ] Product reviews and ratings
- [ ] Advanced search and filtering
- [ ] User profile management
- [ ] Order history with details
- [ ] Payment integration (Stripe)
- [ ] Email notifications

**Deliverable:** Public beta

### Phase 3: Growth (Month 4-6)
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Analytics and reporting
- [ ] Promo codes and discounts
- [ ] Related products recommendations
- [ ] Recently viewed products

**Deliverable:** Full production release

### Phase 4: Innovation (Month 7-12)
- [ ] AR product visualization
- [ ] AI-powered style recommendations
- [ ] Virtual room designer
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] International shipping

**Deliverable:** Premium platform

### Technical Debt & Improvements

**Immediate (Sprint 0):**
- [ ] Set up testing framework (Vitest + React Testing Library)
- [ ] Add error boundaries
- [ ] Implement loading skeletons
- [ ] Add form validation schema

**Short-term:**
- [ ] Code splitting optimization
- [ ] Image optimization pipeline
- [ ] PWA features
- [ ] Accessibility audit (WCAG 2.1 AA)

**Long-term:**
- [ ] Migrate to TypeScript
- [ ] Implement design system with Storybook
- [ ] Performance monitoring (Sentry)
- [ ] A/B testing framework

---

## 16. Code Standards

### General Principles

1. **DRY (Don't Repeat Yourself):** Extract reusable logic
2. **KISS (Keep It Simple):** Avoid over-engineering
3. **Single Responsibility:** One component/purpose per file
4. **Immutability:** Never mutate state directly
5. **Declarative:** Prefer declarative over imperative

### Code Style

**ESLint Configuration:**
```javascript
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```

### JavaScript/React Standards

**Hooks Rules:**
```javascript
// ✅ DO: Call hooks at top level
const MyComponent = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // Effect logic
  }, []);
  
  return <div>{count}</div>;
};

// ❌ DON'T: Call hooks conditionally
const MyComponent = () => {
  if (condition) {
    const [state, setState] = useState(0); // WRONG!
  }
};
```

**Destructuring:**
```javascript
// ✅ DO: Destructure props
const ProductCard = ({ name, price, image, onAddToCart }) => {
  // Use directly
};

// ❌ DON'T: Access via props object
const ProductCard = (props) => {
  return <div>{props.name}</div>; // Avoid
};
```

**Conditional Rendering:**
```javascript
// ✅ DO: Use ternary for simple conditions
{isLoading ? <Spinner /> : <Content />}

// ✅ DO: Use && for simple boolean
{showBanner && <Banner />}

// ✅ DO: Extract complex conditions
const shouldShowDetails = user && user.isAuthenticated && !isLoading;
{shouldShowDetails && <Details />}
```

### CSS/Tailwind Standards

**Class Ordering:**
```jsx
// Follow this order:
<div className="
  /* Layout */
  flex items-center justify-between
  /* Spacing */
  p-4 mb-4
  /* Size */
  w-full h-auto
  /* Typography */
  text-sm font-medium
  /* Visual */
  bg-white rounded-lg
  /* Effects */
  shadow-soft hover:shadow-soft-lg
  /* Interactivity */
  cursor-pointer transition-all duration-300
  /* Dark mode */
  dark:bg-deep-charcoal
">
```

**Avoid Inline Styles:**
```javascript
// ❌ DON'T: Inline styles
<div style={{ backgroundColor: '#F5F1EA' }}>

// ✅ DO: Tailwind classes
<div className="bg-warm-beige">

// ✅ DO: Dynamic classes with cn() utility
<div className={cn('bg-warm-beige', isActive && 'bg-subtle-gold')}>
```

### Performance Standards

**Memoization:**
```javascript
// Memoize expensive calculations
const totalPrice = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);

// Memoize callbacks
const handleAddToCart = useCallback((product) => {
  dispatch(addToCart(product));
}, [dispatch]);

// Memoize components
const ProductList = React.memo(({ products }) => {
  return products.map(product => <ProductCard key={product.id} {...product} />);
});
```

**Lazy Loading:**
```javascript
// Lazy load non-critical components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Lazy load routes (already implemented)
const Checkout = lazy(() => import('@/pages/Checkout'));
```

### Documentation Standards

**JSDoc for complex functions:**
```javascript
/**
 * Calculates the total price including tax and shipping
 * @param {Array} items - Cart items
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.08)
 * @param {number} shippingCost - Flat shipping cost
 * @returns {Object} Object containing subtotal, tax, shipping, and total
 */
const calculateTotal = (items, taxRate = 0.08, shippingCost = 15) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;
  
  return { subtotal, tax, shipping: shippingCost, total };
};
```

### Git Commit Standards

**Commit Message Format:**
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, no logic change)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Build process or auxiliary tool changes

**Examples:**
```
feat(cart): add quantity selector to cart items

fix(auth): resolve login redirect loop

docs(readme): update setup instructions

refactor(products): simplify filter logic
```

---

## 17. Git Branch Strategy

### Branch Model: Git Flow (Simplified)

```
main (production)
  │
  ├── develop (integration)
  │     │
  │     ├── feature/product-search
  │     ├── feature/user-auth
  │     └── feature/payment-integration
  │
  ├── hotfix/critical-bug
  └── release/v1.0.0
```

### Branch Types

#### 1. `main` (Production)
- **Purpose:** Production-ready code
- **Protection:** Force push disabled, PR required
- **Deployment:** Auto-deploys to production
- **Naming:** Always `main`

#### 2. `develop` (Integration)
- **Purpose:** Integration branch for features
- **Protection:** PR required, tests must pass
- **Deployment:** Auto-deploys to staging
- **Naming:** Always `develop`

#### 3. `feature/*` (Features)
- **Purpose:** New features or enhancements
- **Base:** Branch from `develop`
- **Merge:** Into `develop` via PR
- **Naming:** `feature/description-in-kebab-case`
- **Examples:**
  - `feature/product-search`
  - `feature/dark-mode-toggle`
  - `feature/stripe-payment`

#### 4. `hotfix/*` (Critical Fixes)
- **Purpose:** Urgent production fixes
- **Base:** Branch from `main`
- **Merge:** Into both `main` AND `develop`
- **Naming:** `hotfix/description`
- **Example:** `hotfix/cart-calculation-error`

#### 5. `release/*` (Releases)
- **Purpose:** Prepare for production release
- **Base:** Branch from `develop`
- **Merge:** Into `main`
- **Naming:** `release/vX.Y.Z`
- **Example:** `release/v1.0.0`

### Workflow

**Starting a new feature:**
```bash
# 1. Update develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/product-search

# 3. Work on feature
git add .
git commit -m "feat(search): add product search component"

# 4. Push branch
git push -u origin feature/product-search

# 5. Create PR to develop (via GitHub/GitLab)
```

**Creating a hotfix:**
```bash
# 1. Branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-fix

# 2. Fix and commit
git commit -m "fix: resolve critical issue"

# 3. Push and create PR to main
git push -u origin hotfix/critical-fix

# 4. After merge, also merge to develop
git checkout develop
git merge main
```

### Pull Request Requirements

**Before submitting PR:**
- [ ] Branch is up to date with target
- [ ] All tests pass
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] No console.logs or debug code
- [ ] Documentation updated (if needed)

**PR Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] Mobile responsive checked

## Screenshots (if UI changes)
[Add screenshots]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] No new warnings
- [ ] Documentation updated
```

**Review Requirements:**
- Minimum 1 approval required
- All CI checks must pass
- No unresolved conversations

---

## 18. Performance Optimization Strategy

### Current Optimizations (Implemented)

1. **Vite Build System**
   - Fast development server
   - Optimized production builds
   - Tree-shaking by default

2. **Code Splitting**
   - Route-based lazy loading
   - Component-level code splitting for heavy components

3. **Tailwind CSS**
   - Purges unused styles in production
   - Minified CSS output

### Planned Optimizations

#### 1. Image Optimization

**Strategy:**
```javascript
// Use responsive images
<img
  srcSet="
    /images/product-small.jpg 300w,
    /images/product-medium.jpg 600w,
    /images/product-large.jpg 900w
  "
  sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
  src="/images/product-large.jpg"
  alt="Product"
  loading="lazy"
/>

// Or use a component
<OptimizedImage
  src="/images/product.jpg"
  alt="Product"
  widths={[300, 600, 900]}
  aspectRatio="4/3"
  lazy
/>
```

**Tools:**
- Vite image optimization plugin
- Lazy loading with Intersection Observer
- WebP format with JPEG fallback

#### 2. State Selectors Optimization

**Current:**
```javascript
// ❌ Re-renders when any cart property changes
const cart = useSelector(state => state.cart);
```

**Optimized:**
```javascript
// ✅ Only re-renders when items change
const items = useSelector(state => state.cart.items);

// ✅ Use reselect for derived state
import { createSelector } from '@reduxjs/toolkit';

const selectCartTotal = createSelector(
  [state => state.cart.items],
  (items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
```

#### 3. Component Memoization

```javascript
// Memoize expensive components
const ProductCard = React.memo(({ product }) => {
  return (
    // JSX
  );
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.product.id === nextProps.product.id;
});

// Memoize list rendering
const ProductList = ({ products }) => {
  return useMemo(() => (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  ), [products]);
};
```

#### 4. Virtualization (For Long Lists)

```javascript
// For product lists > 50 items
import { FixedSizeList as List } from 'react-window';

const ProductList = ({ products }) => (
  <List
    height={600}
    itemCount={products.length}
    itemSize={300}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>
        <ProductCard product={products[index]} />
      </div>
    )}
  </List>
);
```

#### 5. Service Worker / PWA

```javascript
// Register service worker for caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

// Cache strategies:
// - Static assets: Cache First
// - API responses: Network First, fallback to cache
// - Images: Stale While Revalidate
```

#### 6. Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Check for large dependencies
npm run build -- --mode analyze
```

### Performance Metrics & Monitoring

**Target Metrics:**
| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | TBD |
| Largest Contentful Paint | < 2.5s | TBD |
| Time to Interactive | < 3.5s | TBD |
| Cumulative Layout Shift | < 0.1 | TBD |
| Total Bundle Size | < 200KB | TBD |

**Monitoring Tools:**
- Lighthouse CI
- Web Vitals (npm package)
- Sentry Performance
- Chrome DevTools Performance Tab

### Performance Budget

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          form: ['react-hook-form'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 1MB warning
  },
});
```

---

## 19. Security Considerations

### Current Security Measures

1. **ESLint Security Plugin**
   - Prevents common security issues
   - Detects unsafe patterns

2. **Input Validation**
   - React Hook Form for form validation
   - Client-side sanitization

3. **HTTPS**
   - Enforced in production
   - HSTS headers

### Required Security Enhancements

#### 1. XSS Prevention

**Current Risk:** User-generated content (reviews) not escaped

**Solution:**
```javascript
// ❌ DANGEROUS: Directly rendering HTML
<div dangerouslySetInnerHTML={{ __html: userContent }} />

// ✅ SAFE: Escape HTML
import DOMPurify from 'dompurify';

const SafeContent = ({ html }) => {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};
```

#### 2. CSRF Protection

**For API Integration:**
```javascript
// Axios interceptor for CSRF token
api.interceptors.request.use((config) => {
  const csrfToken = document.cookie.match(/csrf_token=([^;]+)/)?.[1];
  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});
```

#### 3. Secure Storage

**Never store in localStorage:**
- JWT tokens
- Credit card information
- Personal user data

**Alternative:**
```javascript
// Use httpOnly cookies from server
// Or sessionStorage (cleared on tab close)

// For non-sensitive data only
const safeStorage = {
  set: (key, value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage failed:', e);
    }
  },
  get: (key) => {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch (e) {
      return null;
    }
  },
};
```

#### 4. Environment Variables

**Security Rules:**
```bash
# ✅ SAFE: Non-sensitive config
VITE_API_URL=https://api.nivelle.com
VITE_APP_NAME=Nivelle

# ❌ DANGEROUS: Never prefix with VITE_
VITE_STRIPE_SECRET_KEY=sk_live_...  # DON'T DO THIS

# ✅ SAFE: Server-side only (in .env, not .env.local)
STRIPE_SECRET_KEY=sk_live_...
```

**Environment File Structure:**
```
.env                 # Default (committed, non-sensitive)
.env.local           # Local overrides (gitignored)
.env.production      # Production (gitignored, server only)
.env.example         # Template for developers
```

#### 5. Content Security Policy (CSP)

**Add to index.html or server headers:**
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' https://images.nivelle.com data:;
  connect-src 'self' https://api.nivelle.com;
  font-src 'self';
  frame-ancestors 'none';
">
```

#### 6. Dependency Security

**Regular audits:**
```bash
# Check for vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Update dependencies
npm update

# Use Snyk for continuous monitoring
npx snyk test
```

### Security Checklist

**Before Production:**
- [ ] Remove all `console.log` statements
- [ ] Disable React Developer Tools in production
- [ ] Implement error boundaries (don't expose stack traces)
- [ ] Add rate limiting for API calls
- [ ] Enable CORS properly (whitelist domains)
- [ ] Add security headers (X-Frame-Options, X-Content-Type-Options)
- [ ] Sanitize all user inputs
- [ ] Use HTTPS everywhere
- [ ] Implement proper authentication
- [ ] Add session timeout handling

---

## 20. Deployment Plan

### Deployment Environments

#### 1. Development
- **URL:** localhost:5173
- **Branch:** Any feature branch
- **Purpose:** Local development and testing

#### 2. Staging
- **URL:** https://staging.nivelle.com
- **Branch:** `develop`
- **Purpose:** Integration testing, client review
- **Data:** Sandbox/mock data

#### 3. Production
- **URL:** https://nivelle.com
- **Branch:** `main`
- **Purpose:** Live customer-facing application
- **Data:** Real production data

### Hosting Options

**Recommended: Vercel (Frontend)**
- Pros: Optimized for React/Vite, automatic deployments, edge network
- Cons: Serverless functions limited

**Alternative: Netlify**
- Similar to Vercel, excellent DX

**Alternative: AWS S3 + CloudFront**
- More control, higher complexity
- Better for enterprise scale

### Deployment Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.API_URL }}
      
      - name: Deploy to Vercel (Production)
        if: github.ref == 'refs/heads/main'
        run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy to Vercel (Staging)
        if: github.ref == 'refs/heads/develop'
        run: npx vercel --token ${{ secrets.VERCEL_TOKEN }}
```

### Pre-Deployment Checklist

**Code Quality:**
- [ ] ESLint passes with no errors
- [ ] All tests passing
- [ ] No console warnings
- [ ] Build succeeds without errors

**Functionality:**
- [ ] Cart flow tested end-to-end
- [ ] Checkout process working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode toggle functional
- [ ] All links working
- [ ] Images loading correctly

**Performance:**
- [ ] Lighthouse score > 90
- [ ] Bundle size < 500KB (gzipped)
- [ ] No memory leaks
- [ ] Smooth animations at 60fps

**Security:**
- [ ] No secrets in code
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Dependencies audited

### Rollback Strategy

**Automatic:**
- Vercel/Netlify maintain previous deployments
- One-click rollback via dashboard

**Manual:**
```bash
# If using Git-based deployment
git revert HEAD  # Revert last commit
git push origin main

# Or redeploy previous version
npx vercel --prod --token $TOKEN --confirm
```

### Domain & SSL

**DNS Configuration:**
```
Type: A
Name: @
Value: 76.76.21.21  # Vercel IP

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL:**
- Automatic SSL via Let's Encrypt
- Force HTTPS redirect
- HSTS enabled

### Environment Variables per Environment

```bash
# Development (.env.local)
VITE_API_URL=http://localhost:3001
VITE_STRIPE_KEY=pk_test_...

# Staging (.env.staging)
VITE_API_URL=https://api-staging.nivelle.com
VITE_STRIPE_KEY=pk_test_...

# Production (.env.production)
VITE_API_URL=https://api.nivelle.com
VITE_STRIPE_KEY=pk_live_...
```

### Monitoring & Alerts

**Tools:**
- Vercel Analytics (Web Vitals)
- Sentry (Error tracking)
- UptimeRobot (Uptime monitoring)
- Google Analytics (User behavior)

**Alerts:**
- Error rate > 1%
- 500 errors detected
- Page load time > 3s
- Downtime detected

---

## 21. Safe Extension Guidelines

### How to Add a New Feature

**Step-by-step process:**

1. **Plan the Feature**
   ```markdown
   ## Feature: Product Reviews
   
   ### Requirements
   - Users can leave star ratings
   - Users can write text reviews
   - Reviews display on product page
   - Average rating calculation
   
   ### Data Structure
   - Review: { id, productId, userId, rating, comment, date }
   
   ### Components Needed
   - ReviewForm.jsx
   - ReviewList.jsx
   - StarRatingInput.jsx
   
   ### API Endpoints
   - POST /api/reviews
   - GET /api/products/:id/reviews
   ```

2. **Create Branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/product-reviews
   ```

3. **Add State Management**
   ```javascript
   // store/reviewSlice.js
   import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
   
   export const fetchReviews = createAsyncThunk(
     'reviews/fetchByProduct',
     async (productId) => {
       const response = await api.get(`/products/${productId}/reviews`);
       return response.data;
     }
   );
   
   const reviewSlice = createSlice({
     name: 'reviews',
     initialState: {
       items: [],
       loading: false,
       error: null,
     },
     extraReducers: (builder) => {
       builder
         .addCase(fetchReviews.pending, (state) => {
           state.loading = true;
         })
         .addCase(fetchReviews.fulfilled, (state, action) => {
           state.loading = false;
           state.items = action.payload;
         });
     },
   });
   ```

4. **Create Components**
   - Follow existing component patterns
   - Use existing UI components (Button, Modal, etc.)
   - Implement loading and error states

5. **Add Route (if needed)**
   ```javascript
   // routes/AppRoutes.jsx
   <Route path="/product/:id/reviews" element={<ProductReviews />} />
   ```

6. **Update Store**
   ```javascript
   // store/store.js
   import reviewReducer from './reviewSlice';
   
   const store = configureStore({
     reducer: {
       // ... existing reducers
       reviews: reviewReducer,
     },
   });
   ```

7. **Test**
   - Test on mobile, tablet, desktop
   - Test with slow network
   - Test error scenarios

8. **Create PR**
   - Use PR template
   - Request review from team
   - Address feedback

### Adding a New Page

**Template:**
```jsx
// pages/NewPage.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NewPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.feature);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div className="min-h-screen bg-soft-ivory dark:bg-deep-charcoal">
      <Navbar />
      <main className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Page content */}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NewPage;
```

### Adding a New UI Component

**Pattern:**
```jsx
// components/ui/NewComponent.jsx
import { motion } from 'framer-motion';

/**
 * NewComponent - Brief description
 * 
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary'
 * @param {Function} props.onAction - Callback when action occurs
 */

const NewComponent = ({ 
  variant = 'primary',
  onAction,
  children,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-subtle-gold text-white',
    secondary: 'bg-warm-beige text-deep-charcoal',
  };
  
  return (
    <motion.div
      className={`p-4 rounded-lg ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      onClick={onAction}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default NewComponent;
```

### API Integration Pattern

```javascript
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Feature-specific API functions
export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  getReviews: (id) => api.get(`/products/${id}/reviews`),
};

export const cartAPI = {
  sync: (cartData) => api.post('/cart/sync', cartData),
  checkout: (orderData) => api.post('/orders', orderData),
};

export default api;
```

### What NOT to Modify

**Critical Files (Consult Team Lead):**
- `vite.config.js` - Build configuration
- `tailwind.config.js` - Theme foundation
- `store/store.js` - Store structure
- `App.jsx` - Root component structure
- `main.jsx` - Entry point

**If You Must Modify:**
1. Create a proposal document
2. Discuss with team
3. Test thoroughly in staging
4. Have rollback plan ready

### Extension Checklist

**Before starting:**
- [ ] Review this documentation
- [ ] Check if similar feature exists
- [ ] Create feature branch
- [ ] Write brief plan

**During development:**
- [ ] Follow existing patterns
- [ ] Use existing UI components
- [ ] Implement loading states
- [ ] Handle errors gracefully
- [ ] Add to Redux if shared state needed

**Before submitting:**
- [ ] Test on all screen sizes
- [ ] Test dark mode
- [ ] No console errors
- [ ] ESLint passes
- [ ] Self-review code
- [ ] Update documentation if needed

---

## Appendix A: Quick Reference

### Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Git
git checkout -b feature/name    # New feature branch
git add . && git commit -m "feat: description"  # Commit
git push -u origin feature/name # Push branch
```

### File Templates

See code examples in respective sections above.

### Troubleshooting

**Import errors:**
- Check alias: Use `@/` instead of relative paths
- Verify file exists at path
- Check for case sensitivity issues

**Build failures:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install`
- Check for syntax errors with `npm run lint`

**State not updating:**
- Ensure action is dispatched correctly
- Check reducer is registered in store
- Verify selector is accessing correct path

**Styles not applying:**
- Check Tailwind class spelling
- Verify dark mode class is applied
- Purge cache and restart dev server

---

## Appendix B: Glossary

- **Slice:** Redux state slice for a feature
- **Thunk:** Async action in Redux
- **Memoization:** Caching expensive calculations
- **Lazy Loading:** Loading code only when needed
- **HMR:** Hot Module Replacement (instant updates)
- **CSP:** Content Security Policy
- **CORS:** Cross-Origin Resource Sharing
- **Tree-shaking:** Removing unused code

---

## Document Maintenance

**Update this document when:**
- Adding major new features
- Changing tech stack
- Modifying architecture
- Updating conventions
- Adding new patterns

**Review schedule:** Monthly

**Next review date:** March 2026

---

**End of Document**

*For questions or clarifications, contact the development team.*
