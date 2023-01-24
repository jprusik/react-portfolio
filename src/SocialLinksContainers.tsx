import React from 'react';
import {
  GitHubLink,
  TwitterLink,
  WebsiteLink,
  EmailLink,
  StackOverflowLink,
  LinkedInLink
} from './SocialLinks';
import './SocialLinksContainers.scss';

type SocialLinksContainersProps = {
  email?: string;
  gitHubHandle?: string;
  linkedInHandle?: string;
  stackOverflow?: string;
  twitterHandle?: string;
  websiteDomain?: string;
}

export function SocialLinksContainers({
  email,
  gitHubHandle,
  linkedInHandle,
  stackOverflow,
  twitterHandle,
  websiteDomain,
}: SocialLinksContainersProps): Array<JSX.Element> {
  return [
    <div key="author-links-primary" className="author-links-primary">
      {[
        email && (
          <EmailLink key="email-link" emailAddress={email} />
        ),
        websiteDomain && (
          <WebsiteLink key="website-link" websiteDomain={websiteDomain} />
        ),
        gitHubHandle && (
          <GitHubLink
            key="github-link-print-only"
            gitHubHandle={gitHubHandle}
            isPrintViewOnly={true}
          />
        )
      ]}
    </div>,
    <div
      key="author-links-secondary"
      className="author-links-secondary print-hide"
    >
      {[
        gitHubHandle && (
          <GitHubLink
            key="github-link"
            gitHubHandle={gitHubHandle}
          />
        ),
        stackOverflow && (
          <StackOverflowLink
            key="stack-overflow-link"
            url={stackOverflow}
          />
        ),
        linkedInHandle && (
          <LinkedInLink
            key="linkedin-link"
            linkedInHandle={linkedInHandle}
          />
        ),
        twitterHandle && (
          <TwitterLink
            key="twitter-link"
            twitterHandle={twitterHandle}
          />
        ),
      ]}
    </div>,
  ];
}
