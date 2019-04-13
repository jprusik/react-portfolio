import React from 'react';
import OrgSummary from './OrgSummary';
import { arrayOf, object } from 'prop-types';
import './OrgHistory.scss';
import { orderBy } from 'lodash';

const endedYear = (org) => {
  const oneYearFromNow = (new Date().getFullYear() + 1)+'';
  return org.ended === 'current' ? oneYearFromNow : org.ended;
};

export default function OrgHistory(props) {
  const { projects, organizations } = props;
  const orgHeader = <h2 key="organizations-header">Organizations</h2>;
  const orgSummaries = orderBy(organizations, [endedYear, 'started'], ['desc', 'desc']).map(org => {
    const orgProjects = projects.filter(project => (project.org === org.id) && !project.exclude);
    const orgSummaryProps = {
      projects: orgProjects,
      org
    };

    return !org.exclude && <OrgSummary key={org.id} {...orgSummaryProps} />;
  });

  return <div className="organization-history">{[orgHeader, orgSummaries]}</div>;
}

OrgHistory.propTypes = {
  projects: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired
};
