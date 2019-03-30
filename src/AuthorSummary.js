import React from 'react';
import { arrayOf, string, object } from 'prop-types';
import SocialLinks from './SocialLinks';

export default function AuthorSummary(props) {
  const { currentRoles, funFacts, locationBasis, links, name } = props;

  return [
    <h1 key="author-name">{name}</h1>,
    <h2 key="author-roles">
      { currentRoles.map(role => <div key={ role }>{ role }</div>) }
    </h2>,
    <div key="author-location">{ locationBasis }</div>,
    <SocialLinks key="author-links" { ...links } />,
    <div key="author-fun-facts">
      { <div>{ funFacts.join(' • ') }</div> }
    </div>
  ];
}

AuthorSummary.propTypes = {
  currentRoles: arrayOf(string),
  funFacts: arrayOf(string),
  locationBasis: string,
  links: object,
  name: string
};
