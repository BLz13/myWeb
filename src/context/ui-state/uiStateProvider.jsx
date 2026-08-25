import React, { useCallback, useEffect, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

const MAGIC_STORAGE_KEY = "hasVisited";
const THEME_STORAGE_KEY = "theme"; // "light" | "dark"
const LANG_STORAGE_KEY = "lang";   // "es" | "en"

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable — fall through to system detection
  }

  // no explicit user choice yet — detect system preference
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return "light";
}

export default function UIStateProvider({ children }) {

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === "light" ? "dark" : "light";
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // fails silently — theme still switches for this session
      }
      return next;
    });
  }, []);

  // keep in sync if the user changes their OS theme WHILE the site is open,
  // but only if they haven't made an explicit manual choice yet
  useEffect(() => {
    let hasStoredPreference;
    try {
      hasStoredPreference = localStorage.getItem(THEME_STORAGE_KEY) !== null;
    } catch {
      hasStoredPreference = false;
    }

    if (hasStoredPreference) return; // respect explicit choice, don't override it

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setTheme(e.matches ? "dark" : "light");

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // apply the theme to the document so CSS can react to it
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [sidebarState, setSidebarState] = useState(false);

  // lazy initializer — runs once, reads localStorage before first paint
  const [magic, setMagic] = useState(() => {
    try {
      return localStorage.getItem(MAGIC_STORAGE_KEY) === "true";
    } catch {
      // localStorage can throw in some environments (private browsing, SSR, etc.)
      return false;
    }
  });

  const [lang, setLang] = useState('es');

  const magicOn = useCallback(() => {
    setMagic(true);
    try {
      localStorage.setItem(MAGIC_STORAGE_KEY, "true");
    } catch {
      // fails silently if storage is unavailable — magic still works for this session
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const openSidebar = useCallback(() => setSidebarState(true), []);
  const closeSidebar = useCallback(() => setSidebarState(false), []);
  const toggleSidebar = useCallback(() => setSidebarState(prev => !prev), []);

  function scrollToSection(id, offset = 30) {
    const el = document.getElementById(id);
    if (!el) return;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    lang,
    toggleLang,
    magic,
    magicOn,
    sidebarState,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    scrollToSection
  }), [
    theme,
    toggleTheme,
    lang,
    toggleLang,
    magic,
    magicOn,
    sidebarState,
    openSidebar,
    closeSidebar,
    toggleSidebar
  ]);

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );

}