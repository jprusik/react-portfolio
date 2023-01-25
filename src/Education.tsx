import { Education as EducationEntry } from './global/types';
import './Education.scss';

export function Education(
  { education }: { education: Array<EducationEntry> }
): JSX.Element {
  return (
    <div className="education">
      <h2 className="education-header">Education & Training</h2>
      {
        education.map(({
          description,
          name,
          year
        }) => (
          <div key={name} className="education-entry">
            <div className="education-name">
              { name && <h4>{ name }</h4> }
              { year && <span>{ year }</span> }
            </div>
            <div className="education-description">
              { description && <p>{ description }</p> }
            </div>
          </div>
        ))
      }
    </div>
  );
}
