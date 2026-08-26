import './mainContent.scss';

import { Fragment, useState } from 'react';
import { SECTIONS, TEXT } from '../../utils/data.js';

import ChevronDown from "../../assets/svg/chevron-down.svg?react"
import Contact from './contact.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';
import MainLogoDark from "../../assets/svg/logo-slim-dark.svg?react"
import MainLogoLight from "../../assets/svg/logo-slim-light.svg?react"
import Projects from './projects.jsx';
import RawContent from './rawContent.jsx';
import Skills from './skills.jsx';
import { useUIState } from '../../hooks/context/useUIState';

export default function MainContent() {

  const { theme, lang, magic, sidebarState, scrollToSection } = useUIState();
  
  const [displayLang, setDisplayLang] = useState(lang);
  const [hide, setHide] = useState(false);

  if (lang !== displayLang && !hide) {
      setHide(true);
  }
  
  const stateClass = sidebarState ? "shorten" : "expanded";
  
  const handleAnimationEnd = (e) => {
    if (e.animationName !== "hideCV") return;
    setDisplayLang(lang);
    setHide(false);
  };  

  const sections = SECTIONS["en"]?.map( ( item, i ) => {
    
    const data = TEXT?.[item]?.[displayLang] ?? null;

    switch ( item ) {

      case "start": return (
          <div key={item} id={item}>
            {theme === "light" ?
              <MainLogoLight />
            :
              <MainLogoDark />
            }
            <h1 className='name'>{data?.name?.value}</h1>
            <h2 className='title'>{data?.title?.value}</h2>
            <p>{data?.paragraph?.value}</p>
          </div>
      );

      case "contact": return (
        <Fragment key={item}>
          <div id={item}>
            <Contact lang={displayLang} />
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

      case "experience": return (
        <div key={item} id={item}>
          <Experience data={data} sectionName={SECTIONS[displayLang][i]}/>
        </div>
      );

      case "education": return (
          <div key={item} id={item}>
            <Education data={data} sectionName={SECTIONS[displayLang][i]}/>
          </div>
      );

      case "skills": return (
          <div key={item} id={item}>
            <Skills data={data} sectionName={SECTIONS[displayLang][i]}/>
          </div>
      );

      case "projects": return (
        <div key={item} id={item}>
            <Projects data={data} lang={displayLang} sectionName={SECTIONS[displayLang][i]}/>
        </div>
      );

      default: return null;

    }
    
  }) ?? [];

  return (!magic ? (
    <RawContent />
  ) : (
    <main key={displayLang} className={`cvData ${stateClass} ${hide ? "hide" : "show"}`} onAnimationEnd={handleAnimationEnd} >
      {sections}
    </main>
  ));

}
