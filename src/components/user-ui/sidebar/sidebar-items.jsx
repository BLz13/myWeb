import { LINKS, SECTIONS, TEXT } from "../../../utils/data.js";

import ChevronDown from "../../../assets/svg/chevron-down.svg?react"
import GithubLogo from "../../../assets/svg/github.svg?react";
import LinkedinLogo from "../../../assets/svg/linkedin.svg?react";
import MailLogo from "../../../assets/svg/mail.svg?react";
import PhoneLogo from "../../../assets/svg/phone.svg?react";
import PinLogo from "../../../assets/svg/pin.svg?react";
import WhatsappLogo from "../../../assets/svg/whatsapp.svg?react";
import { useState } from "react";

function TextSVG({ text, maskId, expands, onClick }) {
    return (
        <svg
            className="svg-text"
            viewBox="0 0 250 100"
            preserveAspectRatio="xMidYMid slice"
            onClick={onClick}
        >
            <defs>
                <mask id={maskId} x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text x="10" y="0" textAnchor="start" dominantBaseline="hanging">
                        {text}
                    </text>
                    {expands && (
                        <text dx="236" dy="-2" className="chevron" textAnchor="end" dominantBaseline="hanging">⌄</text>
                    )}
                </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" mask={`url(#${maskId})`} fill="white" />
        </svg>
    );
}

export default function SidebarItems({ lang }) {

    const { contact } = TEXT;

    const [ github ] = LINKS;

    const [expanded, setExpanded] = useState({ proyectos: false, contacto: false, });

    const handleExpand = (sectionId) => {
        setExpanded((prev) => ({ ...prev, [sectionId]: !prev[sectionId], }));
    };

    const sections = SECTIONS[lang].map((item, i) => {

        const maskId = `sidebar-text-mask-${item.id}`;

        const listItems = (() => {

            switch (i) {

                case 0: {
                    return (
                        <li key={item.id} className="sidebar-section">
                            <TextSVG text={item.id} maskId={maskId}/>
                        </li>
                    );
                }

                case 1: {
                    return (
                        <li key={item.id} className="sidebar-section">
                            <TextSVG text={item.id} maskId={maskId}/>
                        </li>
                    );
                }

                case 2: {
                    return (
                        <li key={item.id} className={expanded[item.id] ? "sidebar-section expanded" : "sidebar-section"}>
                            <TextSVG text={item.id} maskId={maskId} expands onClick={() => handleExpand(item.id)}/>
                            <a href={`${github.link}`}>
                                <GithubLogo className="icon"/>
                            </a>
                        </li>
                    );
                }

                case 3: {
                    return (
                        <li key={item.id} className={expanded[item.id] ? "sidebar-section expanded" : "sidebar-section"}>
                            <TextSVG text={item.id} maskId={maskId} expands onClick={() => handleExpand(item.id)}/>
                            <ul>
                                <li>
                                    <a href={`mailto:${contact[lang].email.value}`}>
                                        <MailLogo className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={`https://wa.me/+${contact[lang].phone.number}`}>
                                        <WhatsappLogo className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={`tel:+${contact[lang].phone.number}`}>
                                        <PhoneLogo className="icon"/>
                                    </a>
                                </li>
                                <li>
                                    <a href={`${contact[lang].linkedin.value}`}>
                                        <LinkedinLogo className="icon"/>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    );
                }

                default: return <></>;
            }
            
        })();

        return listItems;

    });

    return (<>{sections}</>);

};