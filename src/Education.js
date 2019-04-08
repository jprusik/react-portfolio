import React from 'react';
import { arrayOf, object } from 'prop-types';
import './Education.scss';

export default function Education(props) {
  const { education } = props;

  return (
    <div className="education">
      <h2 className="education-header">Education & Training</h2>
      {
        education.map(entry => (
          <div key={entry.name} className="education-entry">
            <div className="education-name">
              { entry.name && <h4>{ entry.name }</h4> }
              { entry.year && <span>{ entry.year }</span> }
            </div>
            <div className="education-description">
              { entry.description && <p>{ entry.description }</p> }
            </div>
          </div>
        ))
      }
    </div>
  );
}

Education.propTypes = {
  education: arrayOf(object).isRequired
};
