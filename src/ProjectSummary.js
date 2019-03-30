import React from 'react';
import { object } from 'prop-types';
import TypedList from './TypedList';

export default function ProjectSummary(props) {
  const { project } = props;

  const teamSizeDescription = (teamSize) => {
    if (!teamSize) {
      return null;
    }
    const teamDescription = teamSize === 'solo' ? 'solo effort' : `team of ${teamSize}`;

    return <div className="team-size">{ teamDescription } </div>;
  };

  const projectAudienceDescription = (audience, openSource) => {
    const codeBaseType = openSource ? 'open-source' : 'closed-source';
    const descriptionItems = [audience, codeBaseType];

    return descriptionItems.length > 0 ? <div>({ descriptionItems.join(', ') })</div> : null;
  };

  return (
    <div key={project.id} className={project.id}>
      <div>
        <h5>{ project.name }</h5>
        { projectAudienceDescription(project.audience, project.openSource) }
      </div>
      { project.year && <div>year: { project.year }</div> }
      { teamSizeDescription(project.teamSize) }
      { project.description && <p className="project-description">{ project.description }</p> }
      <TypedList key="project-link-list" headerText="Links" headerLevel={4} listItems={project.links} listType="links" />
      <TypedList key="project-samples-list" headerText="Samples" headerLevel={4} listItems={project.samples} listType="samples" />
      <TypedList key="project-skills-list" headerText="Skills" headerLevel={4} listItems={project.skills} listType="skills" />
      <TypedList key="project-technologies-list" headerText="Technologies" headerLevel={4} listItems={project.technologies} listType="technologies" />
    </div>
  );
}

ProjectSummary.propTypes = {
  project: object.isRequired
};
