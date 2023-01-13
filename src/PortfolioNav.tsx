import React from 'react';
import {Project, Technology} from './global/types';
import TypedList from './TypedList';
import './PortfolioNav.scss';

type PortfolioNavProps = {
  projects: Array<Project>;
  skills: Array<string>;
  technologies: Array<Technology>;
}

export default function PortfolioNav({
  projects,
  skills,
  technologies
}: PortfolioNavProps): JSX.Element {
  const compiledSkills = [
    ...new Set(projects.map((i)=>i.skills).flat()),
    // add global skills that aren't represented on specific projects
    ...skills
  ];
  const sortedSkills = compiledSkills.sort(
    (prevSkill, nextSkill) => prevSkill.localeCompare(nextSkill)
  );
  const filteredTechNames = technologies.reduce(
    (filteredTech: string[], tech: Technology) => {
      if (!tech.hide) {
        return [...filteredTech, tech.name];
      }

      return filteredTech;
    }, []);

  const sortedFilteredTechnames = filteredTechNames.sort(
    (prevTech, nextTech) => prevTech.localeCompare(nextTech)
  );

  return (
    <React.Fragment>
      <div key="tech" className="technologies">
        <TypedList
          headerText="Technologies"
          headerLevel={2}
          listItems={sortedFilteredTechnames}
          listType="nav-technologies"
        />
      </div>
      <div key="skills" className="skills">
        <TypedList
          headerText="Skills"
          headerLevel={2}
          listItems={sortedSkills}
          listType="nav-skills"
        />
      </div>
    </React.Fragment>
  );
}
