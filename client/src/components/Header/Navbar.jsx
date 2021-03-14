import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Aux>
      <nav className={scrollNav ? 'navbar' : 'navbar navbar--active'}>
        <div className="navbar__container">
          <LinkRouter
            className="navbar__logo"
            to="/"
            onClick={toggleHome}
          >
            Nicholas Paterakis
          </LinkRouter>
          <div className="navbar__mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <LinkScroll
                className="navbar__link"
                to="about"
                smooth
                duration={500}
                spy
                offset={-70}
              >
                About
              </LinkScroll>
            </li>
            <li className="navbar__item">
              <LinkScroll
                className="navbar__link"
                to="expiriences"
                smooth
                duration={500}
                spy
                offset={-70}
              >
                Experiences
              </LinkScroll>
            </li>
            <li className="navbar__item">
              <LinkScroll
                className="navbar__link"
                to="abilities"
                smooth
                duration={500}
                spy
                offset={-70}
              >
                Abilities
              </LinkScroll>
            </li>
            <li className="navbar__item">
              <LinkScroll
                className="navbar__link"
                to="contact"
                smooth
                duration={500}
                spy
                offset={-70}
              >
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </nav>
    </Aux>
  );
};

export default NavBar;
