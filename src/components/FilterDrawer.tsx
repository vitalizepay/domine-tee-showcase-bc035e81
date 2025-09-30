import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Navy", "Olive", "Maroon", "Grey"];
  const fits = ["Oversized", "Regular", "Slim"];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Size */}
          <div>
            <h3 className="font-medium mb-3">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Color */}
          <div>
            <h3 className="font-medium mb-3">Color</h3>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`} className="text-sm cursor-pointer">
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Fit */}
          <div>
            <h3 className="font-medium mb-3">Fit</h3>
            <div className="space-y-2">
              {fits.map((fit) => (
                <div key={fit} className="flex items-center space-x-2">
                  <Checkbox id={`fit-${fit}`} />
                  <Label htmlFor={`fit-${fit}`} className="text-sm cursor-pointer">
                    {fit}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <p className="text-sm text-muted-foreground">
              Price filters coming soon (UI only)
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Clear All
            </Button>
            <Button className="flex-1 bg-accent hover:bg-accent/90" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
