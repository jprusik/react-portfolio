import React from 'react';
import { arrayOf, object } from 'prop-types';
import TypedList from './TypedList';
import ProjectSummary from './ProjectSummary';
import './OrgSummary.scss';

export default function OrgSummary(props) {
  const { projects, org } = props;
  const employedTimespan = <div className="employed-timespan">{ [ org.started, org.ended ].join(' - ') }</div>;
  const orgLocation = org.location && <span className="org-location">({ org.location })</span>;

  return (
    <div className={`org-summary ${org.id}`}>
      <div className="org-overview">
        { org.name && <h4>{ org.name }</h4> }
        { orgLocation }
        { employedTimespan }
        { org.description && <p>{ org.description }</p> }
        <div className="org-roles-and-teams">
          <div className="org-roles">
            <TypedList key="org-roles-list" headerText="Roles" headerLevel={5} listItems={org.roles} listType="roles" />
          </div>
          <div className="org-teams">
            <TypedList key="org-teams-list" headerText="Teams" headerLevel={5} listItems={org.teams} listType="teams" />
          </div>
        </div>
        <div className="org-tasks">
          <TypedList key="org-recurring-tasks-list" headerText="Recurring Tasks" headerLevel={5} listItems={org.recurringTasks} listType="tasks" />
        </div>
      </div>
      <div className="org-projects">
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
