import "./sidebar-btn.scss";

import MenuIcon from '../../../assets/svg/menuIcon.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function SidebarButton() {

  const { sidebarState, toggleSidebar } = useUIState();

  const handleClick = () => {
    toggleSidebar();
  };

  return (
      <button
        className={`sidebar-button-container ${ sidebarState ? 'open' : 'closed'}`}
        onPointerDown={handleClick}
      >
        <MenuIcon className={`sidebar-button ${ sidebarState ? 'open' : 'closed'}`} />
      </button>
  );
}
