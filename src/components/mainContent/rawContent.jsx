import { SECTIONS, TEXT } from '../../utils/data.js';

import Contact from './contact.jsx';
import Education from './education.jsx';
import Experience from './experience.jsx';
import Projects from './projects.jsx';
import Skills from './skills.jsx';
import { useUIState } from '../../hooks/context/useUIState';

export default function RawContent() {

  const { lang } = useUIState();

  const content = SECTIONS["en"]?.map( ( item, i ) => {
    
    const data = TEXT?.[item]?.[lang] ?? null;

    switch ( item ) {

      case "start": return (
          <div key={item}>
            <h1>{data?.name?.value}</h1>
            <h2>{data?.title?.value}</h2>
            <p>{data?.paragraph?.value}</p>
          </div>
      );

      case "contact": return (
        <div key={item}>
          <Contact lang={lang} />
        </div>
      );

      case "experience": return (
        <div key={item}>
          <Experience data={data} sectionName={SECTIONS[lang][i]}/>
        </div>
      );

      case "education": return (
          <div key={item}>
            <Education data={data} sectionName={SECTIONS[lang][i]}/>
          </div>
      );

      case "skills": return (
          <div key={item}>
            <Skills data={data} sectionName={SECTIONS[lang][i]}/>
          </div>
      );

      case "projects": return (
        <div key={item}>
            <Projects data={data} sectionName={SECTIONS[lang][i]}/>
        </div>
      );

      default: return null;

    }
    
  }) ?? [];

  return (

    <main className='rawContent'>
      {content}
    </main>

  )

}
