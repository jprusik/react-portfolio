import React from 'react';
import { string, array, oneOfType } from 'prop-types';

export default function ExternalDomainLink(props) {
  const { href, children } = props;

  return <a href={href} rel="noopener noreferrer">{children}</a>;
}

ExternalDomainLink.propTypes = {
  href: string.isRequired,
  children: oneOfType([string, array]).isRequired
};
