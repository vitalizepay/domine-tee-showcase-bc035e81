import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";

interface HeroProps {
  onShopClick: () => void;
  onCollectionsClick: () => void;
}

export function Hero({ onShopClick, onCollectionsClick }: HeroProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-background to-secondary overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                New Collection
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Graphic & Solid Tees for Every Day
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              100% cotton • Pre-shrunk • Fits from XS–XXL
            </p>

            <p className="text-sm text-muted-foreground italic">
              ஒவ்வொரு நாளும் ஸ்டைல் & கம்பர்ட்
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={onShopClick}
              >
                Shop T-Shirts
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={onCollectionsClick}
              >
                View Collections
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square md:aspect-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroBanner} 
                alt="DOMINE Premium T-Shirts" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
