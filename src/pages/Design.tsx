import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Upload, Type, Image as ImageIcon, Palette } from "lucide-react";
import { toast } from "sonner";
import teeTemplate from "@/assets/tee-001-1.png";

const Design = () => {
  const [tshirtColor, setTshirtColor] = useState("#ffffff");
  const [text, setText] = useState("YOUR TEXT");
  const [textColor, setTextColor] = useState("#000000");
  const [fontSize, setFontSize] = useState([24]);
  const [fontFamily, setFontFamily] = useState("Inter");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    toast.success("Design saved! (Demo - download feature not implemented)");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        wishlistCount={0}
        cartCount={0}
        onWishlistClick={() => {}}
        onCartClick={() => {}}
      />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Design Your Own T-Shirt</h1>
            <p className="text-muted-foreground">Create custom designs with our easy-to-use design tool</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Canvas */}
            <div className="space-y-4">
              <div className="aspect-square bg-secondary/30 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
                <div 
                  ref={canvasRef}
                  className="relative w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: tshirtColor }}
                >
                  {/* T-Shirt Template */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <img 
                      src={teeTemplate} 
                      alt="T-shirt template" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Design Area */}
                  <div className="relative z-10 flex flex-col items-center justify-center gap-4 max-w-[80%]">
                    {uploadedImage && (
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded design" 
                        className="max-w-[200px] max-h-[200px] object-contain"
                      />
                    )}
                    
                    <p 
                      style={{ 
                        color: textColor, 
                        fontSize: `${fontSize[0]}px`,
                        fontFamily: fontFamily
                      }}
                      className="font-bold text-center break-words"
                    >
                      {text}
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={handleDownload} className="w-full" size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Design
              </Button>
            </div>

            {/* Design Controls */}
            <div className="space-y-6">
              {/* T-Shirt Color */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  T-Shirt Color
                </Label>
                <div className="flex gap-2">
                  <Input 
                    type="color" 
                    value={tshirtColor}
                    onChange={(e) => setTshirtColor(e.target.value)}
                    className="w-20 h-10 cursor-pointer"
                  />
                  <Input 
                    type="text" 
                    value={tshirtColor}
                    onChange={(e) => setTshirtColor(e.target.value)}
                    className="flex-1"
                    placeholder="#ffffff"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  {["#ffffff", "#000000", "#7f1d1d", "#0f172a", "#16a34a", "#9a7b5e"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setTshirtColor(color)}
                      className="w-8 h-8 rounded-full border-2 border-border hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Upload Image */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Upload Design Image
                </Label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Image
                </Button>
              </div>

              {/* Text Input */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Text
                </Label>
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your text"
                  maxLength={50}
                />
              </div>

              {/* Text Color */}
              <div className="space-y-2">
                <Label>Text Color</Label>
                <div className="flex gap-2">
                  <Input 
                    type="color" 
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-20 h-10 cursor-pointer"
                  />
                  <Input 
                    type="text" 
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="flex-1"
                    placeholder="#000000"
                  />
                </div>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <Label>Font Size: {fontSize[0]}px</Label>
                <Slider
                  value={fontSize}
                  onValueChange={setFontSize}
                  min={12}
                  max={72}
                  step={1}
                />
              </div>

              {/* Font Family */}
              <div className="space-y-2">
                <Label>Font Family</Label>
                <Select value={fontFamily} onValueChange={setFontFamily}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Inter">Inter</SelectItem>
                    <SelectItem value="Arial">Arial</SelectItem>
                    <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                    <SelectItem value="Courier New">Courier New</SelectItem>
                    <SelectItem value="Impact">Impact</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Info Card */}
              <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
                <h3 className="font-semibold">Design Tips:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Choose contrasting colors for better visibility</li>
                  <li>• Keep text short and impactful</li>
                  <li>• Upload PNG images with transparent backgrounds</li>
                  <li>• Download your design to preview before ordering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Design;
