import { Fragment } from "react";

export default function Education({ data, sectionName }) {

    const [, ...dataset] = data ?? [];

    return (
        <>
            <h2>
                <strong>{sectionName}</strong>
            </h2>

            <ul>
                {dataset?.map((ed, i) => {

                    const key = `education-${ed?.place}-${i}`;
                    const isLast = i === dataset.length - 1;

                    return (
                        <Fragment key={key}>
                            <li>
                                <h3>{ed?.title}</h3>

                                <p>
                                    <strong>{ed?.place}</strong> - {ed?.site}
                                </p>

                                <p>{ed?.time}</p>

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