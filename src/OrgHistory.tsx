import { orderBy, flattenDeep } from 'lodash';
import {
  Organization,
  Project,
  TimelineActionType,
  TimelineDataType
} from './types';
import { OrgSummary } from './OrgSummary';
import './OrgHistory.scss';

const endedYear = (org: Organization): string => {
  const oneYearFromNow = (new Date().getFullYear() + 1)+'';
  return org.ended === 'current' ? oneYearFromNow : org.ended;
};

const controlledOrderOrgs = [
  'freelance-paid',
  'freelance-unpaid'
];

type OrgHistoryProps = {
  organizations: Organization[];
  projects: Project[];
  updateDisplayFilter: (
    actionType: TimelineActionType,
    dataType: TimelineDataType,
    id: string
  ) => void;
}

export function OrgHistory ({
  organizations,
  projects,
  updateDisplayFilter
}: OrgHistoryProps): JSX.Element {
  const orgHeader = <h2 key="organizations-header">Organizations</h2>;
  const orgSummaries = orderBy(organizations, [endedYear, 'started'], ['desc', 'desc'])
    // make sure "special" orgs are at the end, regardless of timeline placement
    // @TODO rethink this - freelance projects probably shouldn't be
    // grouped together in the timeline.
    .reduce((summaries: Organization[][], orgSummary) => {
      if (controlledOrderOrgs.includes(orgSummary.id)) {
        return [summaries[0], [...summaries[1], orgSummary]];
      }

      return [[...summaries[0], orgSummary], summaries[1]];
    }, [[], []]);

  const OrgSummariesChildren = flattenDeep(orgSummaries)
    .map(org => {
      const orgProjects = projects.filter(project => (project.org === org.id) && !project.exclude);
      const orgSummaryProps = {
        updateDisplayFilter,
        [TimelineDataType.PROJECTS]: orgProjects,
        org
      };

      return !org.exclude && (
        <OrgSummary key={org.id} {...orgSummaryProps} />
      );
    });

  return (
    <div className="organization-history">
      {[orgHeader, OrgSummariesChildren]}
    </div>
  );
}
