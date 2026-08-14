import { Fragment } from "react";
import { SECTIONS } from "../../../utils/data.js";

export default function MenuItems({ lang }) {

    const lastItem = SECTIONS[lang].length - 1;

    const sections = SECTIONS[lang].map((item, i) => {

        const aux = i === lastItem ? (
            <></>
        ) : (
            <li className="separator">
                <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                    <circle r="45" cx="50" cy="50" />
                </svg>
            </li>            
        )

        return (
            <Fragment key={item.id}>
                <li>
                    <a href={`#${item.id}`}>
                        {item.id}
                    </a>
                </li>
                { aux }
            </Fragment>
        )

    })

  return ( <>{sections}</> )
  
};