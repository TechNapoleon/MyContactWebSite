import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // restore theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);

    // handle scroll
    const handleScroll = () => setIsScrolled(window.scrollY > 50); // threshold = 50px
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-16 max-sm:right-21 z-[60] p-2 rounded-full transition-all duration-300 focus:outline-hidden",
        isScrolled ? "max-md:opacity-0 max-md:pointer-events-none" : "opacity-100"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
