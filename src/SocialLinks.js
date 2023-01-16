import React from 'react';
import { string } from 'prop-types';
import { ExternalDomainLink } from './ExternalDomainLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLinks.scss';

export default function SocialLinks(props) {
  const {
    email,
    githubHandle,
    linkedInHandle,
    stackOverflow,
    twitterHandle,
    websiteDomain,
  } = props;
  const twitterLink = twitterHandle && (
    <ExternalDomainLink
      key="twitter-link"
      className="twitter-link"
      href={`https://www.twitter.com/${twitterHandle}`}
    >
      <FontAwesomeIcon icon={faTwitter} />
      Twitter
    </ExternalDomainLink>
  );

  const githubLink = githubHandle && (
    <ExternalDomainLink
      key="github-link"
      className="github-link"
      href={`https://www.github.com/${githubHandle}`}
    >
      <FontAwesomeIcon icon={faGithub} />
      Github
    </ExternalDomainLink>
  );

  const websiteLink = websiteDomain && (
    <ExternalDomainLink
      key="website-link"
      className="website-link"
      href={`https://${websiteDomain}`}
    >
      <FontAwesomeIcon icon={faLink} />
      {websiteDomain}
    </ExternalDomainLink>
  );

  const emailLink = email && (
    <ExternalDomainLink
      key="email-link"
      className="twitter-link"
      href={`mailto:${email}`}
    >
      <FontAwesomeIcon icon={faEnvelope} />
      {email}
    </ExternalDomainLink>
  );

  const stackOverflowLink = stackOverflow && (
    <ExternalDomainLink
      key="stack-overflow-link"
      className="stack-overflow-link"
      href={stackOverflow}
    >
      <FontAwesomeIcon icon={faStackOverflow} />
      Stack Overflow
    </ExternalDomainLink>
  );

  const linkedInLink = linkedInHandle && (
    <ExternalDomainLink
      key="linkedin-link"
      className="linkedin-link"
      href={`https://www.linkedin.com/in/${linkedInHandle}`}
    >
      <FontAwesomeIcon icon={faLinkedin} />
      LinkedIn
    </ExternalDomainLink>
  );

  return [
    <div key="author-links-primary" className="author-links-primary">
      {[emailLink, websiteLink]}
    </div>,
    <div
      key="author-links-secondary"
      className="author-links-secondary print-hide"
    >
      {[githubLink, stackOverflowLink, linkedInLink, twitterLink]}
    </div>,
  ];
}

SocialLinks.propTypes = {
  email: string,
  githubHandle: string,
  linkedInHandle: string,
  stackOverflow: string,
  twitterHandle: string,
  websiteDomain: string,
};
