import React from 'react';
import OrgSummary from './OrgSummary';
import { arrayOf, func, object } from 'prop-types';
import './OrgHistory.scss';
import { orderBy, flatten } from 'lodash';

const endedYear = (org) => {
  const oneYearFromNow = (new Date().getFullYear() + 1)+'';
  return org.ended === 'current' ? oneYearFromNow : org.ended;
};

const controlledOrderOrgs = [
  'freelance-paid',
  'freelance-unpaid'
];

export default function OrgHistory(props) {
  const { organizations, projects, updateDisplayFilter } = props;
  const orgHeader = <h2 key="organizations-header">Organizations</h2>;
  const orgSummaries = orderBy(organizations, [endedYear, 'started'], ['desc', 'desc'])
    // make sure "special" orgs are at the end, regardless of timeline placement
    // @TODO rethink this - freelance projects probably shouldn't be
    // grouped together in the timeline.
    .reduce((summaries, orgSummary) => {
      if (controlledOrderOrgs.includes(orgSummary.id)) {
        return [summaries[0], [...summaries[1], orgSummary]];
      }

      return [[...summaries[0], orgSummary], summaries[1]];
    }, [[], []]);

  const OrgSummariesChildren = flatten(orgSummaries, true)
    .map(org => {
      const orgProjects = projects.filter(project => (project.org === org.id) && !project.exclude);
      const orgSummaryProps = {
        updateDisplayFilter: updateDisplayFilter,
        projects: orgProjects,
        org
      };

      return !org.exclude && <OrgSummary key={org.id} {...orgSummaryProps} />;
    });

  return <div className="organization-history">{[orgHeader, OrgSummariesChildren]}</div>;
}

OrgHistory.propTypes = {
  organizations: arrayOf(object).isRequired,
  projects: arrayOf(object).isRequired,
  updateDisplayFilter: func.isRequired
};
