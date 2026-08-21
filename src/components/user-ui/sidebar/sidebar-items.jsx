import { LINKS, SECTIONS, TEXT } from "../../../utils/data.js";

import CloudDownloadIcon from "../../../assets/svg/cloud-download.svg?react";
import GithubLogo from "../../../assets/svg/github.svg?react";
import LinkedinLogo from "../../../assets/svg/linkedin.svg?react";
import MailLogo from "../../../assets/svg/mail.svg?react";
import PhoneLogo from "../../../assets/svg/phone.svg?react";
import PinLogo from "../../../assets/svg/pin.svg?react";
import WhatsappLogo from "../../../assets/svg/whatsapp.svg?react";
import { Fragment } from "react";

function MaskSection({ text, maskId }) {
    return (
        <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
            <defs>
                <mask id={maskId} x="0" y="0" width="100%" height="100%">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <text x="10" y="50%" textAnchor="start" dominantBaseline="middle">
                        {text}
                    </text>
                </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" mask={`url(#${maskId})`} fill="white" />
        </svg>
    );
}

export default function SidebarItems({ lang }) {
    
    const { contact } = TEXT;

    const { github } = LINKS;

    const sections = SECTIONS[lang].map((item, i) => {

        switch (i) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: return (
                <li key={item} className="sidebar-section">
                    <a href={`#${item}`}>
                        <MaskSection text={item} maskId={`sidebar-text-mask-${item}`}/>
                    </a>
                </li>
            )
        
            default: return (<Fragment key={item}></Fragment>);
        }

    });

    return (
        <>
            {sections}

            <li className={"sidebar-section"}>
                <a href={`${github.link}`} target="_blank">
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="github-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <text x="10" y="50%" textAnchor="start" dominantBaseline="middle">
                                    {github.id}
                                </text>
                                <GithubLogo x="210" y="1%" height="90%" width="70" className="icon"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#github-mask)" fill="white" />
                    </svg>
                </a>
            </li>
            
            <li className={"sidebar-section"}>
                <a href={`mailto:${contact[lang].email.value}`}>
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="mail-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <MailLogo x="10%" y="5%" height="80%" width="70" className="icon"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#mail-mask)" fill="white" />
                    </svg>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`https://wa.me/+${contact[lang].phone.number}`} target="_blank">
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="whatsapp-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <WhatsappLogo x="10%" y="2.5%" height="80%" width="70" className="icon"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#whatsapp-mask)" fill="white" />
                    </svg>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`tel:+${contact[lang].phone.number}`}>
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="phone-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <PhoneLogo x="10%" y="2.5%" height="80%" width="70" className="icon"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#phone-mask)" fill="white" />
                    </svg>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={`${contact[lang].linkedin.value}`} target="_blank">
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="linkedin-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <LinkedinLogo x="10%" y="-10%" height="110%" width="70" className="icon"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#linkedin-mask)" fill="white" />
                    </svg>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <a href={LINKS.cv[lang].link} target="_blank">
                    <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id="cv-mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <CloudDownloadIcon x="10" y="5%" height="90%" width="70" className="icon"/>
                                <text x="75" y="50%" textAnchor="start" dominantBaseline="middle">
                                    {LINKS.cv[lang].text}
                                </text>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" mask="url(#cv-mask)" fill="white" />
                    </svg>
                </a>
            </li>

            <li className={"sidebar-section"}>
                <svg className="svg-text" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="address-mask" x="0" y="0" width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            <PinLogo  x="10" y="0%" height="90%" width="70" className="icon"/>
                            <text x="75" y="50%" textAnchor="start" dominantBaseline="middle">
                                {TEXT.contact[lang].address.value}
                            </text>
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" mask="url(#address-mask)" fill="white" />
                </svg>
            </li>
        </>

    );

};