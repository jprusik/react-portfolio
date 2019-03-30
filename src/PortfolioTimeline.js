import React from 'react';
import OrgHistory from './OrgHistory';
import { arrayOf, object } from 'prop-types';

export default function PortfolioTimeline(props) {
  const { projects, organizations } = props;
  return (
    <OrgHistory projects={ projects } organizations={ organizations } />
  );
}

PortfolioTimeline.propTypes = {
  projects: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired
};
