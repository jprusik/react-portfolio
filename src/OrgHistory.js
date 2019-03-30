import React from 'react';
import OrgSummary from './OrgSummary';
import { arrayOf, object } from 'prop-types';

export default function OrgHistory(props) {
  const { projects, organizations } = props;
  const orgSummaries = organizations.map(org => {
    const orgProjects = projects.filter(project => project.org === org.id);
    const orgSummaryProps = {
      projects: orgProjects,
      org
    };

    return <OrgSummary key={org.id} {...orgSummaryProps} />;
  });

  return orgSummaries;
}

OrgHistory.propTypes = {
  projects: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired
};
