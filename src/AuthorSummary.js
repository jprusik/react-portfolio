import React from 'react';
import { arrayOf, string, object } from 'prop-types';
import SocialLinks from './SocialLinks';
import './AuthorSummary.scss';

export default function AuthorSummary(props) {
  const { currentRoles, funFacts, locationBasis, links, name } = props;

  return [
    <h1 key="author-name" className="author-name">{name}</h1>,
    <div key="author-roles" className="author-roles">
      { currentRoles.map(role => <div key={ role }>{ role }</div>) }
    </div>,
    <div key="author-location" className="author-location">{ locationBasis }</div>,
    <SocialLinks key="author-links" { ...links } />,
    <div key="author-fun-facts" className="author-fun-facts">
      { funFacts.map(fact => <span key={fact}>{ fact }</span>) }
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
