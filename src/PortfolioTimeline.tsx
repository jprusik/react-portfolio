import { Fragment, useState } from 'react';
import {
  Education as EducationEntry,
  Organization,
  Project,
  TimelineActionType,
  TimelineDataType,
  TimelineState
} from './types';
import { Education } from './Education';
import { OrgHistory } from './OrgHistory';
import { filteredReducer, timelineInitialState } from './ActionReducers';

type PortfolioTimelineProps = {
  projects: Project[];
  organizations: Organization[];
  education: EducationEntry[];
}

export function PortfolioTimeline (
  { projects, organizations, education }: PortfolioTimelineProps
): JSX.Element {
  const [timelineState, setTimelineState] =
    useState<TimelineState>(timelineInitialState);

  function updateDisplayFilter (
    actionType: TimelineActionType,
    dataType: TimelineDataType,
    id: string
  ): void {
    setTimelineState(
      filteredReducer(timelineState, actionType, { [dataType]: [id] })
    );
  }

  const { filtered } = timelineState;

  const displayedProjects = projects.filter((project: Project) =>
    !filtered.projects.includes(project.id)
  );
  const displayedOrganizations = organizations.filter(org =>
    !filtered.organizations.includes(org.id)
  );
  return (
    <Fragment>
      <OrgHistory
        key="OrgHistory"
        projects={ displayedProjects }
        organizations={ displayedOrganizations }
        updateDisplayFilter={ updateDisplayFilter }
      />
      <Education key="Education" education={ education } />
    </Fragment>
  );
}
