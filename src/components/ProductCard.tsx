import { useState } from "react";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, isWishlisted, onToggleWishlist, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getBadgeClass = (tag: string) => {
    if (tag === "New") return "badge-new";
    if (tag === "Bestseller") return "badge-bestseller";
    if (product.discount >= 40) return "badge-sale";
    return "";
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={isHovered && product.imageAlt !== product.image ? product.imageAlt : product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge 
              key={tag} 
              className={cn("text-xs font-medium", getBadgeClass(tag))}
            >
              {tag}
            </Badge>
          ))}
          {product.discount > 0 && (
            <Badge className="badge-sale text-xs font-medium">
              -{product.discount}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-card/90 hover:bg-card"
            onClick={() => onToggleWishlist(product.id)}
          >
            <Heart 
              className={cn("h-4 w-4", isWishlisted && "fill-accent text-accent")} 
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-card/90 hover:bg-card"
            onClick={() => onQuickView(product)}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
          {product.title}
        </h3>

        {/* Color Dots */}
        <div className="flex gap-1.5">
          {product.colors.map((color, idx) => (
            <div
              key={idx}
              className="h-4 w-4 rounded-full border-2 border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">★</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
      </div>
    </div>
  );
}
