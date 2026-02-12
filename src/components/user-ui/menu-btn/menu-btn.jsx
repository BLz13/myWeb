import './menu-btn.scss';

import MenuIcon from '../../../assets/svg/menuIcon.svg?react';
import { useUIState } from '../../../hooks/context/useUIState';

export default function MenuButton() {

  const { menuState, toggleMenu } = useUIState();

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <>  
      <button className={`menu-button-container ${ menuState ? 'open' : 'closed'}`} onPointerDown={handleClick} >
        <MenuIcon className={`menu-button ${ menuState ? 'open' : 'closed'}`} />
      </button>
    </>
  );
}
