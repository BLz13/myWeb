export default function Skills({ data, sectionName }) {

    const [labels, ...skillGroups] = data ?? [];

    return (
        <>
            <h2>
                <strong>{sectionName}</strong>
            </h2>

            <ul>
                {skillGroups.map((group, index) => (
                    <li key={`${sectionName}-${index}`}>
                        <h3>{labels?.[index + 1]}</h3>

                        <ul>
                            {group.map((skill, idx) => (
                                <li key={`${sectionName}-${index}-${idx}`}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}