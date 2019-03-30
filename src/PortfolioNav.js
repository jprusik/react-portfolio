import React from 'react';
import TypedList from './TypedList';
import { arrayOf, object } from 'prop-types';

export default function PortfolioNav(props) {
  const { projects } = props;
  const skills = [...new Set(projects.map((i)=>i.skills).flat())];
  const technologies = [...new Set(projects.map((i)=>i.technologies).flat())];

  return [
    <TypedList key="skills-list" headerText="Skills" headerLevel={3} listItems={skills} listType="skills" />,
    <TypedList key="tech-list" headerText="Technologies" headerLevel={3} listItems={technologies} listType="technologies" />
  ];
}

PortfolioNav.propTypes = {
  projects: arrayOf(object)
};
