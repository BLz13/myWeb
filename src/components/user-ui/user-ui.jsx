import './user-ui.scss';

import AnimatedBackground from './animated-bg/animated-bg';
import LanguageSwitcher from './language-switcher/language-switcher';
import MagicButton from './magicButton/magicButton';
import Menu from './menu/menu-cnt';
import Sidebar from './sidebar/sidebar';
import SidebarButton from './sidebar-button/sidebar-btn';
import { useState } from 'react';
import { useUIState } from '../../hooks/context/useUIState';

export default function UserUI() {

    const { magic } = useUIState();

    const [loadUI, setLoadUI] = useState(0);
    
    magic ?
        {} 
    : 
        setTimeout( () => {
            setLoadUI(1);
            setTimeout( () => {
                setLoadUI(0)
            },[1000])
        },[1000])
    ;

    return ( 
        <div className={ loadUI ? `user-ui load` : "user-ui"}>
            {!magic ? (
                <MagicButton />
            ) : (
                <>
                    <SidebarButton />
                    <Menu />
                    <Sidebar />
                    <LanguageSwitcher />
                </>
            )}
            <AnimatedBackground />
        </div>
    );
}