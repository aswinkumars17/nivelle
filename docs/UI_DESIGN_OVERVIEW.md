# NIVELLE UI Design Overview

> **Comprehensive analysis of the UI/UX design system**
> **Version:** 1.0.0
> **Generated:** February 2026

---

## 1. Design Philosophy

NIVELLE embodies a **premium, elegant furniture brand** aesthetic with:

- **Warm, sophisticated tones** - Earthy browns, golds, and ivories
- **Minimal yet luxurious** - Clean layouts with subtle gold accents
- **Modern Indian craftsmanship** - Blend of traditional and contemporary
- **Dark mode support** - Full dark theme with inverted color palette

---

## 2. Color Palette

### Primary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `subtle-gold` / `accent-gold` | `#C6A75E` | Primary accent, CTAs, highlights |
| `accent-gold-hover` | `#D4B76E` | Hover states for gold elements |
| `muted-walnut` / `accent-brown` | `#7A5C4D` | Secondary accent, borders |
| `warm-beige` | `#F5F1EA` | Light backgrounds |
| `soft-ivory` | `#FAF9F7` | Light theme background |
| `deep-charcoal` | `#2B2B2B` | Dark backgrounds, primary text (light mode) |

### Light Theme Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `light-bg` | `#FAF9F7` | Page background |
| `light-surface` | `#FFFFFF` | Card surfaces |
| `light-elevated` | `#F5F1EA` | Elevated elements |
| `light-text` | `#2B2B2B` | Primary text |
| `light-text-secondary` | `#5C5C5C` | Secondary text |
| `light-text-muted` | `#8B8680` | Muted/placeholder text |
| `light-border` | `#E5E2DE` | Borders |
| `light-border-subtle` | `#F0EDE8` | Subtle borders |

### Dark Theme Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `dark-bg` | `#0F0F0F` | Page background |
| `dark-surface` | `#1A1A1A` | Card surfaces |
| `dark-elevated` | `#252525` | Elevated elements |
| `dark-overlay` | `#2D2D2D` | Overlays |
| `dark-text` | `#FAF9F7` | Primary text |
| `dark-text-secondary` | `#B8B3AB` | Secondary text |
| `dark-text-muted` | `#7A756F` | Muted text |
| `dark-border` | `#3D3D3D` | Borders |
| `dark-border-subtle` | `#2A2A2A` | Subtle borders |

### Semantic Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| `success` | `#22C55E` | Success states |
| `success-light` | `#4ADE80` | Success backgrounds |
| `warning` | `#F59E0B` | Warning states |
| `warning-light` | `#FBBF24` | Warning backgrounds |
| `error` | `#EF4444` | Error states |
| `error-light` | `#F87171` | Error backgrounds |
| `info` | `#3B82F6` | Info states |
| `info-light` | `#60A5FA` | Info backgrounds |

---

## 3. Typography

### Font Families

| Font | Usage | Stack |
|------|-------|-------|
| `heading` | Headlines, titles | `Playfair Display, Georgia, serif` |
| `elegant` | Body text, UI | `Inter, system-ui, sans-serif` |

### Heading Sizes (Tailwind)

```
text-3xl → 1.875rem (30px)
text-4xl → 2.25rem (36px)
text-5xl → 3rem (48px)
text-6xl → 3.75rem (60px)
text-7xl → 4.5rem (72px)
text-8xl → 6rem (96px)
```

### Letter Spacing

| Class | Value |
|-------|-------|
| `tracking-widest-xl` | 0.25em |
| `tracking-tight` | -0.02em |
| `tracking-tighter` | -0.04em |

---

## 4. Spacing System

### Custom Spacing Values

```
spacing-18 → 4.5rem (72px)
spacing-22 → 5.5rem (88px)
```

### Standard Tailwind Spacing Used

```
px-3 → 0.75rem (12px)
px-4 → 1rem (16px)
px-6 → 1.5rem (24px)
px-8 → 2rem (32px)
py-2 → 0.5rem (8px)
py-3 → 0.75rem (12px)
py-4 → 1rem (16px)
py-8 → 2rem (32px)
py-12 → 3rem (48px)
py-16 → 4rem (64px)
py-20 → 5rem (80px)
```

---

## 5. Component Library

### 5.1 Button

**Location:** `src/components/ui/Button.jsx`

**Variants:**

| Variant | Light Mode | Dark Mode |
|---------|------------|-----------|
| `primary` | `bg-deep-charcoal text-white` | `bg-soft-ivory text-deep-charcoal` |
| `secondary` | `bg-warm-beige text-deep-charcoal` | `bg-muted-walnut text-soft-ivory` |
| `outline` | `border-deep-charcoal text-deep-charcoal` | `border-soft-ivory text-soft-ivory` |
| `ghost` | `text-deep-charcoal hover:bg-warm-beige` | `text-soft-ivory hover:bg-muted-walnut` |

**Sizes:**

| Size | Padding | Font |
|------|---------|------|
| `sm` | `px-4 py-2` | `text-sm` |
| `md` | `px-6 py-3` | `text-base` |
| `lg` | `px-8 py-4` | `text-lg` |

**Features:**
- Framer Motion hover/tap animations (`scale: 1.02` / `scale: 0.98`)
- `rounded-2xl` border radius
- `transition-all duration-300`
- Disabled state: `opacity-50 cursor-not-allowed`

---

### 5.2 Modal

**Location/ui/Modal.js:** `src/componentsx`

**Sizes:**

| Size | Max Width |
|------|-----------|
| `sm` | `max-w-md` (448px) |
| `md` | `max-w-lg` (512px) |
| `lg` | `max-w-2xl` (672px) |
| `xl` | `max-w-4xl` (896px) |

**Styling:**
- Backdrop: `bg-black/50 backdrop-blur-sm`
- Container: `bg-white/90 dark:bg-deep-charcoal/90 backdrop-blur-md`
- Border radius: `rounded-2xl`
- Shadow: `shadow-soft-lg`

**Animations:**
- Fade in/out: 300ms
- Scale + slide up: `scale: 0.95 → 1, y: 20 → 0`

---

### 5.3 Drawer

**Location:** `src/components/ui/Drawer.jsx`

**Properties:**
- Position: `right` (default), `left`
- Width: `max-w-md` (384px)
- Height: `h-full`

**Styling:**
- Background: `bg-white dark:bg-deep-charcoal`
- Border: `border-b border-warm-beige dark:border-muted-walnut`
- Slide animation: 300ms ease-in-out

---

### 5.4 Badge

**Location:** `src/components/ui/Badge.jsx`

**Variants:**

| Variant | Style |
|---------|-------|
| `default` | `bg-subtle-gold text-white` |
| `secondary` | `bg-warm-beige text-deep-charcoal` (light) / `bg-muted-walnut text-soft-ivory` (dark) |
| `outline` | `border-2 border-deep-charcoal` |
| `destructive` | `bg-red-500 text-white` |

**Styling:**
- Border radius: `rounded-full`
- Min width: 20px
- Height: 20px
- Padding: `px-1.5`

**Animation:** Spring animation on mount (`scale: 0 → 1`)

---

### 5.5 Toast Notifications

**Location:** `src/components/ui/Toast.jsx`

**Types:**

| Type | Icon | Background |
|------|------|------------|
| `success` | `CheckCircle` (green) | `bg-green-50 border-green-200` |
| `error` | `AlertCircle` (red) | `bg-red-50 border-red-200` |
| `info` | `Info` (blue) | `bg-blue-50 border-blue-200` |

**Styling:**
- Position: `fixed bottom-4 right-4`
- Border radius: `rounded-2xl`
- Min width: 300px
- Duration: 3000ms (auto-dismiss)
- Animation: Slide up + fade in/out

---

## 6. Visual Effects

### 6.1 Shadows

| Shadow Name | Light Mode | Dark Mode |
|-------------|------------|-----------|
| `shadow-soft` | `0 4px 20px rgba(0,0,0,0.08)` | N/A |
| `shadow-soft-lg` | `0 8px 30px rgba(0,0,0,0.12)` | N/A |
| `shadow-dark-sm` | N/A | `0 1px 2px rgba(0,0,0,0.5)` |
| `shadow-dark-md` | N/A | `0 4px 6px rgba(0,0,0,0.5)` |
| `shadow-dark-lg` | N/A | `0 8px 24px rgba(0,0,0,0.5)` |
| `shadow-dark-xl` | N/A | `0 16px 48px rgba(0,0,0,0.6)` |
| `shadow-glow` | `0 0 20px rgba(198,167,94,0.3)` | Same |
| `shadow-glow-lg` | `0 0 40px rgba(198,167,94,0.5)` | Same |

### 6.2 Glass Effects

**Glass Dark:**
```css
background: rgba(26, 26, 26, 0.8);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

**Glass Elevated:**
```css
background: rgba(37, 37, 37, 0.9);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.15);
```

### 6.3 Gradients

**Hero Gradient:**
```
bg-gradient-to-r from-black/70 via-black/40 to-transparent
```

**Decorative Radial:**
```
bg-[radial-gradient(circle_at_50%_0%,rgba(198,167,94,0.05),transparent_50%)]
```

---

## 7. Animations

### Custom Keyframes

| Animation | Description |
|-----------|-------------|
| `fade-in` | Opacity 0 → 1 over 500ms |
| `slide-up` | Opacity 0 + translateY(20px) → 1 + translateY(0) over 500ms |
| `scale-in` | Opacity 0 + scale(0.95) → 1 + scale(1) over 300ms |
| `bounce-subtle` | Scale 1 → 1.05 → 1 |
| `shimmer` | Infinite loading shimmer effect |
| `glow-pulse` | Glow shadow pulsing effect |

### Transition Durations

```
duration-100 → 100ms
duration-150 → 150ms
duration-200 → 200ms
duration-300 → 300ms (most common)
duration-500 → 500ms
duration-700 → 700ms
```

### Easing Functions

| Class | Bezier |
|-------|--------|
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| `ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |

---

## 8. Layout Structure

### 8.1 Responsive Breakpoints

| Breakpoint | Width | Prefix |
|------------|-------|--------|
| sm | 640px | `sm:` |
| md | 768px | `md:` |
| lg | 1024px | `lg:` |
| xl | 1280px | `xl:` |
| 2xl | 1536px | `2xl:` |

### 8.2 Max Widths

- Standard container: `max-w-7xl` (1280px)
- Content containers: `max-w-4xl` (896px), `max-w-2xl` (672px)

### 8.3 Navbar Structure

- Fixed position: `fixed top-0 left-0 right-0 z-40`
- Height: `h-16 sm:h-20` (64px → 80px)
- Scrolled state: `bg-white/95 dark:bg-deep-charcoal/95 backdrop-blur-md shadow-soft`

### 8.4 Footer Structure

- Background: `bg-deep-charcoal dark:bg-[#0a0a0a]`
- Grid: 4-column layout (brand, explore, support, legal)
- Newsletter section with email input + button

---

## 9. Input Fields

### Standard Input Styling

```jsx
// Light mode
className="px-4 py-2 border border-gray-300 rounded-lg 
           focus:outline-none focus:ring-2 focus:ring-primary-500 
           focus:border-transparent"

// Dark mode  
className="bg-white dark:bg-[#1a1a1a] 
           border border-muted-walnut/30 dark:border-subtle-gold/20
           focus:ring-2 focus:ring-subtle-gold"
```

### Email Input (Footer/Newsletter)

```jsx
className="px-4 sm:px-6 py-3 
           bg-white/5 dark:bg-[#151515] 
           border border-white/20 dark:border-subtle-gold/20 
           rounded-xl sm:rounded-2xl 
           focus:outline-none focus:ring-2 focus:ring-subtle-gold
           text-white placeholder-white/50"
```

---

## 10. Card Styles

### Product Card

- Border radius: `rounded-2xl`
- Shadow: `shadow-soft`
- Hover: `hover:shadow-lg transition-shadow`
- Image: `w-full h-64 object-cover`

### Category Card

- Border radius: `rounded-2xl`
- Shadow: `shadow-soft hover:shadow-lg`
- Hover scale: `group-hover:scale-105` on image
- Overlay gradient: `bg-gradient-to-t from-black/70 to-transparent`

---

## 11. Dark Mode

### Implementation

- Toggle via class on `body`: `dark` class
- Strategy: `darkMode: 'class'` in tailwind.config.js
- System preference detection on initial load
- Persisted to Theme localStorage

### Colors Mapping

| Light Mode | Dark Mode |
|------------|-----------|
| `bg-soft-ivory` | `bg-deep-charcoal` |
| `bg-warm-beige` | `bg-[#111111]` |
| `text-deep-charcoal` | `text-soft-ivory` |
| `text-muted-walnut` | `text-soft-ivory/70` |
| `border-warm-beige` | `border-muted-walnut/30` |

---

## 12. Icons

**Icon Library:** `lucide-react`

Common icons used:
- Navigation: `Menu`, `X`, `ChevronRight`, `User`, `ShoppingBag`, `Heart`
- Actions: `Plus`, `Edit2`, `Trash2`, `Search`, `Filter`
- Social: `Instagram`, `Facebook`, `Twitter`, `Linkedin`
- Feedback: `CheckCircle`, `AlertCircle`, `Info`, `Star`
- UI: `ArrowRight`, `Settings`, `LogOut`, `Loader2`

---

## 13. Page Sections

### Home Page (`/`)

1. **Hero Section**
   - Full viewport height (`h-[100svh]`)
   - Background image with gradient overlay
   - Auto-rotating slides (5s interval)
   - Call-to-action button

2. **Collection Coming Soon**
   - "Coming Soon" badge with sparkles icon
   - Newsletter signup form
   - Gold accent divider

3. **Testimonials**
   - Dark background section
   - 3-column grid
   - Quote icons, star ratings

4. **Newsletter**
   - Email input + Subscribe button
   - Centered layout

### Collections Page (`/collections`)

- Hero with "Coming Soon" badge
- 3-column grid of collection cards
- Image with gradient overlay
- Hover zoom effect

### Navbar

- Fixed position with scroll detection
- Logo with gold outline effect
- Desktop navigation links
- Dark mode toggle
- Wishlist, Cart buttons with badges
- User menu dropdown (authenticated)
- Mobile hamburger menu (slide from right)

---

## 14. Utility Classes Summary

### Frequently Used

```css
/* Transitions */
transition-all duration-300
transition-colors duration-300
transition-transform duration-300

/* Hover effects */
hover:bg-muted-walnut
hover:shadow-lg
hover:scale-105
group-hover:scale-105

/* Focus states */
focus:outline-none focus:ring-2 focus:ring-subtle-gold

/* Border radius */
rounded-xl
rounded-2xl
rounded-full

/* Animations */
animate-fade-in
animate-slide-up
animate-scale-in
animate-bounce-subtle
```

---

## 15. Admin Panel Design

> **Note:** Admin panel uses DIFFERENT design than public site

### Layout

- Sidebar: `w-64 bg-gray-900 text-white`
- Fixed sidebar on desktop, slide-in on mobile
- Main content: `p-6 lg:p-8`

### Components

- Stat cards: White background, colored icon badges
- Tables: `overflow-x-auto`, gray header, dividers
- Buttons: `bg-primary-600` (not using theme colors)
- Modals: Standard white/dark with close button

### Navigation Items

- Dashboard (LayoutDashboard icon)
- Categories (FolderTree icon)
- Products (Package icon)

---

## 16. Summary: Design Tokens

```javascript
// Colors
primary: #C6A75E (gold)
secondary: #7A5C4D (brown/walnut)
background-light: #FAF9F7 (ivory)
background-dark: #0F0F0F (near black)
surface-light: #FFFFFF
surface-dark: #1A1A1A

// Typography
font-heading: Playfair Display
font-body: Inter

// Shadows
shadow-soft: 0 4px 20px rgba(0,0,0,0.08)
shadow-glow: 0 0 20px rgba(198,167,94,0.3)

// Border Radius
radius-sm: 12px (rounded-xl)
radius-md: 16px (rounded-2xl)  
radius-full: 9999px (rounded-full)

// Animations
duration-fast: 150ms
duration-normal: 300ms
duration-slow: 500ms
ease-default: cubic-bezier(0.4, 0, 0.2, 1)
```

---

*End of UI Design Overview*
