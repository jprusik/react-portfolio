import React from 'react';
import { arrayOf, object } from 'prop-types';
import TypedList from './TypedList';
import ProjectSummary from './ProjectSummary';

export default function OrgSummary(props) {
  const { projects, org } = props;
  const employedTimespan = <div>{ [ org.started, org.ended ].join(' - ') }</div>;

  return (
    <div className={org.id}>
      <div className={`${org.id}-overview`}>
        { org.name && <h4>{ org.name }</h4> }
        { org.location && <h4>{ org.location }</h4> }
        { employedTimespan }
        { org.description && <p>{ org.description }</p> }
        <TypedList key="org-roles-list" headerText="Roles" headerLevel={4} listItems={org.roles} listType="roles" />
        <TypedList key="org-teams-list" headerText="Teams" headerLevel={4} listItems={org.teams} listType="teams" />
        <TypedList key="org-recurring-tasks-list" headerText="Recurring Tasks" headerLevel={4} listItems={org.recurringTasks} listType="tasks" />
      </div>
      <div className={`${org.id}-projects`}>
        {
          projects.map(project => (
            <ProjectSummary key={project.id} project={project} />
          ))
        }
      </div>
    </div>
  );
}

OrgSummary.propTypes = {
  projects: arrayOf(object),
  org: object.isRequired
};
