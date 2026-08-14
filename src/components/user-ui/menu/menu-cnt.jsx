import "./menu-cnt.scss";

import MenuItems from "./menu-items";
import { useState } from "react";
import { useUIState } from "../../../hooks/context/useUIState";

export default function Menu() {

  const { lang } = useUIState();

  const [displayLang, setDisplayLang] = useState(lang);
  const [exiting, setExiting] = useState(false);

  if (lang !== displayLang && !exiting) {
    setExiting(true);
  }

  const handleAnimationEnd = (e) => {
    if (e.animationName !== "exitNav") return;
    setDisplayLang(lang);
    setExiting(false);
  };

  return (
    <nav className={`menu-container`}>
      <ul
        key={displayLang}
        className={`menu ${exiting ? "exiting" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <MenuItems lang={displayLang} />
      </ul>
    </nav>
  )

};