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
    price: 599,
    mrp: 999,
    discount: 40,
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
    price: 749,
    mrp: 1299,
    discount: 42,
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
    price: 899,
    mrp: 1499,
    discount: 40,
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
    price: 649,
    mrp: 999,
    discount: 35,
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
    price: 779,
    mrp: 1299,
    discount: 40,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    colors: ["#111827"],
    rating: 4.4,
    tags: ["Streetwear", "Minimal"],
    image: tee005_1,
    imageAlt: tee005_1,
  },
];
