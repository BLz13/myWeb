import './magicButton.scss';

import { TEXT } from '../../utils/data.js';
import { useUIState } from '../../hooks/context/useUIState';

export default function MagicButton() {

    
    const { lang, magicOn } = useUIState();

    const buttonText = TEXT?.magicButton?.[lang]


    return (
        <button className="magic-button" onClick={magicOn}>
            {buttonText}
        </button>
    );
}