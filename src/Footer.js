import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="app-footer">
      <p className="print-show">Check out the online version of this portfolio with expanded features, at&nbsp;<strong>{ process.env.REACT_APP_PRETTY_DOMAIN_URL }</strong></p>
    </div>
  );
}
