import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  wishlistCount: number;
  cartCount: number;
  onWishlistClick: () => void;
  onCartClick: () => void;
}

export function Header({ wishlistCount, cartCount, onWishlistClick, onCartClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold tracking-tight">DOMINE</h1>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                Men
              </a>
              <a href="#new" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                New Arrivals
              </a>
              <a href="#bestsellers" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Best Sellers
              </a>
              <a href="#collections" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Collections
              </a>
              <a href="#sale" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Sale
              </a>
            </nav>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center gap-3">
            {/* Search - Hidden on mobile */}
            <div className="hidden lg:flex items-center relative">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for T-shirts..." 
                className="w-64 pl-9 h-9"
              />
            </div>

            {/* Icons */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onWishlistClick}
              className="relative"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t mt-2 pt-4">
            <div className="flex flex-col gap-3">
              <Input 
                placeholder="Search for T-shirts..." 
                className="w-full"
              />
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-sm font-medium text-accent py-2">Men</a>
                <a href="#new" className="text-sm font-medium text-foreground hover:text-accent py-2">New Arrivals</a>
                <a href="#bestsellers" className="text-sm font-medium text-foreground hover:text-accent py-2">Best Sellers</a>
                <a href="#collections" className="text-sm font-medium text-foreground hover:text-accent py-2">Collections</a>
                <a href="#sale" className="text-sm font-medium text-foreground hover:text-accent py-2">Sale</a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
