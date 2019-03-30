import React, { Component } from 'react';
import AuthorSummary from './AuthorSummary';
import PortfolioNav from './PortfolioNav';
import PortfolioTimeline from './PortfolioTimeline';
import './App.css';
import data from './data.json';

class App extends Component {
  render() {
    const { author, projects, organizations } = data;

    return (
      <div className="App">
        <header className="App-header">
          <AuthorSummary { ...author }/>
          <PortfolioNav projects={ projects } />
          <PortfolioTimeline projects={ projects } organizations={ organizations } />
        </header>
      </div>
    );
  }
}

export default App;
