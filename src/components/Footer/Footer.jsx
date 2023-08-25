import React from 'react';
import { FooterConfig } from '../../config.style';

function Footer() {
  const {
    integration,
    year,
    service,
    github,
  } = FooterConfig;
  return (
    <footer className="footer">
      <p className="footer__integration-string">{integration}</p>
      <div className="footer__separate-line" />
      <div className="footer__copyright">
        <p className="footer__service">{service}</p>
        <a href={github.link} className="footer__github-link">{github.name}</a>
        <p className="footer__year">
          &copy;
          {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
