import Gallery from "../gallery/gallery";
import GithubLogo from "../../assets/svg/github.svg?react";
import LinkLogo from "../../assets/svg/link.svg?react";

export default function Projects({ data, lang, sectionName }) {

    const projectsData = data ?? [];

    const gitLinkText =
        lang === "es"
            ? "acceso al repositorio"
            : "link to Github repo";

    const pageLinkText =
        lang === "es"
            ? "link al sitio"
            : "link to site";

    return (
        <>
            <h2>
                <strong>{sectionName}</strong>
            </h2>

            <ul>
                {projectsData.map((project, i) => (
                    <li key={`${project.title}-${i}`}>

                        <h3>{project.title}</h3>

                        <span>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        <GithubLogo />
                                    </span>

                                    <span>
                                        {gitLinkText}
                                    </span>
                                </a>
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        <LinkLogo />
                                    </span>

                                    <span>
                                        {pageLinkText}
                                    </span>
                                </a>
                            )}
                        </span>

                        <div className="description">
                            {project.description?.map((paragraph, index) => (
                                <p key={`${project.title}-${index}`}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <Gallery imgsData={project.imgs} />

                    </li>
                ))}
            </ul>
        </>
    );
}