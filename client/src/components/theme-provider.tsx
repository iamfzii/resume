import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "blue" | "green" | "purple" | "sunset";
type FontCombination = "modern" | "classic" | "tech" | "elegant" | "bold" | "minimal";

type ThemeProviderContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontCombination: FontCombination;
  setFontCombination: (font: FontCombination) => void;
};

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontCombination, setFontCombination] = useState<FontCombination>("modern");

  useEffect(() => {
    const savedTheme = localStorage.getItem("preferred-theme") as Theme;
    const savedFont = localStorage.getItem("preferred-font") as FontCombination;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedFont) {
      setFontCombination(savedFont);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font", fontCombination);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("preferred-theme", theme);
    localStorage.setItem("preferred-font", fontCombination);
  }, [theme, fontCombination]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, fontCombination, setFontCombination }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
