import { X, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: string[];
  onRemove: (productId: string) => void;
}

export function WishlistDrawer({ isOpen, onClose, wishlist, onRemove }: WishlistDrawerProps) {
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Wishlist ({wishlist.length})</SheetTitle>
        </SheetHeader>

        <div className="space-y-4 py-6">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Your wishlist is empty</p>
            </div>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium line-clamp-2">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold">₹{item.price}</span>
                    <span className="text-xs text-muted-foreground line-through">
                      ₹{item.mrp}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
