# DEV_LOG.md

Development log for the NIVELLE e-commerce project. This file tracks debugging sessions, technical decisions, and implementation notes for developers.

---

## 2026-02-13 - Session Summary

### Session Goal
Transform NIVELLE from a generic furniture store to a professional Indian-market-focused e-commerce platform with authentic products, proper documentation, and working images.

---

## Technical Decisions

### 1. Image Hosting Strategy

**Problem**: Original Unsplash URLs had malformed IDs causing 404 errors.

**Investigation**:
```javascript
// Original broken format
image: "https://images.unsplash.com/photo-ykgcjx46Z0o?auto=format&fit=crop"
// Should have been:
image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop"
```

**Attempt 1 - Pexels**:
- Replaced with Pexels URLs
- Issue: Some images still failed to load (CORS/availability issues)

**Final Solution - dummyimage.com**:
- 100% reliable placeholder service
- Color-coded by category for visual distinction during development
- Example: `https://dummyimage.com/400x300/8B4513/ffffff&text=Sheesham+Sofa`

**Pros**:
- Always loads
- No API keys required
- Custom text and colors
- Fast response time

**Cons**:
- Not actual product images
- Need to replace with real images before production

---

### 2. Product Data Structure

**Schema Decision**:
```javascript
{
  id: Number,              // Sequential (1-120)
  name: String,            // Product name in English with Indian context
  category: String,        // Enum: 'sofa'|'bed'|'chair'|'table'|'storage'|'pooja'|'decor'|'outdoor'
  price: Number,           // INR amount (1500-300000)
  description: String,     // Marketing description with Indian appeal
  image: String,           // dummyimage.com URL with category color
  material: String,        // Sheesham|Teak|Mango|Brass|Velvet|Cane|Metal|Engineered Wood
  dimensions: String,      // L x W x H format
  color: String,           // Primary color
  rating: Number,          // 3.5-5.0
  reviews: Number,         // Review count
  badge: String|null,      // 'Bestseller'|'New'|'Sale'
  stock: Number,           // Available quantity
  tags: String[]          // Search keywords
}
```

**Rationale**: Chose to include `tags` for search functionality and `badge` for marketing promotions.

---

### 3. Category Structure

**Initial Categories** (6):
- Sofa, Bed, Chair, Table, Storage, Outdoor

**Added Categories** (2):
- **Pooja Unit**: Essential for Indian homes, religious furniture
- **Decor**: Mirrors, lamps, art - completes the furniture shopping experience

**Product Distribution**:
- Chairs (25) - Highest variety needed
- Beds (20) - High ticket items
- Storage (20) - Popular category
- Tables (20) - Functional necessity
- Sofas (15) - Living room centerpieces
- Pooja Units (10) - Religious/cultural
- Decor (5) - Lower priority
- Outdoor (5) - Niche market

---

### 4. Pricing Strategy

**Analysis**:
- Budget range: ₹1,500 - ₹15,000 (stools, small tables)
- Mid-range: ₹15,000 - ₹75,000 (chairs, beds, storage)
- Premium: ₹75,000 - ₹3,00,000 (sofas, large wardrobes)

**Examples**:
- Stool: ₹1,500 (affordable entry point)
- Dining Chair Set: ₹12,000 (common purchase)
- King Bed: ₹45,000 (mid-tier)
- Wardrobe: ₹85,000 (major furniture piece)
- Sectional Sofa: ₹1,80,000 (luxury item)

**Logic**: Prices based on:
1. Material quality (Sheesham > Teak > Mango > Engineered)
2. Size/dimensions
3. Craftsmanship (hand-carved = premium)
4. Category norms in Indian market

---

## Code Patterns

### Product Generation Pattern

```javascript
const generateProducts = () => {
  const products = [];
  let idCounter = 1;
  
  // Category configuration
  const categories = [
    { name: 'sofa', count: 15, color: '8B4513' },
    { name: 'bed', count: 20, color: '4A4A4A' },
    // ... more categories
  ];
  
  categories.forEach(category => {
    for (let i = 1; i <= category.count; i++) {
      products.push({
        id: idCounter++,
        category: category.name,
        image: `https://dummyimage.com/400x300/${category.color}/ffffff&text=${encodeURIComponent(name)}`,
        // ... other fields
      });
    }
  });
  
  return products;
};
```

**Benefits**:
- Consistent ID generation
- Category color coding
- Easy to modify counts
- Type-safe structure

---

### Image URL Builder

```javascript
const buildImageUrl = (productName, categoryColor) => {
  const baseUrl = 'https://dummyimage.com/400x300';
  const text = encodeURIComponent(productName);
  return `${baseUrl}/${categoryColor}/ffffff&text=${text}`;
};
```

**Note**: Using 400x300 for consistency. Consider responsive images for production.

---

## Debugging Sessions

### Session 1: Image Loading Issues

**Error**: 
```
GET https://images.unsplash.com/photo-ykgcjx46Z0o net::ERR_CERT_AUTHORITY_INVALID
```

**Root Cause**: Malformed Unsplash URL structure. Unsplash IDs should be random strings, not readable words.

**Solution Applied**:
1. Switched to dummyimage.com
2. Created color mapping for categories
3. Updated all 120 products with new URLs

**Verification**: Checked 5 random products - all images loaded successfully.

---

### Session 2: Data Consistency

**Issue**: Some products had inconsistent naming (e.g., "Wooden" vs "Wood").

**Fix**: Standardized terminology:
- "Sheesham Wood" (not just "Sheesham")
- "Teak Wood" (not just "Teak")
- "Solid Wood" for unspecified hardwoods

**Script Used**:
```javascript
const standardizeMaterials = (products) => {
  return products.map(p => ({
    ...p,
    material: p.material.replace(/^Sheesham$/, 'Sheesham Wood')
                       .replace(/^Teak$/, 'Teak Wood')
  }));
};
```

---

### Session 3: Performance Check

**File**: `mockData.js`
**Size**: 99KB
**Products**: 120
**Images**: 360 URLs (3 per product for potential gallery)

**Impact on Bundle Size**:
- Text data is negligible
- No actual images in bundle (URLs only)
- Should lazy load product data in production

**Recommendation**: 
- Split into category-specific files for large catalogs (>500 products)
- Implement pagination
- Use CDN for images

---

## Error Log Integration

All errors are documented in `ERROR_LOG.md` with:
- Error code/signature
- Context and cause
- Solution steps
- Prevention notes

**Current Error Count**: 9 errors documented
**Categories**: Image loading, Data validation, Documentation

---

## Next Steps (Tomorrow)

1. **Image Strategy**: Decide on real image sourcing (professional photography vs. supplier images)
2. **Authentication**: Implement user login/signup with Firebase or custom backend
3. **Cart Persistence**: Save cart to localStorage
4. **Search**: Implement fuzzy search with tags
5. **Filters**: Add price range slider and material filter
6. **Testing**: Add unit tests for product data validation

---

## Notes for Future Developers

### Quick Reference
- **File Size Limit**: mockData.js should not exceed 200KB without splitting
- **Image Colors**: Category colors defined in `mockData.js` comments
- **Pricing Logic**: See Pricing Strategy section above
- **Product Counts**: Easily adjustable, see `categories` array

### Common Issues
1. **Images not loading**: Check if dummyimage.com is accessible from client
2. **Prices showing in wrong format**: Ensure `price` field is a number, format in UI
3. **Categories missing**: Check `categories` array in mockData.js

### Environment Variables (Future)
```bash
REACT_APP_API_BASE_URL=
REACT_APP_IMAGE_CDN_URL=
REACT_APP_RAZORPAY_KEY=
```

---

**Session**: 2026-02-13  
**Duration**: ~4 hours  
**Files Modified**: 7  
**Lines of Code**: ~2,500  
**Status**: ✅ Documentation Complete, Products Migrated  

**Next Session**: 2026-02-14  
**Focus**: Authentication, Cart Persistence, Real Images
