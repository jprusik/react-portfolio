import React from 'react';
import './Footer.scss';
import {ExternalDomainLink} from './ExternalDomainLink';

export default function Footer() {
  return (
    <div className="app-footer">
      <p className="print-show">Check out the online version of this portfolio with extended info and expanded features, at&nbsp;<strong>{ process.env.REACT_APP_PRETTY_DOMAIN_URL }</strong></p>
      <p className="print-hide">This site was written in <ExternalDomainLink href="https://reactjs.org/">React</ExternalDomainLink>. Check out the code <ExternalDomainLink href="https://github.com/jprusik/react-portfolio">here</ExternalDomainLink>.</p>
    </div>
  );
}
