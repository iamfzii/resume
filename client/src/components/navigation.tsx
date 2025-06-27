import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Palette, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

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
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="theme-surface theme-border">
                  <Palette className="h-4 w-4 theme-text-secondary" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 theme-surface theme-border">
                <div className="space-y-2">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      onClick={() => setTheme(themeOption.value as any)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150 flex items-center space-x-3"
                    >
                      <div className={`w-4 h-4 ${themeOption.color} rounded-full`} />
                      <span className={`theme-text-primary ${theme === themeOption.value ? 'font-medium' : ''}`}>
                        {themeOption.name}
                      </span>
                    </button>
                  ))}
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
                <div className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-3 py-2 rounded-md theme-text-secondary hover:theme-primary transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
