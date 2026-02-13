import './mainContent.scss';

import { TEXT } from '../../utils/data.js';
import { useUIState } from '../../hooks/context/useUIState';

export default function MainContent() {
    
  const { lang } = useUIState();

  const data = TEXT?.personal?.[lang] ?? null;
  const contact = TEXT?.contact ?? null;

  return (
    <main className="mainContent">
        <h1>{(data.name) + ' — ' + (data.title)}</h1>
        <p className="intro">{data.intro}</p>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p><strong>Address:</strong>{contact.address}</p>
          <p>
            <strong>LinkedIn:</strong>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                {contact.linkedin}
            </a>
        </p>
          <p><strong>Phone:</strong>{contact.phone}</p>
          <p><strong>Email:</strong><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        </section>

        <section aria-labelledby="experience-heading">
            <h2 id="experience-heading">Experience</h2>
            <ul>
                {data.experience.map((exp, i) => {
                    const key = 'key' + exp?.company + i;
                    return (
                        <li key={key}>
                            <h3>{exp?.title}</h3>
                            <p><strong>Company:</strong>{exp?.company}</p>
                            <p><strong>Place:</strong>{exp?.place}</p>
                            <p><strong>Time:</strong>{exp?.time}</p>
                            <h4>Tasks</h4>
                            <ul>
                                {exp.tasks.map((task, tIdx) => (
                                    <li key={`task-${key}-${tIdx}`}>{task}</li>
                                ))}
                            </ul>
                        </li>
                    )})}
            </ul>
        </section>
        
        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul>
            {data.education.map((edu, i) => {
              const key = edu?.site ? `${edu.site}-${edu.time ?? i}` : `edu-${i}`;
              return (
                <li key={key}>
                  <p><strong>Place:</strong> {edu?.place}</p>
                  <p><strong>Site:</strong> {edu?.site}</p>
                  <p><strong>Title:</strong> {edu?.title}</p>
                  <p><strong>Time:</strong> {edu?.time}</p>
                  <p><strong>Status:</strong> {edu?.status}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          {Object.entries(data.skills).map(([group, list]) => (
            <div key={group}>
              <h3>{group}</h3>
              <ul>
                {list.map((it, idx) => <li key={`${group}-${idx}`}>{it}</li>)}
              </ul>
            </div>
          ))}
        </section>
        
    </main>
  );
}
