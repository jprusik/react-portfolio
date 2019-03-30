import React from 'react';
import { string } from 'prop-types';
import ExternalDomainLink from './ExternalDomainLink';

export default function SocialLinks(props) {
  const { twitterHandle, githubHandle, website } = props;
  const twitterLink = twitterHandle && <ExternalDomainLink key="twitter-link" className="twitter-link" href={`https://www.twitter.com/${twitterHandle}`}>{twitterHandle}</ExternalDomainLink>;
  const githubLink = githubHandle && <ExternalDomainLink key="github-link" className="github-link" href={`https://www.github.com/${githubHandle}`}>{githubHandle}</ExternalDomainLink>;
  const websiteLink = website && <ExternalDomainLink key="website-link" className="website-link" href={website}>{website}</ExternalDomainLink>;

  return [twitterLink, githubLink, websiteLink];
}

SocialLinks.propTypes = {
  twitter: string,
  github: string,
  website: string
};
