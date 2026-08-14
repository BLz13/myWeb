import React, { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

export default function UIStateProvider({ children }) {
  
  const [sidebarState, setSidebarState] = useState(false);

  const [magic, setMagic] = useState(false);
  
  const [lang, setLang] = useState('es');

  // set magic to true
  const magicOn = useCallback(() => {
    setMagic(true);
  }, []);

  // Toggle language
  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      return next;
    });
  }, []);

  // Open/Close sidebar
  const openSidebar = useCallback(() => {
    setSidebarState(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarState(false);
  }, []);

  // Toggle sidebar convenience
  const toggleSidebar = useCallback(() => {
    setSidebarState(prev => {
      const next = !prev;
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    lang,
    toggleLang,
    magic,
    magicOn,
    sidebarState,
    openSidebar,
    closeSidebar,
    toggleSidebar
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
