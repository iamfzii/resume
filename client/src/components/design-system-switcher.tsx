import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Palette } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

interface DesignCombination {
  id: string;
  name: string;
  description: string;
  theme: "light" | "dark" | "blue" | "green" | "purple" | "sunset";
  font: "modern" | "classic" | "tech" | "elegant" | "bold" | "minimal";
  gradient: string;
  preview: {
    primary: string;
    secondary: string;
    accent: string;
  };
  category: "professional" | "creative" | "modern" | "classic";
}

const designCombinations: DesignCombination[] = [
  {
    id: "executive",
    name: "Executive Pro",
    description: "Classic elegance for corporate leadership",
    theme: "blue",
    font: "classic",
    gradient: "from-blue-600 to-indigo-700",
    preview: { primary: "#1E40AF", secondary: "#0EA5E9", accent: "#EF4444" },
    category: "professional"
  },
  {
    id: "tech-leader",
    name: "Tech Leader",
    description: "Modern typography with tech-forward colors",
    theme: "dark",
    font: "tech",
    gradient: "from-gray-800 to-gray-900",
    preview: { primary: "#3B82F6", secondary: "#06B6D4", accent: "#F59E0B" },
    category: "modern"
  },
  {
    id: "creative-mind",
    name: "Creative Mind",
    description: "Bold fonts with vibrant purple accents",
    theme: "purple",
    font: "bold",
    gradient: "from-purple-600 to-pink-600",
    preview: { primary: "#A855F7", secondary: "#EC4899", accent: "#EAB308" },
    category: "creative"
  },
  {
    id: "nature-innovator",
    name: "Nature Innovator",
    description: "Elegant design with green sustainability theme",
    theme: "green",
    font: "elegant",
    gradient: "from-green-600 to-teal-600",
    preview: { primary: "#059669", secondary: "#06B6D4", accent: "#F59E0B" },
    category: "creative"
  },
  {
    id: "sunset-warm",
    name: "Sunset Professional",
    description: "Warm tones with modern minimal typography",
    theme: "sunset",
    font: "minimal",
    gradient: "from-orange-500 to-red-600",
    preview: { primary: "#EA580C", secondary: "#FBBF24", accent: "#A855F7" },
    category: "modern"
  },
  {
    id: "classic-scholar",
    name: "Classic Scholar",
    description: "Traditional serif fonts with refined light theme",
    theme: "light",
    font: "classic",
    gradient: "from-slate-600 to-slate-800",
    preview: { primary: "#0066CC", secondary: "#00B4D8", accent: "#FF6B35" },
    category: "classic"
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean modern fonts with light professional theme",
    theme: "light",
    font: "modern",
    gradient: "from-blue-500 to-cyan-500",
    preview: { primary: "#0066CC", secondary: "#00B4D8", accent: "#FF6B35" },
    category: "modern"
  },
  {
    id: "dark-elegance",
    name: "Dark Elegance",
    description: "Sophisticated dark theme with elegant typography",
    theme: "dark",
    font: "elegant",
    gradient: "from-slate-800 to-slate-900",
    preview: { primary: "#3B82F6", secondary: "#06B6D4", accent: "#F59E0B" },
    category: "professional"
  }
];

const categories = [
  { id: "all", name: "All Styles" },
  { id: "professional", name: "Professional" },
  { id: "creative", name: "Creative" },
  { id: "modern", name: "Modern" },
  { id: "classic", name: "Classic" }
];

export default function DesignSystemSwitcher() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();

  const filteredCombinations = selectedCategory === "all" 
    ? designCombinations 
    : designCombinations.filter(combo => combo.category === selectedCategory);

  const applyDesignCombination = (combination: DesignCombination) => {
    setTheme(combination.theme);
    setFontCombination(combination.font);
  };

  const getCurrentCombination = () => {
    return designCombinations.find(combo => 
      combo.theme === theme && combo.font === fontCombination
    );
  };

  const currentCombo = getCurrentCombination();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="theme-surface theme-border px-4 py-2">
          <Palette className="h-4 w-4 mr-2 theme-text-secondary" />
          <span className="theme-text-primary text-sm">
            {currentCombo ? currentCombo.name : "Custom Style"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 theme-surface theme-border p-0">
        <div className="p-4">
          <h3 className="font-semibold theme-text-primary mb-2">Design Combinations</h3>
          <p className="text-sm theme-text-muted mb-4">
            Curated color and font pairings for different professional styles
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-xs transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "theme-primary-bg text-white"
                    : "bg-gray-100 dark:bg-gray-800 theme-text-secondary hover:theme-text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Design Combinations Grid */}
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {filteredCombinations.map((combination, index) => (
              <motion.div
                key={combination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => applyDesignCombination(combination)}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                  currentCombo?.id === combination.id
                    ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/50"
                    : "theme-border hover:theme-border"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {/* Color Preview */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${combination.gradient} shadow-sm`} />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium theme-text-primary text-sm truncate">
                        {combination.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {combination.category}
                      </Badge>
                    </div>
                    <p className="text-xs theme-text-muted mb-2">
                      {combination.description}
                    </p>
                    
                    {/* Color Swatches */}
                    <div className="flex items-center space-x-1">
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm border border-white/20"
                        style={{ backgroundColor: combination.preview.primary }}
                      />
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm border border-white/20"
                        style={{ backgroundColor: combination.preview.secondary }}
                      />
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm border border-white/20"
                        style={{ backgroundColor: combination.preview.accent }}
                      />
                      <span className="text-xs theme-text-muted ml-2">
                        {combination.font} font
                      </span>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {currentCombo?.id === combination.id && (
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}