import React from 'react';

type ExternalDomainLinkProps = {
  href: string;
  children: React.ReactNode;
}

export function ExternalDomainLink({
  href,
  children
}: ExternalDomainLinkProps): JSX.Element {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
