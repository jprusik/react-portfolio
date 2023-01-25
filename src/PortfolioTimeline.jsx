import React, { Component } from 'react';
import { Education } from './Education';
import OrgHistory from './OrgHistory';
import { arrayOf, object } from 'prop-types';
import { filteredReducer, timelineInitialState } from './ActionReducers';

export default class PortfolioTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = timelineInitialState;
    this.updateDisplayFilter = this.updateDisplayFilter.bind(this);
  }

  updateDisplayFilter(action, type, id) {
    this.setState(state => filteredReducer(state, action, { [type]: [id] }));
  }

  render() {
    const { projects, organizations, education } = this.props;
    const { filtered } = this.state;
    const displayedProjects = projects.filter(project => filtered.projects.indexOf(project.id) < 0);
    const displayedOrganizations = organizations.filter(org => filtered.organizations.indexOf(org.id) < 0);

    return [
      <OrgHistory key="OrgHistory" projects={ displayedProjects } organizations={ displayedOrganizations } updateDisplayFilter={ this.updateDisplayFilter } />,
      <Education key="Education" education={ education } />
    ];
  }
}

PortfolioTimeline.propTypes = {
  education: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired,
  projects: arrayOf(object).isRequired
};
