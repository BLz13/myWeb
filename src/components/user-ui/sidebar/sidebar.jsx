import "./sidebar.scss";

import SidebarItems from "./sidebar-items";
import { useState } from "react";
import { useUIState } from "../../../hooks/context/useUIState";

export default function Sidebar() {

  const { sidebarState, lang } = useUIState();

  const [displayLang, setDisplayLang] = useState(lang);
  const [hide, setHide] = useState(false);

  const sidebarClass = sidebarState ? "open" : "closed";

  if (lang !== displayLang && !hide) {
    setHide(true);
  }
  const handleAnimationEnd = (e) => {
    if (e.animationName !== "hideText") return;
    setDisplayLang(lang);
    setHide(false);
  };

  return (
      <ul
        key={displayLang}
        onAnimationEnd={handleAnimationEnd}
        className={`sidebar-container ${sidebarClass} ${hide ? "hide" : ""}`}
      >
        <SidebarItems lang={displayLang} />
      </ul>
  )

};