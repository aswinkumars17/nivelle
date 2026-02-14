# Project Rules & Guidelines

> **NIVELLE Project Standards**  
> **Version:** v1.0.0  
> **Effective Date:** February 13, 2026

---

## 1. Code Quality Standards

### JavaScript/React Standards

- **No inline styles** - Use Tailwind CSS classes only
- **Functional components** with hooks (no class components)
- **Props destructuring** in component parameters
- **Consistent naming:** PascalCase for components, camelCase for functions/variables
- **Export style:** Named exports preferred over default exports

### File Organization

```javascript
// 1. Imports (React, third-party, local)
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

// 2. Component definition
const ComponentName = ({ prop1, prop2 }) => {
  // 3. Hooks
  const [state, setState] = useState();
  
  // 4. Helper functions
  const handleClick = () => {};
  
  // 5. Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
};

// 6. Export
export default ComponentName;
```

---

## 2. Component Guidelines

### Component Structure

- Keep components **small and focused** (< 200 lines ideal)
- **Single Responsibility Principle** - One component = One task
- **Reusable components** in `/components` folder
- **Page-specific components** in `/pages` folder

### Props Guidelines

- Use **propTypes** or **TypeScript** for type safety
- Provide **default props** where appropriate
- Destructure props at component level

```javascript
const ProductCard = ({ 
  product, 
  onAddToCart, 
  isInWishlist = false 
}) => {
  // Component logic
};
```

---

## 3. Styling Standards

### Tailwind CSS Rules

- Use **Tailwind utility classes** exclusively
- **No custom CSS** unless absolutely necessary
- Follow **mobile-first** responsive design
- Use **arbitrary values** sparingly

```jsx
// ✅ Good
<div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg shadow-md">

// ❌ Bad
<div style={{ display: 'flex', padding: '16px' }}>
```

### Color Palette (Defined in tailwind.config.js)

- **Primary:** `#8B5A2B` (Brown)
- **Secondary:** `#D4A574` (Tan)
- **Accent:** `#2C5F2D` (Green)
- **Background:** `#F5F5DC` (Beige)
- **Text:** `#2D2D2D` (Dark Gray)

---

## 4. State Management

### Redux Guidelines

- **Sliced state** by feature (cart, wishlist, products)
- **Action creators** for all state changes
- **Selectors** for accessing state
- **No direct state mutations** - Always return new state

```javascript
// ✅ Good
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    }
  }
});
```

---

## 5. Performance Standards

### Optimization Requirements

- **Lazy load** routes and heavy components
- **Memoize** expensive calculations with `useMemo`
- **Callback memoization** with `useCallback`
- **Image optimization** - Use appropriate sizes
- **No unnecessary re-renders**

---

## 6. Git Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `refactor/description` - Code refactoring
- `docs/description` - Documentation updates

### Commit Messages

```
feat: Add product filtering
fix: Resolve cart total calculation
refactor: Simplify checkout flow
docs: Update API documentation
```

---

## 7. Documentation Requirements

### Mandatory Comments

- **JSDoc** for all functions and components
- **Inline comments** for complex logic
- **TODO/FIXME** comments for future work

```javascript
/**
 * Calculate cart total including GST
 * @param {Array} items - Cart items
 * @param {number} gstRate - GST percentage
 * @returns {number} Total amount
 */
const calculateTotal = (items, gstRate = 18) => {
  // Implementation
};
```

---

## 8. Testing Standards

### Testing Requirements

- **Unit tests** for utility functions
- **Component tests** for UI components
- **Integration tests** for critical user flows
- **Minimum coverage:** 70%

---

## 9. Accessibility (a11y)

### Requirements

- **Semantic HTML** elements
- **ARIA labels** where needed
- **Keyboard navigation** support
- **Color contrast** compliance (WCAG 4.5:1)
- **Alt text** for all images

---

## 10. Security Standards

### Security Rules

- **No hardcoded secrets** in code
- **Input validation** for all user inputs
- **XSS prevention** - Sanitize user content
- **CSRF protection** for API calls

---

## Enforcement

Violations of these rules will be caught during code review.

**Questions?** Refer to ARCHITECTURE.md for technical details.

---

*Last updated: 2026-02-13*
