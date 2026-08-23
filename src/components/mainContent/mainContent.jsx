import './mainContent.scss';

import { Fragment, useState } from 'react';
import { SECTIONS, TEXT } from '../../utils/data.js';

import ChevronDown from "../../assets/svg/chevron-down.svg?react"
import Contact from './contact.jsx';
import Experience from './experience.jsx';
import MainLogo from "../../assets/svg/logo-slim-light.svg?react"
import RawContent from './raw/rawContent.jsx';
import { useUIState } from '../../hooks/context/useUIState';

export default function MainContent() {

  const { lang, magic, sidebarState, scrollToSection } = useUIState();

  const data = TEXT?.personal?.[lang] ?? TEXT?.personal?.es ?? null;

  const [displayLang, setDisplayLang] = useState(lang);
  const [hide, setHide] = useState(false);
  
  const stateClass = sidebarState ? "shorten" : "expanded";
  
  const handleAnimationEnd = (e) => {
    if (e.animationName !== "hideCV") return;
    setDisplayLang(lang);
    setHide(false);
  };  

  const sections = SECTIONS[lang]?.map((item, i) => {

    const ids = SECTIONS.en;

    switch (i) {

      case 0: return (
          <div key={item} id={ids[i]}>
            <MainLogo />
            <h1 className='name'>{data.name.value}</h1>
            <h2 className='title'>{data.title.value}</h2>
            <p>{data.intro.value}</p>
          </div>
      );

      case 1: return (
        <div key={item} id={ids[i]}>
          <Experience data={data} />
        </div>
      );

      case 2: return (
          <div key={item} id={ids[i]}>
            <h2><strong>{data.education.ids[0]}</strong></h2>
            <ul>
              {data.education.value.map((edu, eduIndex) => {
                const key = edu?.site ? `${edu.site}-${edu.time ?? eduIndex}` : `edu-${eduIndex}`;
                return (
                  <li key={key}>
                    <p><strong>{data.education.ids[1]}:</strong> {edu?.place}</p>
                    <p><strong>{data.education.ids[2]}:</strong> {edu?.site}</p>
                    <p><strong>{data.education.ids[3]}:</strong> {edu?.title}</p>
                    <p><strong>{data.education.ids[4]}:</strong> {edu?.time}</p>
                    <p><strong>{data.education.ids[5]}:</strong> {edu?.status}</p>
                  </li>
                );
              })}
            </ul>
          </div>
      );

      case 3: return (
          <div key={item} id={ids[i]}>
            <h2>{data.skills.id}</h2>
            {Object.entries(data.skills.value).map(([group, list]) => (
              <div key={group}>
                <h3>{list.id}</h3>
                <ul>
                  {list.value.map((it, idx) => <li key={`${group}-${idx}`}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
      );

      case 4: return <div key={item} id={ids[i]}></div>;

      case 5: return (
        <Fragment key={item}>
          <div id={ids[i]}>
            <Contact lang={lang} />
          </div>
          <span
            onTouchEnd={ () => scrollToSection("experience") }
            onClick={ () => scrollToSection("experience") }
            className='slide-down'
          >
            <ChevronDown />
            <ChevronDown />
            <ChevronDown />
          </span>
        </Fragment>
      );

      default: return null;

    }
    
  }) ?? [];

  return (!magic ? (
    <RawContent />
  ) : (
    <main key={displayLang} className={`cvData ${stateClass} ${hide ? "hide" : ""}`} onAnimationEnd={handleAnimationEnd} >
      {sections}
    </main>
  ));

}
