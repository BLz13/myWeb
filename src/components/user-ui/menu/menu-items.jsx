import { Fragment } from "react";
import { SECTIONS } from "../../../utils/data.js";
import { useUIState } from "../../../hooks/context/useUIState.jsx";

export default function MenuItems({ lang }) {

    const { scrollToSection } = useUIState();

    const sections = SECTIONS[lang].map((item, i) => {
        
        const ids = SECTIONS.en;

        switch (i) {

            case 1 :
            case 2 : return (
                <Fragment key={item}>
                    <li>
                        <span 
                         onClick={ () => scrollToSection(ids[i]) }
                         onTouchEnd={ () => scrollToSection(ids[i]) }
                        >
                            {item}
                        </span>
                    </li>
                    <li className="separator">
                        <svg height="100" width="100">
                            <circle r="45" cx="50" cy="50" />
                        </svg>
                    </li>
                </Fragment>               
            )

            case 4: return (
                <li key={item}>
                    <span 
                        onClick={ () => scrollToSection(ids[i]) }
                        onTouchEnd={ () => scrollToSection(ids[i]) }
                    >
                        {item}
                    </span>
                </li>
            )
        
            default: return (<Fragment key={item}></Fragment>);

        }

    })

  return ( <>{sections}</> )
  
};