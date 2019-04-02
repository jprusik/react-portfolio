import React from 'react';
import { arrayOf, object } from 'prop-types';

export default function Education(props) {
  const { education } = props;

  return (
    <div className="education">
      {
        education.map(entry => (
          <div key={entry.name} className="education-entry">
            { entry.name && <h4>{ entry.name }</h4> }
            { entry.year && <span>{ entry.year }</span> }
            { entry.description && <p>{ entry.description }</p> }
          </div>
        ))
      }
    </div>
  );
}

Education.propTypes = {
  education: arrayOf(object).isRequired
};
