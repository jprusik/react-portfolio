import React from 'react';
import OrgSummary from './OrgSummary';
import { arrayOf, object } from 'prop-types';
import './OrgHistory.scss';

export default function OrgHistory(props) {
  const { projects, organizations } = props;
  const orgHeader = <h3 key="organizations-header">Organizations</h3>;
  const orgSummaries = organizations.map(org => {
    const orgProjects = projects.filter(project => project.org === org.id);
    const orgSummaryProps = {
      projects: orgProjects,
      org
    };

    return <OrgSummary key={org.id} {...orgSummaryProps} />;
  });

  return <div className="organization-history">{[orgHeader, orgSummaries]}</div>;
}

OrgHistory.propTypes = {
  projects: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired
};
