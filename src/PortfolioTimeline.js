import React from 'react';
import Education from './Education';
import OrgHistory from './OrgHistory';
import { arrayOf, object } from 'prop-types';

export default function PortfolioTimeline(props) {
  const { projects, organizations, education } = props;
  return [
    <OrgHistory key="OrgHistory" projects={ projects } organizations={ organizations } />,
    <Education key="Education" education={ education } />
  ];
}

PortfolioTimeline.propTypes = {
  projects: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired,
  education: arrayOf(object).isRequired
};
