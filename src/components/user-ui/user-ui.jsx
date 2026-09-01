import './user-ui.scss';

import { useEffect, useState } from 'react';

import AnimatedBackground from './animated-bg/animated-bg';
import LanguageSwitcher from './language-switcher/language-switcher';
import MagicButton from './magicButton/magicButton';
import Menu from './menu/menu-cnt';
import Sidebar from './sidebar/sidebar';
import SidebarButton from './sidebar-button/sidebar-btn';
import SlideTop from './slideTop/slide-top';
import ThemeSwitcher from './theme-switcher/theme-switcher';
import { useUIState } from '../../hooks/context/useUIState';

export default function UserUI() {

    const { magic } = useUIState();

    const [loadUI, setLoadUI] = useState(0);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    useEffect(() => {
        if (magic) return;
        
        const showTimer = setTimeout(() => {
            setLoadUI(1);
        }, 1000);

        return () => clearTimeout(showTimer);
    }, [magic]);

    useEffect(() => {
        if (!loadUI) return;

        const hideTimer = setTimeout(() => {
            setLoadUI(0);
        }, 1000);

        return () => clearTimeout(hideTimer);
    }, [loadUI]);

    return ( 
        <div className={ loadUI ? `user-ui load` : "user-ui"}>
            {!magic ? (
                <MagicButton />
            ) : (
                <>
                    {isMobile ? (
                        <div className='section-right'>
                            <SidebarButton />
                            <Sidebar />
                            <div>
                                <SlideTop />
                                <ThemeSwitcher />
                                <LanguageSwitcher />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className='section-right'>
                                <SidebarButton />
                                <Menu />
                                <Sidebar />
                            </div>
                            <div className='section-left'>
                                <SlideTop />
                                <ThemeSwitcher />
                                <LanguageSwitcher />
                            </div>
                        </>
                    )}
                </>
            )}
            <AnimatedBackground />
        </div>
    );
}