import React from 'react';
import { ExternalDomainLink } from './ExternalDomainLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';

type GitHubLinkProps = {
  gitHubHandle: string;
  isPrintViewOnly?: boolean;
}

export function GitHubLink ({
  gitHubHandle,
  isPrintViewOnly = false
}: GitHubLinkProps): JSX.Element {
  const userGithubDomainPath = gitHubHandle && `www.github.com/${gitHubHandle}`;

  return (
    <ExternalDomainLink
      className={`github-link${isPrintViewOnly ? ' print-show' : ''}`}
      href={`https://${userGithubDomainPath}`}
    >
      {!isPrintViewOnly && <FontAwesomeIcon icon={faGithub} />}
      {isPrintViewOnly ? userGithubDomainPath : 'GitHub'}
    </ExternalDomainLink>
  );
}

type TwitterLinkProps = {
  twitterHandle: string;
}

export function TwitterLink ({twitterHandle}: TwitterLinkProps): JSX.Element {
  return (
    <ExternalDomainLink
      className="twitter-link"
      href={`https://www.twitter.com/${twitterHandle}`}
    >
      <FontAwesomeIcon icon={faTwitter} />
      Twitter
    </ExternalDomainLink>
  );
}

type WebsiteLinkProps = {
  websiteDomain: string;
}

export function WebsiteLink ({websiteDomain}: WebsiteLinkProps): JSX.Element {
  return (
    <ExternalDomainLink
      className="website-link"
      href={`https://${websiteDomain}`}
    >
      <FontAwesomeIcon icon={faLink} />
      {websiteDomain}
    </ExternalDomainLink>
  );
}

type EmailLinkProps = {
  emailAddress: string;
}

export function EmailLink ({emailAddress}: EmailLinkProps): JSX.Element {
  return (
    <ExternalDomainLink
      className="twitter-link"
      href={`mailto:${emailAddress}`}
    >
      <FontAwesomeIcon icon={faEnvelope} />
      {emailAddress}
    </ExternalDomainLink>
  );
}

type StackOverflowLinkProps = {
  url: string;
}

export function StackOverflowLink ({url}: StackOverflowLinkProps): JSX.Element {
  return (
    <ExternalDomainLink
      className="stack-overflow-link"
      href={url}
    >
      <FontAwesomeIcon icon={faStackOverflow} />
      Stack Overflow
    </ExternalDomainLink>
  );
}

type LinkedInLinkProps = {
  linkedInHandle: string;
}

export function LinkedInLink ({linkedInHandle}: LinkedInLinkProps): JSX.Element {
  return (
    <ExternalDomainLink
      className="linkedin-link"
      href={`https://www.linkedin.com/in/${linkedInHandle}`}
    >
      <FontAwesomeIcon icon={faLinkedin} />
      LinkedIn
    </ExternalDomainLink>
  );
}
