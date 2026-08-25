import "./theme-switcher.scss";

import MoonIcon from "../../../assets/svg/moon.svg?react"
import SunIcon from "../../../assets/svg/sun.svg?react"
import { useUIState } from "../../../hooks/context/useUIState";

export default function ThemeSwitcher() {

  const { toggleTheme, theme } = useUIState();

  const handleTouch = () => {
    toggleTheme();
  };

  return (

    <div
        className={`theme-switch ${theme}`}
        onClick={handleTouch}
        role="button"
        onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleTouch();
            }
        }}>
        <span><MoonIcon /></span>
        <span><SunIcon /></span>
    </div>

  );

};
