import React from 'react';
import { string } from 'prop-types';
import ExternalDomainLink from './ExternalDomainLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLinks.scss';

export default function SocialLinks(props) {
  const { twitterHandle, githubHandle, websiteDomain, email } = props;
  const twitterLink = twitterHandle && <ExternalDomainLink key="twitter-link" className="twitter-link" href={`https://www.twitter.com/${twitterHandle}`}><FontAwesomeIcon icon={faTwitter} />Twitter</ExternalDomainLink>;
  const githubLink = githubHandle && <ExternalDomainLink key="github-link" className="github-link" href={`https://www.github.com/${githubHandle}`}><FontAwesomeIcon icon={faGithub} />Github</ExternalDomainLink>;
  const websiteLink = websiteDomain && <ExternalDomainLink key="website-link" className="website-link" href={`https://${websiteDomain}`}><FontAwesomeIcon icon={faLink} />{websiteDomain}</ExternalDomainLink>;
  const emailLink = twitterHandle && <ExternalDomainLink key="email-link" className="twitter-link" href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} />{email}</ExternalDomainLink>;

  return (
    <div className="author-links">
      { [websiteLink, emailLink, twitterLink, githubLink] }
    </div>
  );
}

SocialLinks.propTypes = {
  twitterHandle: string,
  githubHandle: string,
  websiteDomain: string
};
