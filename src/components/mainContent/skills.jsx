import { useEffect, useState } from "react";

export default function Skills({ data, sectionName }) {
    const [labels, ...skillGroups] = data ?? [];

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 1024 : false
    );
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <h2>
                <strong>{sectionName}</strong>
            </h2>

            <ul>
                {skillGroups.map((group, index) => (
                    <li key={`${sectionName}-${index}`}>
                        <h3>{labels?.[index + 1]} :</h3>

                        <ul>
                            {index !== skillGroups.length - 1 ? (
                                group.map((skill, idx) => (
                                    <li key={`${sectionName}-${index}-${idx}`}>
                                        {skill}
                                    </li>
                                ))
                            ) : (
                                group.map((skill, idx) => (
                                    <li key={`${sectionName}-${index}-${idx}`}>
                                        {idx !== group.length - 1 ? (
                                            // Regular items in the last group
                                            <span>{skill}</span> 
                                        ) : (
                                            // Last item in the last group (uses title/extra)
                                            isMobile ? (
                                                <span>
                                                    {skill.title} *
                                                    <br />
                                                    <br />
                                                    * {skill.extra}
                                                </span>
                                            ) : (
                                                <span>{skill.title} - {skill.extra}</span>
                                            )
                                        )}
                                    </li>
                                ))
                            )}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}