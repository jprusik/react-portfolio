import { Fragment } from 'react';
import { Author as AuthorSummaryProps } from './types';
import { ReactComponent as Logo } from './content/logo.svg';
import './AuthorSummary.scss';
import { SocialLinksContainers } from './SocialLinksContainers';

export function AuthorSummary ({
  currentRoles,
  funFacts,
  locationBasis,
  links,
  name
}: AuthorSummaryProps): JSX.Element {
  return (
    <Fragment>
      <div className="author-head">
        <Logo className="author-logo" title={name} />
        <div className="author-roles">
          {currentRoles.map(role => (
            <div key={role}>{ role }</div>
          ))}
        </div>
        <div className="author-location">{ locationBasis }</div>
        <SocialLinksContainers { ...links } />
      </div>
      <div className="author-fun-facts">
        {funFacts.map(fact => (
          <span key={fact} dangerouslySetInnerHTML={{__html: fact}} />
        ))}
      </div>
    </Fragment>
  );
}
