import './magicButton.scss';

import { useEffect, useState } from 'react';

import { TEXT } from '../../../utils/data.js';
import { useUIState } from '../../../hooks/context/useUIState.jsx';

export default function MagicButton() {
    
    const { lang, magic, magicOn } = useUIState();
    
    const [ buttonClass, setButtonClass ] = useState("hide");

    const [ showLetters, setShowLetters ] = useState("");
    
    const buttonText = TEXT?.magicButton?.[lang]

    useEffect( () => {
        setTimeout( () => {
            if ( buttonClass === "hide" ) {
                setButtonClass("show");
            }
            setTimeout( () => {
                setShowLetters("show");
            }, 1000)
        }, 2000)
    }, [])

    const handleClick = () => {
        setShowLetters("");        
        setTimeout( () => {
            setButtonClass("show magic-1"); // No BG + move to corner
            setTimeout( () => {
                setButtonClass("show magic-2"); // Shorten and curve
                setTimeout( () => {
                    setButtonClass("show magic-3"); // Animated BG
                    setTimeout( () => {
                        setButtonClass("show magic-4"); // Grow
                        setTimeout( () => {
                            magicOn();
                        }, 1000)
                    }, 500)
                }, 500)
            }, 200)
        }, 500)
    }

    return (
        <div className={`magicButton ${buttonClass}`} onClick={magic ? () => {} : handleClick}>
            {magic ? (
                <></>
            ) : (
                <>
                    <p className={`buttonText ${showLetters}`}>{buttonText}</p>   
                    <div className='white-bg'></div>
                </>
            )}
        </div>
    );
}