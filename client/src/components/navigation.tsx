import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Palette, Menu, Settings, Type, Download } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";
import DesignSystemSwitcher from "@/components/design-system-switcher";
import { generateATSResumePDF } from "@/lib/ats-pdf-generator";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Profile", href: "#career" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Demos", href: "#demos" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

const themes = [
  { name: "Light", value: "light", color: "bg-blue-500" },
  { name: "Dark", value: "dark", color: "bg-gray-800" },
  { name: "Blue Professional", value: "blue", color: "bg-blue-700" },
  { name: "Green Creative", value: "green", color: "bg-green-600" },
  { name: "Purple Modern", value: "purple", color: "bg-purple-600" },
  { name: "Sunset Warm", value: "sunset", color: "bg-orange-600" },
];

const fontCombinations = [
  { name: "Modern", value: "modern", description: "Inter + Source Sans Pro" },
  { name: "Classic", value: "classic", description: "Playfair + Lora" },
  { name: "Tech", value: "tech", description: "Space Grotesk + IBM Plex" },
  { name: "Elegant", value: "elegant", description: "Montserrat + Source Sans" },
  { name: "Bold", value: "bold", description: "Poppins + Roboto" },
  { name: "Minimal", value: "minimal", description: "Inter Only" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, fontCombination, setFontCombination } = useTheme();

  const handleDownloadPDF = () => {
    try {
      generateATSResumePDF();
    } catch (error) {
      console.error('PDF generation failed:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.clientHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="font-heading font-bold text-xl theme-primary">MF</div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`theme-text-secondary hover:theme-primary transition-colors duration-200 font-medium relative ${
                  activeSection === item.href.slice(1) ? "theme-primary" : ""
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 theme-primary-bg"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* PDF Download Button */}
            <Button 
              onClick={handleDownloadPDF}
              variant="outline" 
              size="sm" 
              className="theme-surface theme-border hover:theme-primary-bg hover:theme-text-primary-contrast transition-all duration-200"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>

            {/* Main Design System Switcher */}
            <DesignSystemSwitcher />

            {/* Advanced Customization */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="theme-surface theme-border">
                  <Settings className="h-4 w-4 theme-text-secondary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 theme-surface theme-border">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium theme-text-primary mb-3">Individual Controls</h4>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm theme-text-secondary mb-2 block">Color Theme</label>
                        <div className="grid grid-cols-3 gap-1">
                          {themes.map((themeOption) => (
                            <button
                              key={themeOption.value}
                              onClick={() => setTheme(themeOption.value as any)}
                              className={`p-2 rounded-md border transition-all duration-150 ${
                                theme === themeOption.value
                                  ? "ring-2 ring-blue-500 border-blue-300"
                                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                              }`}
                            >
                              <div className={`w-full h-4 ${themeOption.color} rounded mb-1`} />
                              <div className="text-xs theme-text-primary truncate">
                                {themeOption.name.split(' ')[0]}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <label className="text-sm theme-text-secondary mb-2 block">Typography</label>
                        <div className="space-y-1">
                          {fontCombinations.map((font) => (
                            <button
                              key={font.value}
                              onClick={() => setFontCombination(font.value as any)}
                              className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors duration-150 ${
                                fontCombination === font.value
                                  ? "theme-primary-bg text-white"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                            >
                              <div className="font-medium">{font.name}</div>
                              <div className="opacity-70">{font.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden theme-surface theme-border">
                  <Menu className="h-4 w-4 theme-text-secondary" />
                </Button>
              </SheetTrigger>
              <SheetContent className="theme-surface">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    <h4 className="font-medium theme-text-primary text-sm mb-3">Navigation</h4>
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-3 py-2 rounded-md theme-text-secondary hover:theme-primary transition-colors duration-200"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>

                  {/* PDF Download for Mobile */}
                  <div className="space-y-2">
                    <h4 className="font-medium theme-text-primary text-sm mb-3">Resume</h4>
                    <Button 
                      onClick={handleDownloadPDF}
                      variant="outline" 
                      className="w-full theme-surface theme-border hover:theme-primary-bg hover:theme-text-primary-contrast transition-all duration-200"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF Resume
                    </Button>
                  </div>

                  {/* Design System for Mobile */}
                  <div className="space-y-4">
                    <h4 className="font-medium theme-text-primary text-sm">Design Style</h4>
                    <DesignSystemSwitcher />
                    
                    {/* Quick Theme Switcher */}
                    <div className="space-y-2">
                      <label className="text-xs theme-text-secondary">Quick Themes</label>
                      <div className="grid grid-cols-2 gap-2">
                        {themes.slice(0, 4).map((themeOption) => (
                          <button
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value as any)}
                            className={`p-2 rounded-md border text-xs transition-all duration-150 ${
                              theme === themeOption.value
                                ? "ring-2 ring-blue-500 border-blue-300"
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                          >
                            <div className={`w-full h-3 ${themeOption.color} rounded mb-1`} />
                            <div className="theme-text-primary truncate">
                              {themeOption.name.split(' ')[0]}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
