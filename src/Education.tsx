import { Education as EducationEntry } from './types';
import './Education.scss';

export function Education (
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
              { year && <span className="print-hide">{ year }</span> }
            </div>
            <div className="education-description">
              { description && <p className="print-hide">{ description }</p> }
              { year && <span className="print-show">{ year }</span> }
            </div>
          </div>
        ))
      }
    </div>
  );
}
