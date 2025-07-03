"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure the component is mounted before accessing the theme
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevents hydration mismatch by not rendering the button until mounted
    return null;
  }

  return (
    <div className="absolute top-6 right-6 z-10">
      <Button
        size="icon"
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
