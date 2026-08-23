import { Fragment } from "react";
import MainLogo from "../../assets/svg/logo-slim-dark.svg?react"

export default function Experience({ data }) {

    const experiences = data.experience.value;

    return (
        <>
            <h2><strong>{data.experience.ids[0]}</strong></h2>

            <ul>
                {experiences.map((exp, i) => {

                    const key = `key-${exp?.company}-${i}`;
                    const isLast = i === experiences.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{exp?.company}</h3>
                                <p><strong>{exp?.title}</strong> - {exp?.place}</p>
                                <p>{exp?.time}</p>
                                <h4>{data.experience.ids[4]}</h4>
                                <ul>
                                    {exp.tasks.map((task, tIdx) => (
                                        <li key={`task-${key}-${tIdx}`}>{task}</li>
                                    ))}
                                </ul>
                            </li>
                            {!isLast && 
                                <div className="separator">
                                    <span></span>
                                    <span></span>
                                </div>
                            }
                        </Fragment>
                    );

                })}
            </ul>
        </>
    );
}