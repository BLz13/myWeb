import { Fragment, useEffect, useState } from "react";

import CrossIcon from "../../assets/svg/cross.svg?react"
import Gallery from "../gallery/gallery";
import GithubLogo from "../../assets/svg/github.svg?react";
import LinkLogo from "../../assets/svg/link.svg?react";
import { useUIState } from "../../hooks/context/useUIState.jsx";

const ITEMS_PER_ROW = 2; // ajustar si tu layout usa otra cantidad fija por fila

export default function Projects({ data, lang, sectionName }) {

    const { scrollToSection } = useUIState();

    const projectsData = data ?? [];

    const gitLinkText = lang === "es" ? "acceso al repositorio" : "link to Github repo";
    const pageLinkText = lang === "es" ? "link al sitio" : "link to site";

    const [expandedProject, setExpandedProject] = useState(null);

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

    const toggleExpanded = (key) => {
        setExpandedProject((prev) =>
            prev === key ? null : key
        );

        if (isMobile) {
            setTimeout( () => {
                scrollToSection(key);
            },500)
        }
    };

    // índice del proyecto actualmente expandido, o -1 si ninguno lo está
    const expandedIndex = expandedProject ?
        projectsData.findIndex((project, i) => `${project.title}-${i}` === expandedProject)
    :
        -1;

    const expandedRowStart = expandedIndex === -1 ?
        -1
    :
        Math.floor(expandedIndex / ITEMS_PER_ROW) * ITEMS_PER_ROW;

    return (
        <>
            <h2><strong>{sectionName} :</strong></h2>

            <ul>
                {projectsData.map((project, i) => {

                    const key = `${project.title}-${i}`;

                    const isExpanded = expandedProject === key;

                    const rowStart = Math.floor(i / ITEMS_PER_ROW) * ITEMS_PER_ROW;

                    const sharesRowWithExpanded = expandedIndex !== -1
                        && rowStart === expandedRowStart
                        && !isExpanded;

                    const className = isExpanded ?
                        "expanded"
                    :
                        sharesRowWithExpanded ? "minimized" : ""
                    ;

                    return (
                        <li key={key} id={key} className={className}>
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <button type="button" className="expand-toggle" onClick={() => toggleExpanded(key)} aria-expanded={isExpanded}>
                                    <CrossIcon />
                                </button>
                            </div>
                            <p className="description">
                                {project.description?.map((paragraph, i) => (
                                    <Fragment key={`${key}-description-${i}`}>
                                        {paragraph}
                                        {i < project.description.length - 1 && <><br /><br /></>}
                                    </Fragment>
                                ))}
                            </p>
                            <span className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <span><GithubLogo /></span>
                                        <span>{gitLinkText}</span>
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <span><LinkLogo /></span>
                                        <span>{pageLinkText}</span>
                                    </a>
                                )}
                            </span>
                            <Gallery imgsData={project.imgs} expanded={isExpanded} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}