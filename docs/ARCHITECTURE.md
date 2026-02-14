# System Architecture

> **NIVELLE Technical Architecture**  
> **Version:** v1.0.0  
> **Last Updated:** February 13, 2026

---

## 1. System Overview

NIVELLE is a Single Page Application (SPA) built with modern React architecture.

```
┌─────────────────────────────────────────┐
│           Client Layer                  │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐ │
│  │   UI    │ │  State  │ │  Router  │ │
│  │Components│ │Management│ │          │ │
│  └────┬────┘ └────┬────┘ └────┬─────┘ │
│       │           │           │        │
│  ┌────┴───────────┴───────────┴────┐   │
│  │         React Application        │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│           Data Layer                    │
│  ┌─────────────────────────────────┐   │
│  │     Redux Store (Centralized)   │   │
│  │  ┌─────────┐ ┌──────────────┐  │   │
│  │  │  Cart   │ │  Wishlist    │  │   │
│  │  └─────────┘ └──────────────┘  │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 2. Frontend Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | React 19 | UI library |
| Build Tool | Vite | Development & bundling |
| State | Redux Toolkit | Global state management |
| Styling | Tailwind CSS | Utility-first CSS |
| Animation | Framer Motion | Smooth animations |
| Icons | Lucide React | Icon library |

### Component Hierarchy

```
App
├── Layout (Navbar, Footer)
│   ├── Home Page
│   │   ├── Hero Section
│   │   ├── Featured Products
│   │   └── Categories
│   ├── Products Page
│   │   ├── Filter Sidebar
│   │   ├── Product Grid
│   │   └── Product Cards
│   ├── Product Detail Page
│   │   ├── Image Gallery
│   │   ├── Product Info
│   │   └── Specifications
│   ├── Cart Page
│   │   ├── Cart Items
│   │   └── Cart Summary
│   └── Checkout Page
│       ├── Form
│       └── Order Summary
```

---

## 3. State Management

### Redux Store Structure

```javascript
{
  cart: {
    items: [],        // Array of cart items
    total: 0          // Calculated total
  },
  wishlist: {
    items: []         // Array of wishlist items
  },
  products: {
    list: [],         // All products
    filtered: [],     // Filtered products
    loading: false,   // Loading state
    error: null       // Error state
  }
}
```

### State Flow

```
User Action → Action Creator → Reducer → Store Update → Component Re-render
```

---

## 4. Data Flow

### Product Data

```
Mock Data (mockData.js)
         │
         ▼
    Redux Store
         │
         ├──► Product Listing Page
         ├──► Product Detail Page
         └──► Cart/Wishlist
```

### Cart Operations

```
Add to Cart
    │
    ├──► Check if exists
    │       ├──► Yes: Increment quantity
    │       └──► No: Add new item
    │
    └──► Recalculate totals
```

---

## 5. Routing

### Route Structure

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page |
| `/products` | Products | Product listing |
| `/products/:id` | ProductDetail | Single product |
| `/cart` | Cart | Shopping cart |
| `/checkout` | Checkout | Checkout flow |
| `/wishlist` | Wishlist | Saved items |
| `/orders` | Orders | Order history |

---

## 6. File Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ui/             # Basic UI (Button, Badge, etc.)
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   └── product/        # Product-specific components
│   │
│   ├── pages/              # Route pages
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── store/              # Redux store
│   │   ├── index.js        # Store configuration
│   │   ├── cartSlice.js    # Cart state
│   │   └── wishlistSlice.js # Wishlist state
│   │
│   ├── services/           # API & data services
│   │   └── mockData.js     # Product data
│   │
│   ├── utils/              # Utility functions
│   │   └── currency.js     # INR formatting
│   │
│   ├── assets/             # Static assets
│   │
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
│
├── public/                 # Public assets
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 7. Key Components

### ProductCard

```javascript
// Displays individual product
Props:
  - product: Object
  - onAddToCart: Function
  - isInWishlist: Boolean
```

### FilterSidebar

```javascript
// Product filtering UI
Features:
  - Category filter
  - Price range slider
  - Sort options
```

### CartSummary

```javascript
// Cart totals and actions
Calculates:
  - Subtotal
  - GST (18%)
  - Shipping
  - Final total
```

---

## 8. Performance Optimizations

### Implemented

- ✅ **Code splitting** with dynamic imports
- ✅ **Memoization** with React.memo
- ✅ **Lazy loading** for images
- ✅ **Debounced** search input
- ✅ **Virtual scrolling** for long lists (future)

### Planned

- 🔄 **Service Worker** for offline support
- 🔄 **Image optimization** pipeline
- 🔄 **Bundle analysis** and optimization

---

## 9. API Design (Mock)

### Mock API Functions

```javascript
// Fetch all products
fetchProducts() → Promise<Product[]>

// Fetch single product
fetchProductById(id) → Promise<Product>

// Fetch by category
fetchProductsByCategory(category) → Promise<Product[]>

// Search products
searchProducts(query) → Promise<Product[]>
```

---

## 10. Error Handling

### Strategy

```
Error Boundary (App-level)
    │
    ├──► Component Error Handler
    │       └──► Display Error UI
    │
    └──► Redux Error State
            └──► Global Error Toast
```

---

*For implementation details, see PROJECT_RULES.md*

*For UI guidelines, see DESIGN_SYSTEM.md*
