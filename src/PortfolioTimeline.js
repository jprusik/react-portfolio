import React, { Component } from 'react';
import Education from './Education';
import OrgHistory from './OrgHistory';
import { arrayOf, object } from 'prop-types';
import { filteredReducer, timelineInitialState } from './ActionReducers';

export default class PortfolioTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = timelineInitialState;
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(action, type, id) {
    this.setState(state => filteredReducer(state, action, { [type]: [id] }));
  }

  render() {
    const { projects, organizations, education } = this.props;
    const { filtered } = this.state;
    const filteredProjects = projects.filter(project => filtered.projects.indexOf(project.id) < 0);
    const filteredOrganizations = organizations.filter(org => filtered.organizations.indexOf(org.id) < 0);

    return [
      <OrgHistory key="OrgHistory" projects={ filteredProjects } organizations={ filteredOrganizations } updateFilter={ this.updateFilter } />,
      <Education key="Education" education={ education } />
    ];
  }
}

PortfolioTimeline.propTypes = {
  education: arrayOf(object).isRequired,
  organizations: arrayOf(object).isRequired,
  projects: arrayOf(object).isRequired
};
