import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import TypedList from './TypedList';
import ProjectSummary from './ProjectSummary';
import './OrgSummary.scss';
import { orderBy } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';

export default function OrgSummary(props) {
  const { org, projects, updateFilter } = props;
  const employedTimespan = <div className="employed-timespan">{ [ org.started, org.ended ].join(' - ') }</div>;
  const orgLocation = org.location && <span className="org-location">({ org.location })</span>;

  return (
    <div className={`org-summary ${org.id}`}>
      <FontAwesomeIcon icon={faMinusSquare} className="remove-button print-hide" onClick={() => updateFilter('add', 'organizations', org.id)} />
      <div className="org-overview">
        { org.name && <h3>{ org.name }</h3> }
        { orgLocation }
        { employedTimespan }
        { org.description && <p>{ org.description }</p> }
        <div className="org-roles-and-teams">
          <div className="org-roles">
            <TypedList key="org-roles-list" headerText="Roles" headerLevel={4} listItems={org.roles} listType="roles" />
          </div>
          <div className="org-teams">
            <TypedList key="org-teams-list" headerText="Teams" headerLevel={4} listItems={org.teams} listType="teams" />
          </div>
        </div>
        <div className="org-tasks">
          <TypedList key="org-recurring-tasks-list" headerText="Recurring Tasks" headerLevel={4} listItems={org.recurringTasks} listType="tasks" />
        </div>
      </div>
      <div className="org-projects">
        {
          orderBy(projects, ['year'], ['desc']).map(project => (
            <ProjectSummary key={project.id} project={project} updateFilter={updateFilter} />
          ))
        }
      </div>
    </div>
  );
}

OrgSummary.propTypes = {
  projects: arrayOf(object),
  org: object.isRequired,
  updateFilter: func.isRequired
};
