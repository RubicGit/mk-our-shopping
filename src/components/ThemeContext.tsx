"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextProps {
  theme: string | null;
  darkToggle: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const currentTheme = localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    setTheme(currentTheme);
  }, []);

  const setLightMode = () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
    setTheme("light");
  };

  const setDarkMode = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    setTheme("dark");
  };

  const darkToggle = () => {
    if (theme === 'dark') {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, darkToggle }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
