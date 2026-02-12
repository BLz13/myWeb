import './user-ui.scss';

import Menu from '../menu/menu-cnt';
import MenuButton from './menu-btn/menu-btn';
import { useUIState } from '../../hooks/context/useUIState';

export default function UserUI() {

    
    const { closeMenu, menuState } = useUIState();

    const backdropClass = menuState ? "open" : "closed";


    const handleClickBackdrop = () => {
        if (menuState) closeMenu();
    };


    return (
        <div className="user-ui">

            <header>
                
                <MenuButton />

            </header>

            <aside>
                
                <Menu />

            </aside>
            
            <div
                onClick={handleClickBackdrop}
                onTouchEnd={handleClickBackdrop}
                className={`backdrop-location-selector ${backdropClass}`}
            ></div>

        </div>
    );
}