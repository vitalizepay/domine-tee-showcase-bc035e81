import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Oversized",
  "Classic Fit",
  "Minimal",
  "Typography",
  "Streetwear",
];

interface CategoryChipsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryChips({ selectedCategory, onCategoryChange }: CategoryChipsProps) {
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shrink-0"
                  : "shrink-0"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
