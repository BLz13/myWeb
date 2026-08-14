import "./sidebar.scss";

import SidebarItems from "./sidebar-items";
import { useUIState } from "../../../hooks/context/useUIState";

export default function Sidebar() {

  const { sidebarState, lang } = useUIState();

  const sidebarClass = sidebarState ? "open" : "closed";

  return (
      <ul className={`sidebar-container ${sidebarClass}`}>
        <SidebarItems lang={lang} />
      </ul>
  )

};