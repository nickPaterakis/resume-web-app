import React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

const Fouter = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <h1 className="footer__link-title">Site Map</h1>
          <Link to="/" className="footer__link" onClick={toggleHome}>Home</Link>
          <Link
            to="about"
            className="footer__link"
            smooth
            duration={500}
            spy
            offset={-60}
          >
            About
          </Link>
          <Link
            to="expiriences"
            className="footer__link"
            smooth
            duration={500}
            spy
            offset={-60}
          >
            Expiriences
          </Link>
          <Link
            to="abilities"
            className="footer__link"
            smooth
            duration={500}
            spy
            offset={-60}
          >
            Abilities
          </Link>
          <Link
            to="contact"
            className="footer__link"
            smooth
            duration={500}
            spy
            offset={-60}
          >
            Contact
          </Link>
        </div>
        <p className="footer__website-rights">
          {' '}
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Nicholas Paterakis
        </p>
      </div>
    </footer>
  );
};

export default Fouter;
