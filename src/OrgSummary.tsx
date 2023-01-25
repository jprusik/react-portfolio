import { Fragment } from 'react';
import { orderBy } from 'lodash';
import {
  Organization,
  Project,
  TimelineActionType,
  TimelineDataType
} from './types';
import { TypedList } from './TypedList';
import { ProjectSummary } from './ProjectSummary';
import './OrgSummary.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

type OrgSummaryProps = {
  org: Organization;
  projects: Project[];
  updateDisplayFilter: (
    actionType: TimelineActionType,
    dataType: TimelineDataType,
    id: string
  ) => void;
}

export function OrgSummary (
  {org, projects, updateDisplayFilter}: OrgSummaryProps
): JSX.Element {
  const employedTimespan = <div className="employed-timespan">{ [ org.started, org.ended ].join(' - ') }</div>;
  const orgLocation = org.location && <span className="org-location">({ org.location })</span>;

  return (
    <div className={`org-summary ${org.id}`}>
      <FontAwesomeIcon
        icon={faTrashCan}
        className="remove-button print-hide"
        onClick={() =>
          updateDisplayFilter(
            TimelineActionType.ADD,
            TimelineDataType.ORGANIZATIONS,
            org.id
          )
        }
      />
      <div className="org-overview">
        { org.name && <h3>{ org.name }</h3> }
        { orgLocation }
        { employedTimespan }
        { org.description && <p>{ org.description }</p> }
        <div className="org-roles-and-teams">
          <div className="org-roles">
            {org.roles.length > 0 && (
              <TypedList
                key="org-roles-list"
                headerText="Roles"
                headerLevel={4}
                listItems={org.roles}
                listType="roles"
              />
            )}
          </div>
          <div className="org-teams">
            {org.teams.length > 0 && (
              <TypedList
                key="org-teams-list"
                headerText="Teams"
                headerLevel={4}
                listItems={org.teams}
                listType="teams"
              />
            )}
          </div>
        </div>
        <div className="org-tasks">
          {(org.recurringTasks && org.recurringTasks.length > 0) && (
            <TypedList
              key="org-recurring-tasks-list"
              headerText="Responsibilities"
              headerLevel={4}
              listItems={org.recurringTasks}
              listType="tasks"
            />
          )}
        </div>
      </div>
      {projects.length > 0 && (
        <Fragment>
          <h4 className="projects-list-header">Project Examples</h4>
          <div className="org-projects">
            {
              orderBy(projects, ['year'], ['desc']).map(project => (
                <ProjectSummary
                  key={project.id}
                  project={project}
                  updateDisplayFilter={updateDisplayFilter}
                />
              ))
            }
          </div>
        </Fragment>
      )}
    </div>
  );
}
