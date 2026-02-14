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
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571476/pexels-photo-1571476.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571482/pexels-photo-1571482.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571483/pexels-photo-1571483.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571484/pexels-photo-1571484.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571484/pexels-photo-1571484.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571486/pexels-photo-1571486.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571487/pexels-photo-1571487.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571487/pexels-photo-1571487.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571488/pexels-photo-1571488.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571489/pexels-photo-1571489.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571490/pexels-photo-1571490.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571490/pexels-photo-1571490.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571491/pexels-photo-1571491.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571492/pexels-photo-1571492.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571493/pexels-photo-1571493.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571493/pexels-photo-1571493.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571494/pexels-photo-1571494.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571495/pexels-photo-1571495.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571496/pexels-photo-1571496.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571496/pexels-photo-1571496.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571497/pexels-photo-1571497.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571498/pexels-photo-1571498.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571499/pexels-photo-1571499.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571499/pexels-photo-1571499.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571500/pexels-photo-1571500.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571501/pexels-photo-1571501.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
    image: "https://images.pexels.com/photos/1571502/pexels-photo-1571502.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
    images: [
      "https://images.pexels.com/photos/1571502/pexels-photo-1571502.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571503/pexels-photo-1571503.jpeg?auto=compress&cs=tinysrgb&w=800&h=800",
      "https://images.pexels.com/photos/1571504/pexels-photo-1571504.jpeg?auto=compress&cs=tinysrgb&w=800&h=800"
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
  }
];

export default mockProducts;
