import Gallery from "../gallery/gallery";

export default function Projects({ data, sectionName }) {

    const projectsData = data ?? [];

    return (
        <>
            <h2><strong>{sectionName}</strong></h2>

            <ul>
                {projectsData.map((project, i) => (
                    <li key={`${project.title}-${i}`}>
                        <h3>{project.title}</h3>
                        <div className="description">
                            {project.description?.map((paragraph, index) => (
                                <p key={`${project.title}-${index}`}>{paragraph}</p>
                            ))}
                        </div>
                        <Gallery imgsData={project.imgs}/>
                    </li>
                ))}
            </ul>
            
        </>
    );
}