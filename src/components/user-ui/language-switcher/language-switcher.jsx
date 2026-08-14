import "./language-switcher.scss";

import { useUIState } from "../../../hooks/context/useUIState";

export default function LanguageSwitcher() {

  const { lang, toggleLang } = useUIState();

  const handleTouch = () => {
    toggleLang();
  };

  return (

    <div
        className={`language-switch ${lang}`}
        onClick={handleTouch}
        role="button"
        onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleTouch();
            }
        }}>
        <span>es</span>
        <span>en</span>
    </div>

  );

};
