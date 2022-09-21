import React, {Component, Fragment} from 'react';
import AuthorSummary from './AuthorSummary';
import Footer from './Footer';
import PortfolioNav from './PortfolioNav';
import PortfolioTimeline from './PortfolioTimeline';
import data from './content/data.json';

class App extends Component {
  render() {
    const {author, projects, organizations, education, technologies} = data;

    return (
      <Fragment>
        <AuthorSummary {...author} />
        <PortfolioNav projects={projects} technologies={technologies} />
        <PortfolioTimeline
          projects={projects}
          organizations={organizations}
          education={education}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
