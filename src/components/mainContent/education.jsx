import { Fragment, useEffect, useState } from "react";

import ChevronDownIcon from "../../assets/svg/chevron-down.svg?react";

export default function Education({ data, sectionName }) {

    const [, ...dataset] = data ?? [];

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

    return (
        <>
            <h2>
                <strong>{sectionName} :</strong>
            </h2>

            <ul>
                {dataset?.map((ed, i) => {

                    const key = `education-${ed?.place}-${i}`;
                    const isLast = i === dataset.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{ed?.title}</h3>

                                <>
                                    {isMobile ? (
                                        <>
                                            <p>
                                                <strong>{ed?.place}</strong>
                                            </p>
                                            <p>
                                                {ed?.site}
                                            </p>
                                        </>
                                    ) : (
                                        <p>
                                            <strong>{ed?.place}</strong> - {ed?.site}
                                        </p>
                                    )}
                                </>

                                <p>
                                    {isMobile ? (
                                        <>
                                            <span>{ed?.timeSince}</span>
                                            <ChevronDownIcon />
                                            <span>{ed?.timeTo}</span>
                                        </>
                                    ) : (
                                        <>
                                            {ed?.timeSince} - {ed?.timeTo}
                                        </>
                                    )}
                                </p>

                                <p>{ed?.status}</p>
                            </li>

                            {!isLast && (
                                <hr className="separator" />
                            )}
                        </Fragment>
                    );

                })}
            </ul>
        </>
    );
}