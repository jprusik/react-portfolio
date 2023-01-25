import React from 'react';
import { AuthorSummary } from './AuthorSummary';
import { Footer } from './Footer';
import PortfolioNav from './PortfolioNav';
import PortfolioTimeline from './PortfolioTimeline';
import data from './content/data.json';

export function App(): JSX.Element {
  const {
    author,
    projects,
    organizations,
    education,
    skills,
    technologies
  } = data;

  const displayedProjects = projects.filter(({hide}) => !hide);

  return (
    <React.Fragment>
      <AuthorSummary {...author} />
      <PortfolioNav
        projects={projects}
        skills={skills}
        technologies={technologies}
      />
      <PortfolioTimeline
        projects={displayedProjects}
        organizations={organizations}
        education={education}
      />
      <Footer />
    </React.Fragment>
  );
}
