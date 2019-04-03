import React from 'react';
import TypedList from './TypedList';
import { arrayOf, object } from 'prop-types';
import './PortfolioNav.scss';

export default function PortfolioNav(props) {
  const { projects } = props;
  const skills = [...new Set(projects.map((i)=>i.skills).flat())];
  const technologies = [...new Set(projects.map((i)=>i.technologies).flat())];

  return [
    <div key="skills" className="skills"><TypedList headerText="Skills" headerLevel={2} listItems={skills} listType="nav-skills" /></div>,
    <div key="tech" className="technologies"><TypedList headerText="Technologies" headerLevel={2} listItems={technologies} listType="nav-technologies" /></div>
  ];
}

PortfolioNav.propTypes = {
  projects: arrayOf(object)
};
