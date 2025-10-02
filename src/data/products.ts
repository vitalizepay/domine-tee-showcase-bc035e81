import tee001_1 from "@/assets/tee-001-1.png";
import tee001_2 from "@/assets/tee-001-2.png";
import tee002_1 from "@/assets/tee-002-1.png";
import tee002_2 from "@/assets/tee-002-2.png";
import tee003_1 from "@/assets/tee-003-1.png";
import tee003_2 from "@/assets/tee-003-2.png";
import tee004_1 from "@/assets/tee-004-1.png";
import tee005_1 from "@/assets/tee-005-1.png";

export interface Product {
  id: string;
  title: string;
  price: number;
  mrp: number;
  discount: number;
  fit: string;
  sizes: string[];
  colors: string[];
  rating: number;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: "tee-001",
    title: "Classic Maroon Crew Tee",
    price: 350,
    mrp: 999,
    discount: 65,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#7f1d1d"],
    rating: 4.5,
    tags: ["Bestseller", "Typography"],
    image: tee001_1,
    imageAlt: tee001_2,
  },
  {
    id: "tee-002",
    title: "Oversized DOMINE Typography Tee",
    price: 350,
    mrp: 1299,
    discount: 73,
    fit: "Oversized",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["#9a7b5e"],
    rating: 4.6,
    tags: ["New", "Typography", "Oversized"],
    image: tee002_1,
    imageAlt: tee002_2,
  },
  {
    id: "tee-003",
    title: "CHAMPION Graphic Tee - Mint",
    price: 350,
    mrp: 1499,
    discount: 77,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#a8c5b5"],
    rating: 4.3,
    tags: ["Typography", "Streetwear"],
    image: tee003_1,
    imageAlt: tee003_2,
  },
  {
    id: "tee-004",
    title: "Minimal DOMINE Tan Tee",
    price: 350,
    mrp: 999,
    discount: 65,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#9a7b5e"],
    rating: 4.2,
    tags: ["Minimal"],
    image: tee004_1,
    imageAlt: tee004_1,
  },
  {
    id: "tee-005",
    title: "Streetwear DOMINE Black Tee",
    price: 350,
    mrp: 1299,
    discount: 73,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    colors: ["#111827"],
    rating: 4.4,
    tags: ["Streetwear", "Minimal"],
    image: tee005_1,
    imageAlt: tee005_1,
  },
  // Additional 50 products
  { id: "tee-006", title: "Navy Blue Crew Neck", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#0f172a"], rating: 4.3, tags: ["Minimal"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-007", title: "White Oversized Graphic", price: 350, mrp: 999, discount: 65, fit: "Oversized", sizes: ["M", "L", "XL", "XXL"], colors: ["#ffffff"], rating: 4.5, tags: ["New", "Typography"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-008", title: "Forest Green Minimal", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#16a34a"], rating: 4.2, tags: ["Minimal"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-009", title: "Charcoal Grey Crew", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#374151"], rating: 4.4, tags: ["Bestseller"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-010", title: "Rust Orange Typography", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#ea580c"], rating: 4.6, tags: ["Typography", "New"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-011", title: "Sky Blue Crew Neck", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#38bdf8"], rating: 4.3, tags: ["Streetwear"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-012", title: "Burgundy Oversized", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["M", "L", "XL"], colors: ["#991b1b"], rating: 4.5, tags: ["Bestseller", "Oversized"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-013", title: "Olive Green Minimal", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#84cc16"], rating: 4.1, tags: ["Minimal"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-014", title: "Slate Grey Typography", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#64748b"], rating: 4.4, tags: ["Typography"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-015", title: "Sunset Orange Crew", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#fb923c"], rating: 4.2, tags: ["New"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-016", title: "Deep Purple Graphic", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#7c3aed"], rating: 4.6, tags: ["Typography", "Oversized"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-017", title: "Teal Minimal Crew", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#14b8a6"], rating: 4.3, tags: ["Minimal"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-018", title: "Crimson Red Typography", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["M", "L", "XL"], colors: ["#dc2626"], rating: 4.5, tags: ["Bestseller", "Typography"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-019", title: "Sand Beige Crew", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#d6bcfa"], rating: 4.2, tags: ["Minimal"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-020", title: "Midnight Blue Graphic", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#1e3a8a"], rating: 4.4, tags: ["Streetwear"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-021", title: "Coral Pink Crew Neck", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#fb7185"], rating: 4.3, tags: ["New"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-022", title: "Emerald Green Oversized", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#10b981"], rating: 4.6, tags: ["Oversized", "Bestseller"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-023", title: "Ash Grey Minimal", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#9ca3af"], rating: 4.1, tags: ["Minimal"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-024", title: "Mustard Yellow Typography", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#eab308"], rating: 4.4, tags: ["Typography"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-025", title: "Cobalt Blue Crew", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#3b82f6"], rating: 4.3, tags: ["Streetwear"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-026", title: "Wine Red Graphic", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#be123c"], rating: 4.5, tags: ["Typography", "New"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-027", title: "Sage Green Minimal", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#a3e635"], rating: 4.2, tags: ["Minimal"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-028", title: "Graphite Black Crew", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#18181b"], rating: 4.4, tags: ["Bestseller"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-029", title: "Peach Oversized Typography", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#fdba74"], rating: 4.6, tags: ["Typography", "Oversized"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-030", title: "Steel Blue Crew Neck", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#475569"], rating: 4.3, tags: ["Minimal"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-031", title: "Lavender Graphic", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#c084fc"], rating: 4.2, tags: ["New"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-032", title: "Pine Green Oversized", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#15803d"], rating: 4.5, tags: ["Oversized", "Streetwear"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-033", title: "Cream Minimal Crew", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#fef3c7"], rating: 4.1, tags: ["Minimal"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-034", title: "Royal Blue Typography", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#1d4ed8"], rating: 4.4, tags: ["Typography", "Bestseller"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-035", title: "Brick Red Crew", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#b91c1c"], rating: 4.3, tags: ["Streetwear"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-036", title: "Mint Green Graphic", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#86efac"], rating: 4.6, tags: ["Typography", "New"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-037", title: "Smoke Grey Minimal", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#71717a"], rating: 4.2, tags: ["Minimal"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-038", title: "Amber Typography Crew", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#f59e0b"], rating: 4.4, tags: ["Typography"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-039", title: "Ocean Blue Oversized", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#0ea5e9"], rating: 4.5, tags: ["Oversized", "Bestseller"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-040", title: "Plum Purple Crew", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#9333ea"], rating: 4.3, tags: ["New"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-041", title: "Khaki Graphic Tee", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#a16207"], rating: 4.2, tags: ["Streetwear"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-042", title: "Cherry Red Oversized", price: 350, mrp: 1099, discount: 68, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#f43f5e"], rating: 4.6, tags: ["Typography", "Oversized"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-043", title: "Ivory Minimal Crew", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["S", "M", "L", "XL"], colors: ["#fffbeb"], rating: 4.1, tags: ["Minimal"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-044", title: "Indigo Blue Typography", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#4f46e5"], rating: 4.4, tags: ["Typography", "Bestseller"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-045", title: "Copper Crew Neck", price: 350, mrp: 899, discount: 61, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#ea580c"], rating: 4.3, tags: ["New"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-046", title: "Aqua Graphic Oversized", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#06b6d4"], rating: 4.5, tags: ["Oversized", "Streetwear"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-047", title: "Stone Grey Minimal", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#78716c"], rating: 4.2, tags: ["Minimal"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-048", title: "Lemon Yellow Typography", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#fde047"], rating: 4.4, tags: ["Typography"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-049", title: "Sapphire Blue Crew", price: 350, mrp: 1099, discount: 68, fit: "Regular", sizes: ["L", "XL", "XXL"], colors: ["#1e40af"], rating: 4.6, tags: ["Bestseller"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-050", title: "Rose Pink Oversized", price: 350, mrp: 899, discount: 61, fit: "Oversized", sizes: ["S", "M", "L", "XL"], colors: ["#fda4af"], rating: 4.3, tags: ["Oversized", "New"], image: tee005_1, imageAlt: tee005_1 },
  { id: "tee-051", title: "Jet Black Graphic", price: 350, mrp: 799, discount: 56, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#000000"], rating: 4.5, tags: ["Typography"], image: tee001_1, imageAlt: tee001_2 },
  { id: "tee-052", title: "Lime Green Crew", price: 350, mrp: 999, discount: 65, fit: "Regular", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["#65a30d"], rating: 4.2, tags: ["Streetwear"], image: tee002_1, imageAlt: tee002_2 },
  { id: "tee-053", title: "Mahogany Oversized", price: 350, mrp: 1199, discount: 71, fit: "Oversized", sizes: ["L", "XL", "XXL"], colors: ["#78350f"], rating: 4.4, tags: ["Oversized", "Bestseller"], image: tee003_1, imageAlt: tee003_2 },
  { id: "tee-054", title: "Pearl White Minimal", price: 350, mrp: 849, discount: 59, fit: "Regular", sizes: ["S", "M", "L"], colors: ["#f9fafb"], rating: 4.1, tags: ["Minimal"], image: tee004_1, imageAlt: tee004_1 },
  { id: "tee-055", title: "Electric Blue Typography", price: 350, mrp: 1099, discount: 68, fit: "Regular", sizes: ["M", "L", "XL"], colors: ["#0284c7"], rating: 4.6, tags: ["Typography", "New"], image: tee005_1, imageAlt: tee005_1 },
];
