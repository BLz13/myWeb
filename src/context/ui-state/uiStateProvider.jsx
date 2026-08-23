import React, { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

const MAGIC_STORAGE_KEY = "hasVisited";

export default function UIStateProvider({ children }) {

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

  function scrollToSection(id, offset = 15) {
    const el = document.getElementById(id);
    if (!el) return;

    const elementPosition = el.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }

  const value = useMemo(() => ({
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