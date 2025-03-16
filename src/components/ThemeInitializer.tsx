"use client";

import { useEffect, useState } from "react";

import { ReactNode } from "react";

interface ThemeInitializerProps {
  children: ReactNode;
}

const ThemeInitializer: React.FC<ThemeInitializerProps> = ({ children }) => {
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
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const darkToggle = () => {
    if (localStorage.theme === 'dark') {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div data-theme={theme}>
      {children}
    </div>
  );
};

export default ThemeInitializer;
