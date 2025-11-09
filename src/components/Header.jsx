import React, { useEffect, useState } from "react";
import logo from "../assets/nxtrole.png"; // ✅ Correct import from assets

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  // ✅ Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <header className="bg-white dark:bg-[#1e1e1e] shadow-sm transition-colors duration-300 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* ✅ Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="NxtRole.AI" className="h-10 w-auto" />
          <h1 className="font-bold text-lg text-gray-900 dark:text-white">
            NxtRole.AI
          </h1>
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#features"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>

          {/* ✅ Call to Action */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            Get Started
          </button>

          {/* ✅ Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="ml-3 p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:scale-105 transition-transform"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* ✅ Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1e1e1e] border-t dark:border-gray-700 transition-colors duration-300">
          <nav className="flex flex-col items-center gap-3 py-3 text-gray-900 dark:text-gray-200">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
