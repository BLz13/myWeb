import React, { useCallback, useMemo, useState } from "react";

import { UIStateContext } from "./uiStateContext";

export default function UIStateProvider({ children }) {
  
  const [menuState, setMenuState] = useState(false);

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
    menuState,
    openMenu,
    closeMenu,
    toggleMenu
  }), [
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
