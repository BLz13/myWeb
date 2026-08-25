import { Fragment } from "react";

export default function Experience({ data, sectionName }) {

    const [labels, ...experiences] = data ?? [];

    return (
        <>
            <h2>
                <strong>{sectionName}</strong>
            </h2>

            <ul>
                {experiences?.map((exp, i) => {

                    const key = `experience-${exp?.company}-${i}`;
                    const isLast = i === experiences.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{exp?.company}</h3>

                                <p>
                                    <strong>{exp?.title}</strong> - {exp?.place}
                                </p>

                                <p>{exp?.time}</p>

                                <h4>{labels?.[4]}</h4>

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