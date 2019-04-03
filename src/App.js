import React, { Component } from 'react';
import AuthorSummary from './AuthorSummary';
import PortfolioNav from './PortfolioNav';
import PortfolioTimeline from './PortfolioTimeline';
import './App.scss';
import data from './data.json';

class App extends Component {
  render() {
    const { author, projects, organizations, education } = data;

    return (
      <div className="app">
        <div className="app-body">
          <AuthorSummary { ...author }/>
          <PortfolioNav projects={ projects } />
          <PortfolioTimeline projects={ projects } organizations={ organizations } education= { education } />
        </div>
      </div>
    );
  }
}

export default App;
