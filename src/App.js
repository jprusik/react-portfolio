import React, { Component } from 'react';
import AuthorSummary from './AuthorSummary';
import PortfolioNav from './PortfolioNav';
import PortfolioTimeline from './PortfolioTimeline';
import data from './content/data.json';

class App extends Component {
  render() {
    const { author, projects, organizations, education } = data;

    return [
      <AuthorSummary key="author-summary" { ...author }/>,
      <PortfolioNav key="portfolio-nav" projects={ projects } />,
      <PortfolioTimeline key="portfolio-timeline" projects={ projects } organizations={ organizations } education= { education } />
    ];
  }
}

export default App;
