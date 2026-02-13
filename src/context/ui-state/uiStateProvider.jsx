import React, { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

export default function UIStateProvider({ children }) {
  
  const [menuState, setMenuState] = useState(false);
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

  // Open menu AND ensure location is closed
  const openMenu = useCallback(() => {
    setMenuState(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState(false);
  }, []);

  // Toggle menu convenience
  const toggleMenu = useCallback(() => {
    setMenuState(prev => {
      const next = !prev;
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    lang,
    toggleLang,
    magic,
    magicOn,
    menuState,
    openMenu,
    closeMenu,
    toggleMenu
  }), [
    lang,
    toggleLang,
    magic,
    magicOn,
    menuState,
    openMenu,
    closeMenu,
    toggleMenu
  ]);

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
  
}
