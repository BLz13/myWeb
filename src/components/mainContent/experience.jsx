import { Fragment, useEffect, useState } from "react";

import ChevronDownIcon from "../../assets/svg/chevron-down.svg?react";

export default function Experience({ data, sectionName }) {

    const [labels, ...experiences] = data ?? [];

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
                {experiences?.map((exp, i) => {

                    const key = `experience-${exp?.company}-${i}`;
                    const isLast = i === experiences.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{exp?.company}</h3>

                                <>
                                    {isMobile ? (
                                        <>
                                            <p>
                                                <strong>{exp?.title}</strong>
                                            </p>
                                            <p>
                                                {exp?.place}
                                            </p>
                                        </>
                                    ) : (
                                        <p>
                                            <strong>{exp?.title}</strong> - {exp?.place}
                                        </p>
                                    )}
                                </>

                                <p>
                                    {isMobile ? (
                                        <>
                                            <span>{exp?.timeSince}</span>
                                            <ChevronDownIcon />
                                            <span>{exp?.timeTo}</span>
                                        </>
                                    ) : (
                                        <>
                                            {exp?.timeSince} - {exp?.timeTo}
                                        </>
                                    )}
                                </p>

                                <h4>{labels?.[4]} :</h4>

                                <ul>
                                    {exp?.tasks?.map((task, tIdx) => (
                                        <li key={`task-${key}-${tIdx}`}>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
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