import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryChips } from "@/components/CategoryChips";
import { FilterToolbar } from "@/components/FilterToolbar";
import { ProductGrid } from "@/components/ProductGrid";
import { QuickViewModal } from "@/components/QuickViewModal";
import { FilterDrawer } from "@/components/FilterDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";
import { CartDrawer } from "@/components/CartDrawer";
import { USPStrip } from "@/components/USPStrip";
import { Footer } from "@/components/Footer";
import { products, Product } from "@/data/products";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { toast } from "sonner";

interface CartItem {
  productId: string;
  size: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [wishlist, setWishlist] = useLocalStorage<string[]>("wishlist", []);
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.tags.includes(selectedCategory));
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "newest":
        sorted.reverse();
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        // popularity - keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        toast.success("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        toast.success("Added to wishlist");
        return [...prev, productId];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    toast.success("Removed from wishlist");
  };

  const handleAddToCart = (productId: string, size?: string) => {
    setCart((prev) => [...prev, { productId, size: size || "M" }]);
    toast.success("Added to cart");
  };

  const handleRemoveFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.success("Removed from cart");
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        wishlistCount={wishlist.length}
        cartCount={cart.length}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero 
        onShopClick={scrollToProducts} 
        onCollectionsClick={scrollToCategories}
      />

      <USPStrip />

      <div id="categories">
        <CategoryChips
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <FilterToolbar
        onFilterClick={() => setIsFilterOpen(true)}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div id="products">
        <ProductGrid
          products={filteredAndSortedProducts}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={handleQuickView}
          onAddToCart={handleAddToCart}
        />
      </div>

      <Footer />

      <QuickViewModal
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemove={handleRemoveFromWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
