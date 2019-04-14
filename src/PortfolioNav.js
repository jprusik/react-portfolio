import React from 'react';
import TypedList from './TypedList';
import { arrayOf, object } from 'prop-types';
import './PortfolioNav.scss';

export default function PortfolioNav(props) {
  const { projects, technologies } = props;
  const skills = [...new Set(projects.map((i)=>i.skills).flat())];
  const tech = technologies.map(tech => tech.name);

  return [
    <div key="tech" className="technologies"><TypedList headerText="Technologies" headerLevel={2} listItems={tech.sort()} listType="nav-technologies" /></div>,
    <div key="skills" className="skills"><TypedList headerText="Skills" headerLevel={2} listItems={skills} listType="nav-skills" /></div>
  ];
}

PortfolioNav.propTypes = {
  projects: arrayOf(object)
};
