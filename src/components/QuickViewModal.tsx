import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productId: string, size: string) => void;
}

export function QuickViewModal({ product, isOpen, onClose, onAddToCart }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) return null;

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product.id, selectedSize);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Quick View</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">SKU: {product.id}</p>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">
                ₹{product.mrp}
              </span>
              <Badge className="badge-sale">-{product.discount}% OFF</Badge>
            </div>

            {/* Colors */}
            <div>
              <h4 className="text-sm font-medium mb-2">Available Colors</h4>
              <div className="flex gap-2">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="h-8 w-8 rounded-full border-2 border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="text-sm font-medium mb-2">Select Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-14",
                      selectedSize === size && "bg-primary text-primary-foreground"
                    )}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Fit Info */}
            <div className="p-3 bg-secondary rounded-lg">
              <p className="text-sm">
                <span className="font-medium">Fit:</span> {product.fit}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                100% Cotton • Pre-shrunk • Machine washable
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Demo UI — Checkout not connected
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
