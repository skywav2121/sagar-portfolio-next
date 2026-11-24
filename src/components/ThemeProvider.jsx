"use client";

import { createContext, useContext, useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "sagar-portfolio-theme";
const THEME_EVENT = "sagar-theme-change";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

function subscribe(callback) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    const attr = document.documentElement.getAttribute("data-theme");
    return attr === "light" ? "light" : "dark";
  } catch {
    const attr = document.documentElement.getAttribute("data-theme");
    return attr === "light" ? "light" : "dark";
  }
}

function getServerSnapshot() {
  return "dark";
}

/** Provides dark/light theme state synchronized with localStorage and html[data-theme]. */
export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((nextTheme) => {
    const valid = nextTheme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", valid);
    try {
      window.localStorage.setItem(STORAGE_KEY, valid);
    } catch {
      // Ignore storage restrictions
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", valid === "light" ? "#F8FAFC" : "#090A0F");
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getSnapshot() === "dark" ? "light" : "dark");
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
