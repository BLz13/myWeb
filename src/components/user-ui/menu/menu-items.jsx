import { Fragment } from "react";
import { SECTIONS } from "../../../utils/data.js";

export default function MenuItems({ lang }) {

    const sections = SECTIONS[lang].map((item, i) => {

        switch (i) {

            case 1 :
            case 2 : return (
                <Fragment key={item}>
                    <li>
                        <a href={`#${item}`}>
                            {item}
                        </a>
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
                    <a href={`#${item}`}>
                        {item}
                    </a>
                </li>
            )
        
            default: return (<Fragment key={item}></Fragment>);

        }

    })

  return ( <>{sections}</> )
  
};