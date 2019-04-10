import React from 'react';
import { object } from 'prop-types';
import TypedList from './TypedList';
import data from './content/data.json';
import './ProjectSummary.scss';

export default function ProjectSummary(props) {
  const { project } = props;

  const teamSizeDescription = (teamSize) => {
    if (!teamSize) {
      return null;
    }
    const teamDescription = teamSize === 'solo' ? 'solo development' : `team of ${teamSize} developers`;

    return <div className="team-size">{ teamDescription } </div>;
  };

  const projectAudienceDescription = (audience, openSource) => {
    const codeBaseType = openSource ? 'open-source' : 'closed-source';
    const descriptionItems = [audience, codeBaseType];

    return descriptionItems.length > 0 ? <div>({ descriptionItems.join(', ') })</div> : null;
  };

  const projectTech = project.technologies.map(techKey => {
    const techByKey = data.technologies.find(techItem => techItem.id === techKey);

    return techByKey.name;
  });

  return (
    <div key={project.id} className={`org-project ${project.id} print-hide`}>
      <div className="title-section">
        <div className="title">
          <h4>{ project.name }</h4>
          { projectAudienceDescription(project.audience, project.openSource) }
        </div>
        { project.year && <div className="year">{ project.year }</div> }
        { teamSizeDescription(project.teamSize) }
      </div>
      { project.description && <p className="description">{ project.description }</p> }
      { project.links.length > 0 &&
        <div className="links">
          <TypedList headerText="Links" headerLevel={5} listItems={project.links} listType="links" />
        </div>
      }
      {
        project.samples.length > 0 &&
        <div className="samples">
          <TypedList headerText="Samples" headerLevel={5} listItems={project.samples} listType="samples" />
        </div>
      }
      <div className="two-column-flex">
        {
          project.skills.length > 0 &&
          <div className="skills">
            <TypedList headerText="Skills" headerLevel={5} listItems={project.skills} listType="skills" />
          </div>
        }
        {
          project.technologies.length > 0 &&
          <div className="technologies">
            <TypedList headerText="Technologies" headerLevel={5} listItems={projectTech} listType="technologies" />
          </div>
        }
      </div>
    </div>
  );
}

ProjectSummary.propTypes = {
  project: object.isRequired
};
