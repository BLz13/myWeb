import { TEXT } from '../../../utils/data.js';
import { useUIState } from '../../../hooks/context/useUIState';

export default function RawContent() {

  const { lang } = useUIState();

  const data = TEXT?.personal?.[lang] ?? TEXT?.personal?.es ?? null;
  
  const contact = TEXT?.contact?.[lang] ?? TEXT?.contact?.es ?? null;

  if (!data || !contact) {
    return null;
  }

  return (
    <main className='rawContent'>
        <h1>{(data.name.value) + ' — ' + (data.title.value)}</h1>
        <p>{data.intro.value}</p>

        <section>
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
        </section>

        <section>
            <h2><strong>{data.experience.ids[0]}</strong></h2>
            <ul>
                {data.experience.value.map((exp, i) => {
                    const key = 'key' + exp?.company + i;
                    return (
                        <li key={key}>
                            <h3>{exp?.title}</h3>
                            <p><strong>{data.experience.ids[1]}</strong>{exp?.company}</p>
                            <p><strong>{data.experience.ids[2]}</strong>{exp?.place}</p>
                            <p><strong>{data.experience.ids[3]}</strong>{exp?.time}</p>
                            <h4>{data.experience.ids[5]}</h4>
                            <ul>
                                {exp.tasks.map((task, tIdx) => (
                                    <li key={`task-${key}-${tIdx}`}>{task}</li>
                                ))}
                            </ul>
                        </li>
                    )})}
            </ul>
        </section>
        
        <section>
          <h2><strong>{data.education.ids[0]}</strong></h2>
          <ul>
            {data.education.value.map((edu, i) => {
              const key = edu?.site ? `${edu.site}-${edu.time ?? i}` : `edu-${i}`;
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
        </section>

        <section>
          <h2>{data.skills.id}</h2>
          {Object.entries(data.skills.value).map(([group, list]) => (
            <div key={group}>
              <h3>{list.id}</h3>
              <ul>
                {list.value.map((it, idx) => <li key={`${group}-${idx}`}>{it}</li>)}
              </ul>
            </div>
          ))}
        </section>
        
    </main>
  )

}
