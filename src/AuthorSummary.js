import React from 'react';
import { arrayOf, string, object } from 'prop-types';
import SocialLinks from './SocialLinks';
import './AuthorSummary.scss';
import { ReactComponent as Logo } from './content/logo.svg';

export default function AuthorSummary(props) {
  const { currentRoles, funFacts, locationBasis, links, name } = props;

  return [
    <div key="author-head" className="author-head">
      <Logo className="author-logo" title={name} />
      <div className="author-roles">
        { currentRoles.map(role => <div key={ role }>{ role }</div>) }
      </div>
      <div className="author-location">{ locationBasis }</div>
      <SocialLinks { ...links } />
    </div>,
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
