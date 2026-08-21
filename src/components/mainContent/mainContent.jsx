import './mainContent.scss';

import { SECTIONS, TEXT } from '../../utils/data.js';

import RawContent from './raw/rawContent.jsx';
import { useUIState } from '../../hooks/context/useUIState';

export default function MainContent() {

  const { lang, magic, sidebarState } = useUIState();

  const data = TEXT?.personal?.[lang] ?? TEXT?.personal?.es ?? null;
  const contact = TEXT?.contact?.[lang] ?? TEXT?.contact?.es ?? null;
  const stateClass = sidebarState ? "shorten" : "expanded";

  if (!data || !contact) {
    return null;
  }

  const sections = SECTIONS[lang]?.map((item, i) => {
    switch (i) {
      case 0:
        return (
          <div key={item} id={item}>
            <h1 className='title'>{data.name.value + ' — ' + data.title.value}</h1>
            <p>{data.intro.value}</p>
          </div>
        );

      case 1:
        return (
          <div key={item} id={item}>
            <h2><strong>{data.experience.ids[0]}</strong></h2>
            <ul>
              {data.experience.value.map((exp, expIndex) => {
                const key = 'key' + exp?.company + expIndex;
                return (
                  <li key={key}>
                    <h3>{exp?.title}</h3>
                    <p><strong>{data.experience.ids[1]}</strong>{exp?.company}</p>
                    <p><strong>{data.experience.ids[2]}</strong>{exp?.place}</p>
                    <p><strong>{data.experience.ids[3]}</strong>{exp?.time}</p>
                    <h4>{data.experience.ids[4]}</h4>
                    <ul>
                      {exp.tasks.map((task, tIdx) => (
                        <li key={`task-${key}-${tIdx}`}>{task}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        );

      case 2:
        return (
          <div key={item} id={item}>
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

      case 3:
        return (
          <div key={item} id={item}>
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

      case 4:
        return <div key={item} id={item}></div>;

      case 5:
        return (
          <div key={item} id={item}>
            <h2>{contact.address.id}</h2>
            <p>{contact.address.value}</p>
            <p>
              {contact.linkedin.id}
              <a href={contact.linkedin.value}>
                {contact.linkedin.value}
              </a>
            </p>
            <h2>{contact.phone.id}</h2>
            <p>{contact.phone.value}</p>
            <h2>{contact.email.id}</h2>
            <p><a href={`mailto:${contact.email.value}`}>{contact.email.value}</a></p>
          </div>
        );

      default:
        return null;
    }
  }) ?? [];

  return (!magic ? (
    <RawContent />
  ) : (
    <main className={`cvData ${stateClass}`}>
      {sections}
    </main>
  ));

}
