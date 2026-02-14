// Mock Furniture Data - NIVELLE Indian Luxury Collection
// 120 unique Indian furniture products with authentic INR pricing
// Categories: Sofa, Bed, Chair, Table, Storage, Pooja Unit, Decor, Outdoor

export const mockProducts = [
  // ==========================================
  // SOFAS (15 products) - Price range: ₹15,000 - ₹3,00,000
  // ==========================================
  {
    id: 1,
    name: "Sheesham Wood Royal Sofa",
    category: "Sofa",
    price: 125000,
    originalPrice: 145000,
    rating: 4.9,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop"
    ],
    description: "Handcrafted from premium Sheesham wood with intricate Rajasthani carvings. Upholstered in rich velvet fabric with brass fittings. A masterpiece of Indian craftsmanship.",
    specifications: {
      dimensions: "84\" W x 36\" D x 34\" H",
      material: "Solid Sheesham Wood, Velvet Upholstery, Brass Accents",
      weight: "85 kg",
      warranty: "10 years",
      assembly: "Professional assembly included"
    },
    stock: 8,
    isNew: true,
    discount: 14
  },
  {
    id: 2,
    name: "Teak Wood Classic Sofa Set",
    category: "Sofa",
    price: 95000,
    originalPrice: null,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Elegant 3+1+1 sofa set crafted from premium Kerala teak. Features hand-polished finish and comfortable high-density foam cushions.",
    specifications: {
      dimensions: "3-seater: 78\" W x 32\" D x 32\" H",
      material: "Grade A Teak Wood, PU Foam Cushions",
      weight: "120 kg total",
      warranty: "15 years",
      assembly: "White glove delivery"
    },
    stock: 12,
    isNew: false,
    discount: null
  },
  {
    id: 3,
    name: "Mango Wood L-Shape Sectional",
    category: "Sofa",
    price: 65000,
    originalPrice: 78000,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Contemporary L-shape sofa made from sustainable mango wood. Perfect for modern Indian homes with spacious living areas.",
    specifications: {
      dimensions: "108\" W x 72\" D x 30\" H",
      material: "Mango Wood, Jute Fabric",
      weight: "95 kg",
      warranty: "7 years",
      assembly: "Professional assembly recommended"
    },
    stock: 15,
    isNew: true,
    discount: 17
  },
  {
    id: 4,
    name: "Rosewood Diwan with Cushions",
    category: "Sofa",
    price: 45000,
    originalPrice: null,
    rating: 4.8,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=800&fit=crop"
    ],
    description: "Traditional Indian diwan crafted from rosewood with storage underneath. Includes 6 matching bolsters and 4 cushions.",
    specifications: {
      dimensions: "72\" W x 36\" D x 18\" H",
      material: "Rosewood, Cotton Cushions",
      weight: "55 kg",
      warranty: "10 years",
      assembly: "Minimal assembly"
    },
    stock: 25,
    isNew: false,
    discount: null
  },
  {
    id: 5,
    name: "Acacia Wood Sofa Cum Bed",
    category: "Sofa",
    price: 35000,
    originalPrice: 42000,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Space-saving sofa that converts to a comfortable queen-size bed. Ideal for compact urban apartments.",
    specifications: {
      dimensions: "78\" W x 36\" D x 32\" H",
      material: "Acacia Wood, Polyester Fabric",
      weight: "68 kg",
      warranty: "5 years",
      assembly: "Some assembly required"
    },
    stock: 30,
    isNew: true,
    discount: 17
  },
  {
    id: 6,
    name: "Chesterfield Leather Sofa",
    category: "Sofa",
    price: 185000,
    originalPrice: 220000,
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "British colonial style meets Indian craftsmanship. Premium leather upholstery with deep button tufting on solid wood frame.",
    specifications: {
      dimensions: "88\" W x 38\" D x 30\" H",
      material: "Genuine Leather, Sheesham Wood Frame",
      weight: "110 kg",
      warranty: "10 years",
      assembly: "White glove delivery"
    },
    stock: 6,
    isNew: false,
    discount: 16
  },
  {
    id: 7,
    name: "Bamboo Eco-Friendly Sofa",
    category: "Sofa",
    price: 28000,
    originalPrice: null,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1541119762305-c3f6bb8f2a6a?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541119762305-c3f6bb8f2a6a?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1541119762305-c3f6bb8f2a6a?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1540638346078-d82528362a24?w=800&h=800&fit=crop"
    ],
    description: "Sustainable bamboo sofa with natural cane weaving. Perfect for eco-conscious homes and verandahs.",
    specifications: {
      dimensions: "72\" W x 30\" D x 28\" H",
      material: "Bamboo Frame, Natural Cane",
      weight: "35 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 45,
    isNew: true,
    discount: null
  },
  {
    id: 8,
    name: "Pine Wood Outdoor Sofa",
    category: "Sofa",
    price: 32000,
    originalPrice: 38000,
    rating: 4.4,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1540638346078-d82528362a24?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1540638346078-d82528362a24?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Weather-resistant outdoor sofa treated for Indian climate. Quick-dry cushions perfect for balconies and terraces.",
    specifications: {
      dimensions: "76\" W x 32\" D x 30\" H",
      material: "Treated Pine Wood, Polyester Cushions",
      weight: "48 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 20,
    isNew: false,
    discount: 16
  },
  {
    id: 9,
    name: "Rajasthani Carved Sofa Set",
    category: "Sofa",
    price: 245000,
    originalPrice: 285000,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Museum-quality sofa set with intricate hand-carved details inspired by Jaipur palaces. Solid Sheesham with gold leaf accents.",
    specifications: {
      dimensions: "3+1+1 configuration",
      material: "Premium Sheesham, Silk Upholstery",
      weight: "180 kg",
      warranty: "Lifetime",
      assembly: "Expert craftsmen assembly"
    },
    stock: 3,
    isNew: true,
    discount: 14
  },
  {
    id: 10,
    name: "Contemporary Fabric Sofa",
    category: "Sofa",
    price: 42000,
    originalPrice: null,
    rating: 4.6,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop"
    ],
    description: "Modern 3-seater sofa with stain-resistant fabric. Clean lines and neutral colors complement any contemporary home.",
    specifications: {
      dimensions: "80\" W x 34\" D x 32\" H",
      material: "Engineered Wood, Performance Fabric",
      weight: "52 kg",
      warranty: "5 years",
      assembly: "Minimal assembly"
    },
    stock: 55,
    isNew: false,
    discount: null
  },
  {
    id: 11,
    name: "Recliner Leather Sofa Set",
    category: "Sofa",
    price: 158000,
    originalPrice: 195000,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Premium recliner sofa with powered adjustment, USB ports, and massage function. Ultimate comfort for living rooms.",
    specifications: {
      dimensions: "86\" W x 40\" D x 40\" H",
      material: "Top-grain Leather, Steel Mechanism",
      weight: "145 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 8,
    isNew: true,
    discount: 19
  },
  {
    id: 12,
    name: "Wooden Swing Sofa Jhula",
    category: "Sofa",
    price: 38000,
    originalPrice: null,
    rating: 4.7,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Traditional Indian swing sofa for balconies and courtyards. Sturdy chains and comfortable seating with bolsters.",
    specifications: {
      dimensions: "48\" W x 24\" D x 24\" H (seating)",
      material: "Teak Wood, Iron Chains",
      weight: "42 kg",
      warranty: "10 years",
      assembly: "Wall mounting required"
    },
    stock: 28,
    isNew: false,
    discount: null
  },
  {
    id: 13,
    name: "Velvet 3-Seater Sofa",
    category: "Sofa",
    price: 55000,
    originalPrice: 68000,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=800&fit=crop"
    ],
    description: "Luxurious velvet sofa in jewel tones. Deep seating and plush cushions create an inviting centerpiece.",
    specifications: {
      dimensions: "82\" W x 36\" D x 32\" H",
      material: "Hardwood Frame, Velvet Fabric",
      weight: "78 kg",
      warranty: "7 years",
      assembly: "Easy assembly"
    },
    stock: 18,
    isNew: true,
    discount: 19
  },
  {
    id: 14,
    name: "Minimalist Loveseat",
    category: "Sofa",
    price: 28000,
    originalPrice: null,
    rating: 4.5,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Compact 2-seater sofa perfect for small apartments and reading nooks. Clean Scandinavian design.",
    specifications: {
      dimensions: "60\" W x 32\" D x 30\" H",
      material: "Rubber Wood, Linen Fabric",
      weight: "38 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 42,
    isNew: false,
    discount: null
  },
  {
    id: 15,
    name: "Luxury Italian Leather Sofa",
    category: "Sofa",
    price: 295000,
    originalPrice: 350000,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Imported Italian leather sofa with power reclining and heated seats. The ultimate in luxury living.",
    specifications: {
      dimensions: "90\" W x 38\" D x 36\" H",
      material: "Italian Leather, Steel Frame",
      weight: "165 kg",
      warranty: "15 years",
      assembly: "White glove delivery"
    },
    stock: 4,
    isNew: true,
    discount: 16
  },

  // ==========================================
  // BEDS (20 products) - Price range: ₹12,000 - ₹2,50,000
  // ==========================================
  {
    id: 16,
    name: "Sheesham Wood King Bed",
    category: "Bed",
    price: 85000,
    originalPrice: null,
    rating: 4.9,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1522771753035-a0a1f66cd459?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522771753035-a0a1f66cd459?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1522771753035-a0a1f66cd459?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1618374667665-6f16b82f1b7a?w=800&h=800&fit=crop"
    ],
    description: "Solid Sheesham wood king-size bed with carved headboard. Traditional design meets modern durability.",
    specifications: {
      dimensions: "King: 78\" W x 84\" L x 42\" H",
      material: "Solid Sheesham Wood",
      weight: "120 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 15,
    isNew: false,
    discount: null
  },
  {
    id: 17,
    name: "Storage Hydraulic Bed",
    category: "Bed",
    price: 45000,
    originalPrice: 52000,
    rating: 4.8,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1618374667665-6f16b82f1b7a?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1618374667665-6f16b82f1b7a?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Space-saving queen bed with hydraulic storage. Lift the mattress to reveal ample storage for bedding and luggage.",
    specifications: {
      dimensions: "Queen: 66\" W x 84\" L x 14\" H",
      material: "Engineered Wood, Gas Lift",
      weight: "95 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 35,
    isNew: true,
    discount: 13
  },
  {
    id: 18,
    name: "Platform Bed with Drawers",
    category: "Bed",
    price: 38000,
    originalPrice: null,
    rating: 4.7,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Modern platform bed with 4 built-in drawers. Minimalist design perfect for contemporary bedrooms.",
    specifications: {
      dimensions: "Queen: 64\" W x 84\" L x 12\" H",
      material: "Mango Wood, Metal Hardware",
      weight: "85 kg",
      warranty: "7 years",
      assembly: "Some assembly required"
    },
    stock: 28,
    isNew: false,
    discount: null
  },
  {
    id: 19,
    name: "Upholstered Wingback Bed",
    category: "Bed",
    price: 125000,
    originalPrice: 145000,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop"
    ],
    description: "Dramatic wingback headboard in plush velvet. Creates a stunning focal point in master bedrooms.",
    specifications: {
      dimensions: "King: 80\" W x 88\" L x 56\" H",
      material: "Velvet Upholstery, Hardwood",
      weight: "140 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 8,
    isNew: true,
    discount: 14
  },
  {
    id: 20,
    name: "Bunk Bed for Kids",
    category: "Bed",
    price: 28000,
    originalPrice: null,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Sturdy twin-over-twin bunk bed with safety rails and ladder. Space-saving solution for kids' rooms.",
    specifications: {
      dimensions: "42\" W x 78\" L x 65\" H",
      material: "Solid Pine, Non-toxic Paint",
      weight: "75 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 45,
    isNew: false,
    discount: null
  },
  {
    id: 21,
    name: "Teak Wood Poster Bed",
    category: "Bed",
    price: 185000,
    originalPrice: 210000,
    rating: 4.9,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Majestic four-poster bed crafted from premium Kerala teak. Traditional design with modern comfort.",
    specifications: {
      dimensions: "King: 82\" W x 90\" L x 88\" H",
      material: "Grade A Teak Wood",
      weight: "200 kg",
      warranty: "Lifetime",
      assembly: "Expert assembly"
    },
    stock: 5,
    isNew: true,
    discount: 12
  },
  {
    id: 22,
    name: "Daybed with Trundle",
    category: "Bed",
    price: 32000,
    originalPrice: null,
    rating: 4.7,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop"
    ],
    description: "Versatile daybed with pull-out trundle for guests. Perfect for home offices and guest rooms.",
    specifications: {
      dimensions: "Twin: 42\" W x 80\" L x 40\" H",
      material: "Rubber Wood, Upholstered",
      weight: "65 kg",
      warranty: "7 years",
      assembly: "Some assembly required"
    },
    stock: 32,
    isNew: false,
    discount: null
  },
  {
    id: 23,
    name: "Adjustable Smart Bed",
    category: "Bed",
    price: 145000,
    originalPrice: 175000,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Electric adjustable bed with massage, under-bed lighting, and wireless remote. Ultimate luxury sleeping experience.",
    specifications: {
      dimensions: "Queen: 60\" W x 80\" L x 15\" H",
      material: "Steel Frame, Upholstered",
      weight: "110 kg",
      warranty: "10 years",
      assembly: "Professional setup"
    },
    stock: 12,
    isNew: true,
    discount: 17
  },
  {
    id: 24,
    name: "Sleigh Bed Rosewood",
    category: "Bed",
    price: 95000,
    originalPrice: null,
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Traditional sleigh bed with scrolled headboard. Rich rosewood finish adds warmth to any bedroom.",
    specifications: {
      dimensions: "King: 80\" W x 88\" L x 48\" H",
      material: "Solid Rosewood",
      weight: "135 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 10,
    isNew: false,
    discount: null
  },
  {
    id: 25,
    name: "Single Bed for Students",
    category: "Bed",
    price: 15000,
    originalPrice: 18000,
    rating: 4.5,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop"
    ],
    description: "Affordable single bed perfect for students and PG accommodations. Sturdy metal frame with wooden slats.",
    specifications: {
      dimensions: "Single: 36\" W x 78\" L x 12\" H",
      material: "Metal Frame, Wooden Slats",
      weight: "35 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 100,
    isNew: true,
    discount: 17
  },
  {
    id: 26,
    name: "Carved Wooden Bed",
    category: "Bed",
    price: 165000,
    originalPrice: 195000,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Intricately carved headboard featuring traditional Indian motifs. Handcrafted by master artisans.",
    specifications: {
      dimensions: "King: 82\" W x 88\" L x 60\" H",
      material: "Sheesham Wood, Natural Finish",
      weight: "165 kg",
      warranty: "Lifetime",
      assembly: "Expert craftsmen"
    },
    stock: 4,
    isNew: true,
    discount: 15
  },
  {
    id: 27,
    name: "Metal Frame Queen Bed",
    category: "Bed",
    price: 22000,
    originalPrice: null,
    rating: 4.4,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Modern metal bed frame with minimalist design. Powder-coated finish resists rust and scratches.",
    specifications: {
      dimensions: "Queen: 62\" W x 82\" L x 14\" H",
      material: "Powder-coated Steel",
      weight: "45 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 65,
    isNew: false,
    discount: null
  },
  {
    id: 28,
    name: "Loft Bed with Study",
    category: "Bed",
    price: 42000,
    originalPrice: 48000,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop"
    ],
    description: "Space-saving loft bed with integrated study desk underneath. Perfect for children's rooms and small apartments.",
    specifications: {
      dimensions: "42\" W x 78\" L x 72\" H",
      material: "Engineered Wood, Metal Support",
      weight: "95 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 25,
    isNew: true,
    discount: 13
  },
  {
    id: 29,
    name: "Brass Inlay Bed",
    category: "Bed",
    price: 225000,
    originalPrice: 265000,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Luxury bed with brass inlay work on solid Sheesham frame. Inspired by Mughal architecture and craftsmanship.",
    specifications: {
      dimensions: "King: 84\" W x 90\" L x 52\" H",
      material: "Sheesham Wood, Brass Inlay",
      weight: "185 kg",
      warranty: "Lifetime",
      assembly: "Expert craftsmen"
    },
    stock: 3,
    isNew: true,
    discount: 15
  },
  {
    id: 30,
    name: "Foldable Guest Bed",
    category: "Bed",
    price: 8500,
    originalPrice: null,
    rating: 4.3,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Portable foldable bed with mattress included. Easy to store and perfect for unexpected guests.",
    specifications: {
      dimensions: "36\" W x 78\" L x 12\" H",
      material: "Metal Frame, Foam Mattress",
      weight: "25 kg",
      warranty: "2 years",
      assembly: "No assembly"
    },
    stock: 150,
    isNew: false,
    discount: null
  },
  {
    id: 31,
    name: "Canopy Bed White",
    category: "Bed",
    price: 75000,
    originalPrice: 88000,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop"
    ],
    description: "Romantic white canopy bed perfect for master suites. Drape with curtains for a dreamy bedroom setting.",
    specifications: {
      dimensions: "Queen: 68\" W x 86\" L x 84\" H",
      material: "Mango Wood, White Finish",
      weight: "95 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 14,
    isNew: true,
    discount: 15
  },
  {
    id: 32,
    name: "Bunk Bed with Storage",
    category: "Bed",
    price: 38000,
    originalPrice: null,
    rating: 4.6,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Twin bunk bed with drawers and shelves built-in. Maximizes storage in children's rooms.",
    specifications: {
      dimensions: "42\" W x 80\" L x 68\" H",
      material: "Engineered Wood",
      weight: "110 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 30,
    isNew: false,
    discount: null
  },
  {
    id: 33,
    name: "Floating Platform Bed",
    category: "Bed",
    price: 55000,
    originalPrice: 65000,
    rating: 4.7,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Contemporary floating bed design with hidden legs. Creates an illusion of levitation with LED underglow.",
    specifications: {
      dimensions: "King: 78\" W x 86\" L x 10\" H",
      material: "Sheesham Wood, LED Lights",
      weight: "105 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 18,
    isNew: true,
    discount: 15
  },
  {
    id: 34,
    name: "Mahogany Colonial Bed",
    category: "Bed",
    price: 135000,
    originalPrice: null,
    rating: 4.8,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop"
    ],
    description: "British colonial style mahogany bed with elegant lines and rich finish. Heritage furniture piece.",
    specifications: {
      dimensions: "King: 80\" W x 88\" L x 46\" H",
      material: "African Mahogany",
      weight: "155 kg",
      warranty: "20 years",
      assembly: "Professional assembly"
    },
    stock: 7,
    isNew: false,
    discount: null
  },
  {
    id: 35,
    name: "Sofa Cum Bed Metal",
    category: "Bed",
    price: 18000,
    originalPrice: 22000,
    rating: 4.4,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Budget-friendly sofa cum bed with metal frame. Folds easily from sofa to bed configuration.",
    specifications: {
      dimensions: "72\" W x 36\" D x 14\" H (folded)",
      material: "Metal Frame, Foam Mattress",
      weight: "38 kg",
      warranty: "3 years",
      assembly: "Minimal assembly"
    },
    stock: 85,
    isNew: true,
    discount: 18
  },

  // ==========================================
  // CHAIRS (25 products) - Price range: ₹1,500 - ₹45,000
  // ==========================================
  {
    id: 36,
    name: "Sheesham Wood Dining Chair",
    category: "Chair",
    price: 4500,
    originalPrice: null,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Elegant dining chair crafted from solid Sheesham wood with comfortable cushioned seat. Traditional joinery ensures durability.",
    specifications: {
      dimensions: "18\" W x 20\" D x 38\" H",
      material: "Sheesham Wood, Cotton Cushion",
      weight: "8 kg",
      warranty: "5 years",
      assembly: "No assembly"
    },
    stock: 80,
    isNew: false,
    discount: null
  },
  {
    id: 37,
    name: "Teak Wood Armchair",
    category: "Chair",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop"
    ],
    description: "Premium teak wood armchair with woven cane backrest. Perfect for living rooms and verandahs.",
    specifications: {
      dimensions: "26\" W x 28\" D x 36\" H",
      material: "Teak Wood, Natural Cane",
      weight: "12 kg",
      warranty: "10 years",
      assembly: "No assembly"
    },
    stock: 45,
    isNew: true,
    discount: 16
  },
  {
    id: 38,
    name: "Ergonomic Office Chair",
    category: "Chair",
    price: 12500,
    originalPrice: null,
    rating: 4.6,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Professional office chair with lumbar support, adjustable height, and breathable mesh back. Perfect for work-from-home setups.",
    specifications: {
      dimensions: "24\" W x 26\" D x 40-46\" H",
      material: "Mesh, Nylon Base",
      weight: "15 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 120,
    isNew: false,
    discount: null
  },
  {
    id: 39,
    name: "Traditional Wooden Swing Chair",
    category: "Chair",
    price: 8500,
    originalPrice: 10000,
    rating: 4.5,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Hanging wooden swing chair with cotton rope. Adds charm to balconies and courtyards.",
    specifications: {
      dimensions: "24\" W x 20\" D x 48\" H",
      material: "Mango Wood, Cotton Rope",
      weight: "10 kg",
      warranty: "5 years",
      assembly: "Ceiling mounting required"
    },
    stock: 65,
    isNew: true,
    discount: 15
  },
  {
    id: 40,
    name: "Velvet Accent Chair",
    category: "Chair",
    price: 12000,
    originalPrice: 14500,
    rating: 4.7,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop"
    ],
    description: "Stylish velvet accent chair in jewel tones. Adds a pop of color and elegance to any room.",
    specifications: {
      dimensions: "26\" W x 28\" D x 34\" H",
      material: "Rubber Wood, Velvet Fabric",
      weight: "14 kg",
      warranty: "5 years",
      assembly: "No assembly"
    },
    stock: 50,
    isNew: true,
    discount: 17
  },
  {
    id: 41,
    name: "Metal Bar Stool",
    category: "Chair",
    price: 2500,
    originalPrice: null,
    rating: 4.4,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Adjustable height bar stool with footrest. Perfect for kitchen islands and home bars.",
    specifications: {
      dimensions: "16\" W x 16\" D x 24-30\" H",
      material: "Metal, Faux Leather",
      weight: "6 kg",
      warranty: "2 years",
      assembly: "Easy assembly"
    },
    stock: 200,
    isNew: false,
    discount: null
  },
  {
    id: 42,
    name: "Bean Bag Chair XL",
    category: "Chair",
    price: 3500,
    originalPrice: null,
    rating: 4.5,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Oversized memory foam bean bag with washable cover. Perfect for gaming and lounging.",
    specifications: {
      dimensions: "36\" W x 36\" D x 28\" H",
      material: "Memory Foam, Polyester Cover",
      weight: "12 kg",
      warranty: "2 years",
      assembly: "No assembly"
    },
    stock: 150,
    isNew: false,
    discount: null
  },
  {
    id: 43,
    name: "Recliner Chair Leather",
    category: "Chair",
    price: 35000,
    originalPrice: 42000,
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop"
    ],
    description: "Premium recliner with massage and heating functions. Genuine leather upholstery with infinite position control.",
    specifications: {
      dimensions: "34\" W x 38\" D x 42\" H",
      material: "Genuine Leather, Steel Frame",
      weight: "55 kg",
      warranty: "7 years",
      assembly: "Professional assembly"
    },
    stock: 25,
    isNew: true,
    discount: 17
  },
  {
    id: 44,
    name: "Study Chair with Wheels",
    category: "Chair",
    price: 4500,
    originalPrice: 5500,
    rating: 4.6,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Comfortable study chair with adjustable height and 360-degree swivel. Perfect for students and professionals.",
    specifications: {
      dimensions: "20\" W x 22\" D x 36-42\" H",
      material: "Plastic, Fabric, Steel Base",
      weight: "8 kg",
      warranty: "2 years",
      assembly: "Easy assembly"
    },
    stock: 100,
    isNew: false,
    discount: 18
  },
  {
    id: 45,
    name: "Mudda Traditional Chair",
    category: "Chair",
    price: 1500,
    originalPrice: null,
    rating: 4.3,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Traditional Indian mudda (low seat) with woven jute rope. Perfect for floor seating arrangements.",
    specifications: {
      dimensions: "18\" W x 18\" D x 14\" H",
      material: "Sheesham Wood, Jute Rope",
      weight: "4 kg",
      warranty: "3 years",
      assembly: "No assembly"
    },
    stock: 200,
    isNew: false,
    discount: null
  },
  {
    id: 46,
    name: "Rocking Chair Wooden",
    category: "Chair",
    price: 8500,
    originalPrice: 10000,
    rating: 4.7,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop"
    ],
    description: "Classic wooden rocking chair for porches and nurseries. Smooth gliding motion with comfortable armrests.",
    specifications: {
      dimensions: "24\" W x 32\" D x 38\" H",
      material: "Teak Wood",
      weight: "15 kg",
      warranty: "10 years",
      assembly: "Minimal assembly"
    },
    stock: 40,
    isNew: true,
    discount: 15
  },
  {
    id: 47,
    name: "High Back Executive Chair",
    category: "Chair",
    price: 18000,
    originalPrice: null,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Premium executive chair with high back support and leather upholstery. Ideal for CEOs and managers.",
    specifications: {
      dimensions: "26\" W x 28\" D x 46\" H",
      material: "Bonded Leather, Aluminum Base",
      weight: "22 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 35,
    isNew: false,
    discount: null
  },
  {
    id: 48,
    name: "Folding Garden Chair",
    category: "Chair",
    price: 2200,
    originalPrice: 2800,
    rating: 4.4,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Portable folding chair for outdoor use. Weather-resistant finish perfect for Indian climate.",
    specifications: {
      dimensions: "20\" W x 20\" D x 34\" H",
      material: "Treated Wood, Metal Hinges",
      weight: "5 kg",
      warranty: "2 years",
      assembly: "Folding design"
    },
    stock: 150,
    isNew: true,
    discount: 21
  },
  {
    id: 49,
    name: "Carved Rajasthani Chair",
    category: "Chair",
    price: 12500,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    description: "Hand-carved accent chair with traditional Rajasthani motifs. Solid Sheesham wood with natural finish.",
    specifications: {
      dimensions: "22\" W x 24\" D x 40\" H",
      material: "Sheesham Wood",
      weight: "14 kg",
      warranty: "10 years",
      assembly: "No assembly"
    },
    stock: 30,
    isNew: false,
    discount: null
  },
  {
    id: 50,
    name: "Gaming Chair RGB",
    category: "Chair",
    price: 22000,
    originalPrice: 28000,
    rating: 4.6,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Professional gaming chair with lumbar support, neck pillow, and RGB lighting. Perfect for esports enthusiasts.",
    specifications: {
      dimensions: "28\" W x 30\" D x 50\" H",
      material: "PU Leather, Steel Frame",
      weight: "25 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 50,
    isNew: true,
    discount: 21
  },
  {
    id: 51,
    name: "Plastic Chair Set",
    category: "Chair",
    price: 3500,
    originalPrice: null,
    rating: 4.2,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Set of 4 durable plastic chairs for everyday use. Stackable design for easy storage.",
    specifications: {
      dimensions: "18\" W x 19\" D x 34\" H",
      material: "High-grade Plastic",
      weight: "3 kg each",
      warranty: "1 year",
      assembly: "No assembly"
    },
    stock: 300,
    isNew: false,
    discount: null
  },
  {
    id: 52,
    name: "Rattan Lounge Chair",
    category: "Chair",
    price: 9500,
    originalPrice: 11500,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop"
    ],
    description: "Natural rattan lounge chair with cushion. Brings tropical vibes to your living space.",
    specifications: {
      dimensions: "28\" W x 32\" D x 32\" H",
      material: "Natural Rattan, Cotton Cushion",
      weight: "11 kg",
      warranty: "3 years",
      assembly: "Minimal assembly"
    },
    stock: 55,
    isNew: true,
    discount: 17
  },
  {
    id: 53,
    name: "Wingback Chair Classic",
    category: "Chair",
    price: 18500,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Classic wingback chair with button tufting. Perfect for reading corners and formal living rooms.",
    specifications: {
      dimensions: "30\" W x 32\" D x 42\" H",
      material: "Hardwood, Fabric Upholstery",
      weight: "18 kg",
      warranty: "7 years",
      assembly: "No assembly"
    },
    stock: 25,
    isNew: false,
    discount: null
  },
  {
    id: 54,
    name: "Adjustable Drafting Chair",
    category: "Chair",
    price: 8500,
    originalPrice: 10000,
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "High chair for architects and designers. Adjustable foot ring and tilting seat.",
    specifications: {
      dimensions: "20\" W x 20\" D x 40-50\" H",
      material: "Fabric, Steel Base",
      weight: "12 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 40,
    isNew: true,
    discount: 15
  },
  {
    id: 55,
    name: "Papasan Chair",
    category: "Chair",
    price: 6500,
    originalPrice: null,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop"
    ],
    description: "Round papasan chair with thick cushion. Cozy seating perfect for bedrooms and lounges.",
    specifications: {
      dimensions: "42\" W x 42\" D x 34\" H",
      material: "Rattan Frame, Polyester Cushion",
      weight: "16 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 70,
    isNew: false,
    discount: null
  },
  {
    id: 56,
    name: "Dining Bench Wooden",
    category: "Chair",
    price: 8500,
    originalPrice: 10000,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Solid wood dining bench with cushion top. Seats 2-3 people comfortably.",
    specifications: {
      dimensions: "48\" W x 16\" D x 18\" H",
      material: "Sheesham Wood, Foam Cushion",
      weight: "20 kg",
      warranty: "5 years",
      assembly: "Minimal assembly"
    },
    stock: 45,
    isNew: true,
    discount: 15
  },
  {
    id: 57,
    name: "Massage Recliner Chair",
    category: "Chair",
    price: 45000,
    originalPrice: 55000,
    rating: 4.8,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Full-body massage chair with zero-gravity recline and heat therapy. Ultimate relaxation at home.",
    specifications: {
      dimensions: "32\" W x 48\" D x 46\" H",
      material: "PU Leather, Steel Frame",
      weight: "85 kg",
      warranty: "5 years",
      assembly: "Professional assembly"
    },
    stock: 15,
    isNew: true,
    discount: 18
  },
  {
    id: 58,
    name: "Stackable Visitor Chair",
    category: "Chair",
    price: 3200,
    originalPrice: null,
    rating: 4.3,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    description: "Set of 2 stackable chairs for office visitors. Chrome frame with padded seat.",
    specifications: {
      dimensions: "19\" W x 21\" D x 32\" H",
      material: "Chrome, Fabric",
      weight: "6 kg each",
      warranty: "2 years",
      assembly: "No assembly"
    },
    stock: 200,
    isNew: false,
    discount: null
  },
  {
    id: 59,
    name: "Colonial Club Chair",
    category: "Chair",
    price: 28000,
    originalPrice: 32000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "British colonial style club chair with leather upholstery. Deep seat and rolled arms.",
    specifications: {
      dimensions: "34\" W x 36\" D x 34\" H",
      material: "Genuine Leather, Hardwood",
      weight: "35 kg",
      warranty: "10 years",
      assembly: "No assembly"
    },
    stock: 20,
    isNew: true,
    discount: 13
  },
  {
    id: 60,
    name: "Hammock Chair Cotton",
    category: "Chair",
    price: 4500,
    originalPrice: null,
    rating: 4.4,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Cozy hammock chair made from 100% cotton rope. Includes wooden spreader bar.",
    specifications: {
      dimensions: "36\" W x 24\" D x 48\" H",
      material: "Cotton Rope, Wood",
      weight: "4 kg",
      warranty: "2 years",
      assembly: "Ceiling mounting required"
    },
    stock: 85,
    isNew: false,
    discount: null
  },

  // ==========================================
  // TABLES (20 products) - Price range: ₹3,000 - ₹1,80,000
  // ==========================================
  {
    id: 61,
    name: "Sheesham Wood Dining Table",
    category: "Table",
    price: 45000,
    originalPrice: null,
    rating: 4.9,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop"
    ],
    description: "Solid Sheesham wood dining table for 6 people. Natural grain patterns make each piece unique.",
    specifications: {
      dimensions: "72\" L x 36\" W x 30\" H",
      material: "Solid Sheesham Wood",
      weight: "85 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 25,
    isNew: false,
    discount: null
  },
  {
    id: 62,
    name: "Extendable Dining Table",
    category: "Table",
    price: 38000,
    originalPrice: 45000,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Smart extendable table that expands from 4 to 8 seats. Perfect for families who love to entertain.",
    specifications: {
      dimensions: "48-72\" L x 36\" W x 30\" H",
      material: "Engineered Wood, Metal Mechanism",
      weight: "65 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 30,
    isNew: true,
    discount: 16
  },
  {
    id: 63,
    name: "Marble Top Coffee Table",
    category: "Table",
    price: 22000,
    originalPrice: null,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Elegant coffee table with genuine marble top and metal legs. Adds luxury to any living room.",
    specifications: {
      dimensions: "48\" L x 24\" W x 16\" H",
      material: "Natural Marble, Steel Base",
      weight: "45 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 40,
    isNew: false,
    discount: null
  },
  {
    id: 64,
    name: "Console Table Entryway",
    category: "Table",
    price: 12500,
    originalPrice: 15000,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop"
    ],
    description: "Slim console table perfect for entryways and hallways. Features a drawer for keys and essentials.",
    specifications: {
      dimensions: "48\" L x 14\" W x 30\" H",
      material: "Mango Wood, Metal Legs",
      weight: "25 kg",
      warranty: "7 years",
      assembly: "Easy assembly"
    },
    stock: 55,
    isNew: true,
    discount: 17
  },
  {
    id: 65,
    name: "Study Desk with Drawer",
    category: "Table",
    price: 8500,
    originalPrice: null,
    rating: 4.5,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Compact study desk with storage drawer. Perfect for students and work-from-home professionals.",
    specifications: {
      dimensions: "42\" W x 22\" D x 30\" H",
      material: "Engineered Wood",
      weight: "20 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 120,
    isNew: false,
    discount: null
  },
  {
    id: 66,
    name: "Outdoor Patio Table",
    category: "Table",
    price: 15000,
    originalPrice: 18000,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Weather-resistant outdoor dining table for 4. Treated wood withstands Indian monsoons.",
    specifications: {
      dimensions: "48\" L x 32\" W x 30\" H",
      material: "Treated Acacia Wood",
      weight: "35 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 45,
    isNew: true,
    discount: 17
  },
  {
    id: 67,
    name: "Round Dining Table",
    category: "Table",
    price: 28000,
    originalPrice: null,
    rating: 4.7,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop"
    ],
    description: "Intimate round table for 4 people. Pedestal base allows for flexible seating arrangements.",
    specifications: {
      dimensions: "42\" Diameter x 30\" H",
      material: "Rubber Wood, White Finish",
      weight: "40 kg",
      warranty: "7 years",
      assembly: "Easy assembly"
    },
    stock: 35,
    isNew: false,
    discount: null
  },
  {
    id: 68,
    name: "Gaming Desk Carbon",
    category: "Table",
    price: 12000,
    originalPrice: 15000,
    rating: 4.6,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Gaming desk with cable management, cup holder, and headphone hook. Carbon fiber textured surface.",
    specifications: {
      dimensions: "55\" W x 24\" D x 30\" H",
      material: "MDF, Carbon Fiber Finish, Steel",
      weight: "28 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 80,
    isNew: true,
    discount: 20
  },
  {
    id: 69,
    name: "Teak Wood Side Table",
    category: "Table",
    price: 6500,
    originalPrice: null,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Compact side table crafted from teak wood. Perfect beside sofas and beds.",
    specifications: {
      dimensions: "18\" L x 18\" W x 22\" H",
      material: "Teak Wood",
      weight: "8 kg",
      warranty: "10 years",
      assembly: "No assembly"
    },
    stock: 100,
    isNew: false,
    discount: null
  },
  {
    id: 70,
    name: "Nesting Tables Set",
    category: "Table",
    price: 9500,
    originalPrice: 11500,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop"
    ],
    description: "Set of 3 nesting tables in graduated sizes. Use together or separately throughout your home.",
    specifications: {
      dimensions: "Large: 20\" D x 22\" H",
      material: "Metal Frame, Wooden Tops",
      weight: "15 kg total",
      warranty: "5 years",
      assembly: "No assembly"
    },
    stock: 60,
    isNew: true,
    discount: 17
  },
  {
    id: 71,
    name: "Glass Top Center Table",
    category: "Table",
    price: 18000,
    originalPrice: null,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Modern center table with tempered glass top and chrome legs. Creates an airy, spacious feel.",
    specifications: {
      dimensions: "40\" L x 22\" W x 18\" H",
      material: "Tempered Glass, Chrome Steel",
      weight: "22 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 45,
    isNew: false,
    discount: null
  },
  {
    id: 72,
    name: "Folding Table Portable",
    category: "Table",
    price: 4500,
    originalPrice: 5500,
    rating: 4.4,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Lightweight folding table perfect for events and extra guests. Easy to store when not in use.",
    specifications: {
      dimensions: "48\" L x 30\" W x 29\" H",
      material: "Plastic, Metal Frame",
      weight: "12 kg",
      warranty: "2 years",
      assembly: "Folding design"
    },
    stock: 150,
    isNew: true,
    discount: 18
  },
  {
    id: 73,
    name: "Carved Coffee Table",
    category: "Table",
    price: 28000,
    originalPrice: null,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop"
    ],
    description: "Hand-carved coffee table with traditional Indian motifs. Solid Sheesham wood with natural polish.",
    specifications: {
      dimensions: "42\" L x 24\" W x 18\" H",
      material: "Sheesham Wood",
      weight: "35 kg",
      warranty: "15 years",
      assembly: "No assembly"
    },
    stock: 20,
    isNew: false,
    discount: null
  },
  {
    id: 74,
    name: "Standing Desk Electric",
    category: "Table",
    price: 35000,
    originalPrice: 42000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Electric height-adjustable desk with memory presets. Promotes healthy work posture.",
    specifications: {
      dimensions: "48\" W x 30\" D x 28-48\" H",
      material: "Bamboo Top, Steel Frame",
      weight: "45 kg",
      warranty: "7 years",
      assembly: "Professional assembly"
    },
    stock: 30,
    isNew: true,
    discount: 17
  },
  {
    id: 75,
    name: "Bedside Table Nightstand",
    category: "Table",
    price: 5500,
    originalPrice: null,
    rating: 4.6,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Compact bedside table with drawer and shelf. Perfect for keeping essentials within reach.",
    specifications: {
      dimensions: "16\" W x 14\" D x 22\" H",
      material: "Engineered Wood",
      weight: "10 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 150,
    isNew: false,
    discount: null
  },
  {
    id: 76,
    name: "Bar Table Tall",
    category: "Table",
    price: 8500,
    originalPrice: 10000,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop"
    ],
    description: "Tall bar table perfect for kitchen islands and home bars. Seats 2-4 people.",
    specifications: {
      dimensions: "40\" L x 20\" W x 42\" H",
      material: "Metal, Wooden Top",
      weight: "18 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 55,
    isNew: true,
    discount: 15
  },
  {
    id: 77,
    name: "Laptop Table Portable",
    category: "Table",
    price: 2500,
    originalPrice: null,
    rating: 4.3,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Portable laptop table for bed and sofa. Adjustable tilt angle and height.",
    specifications: {
      dimensions: "24\" L x 16\" W x 10-14\" H",
      material: "Wood, Metal Frame",
      weight: "3 kg",
      warranty: "1 year",
      assembly: "No assembly"
    },
    stock: 300,
    isNew: false,
    discount: null
  },
  {
    id: 78,
    name: "Antique Console Table",
    category: "Table",
    price: 45000,
    originalPrice: 55000,
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Vintage-style console table with intricate carvings. Solid Sheesham with antique finish.",
    specifications: {
      dimensions: "60\" L x 16\" W x 32\" H",
      material: "Sheesham Wood",
      weight: "45 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 15,
    isNew: true,
    discount: 18
  },
  {
    id: 79,
    name: "Kids Study Table",
    category: "Table",
    price: 6500,
    originalPrice: null,
    rating: 4.5,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    description: "Colorful study table for children with storage compartments. Height-adjustable for growing kids.",
    specifications: {
      dimensions: "36\" W x 20\" D x 22-28\" H",
      material: "Engineered Wood, Plastic",
      weight: "18 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 80,
    isNew: true,
    discount: null
  },
  {
    id: 80,
    name: "Live Edge Dining Table",
    category: "Table",
    price: 85000,
    originalPrice: 100000,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Stunning live edge dining table made from single slab of wood. Unique grain patterns in every piece.",
    specifications: {
      dimensions: "84\" L x 40\" W x 30\" H",
      material: "Solid Acacia Wood",
      weight: "120 kg",
      warranty: "Lifetime",
      assembly: "Professional assembly"
    },
    stock: 5,
    isNew: true,
    discount: 15
  },

  // ==========================================
  // STORAGE (20 products) - Price range: ₹4,000 - ₹1,50,000
  // ==========================================
  {
    id: 81,
    name: "Sheesham Wood Wardrobe",
    category: "Storage",
    price: 45000,
    originalPrice: null,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Spacious 3-door wardrobe with hanging space and drawers. Solid Sheesham wood with mirror.",
    specifications: {
      dimensions: "54\" W x 22\" D x 78\" H",
      material: "Sheesham Wood, Mirror",
      weight: "120 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 20,
    isNew: false,
    discount: null
  },
  {
    id: 82,
    name: "TV Unit Entertainment Center",
    category: "Storage",
    price: 28000,
    originalPrice: 32000,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop"
    ],
    description: "Modern TV unit with cable management and storage drawers. Fits TVs up to 65 inches.",
    specifications: {
      dimensions: "60\" W x 18\" D x 20\" H",
      material: "Engineered Wood, Metal",
      weight: "45 kg",
      warranty: "7 years",
      assembly: "Easy assembly"
    },
    stock: 45,
    isNew: true,
    discount: 13
  },
  {
    id: 83,
    name: "Bookshelf with Cabinet",
    category: "Storage",
    price: 18500,
    originalPrice: null,
    rating: 4.7,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Open bookshelf with closed storage at bottom. Perfect for living rooms and studies.",
    specifications: {
      dimensions: "36\" W x 14\" D x 72\" H",
      material: "Mango Wood, Metal Frame",
      weight: "35 kg",
      warranty: "10 years",
      assembly: "Some assembly required"
    },
    stock: 60,
    isNew: false,
    discount: null
  },
  {
    id: 84,
    name: "Shoe Rack Cabinet",
    category: "Storage",
    price: 6500,
    originalPrice: 7800,
    rating: 4.6,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Compact shoe cabinet with 4 tiers. Holds up to 16 pairs. Fits in narrow spaces.",
    specifications: {
      dimensions: "28\" W x 12\" D x 48\" H",
      material: "Engineered Wood",
      weight: "18 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 120,
    isNew: true,
    discount: 17
  },
  {
    id: 85,
    name: "Chest of Drawers",
    category: "Storage",
    price: 22000,
    originalPrice: null,
    rating: 4.8,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop"
    ],
    description: "Six-drawer dresser with dovetail joints. Soft-close glides for smooth operation.",
    specifications: {
      dimensions: "48\" W x 18\" D x 32\" H",
      material: "Sheesham Wood",
      weight: "55 kg",
      warranty: "10 years",
      assembly: "Professional assembly"
    },
    stock: 35,
    isNew: false,
    discount: null
  },
  {
    id: 86,
    name: "Modular Kitchen Cabinet",
    category: "Storage",
    price: 12000,
    originalPrice: 14500,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "Wall-mounted kitchen cabinet with glass doors. Ideal for storing crockery and spices.",
    specifications: {
      dimensions: "36\" W x 12\" D x 30\" H",
      material: "Engineered Wood, Glass",
      weight: "20 kg",
      warranty: "5 years",
      assembly: "Professional installation"
    },
    stock: 80,
    isNew: true,
    discount: 17
  },
  {
    id: 87,
    name: "Storage Ottoman Box",
    category: "Storage",
    price: 4500,
    originalPrice: null,
    rating: 4.6,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Dual-purpose ottoman with storage. Lift-top reveals space for blankets and toys.",
    specifications: {
      dimensions: "24\" W x 18\" D x 18\" H",
      material: "Fabric, Engineered Wood",
      weight: "12 kg",
      warranty: "3 years",
      assembly: "No assembly"
    },
    stock: 100,
    isNew: false,
    discount: null
  },
  {
    id: 88,
    name: "Almirah Steel Wardrobe",
    category: "Storage",
    price: 15000,
    originalPrice: 18500,
    rating: 4.4,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop"
    ],
    description: "Durable steel almirah with lock. 2-door design with hanging rod and shelves.",
    specifications: {
      dimensions: "36\" W x 20\" D x 72\" H",
      material: "Powder-coated Steel",
      weight: "45 kg",
      warranty: "10 years",
      assembly: "Easy assembly"
    },
    stock: 85,
    isNew: true,
    discount: 19
  },
  {
    id: 89,
    name: "Corner Shelf Unit",
    category: "Storage",
    price: 3500,
    originalPrice: null,
    rating: 4.5,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop&crop=faces",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=entropy"
    ],
    description: "5-tier corner shelf for maximizing vertical space. Perfect for plants and display items.",
    specifications: {
      dimensions: "16\" W x 16\" D x 60\" H",
      material: "Engineered Wood, Metal",
      weight: "15 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 150,
    isNew: false,
    discount: null
  },
  {
    id: 90,
    name: "Bathroom Cabinet Mirror",
    category: "Storage",
    price: 5500,
    originalPrice: 6800,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&fit=crop&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&crop=faces"
    ],
    description: "Wall-mounted bathroom cabinet with mirror. Water-resistant with adjustable shelves.",
    specifications: {
      dimensions: "24\" W x 6\" D x 28\" H",
      material: "Moisture-resistant MDF, Mirror",
      weight: "8 kg",
      warranty: "3 years",
      assembly: "Easy installation"
    },
    stock: 120,
    isNew: true,
    discount: 19
  },
  {
    id: 91,
    name: "Blanket Box Trunk",
    category: "Storage",
    price: 9500,
    originalPrice: null,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop"
    ],
    description: "Vintage-style wooden trunk with ample storage. Can double as coffee table or bench.",
    specifications: {
      dimensions: "36\" W x 18\" D x 18\" H",
      material: "Mango Wood, Metal Hardware",
      weight: "22 kg",
      warranty: "7 years",
      assembly: "No assembly"
    },
    stock: 65,
    isNew: false,
    discount: null
  },
  {
    id: 92,
    name: "Sideboard Buffet Cabinet",
    category: "Storage",
    price: 32000,
    originalPrice: 38000,
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy"
    ],
    description: "Elegant sideboard with drawers and cabinets. Perfect for dining rooms and living areas.",
    specifications: {
      dimensions: "60\" W x 18\" D x 32\" H",
      material: "Sheesham Wood",
      weight: "65 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 25,
    isNew: true,
    discount: 16
  },
  {
    id: 93,
    name: "Wall Mounted Shelves",
    category: "Storage",
    price: 2800,
    originalPrice: null,
    rating: 4.4,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces"
    ],
    description: "Set of 3 floating wall shelves. Minimalist design perfect for displaying decor.",
    specifications: {
      dimensions: "24\" L x 8\" D x 1.5\" H each",
      material: "Engineered Wood",
      weight: "5 kg total",
      warranty: "2 years",
      assembly: "Wall mounting required"
    },
    stock: 200,
    isNew: false,
    discount: null
  },
  {
    id: 94,
    name: "Drawer Chest Tall",
    category: "Storage",
    price: 18000,
    originalPrice: 22000,
    rating: 4.6,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    description: "Slim 5-drawer chest for narrow spaces. Perfect for storing accessories and documents.",
    specifications: {
      dimensions: "20\" W x 16\" D x 48\" H",
      material: "Mango Wood",
      weight: "32 kg",
      warranty: "7 years",
      assembly: "Easy assembly"
    },
    stock: 55,
    isNew: true,
    discount: 18
  },
  {
    id: 95,
    name: "Under Bed Storage Box",
    category: "Storage",
    price: 2500,
    originalPrice: null,
    rating: 4.3,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy"
    ],
    description: "Set of 2 rolling under-bed storage boxes. Maximize unused space under beds.",
    specifications: {
      dimensions: "36\" L x 18\" W x 8\" H",
      material: "Plastic, Metal Wheels",
      weight: "4 kg each",
      warranty: "1 year",
      assembly: "No assembly"
    },
    stock: 250,
    isNew: false,
    discount: null
  },
  {
    id: 96,
    name: "Jewelry Armoire Mirror",
    category: "Storage",
    price: 8500,
    originalPrice: 10000,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces"
    ],
    description: "Full-length mirror with hidden jewelry storage. Lockable to keep valuables secure.",
    specifications: {
      dimensions: "16\" W x 6\" D x 60\" H",
      material: "Wood, Glass, Velvet Lining",
      weight: "18 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 45,
    isNew: true,
    discount: 15
  },
  {
    id: 97,
    name: "Garment Rack Mobile",
    category: "Storage",
    price: 3500,
    originalPrice: null,
    rating: 4.5,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop"
    ],
    description: "Rolling garment rack with bottom shelf. Perfect for extra clothing storage.",
    specifications: {
      dimensions: "42\" W x 18\" D x 64\" H",
      material: "Metal, Chrome Finish",
      weight: "8 kg",
      warranty: "2 years",
      assembly: "Easy assembly"
    },
    stock: 150,
    isNew: false,
    discount: null
  },
  {
    id: 98,
    name: "Storage Cubes Organizer",
    category: "Storage",
    price: 4500,
    originalPrice: 5500,
    rating: 4.6,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1616486338812-3d8b1d8e3e3d?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy"
    ],
    description: "9-cube storage organizer for toys, books, and decor. Mix and match with fabric bins.",
    specifications: {
      dimensions: "36\" W x 12\" D x 36\" H",
      material: "Engineered Wood",
      weight: "20 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 100,
    isNew: true,
    discount: 18
  },
  {
    id: 99,
    name: "Vintage Storage Trunk",
    category: "Storage",
    price: 12500,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces"
    ],
    description: "Handcrafted vintage trunk with brass hardware. Authentic aged finish with modern storage.",
    specifications: {
      dimensions: "30\" W x 16\" D x 16\" H",
      material: "Sheesham Wood, Brass",
      weight: "18 kg",
      warranty: "10 years",
      assembly: "No assembly"
    },
    stock: 30,
    isNew: false,
    discount: null
  },
  {
    id: 100,
    name: "Wall-Mounted Desk",
    category: "Storage",
    price: 7500,
    originalPrice: 9000,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop"
    ],
    description: "Fold-down wall desk with storage compartments. Perfect for small apartments.",
    specifications: {
      dimensions: "36\" W x 18\" D (folded: 6\")",
      material: "Engineered Wood",
      weight: "25 kg",
      warranty: "5 years",
      assembly: "Wall mounting required"
    },
    stock: 70,
    isNew: true,
    discount: 17
  },

  // ==========================================
  // POOJA UNITS (10 products) - Price range: ₹5,000 - ₹75,000
  // ==========================================
  {
    id: 101,
    name: "Sheesham Wood Pooja Mandir",
    category: "Pooja Unit",
    price: 25000,
    originalPrice: null,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1551298370-9d3d53f6e5d9?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy"
    ],
    description: "Beautiful hand-carved pooja mandir with intricate designs. Features drawers for pooja essentials.",
    specifications: {
      dimensions: "24\" W x 12\" D x 42\" H",
      material: "Sheesham Wood, Brass Accents",
      weight: "18 kg",
      warranty: "10 years",
      assembly: "Minimal assembly"
    },
    stock: 35,
    isNew: false,
    discount: null
  },
  {
    id: 102,
    name: "Wall Mounted Pooja Shelf",
    category: "Pooja Unit",
    price: 8500,
    originalPrice: 10000,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces"
    ],
    description: "Compact wall-mounted pooja shelf with door. Perfect for apartments with limited space.",
    specifications: {
      dimensions: "18\" W x 8\" D x 24\" H",
      material: "Engineered Wood, Glass Door",
      weight: "8 kg",
      warranty: "5 years",
      assembly: "Wall mounting required"
    },
    stock: 80,
    isNew: true,
    discount: 15
  },
  {
    id: 103,
    name: "Floor Standing Temple",
    category: "Pooja Unit",
    price: 45000,
    originalPrice: null,
    rating: 4.8,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop"
    ],
    description: "Grand floor-standing temple with multiple shelves and decorative pillars. A centerpiece for your home.",
    specifications: {
      dimensions: "36\" W x 18\" D x 72\" H",
      material: "Teak Wood, Carved Details",
      weight: "45 kg",
      warranty: "15 years",
      assembly: "Professional assembly"
    },
    stock: 20,
    isNew: false,
    discount: null
  },
  {
    id: 104,
    name: "Pooja Cabinet with Doors",
    category: "Pooja Unit",
    price: 18000,
    originalPrice: 22000,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy"
    ],
    description: "Elegant pooja cabinet with shutter doors. Keeps your prayer space dust-free and organized.",
    specifications: {
      dimensions: "30\" W x 14\" D x 48\" H",
      material: "Mango Wood, Brass Hardware",
      weight: "28 kg",
      warranty: "10 years",
      assembly: "Some assembly required"
    },
    stock: 45,
    isNew: true,
    discount: 18
  },
  {
    id: 105,
    name: "Corner Pooja Unit",
    category: "Pooja Unit",
    price: 12000,
    originalPrice: null,
    rating: 4.7,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces"
    ],
    description: "Space-saving corner pooja unit with pyramid roof design. Maximizes corner spaces efficiently.",
    specifications: {
      dimensions: "24\" W x 24\" D x 60\" H",
      material: "Sheesham Wood",
      weight: "22 kg",
      warranty: "10 years",
      assembly: "Easy assembly"
    },
    stock: 55,
    isNew: false,
    discount: null
  },
  {
    id: 106,
    name: "Portable Pooja Box",
    category: "Pooja Unit",
    price: 4500,
    originalPrice: 5500,
    rating: 4.5,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop"
    ],
    description: "Compact folding pooja box for small homes. Can be opened during prayers and closed after.",
    specifications: {
      dimensions: "20\" W x 12\" D x 8\" H (closed)",
      material: "Engineered Wood, Brass",
      weight: "5 kg",
      warranty: "3 years",
      assembly: "No assembly"
    },
    stock: 120,
    isNew: true,
    discount: 18
  },
  {
    id: 107,
    name: "Premium Temple with Lights",
    category: "Pooja Unit",
    price: 65000,
    originalPrice: 78000,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1522771753035-a0a1f66cd459?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy"
    ],
    description: "Luxurious pooja mandir with LED lighting and automatic aarti bell. Handcrafted premium quality.",
    specifications: {
      dimensions: "48\" W x 24\" D x 84\" H",
      material: "Teak Wood, LED Lights, Brass",
      weight: "65 kg",
      warranty: "15 years",
      assembly: "Professional installation"
    },
    stock: 15,
    isNew: true,
    discount: 17
  },
  {
    id: 108,
    name: "Minimalist Pooja Shelf",
    category: "Pooja Unit",
    price: 6500,
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1618374667665-6f16b82f1b7a?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces"
    ],
    description: "Simple wall-mounted shelf for pooja items. Clean design suits modern homes.",
    specifications: {
      dimensions: "24\" W x 10\" D x 12\" H",
      material: "Mango Wood",
      weight: "6 kg",
      warranty: "5 years",
      assembly: "Wall mounting required"
    },
    stock: 100,
    isNew: false,
    discount: null
  },
  {
    id: 109,
    name: "Traditional Pooja Chowki",
    category: "Pooja Unit",
    price: 3500,
    originalPrice: 4200,
    rating: 4.4,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    description: "Low-height pooja chowki for floor seating prayers. Portable and easy to store.",
    specifications: {
      dimensions: "24\" W x 18\" D x 12\" H",
      material: "Sheesham Wood",
      weight: "8 kg",
      warranty: "7 years",
      assembly: "No assembly"
    },
    stock: 85,
    isNew: true,
    discount: 17
  },
  {
    id: 110,
    name: "Designer Pooja Ghar",
    category: "Pooja Unit",
    price: 55000,
    originalPrice: null,
    rating: 4.8,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy"
    ],
    description: "Contemporary designer pooja ghar with glass panels and wooden accents. Modern interpretation of tradition.",
    specifications: {
      dimensions: "42\" W x 18\" D x 60\" H",
      material: "Sheesham Wood, Glass, LED",
      weight: "42 kg",
      warranty: "12 years",
      assembly: "Professional assembly"
    },
    stock: 25,
    isNew: false,
    discount: null
  },

  // ==========================================
  // DECOR (5 products) - Price range: ₹1,500 - ₹25,000
  // ==========================================
  {
    id: 111,
    name: "Brass Urli with Stand",
    category: "Decor",
    price: 8500,
    originalPrice: null,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces"
    ],
    description: "Traditional brass urli for flower decoration. Complete with ornate wooden stand.",
    specifications: {
      dimensions: "12\" Diameter x 18\" H",
      material: "Brass, Sheesham Wood",
      weight: "3 kg",
      warranty: "5 years",
      assembly: "No assembly"
    },
    stock: 65,
    isNew: true,
    discount: null
  },
  {
    id: 112,
    name: "Wooden Room Divider",
    category: "Decor",
    price: 22000,
    originalPrice: 28000,
    rating: 4.7,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop"
    ],
    description: "3-panel carved wooden room divider. Creates privacy while adding aesthetic appeal.",
    specifications: {
      dimensions: "60\" W x 1\" D x 72\" H (total)",
      material: "Mango Wood, Hand-carved",
      weight: "22 kg",
      warranty: "10 years",
      assembly: "Easy assembly"
    },
    stock: 40,
    isNew: false,
    discount: 21
  },
  {
    id: 113,
    name: "Wall Mirror Frame",
    category: "Decor",
    price: 12000,
    originalPrice: 14500,
    rating: 4.6,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy"
    ],
    description: "Oval wall mirror with ornate Sheesham wood frame. Adds elegance to entryways and bedrooms.",
    specifications: {
      dimensions: "30\" W x 42\" H",
      material: "Sheesham Wood, Mirror",
      weight: "12 kg",
      warranty: "7 years",
      assembly: "Wall mounting required"
    },
    stock: 55,
    isNew: true,
    discount: 17
  },
  {
    id: 114,
    name: "Buddha Statue Large",
    category: "Decor",
    price: 8500,
    originalPrice: null,
    rating: 4.8,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces"
    ],
    description: "Serene Buddha statue in meditating pose. Hand-finished for authentic antique look.",
    specifications: {
      dimensions: "12\" W x 8\" D x 24\" H",
      material: "Polyresin, Antique Finish",
      weight: "4 kg",
      warranty: "3 years",
      assembly: "No assembly"
    },
    stock: 80,
    isNew: false,
    discount: null
  },
  {
    id: 115,
    name: "Jharokha Window Frame",
    category: "Decor",
    price: 18000,
    originalPrice: 22000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop"
    ],
    description: "Authentic Rajasthani jharokha frame with intricate carvings. Wall decor piece with mirror.",
    specifications: {
      dimensions: "24\" W x 4\" D x 36\" H",
      material: "Sheesham Wood, Mirror",
      weight: "8 kg",
      warranty: "10 years",
      assembly: "Wall mounting required"
    },
    stock: 35,
    isNew: true,
    discount: 18
  },

  // ==========================================
  // OUTDOOR (5 products) - Price range: ₹3,000 - ₹35,000
  // ==========================================
  {
    id: 116,
    name: "Bamboo Garden Bench",
    category: "Outdoor",
    price: 12000,
    originalPrice: null,
    rating: 4.6,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy"
    ],
    description: "Eco-friendly bamboo bench for gardens and patios. Weather-resistant treatment for durability.",
    specifications: {
      dimensions: "48\" W x 20\" D x 36\" H",
      material: "Bamboo, Natural Finish",
      weight: "18 kg",
      warranty: "5 years",
      assembly: "Easy assembly"
    },
    stock: 50,
    isNew: false,
    discount: null
  },
  {
    id: 117,
    name: "Outdoor Swing Jhula",
    category: "Outdoor",
    price: 28000,
    originalPrice: 35000,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&crop=faces"
    ],
    description: "Traditional Indian porch swing with carved wooden frame and comfortable cushions.",
    specifications: {
      dimensions: "54\" W x 24\" D x 24\" H (seat)",
      material: "Teak Wood, Iron Chains, Cushions",
      weight: "55 kg",
      warranty: "10 years",
      assembly: "Professional installation"
    },
    stock: 25,
    isNew: true,
    discount: 20
  },
  {
    id: 118,
    name: "Garden Patio Set",
    category: "Outdoor",
    price: 35000,
    originalPrice: 42000,
    rating: 4.7,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=800&fit=crop"
    ],
    description: "Complete patio set with table and 4 chairs. Weather-treated wood for Indian climate.",
    specifications: {
      dimensions: "Table: 48\" x 32\", Chairs: 20\" x 20\"",
      material: "Treated Acacia Wood",
      weight: "65 kg total",
      warranty: "7 years",
      assembly: "Some assembly required"
    },
    stock: 30,
    isNew: false,
    discount: 17
  },
  {
    id: 119,
    name: "Outdoor Lounge Chair",
    category: "Outdoor",
    price: 8500,
    originalPrice: null,
    rating: 4.5,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&crop=entropy",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=faces",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&crop=entropy"
    ],
    description: "Reclining lounge chair for poolside and terrace. Quick-dry fabric cushion included.",
    specifications: {
      dimensions: "28\" W x 72\" D x 36\" H",
      material: "Aluminum Frame, Fabric Cushion",
      weight: "12 kg",
      warranty: "3 years",
      assembly: "Easy assembly"
    },
    stock: 60,
    isNew: true,
    discount: null
  },
  {
    id: 120,
    name: "Garden Planter Stand",
    category: "Outdoor",
    price: 4500,
    originalPrice: 5500,
    rating: 4.6,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=800&crop=faces",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&crop=entropy",
      "https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=800&h=800&crop=faces"
    ],
    description: "Multi-tier planter stand for balcony gardens. Holds up to 6 pots of various sizes.",
    specifications: {
      dimensions: "36\" W x 12\" D x 48\" H",
      material: "Metal, Powder-coated",
      weight: "8 kg",
      warranty: "2 years",
      assembly: "Easy assembly"
    },
    stock: 100,
    isNew: false,
    discount: 18
  }
];

export const categories = [
  { id: 'all', name: 'All Products', icon: 'Grid3X3' },
  { id: 'Sofa', name: 'Sofas', icon: 'Sofa' },
  { id: 'Bed', name: 'Beds', icon: 'Bed' },
  { id: 'Chair', name: 'Chairs', icon: 'Armchair' },
  { id: 'Table', name: 'Tables', icon: 'Table' },
  { id: 'Storage', name: 'Storage', icon: 'Archive' },
  { id: 'Pooja Unit', name: 'Pooja Units', icon: 'Sparkles' },
  { id: 'Decor', name: 'Home Decor', icon: 'Home' },
  { id: 'Outdoor', name: 'Outdoor', icon: 'Sun' }
];

// Mock API functions
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500);
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 300);
  });
};

export const fetchProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockProducts.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
      );
      resolve(filtered);
    }, 400);
  });
};

export const searchProducts = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockProducts.filter(
        p => p.name.toLowerCase().includes(query.toLowerCase()) ||
             p.category.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });
};

export default mockProducts;
